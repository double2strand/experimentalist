import re,json,base64,io,os,glob
from PIL import Image, ImageFile
ImageFile.LOAD_TRUNCATED_IMAGES=True
OUT='/workspace/lab-portal/assets/img'; info={}
def save(name,raw,partial=False):
    im=Image.open(io.BytesIO(raw)); im.load()
    if im.mode in('P','LA','RGBA','I;16','I'): pass
    fmt='JPEG' if (im.format=='JPEG') else 'PNG'
    ext='jpg' if fmt=='JPEG' else 'png'
    fn=f'{name}.{ext}'
    if fmt=='JPEG': open(f'{OUT}/{fn}','wb').write(raw)
    else: im.save(f'{OUT}/{fn}',optimize=True)
    info[name]={'file':'assets/img/'+fn,'w':im.size[0],'h':im.size[1],'partial':partial}
def fromjson(f):
    t=open(f).read(); return json.loads(t[t.find('{'):t.rfind('}')+1])['content']
# docx docs
mp=json.load(open('imgmap.json'))
for d in ['doc1','doc3']:
    x=open(d+'/word/document.xml').read()
    blips=re.findall(r'<pic:blipFill>(.*?)</pic:blipFill>',x,re.S)
    r=open(d+'/word/_rels/document.xml.rels').read()
    rel={re.search(r'Id="([^"]+)"',t).group(1):re.search(r'Target="([^"]+)"',t).group(1) for t in re.findall(r'<Relationship [^>]*>',r)}
    crop={}
    for b in blips:
        e=re.search(r'r:embed="([^"]+)"',b).group(1); s=re.search(r'<a:srcRect ([^/]*)/>',b)
        c={k:int(v) for k,v in re.findall(r'(\w)="(-?\d+)"',s.group(1))} if s else {}
        crop.setdefault(rel[e],c)
    for k,v in mp[d].items():
        im=Image.open(d+'/word/'+v); im.load()
        c=crop.get(v,{})
        if any(c.values()):
            W,H=im.size; l=W*c.get('l',0)/1e5; t=H*c.get('t',0)/1e5; rr=W-W*c.get('r',0)/1e5; bb=H-H*c.get('b',0)/1e5
            if rr>l+2 and bb>t+2: im=im.crop((max(0,int(l)),max(0,int(t)),min(W,int(rr)),min(H,int(bb))))
        buf=io.BytesIO(); 
        if v.endswith(('.jpg','.jpeg')): im.convert('RGB').save(buf,'JPEG',quality=92)
        else: im.save(buf,'PNG')
        save(f'{d}-{k}',buf.getvalue())
# md overrides for tiny
for d,f in [('doc1','4dc46e80-397a-46a0-b836-9076860624c1'),('doc3','3a95fb2f-0766-4b38-b296-df1e3c2cef7f')]:
    for l in fromjson('/workspace/agent-tools/'+f+'.txt').split('\n'):
        m=re.match(r'\[(image\d+)\]: <data:image/\w+;base64,(.*)>$',l)
        if m: save(f'{d}-{m.group(1)}',base64.b64decode(m.group(2))); print('override',d,m.group(1))
# doc2
for f in glob.glob('doc2img/*.txt'):
    n=os.path.basename(f)[:-4]; s=open(f).read(); b=s.split(',',1)[1]
    save(f'doc2-{n}',base64.b64decode(b))
# doc2 truncated: gather longest partial
part={}
for f in glob.glob('/workspace/agent-tools/*.txt'):
    t=open(f).read()
    if '1gx7RDXnt8inD6ISdLTUPSVEhSz9Sov-EVPCOZ-cgjO8' not in t[:400]: continue
    try: c=json.loads(t[t.find('{'):t.rfind('}')+1])['content']
    except: continue
    for l in c.split('\n'):
        m=re.match(r'\[(image\d+)\]: <data:image/\w+;base64,(.*)',l)
        if m and not l.endswith('>') and not os.path.exists(f'doc2img/{m.group(1)}.txt'):
            if len(m.group(2))>len(part.get(m.group(1),'')): part[m.group(1)]=m.group(2)
for n,b in part.items():
    b=b[:len(b)//4*4]
    try: save(f'doc2-{n}',base64.b64decode(b),partial=True); print('partial',n,info[f'doc2-{n}'])
    except Exception as e: print('fail',n,e); info[f'doc2-{n}']={'file':None,'partial':True}
json.dump(info,open('/workspace/lab-portal/source/imginfo.json','w'),indent=1)
print(len(info))
