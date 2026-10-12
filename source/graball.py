import json,glob,re,os
out='/workspace/lab-portal/source/doc2img'; ok=set(); tr=set()
for f in glob.glob('/workspace/agent-tools/*.txt'):
    t=open(f).read()
    a=t.find('{');b=t.rfind('}')
    try: d=json.loads(t[a:b+1])
    except: continue
    if not isinstance(d,dict) or d.get('id')!='1gx7RDXnt8inD6ISdLTUPSVEhSz9Sov-EVPCOZ-cgjO8': continue
    for l in d['content'].split('\n'):
        m=re.match(r'\[image(\d+)\]: <(.*)',l)
        if m:
            n=int(m.group(1))
            if l.endswith('>'): ok.add(n); open(f'{out}/image{n}.txt','w').write(m.group(2)[:-1])
            else: tr.add(n)
tr-=ok; print('ok',len(ok),'trunc',sorted(tr),'missing',[i for i in range(1,113) if i not in ok and i not in tr])
