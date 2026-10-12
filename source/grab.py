import json,sys,re,os
f,start=sys.argv[1],int(sys.argv[2])
d=json.load(open(f)); L=d['content'].split('\n')
out='/workspace/lab-portal/source/doc2img'
for i,l in enumerate(L):
    m=re.match(r'\[image(\d+)\]: <(.*)',l)
    if m:
        ok=l.endswith('>')
        print(start+i, m.group(1), len(l), 'OK' if ok else 'TRUNC')
        if ok: open(f'{out}/image{m.group(1)}.txt','w').write(m.group(2)[:-1])
print('lines',len(L),'trunc',d.get('truncated'))
