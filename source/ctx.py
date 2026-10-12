import re,sys
d=sys.argv[1]
x=open(d+'/word/document.xml').read()
# walk tokens: text runs and embeds
toks=re.findall(r'<w:t(?: [^>]*)?>([^<]*)</w:t>|r:embed="([^"]+)"|<wp:extent cx="(\d+)" cy="(\d+)"',x)
txt='';out=[];ext=None
for t,e,cx,cy in toks:
    if cx: ext=(int(cx),int(cy))
    elif e: out.append((e,re.sub(r'\s+',' ',txt[-50:]),ext))
    else: txt+=t+' '
md=open(d+'.md').read()
mo=[(m.group(1),re.sub(r'[\*\\\s]+',' ',md[max(0,m.start()-80):m.start()])[-50:]) for m in re.finditer(r'!\[[^\]]*\]\[(image\d+)\]',md)]
for i in range(max(len(out),len(mo))):
    a=out[i] if i<len(out) else ('','',None); b=mo[i] if i<len(mo) else ('','')
    print(i,a[0],round(a[2][0]/a[2][1],2) if a[2] else '', '|',a[1][-30:],'||',b[0],'|',b[1][-30:])
