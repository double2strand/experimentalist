import re,sys,json
def canon(seq):
    m={};return [m.setdefault(s,len(m)) for s in seq]
res={}
for d in ['doc1','doc3']:
    md=open(d+'.md').read()
    mseq=re.findall(r'!\[[^\]]*\]\[(image\d+)\]',md)
    x=open(d+'/word/document.xml').read()
    r=open(d+'/word/_rels/document.xml.rels').read()
    rel={}
    for tag in re.findall(r'<Relationship [^>]*>',r):
        i=re.search(r'Id="([^"]+)"',tag).group(1);t=re.search(r'Target="([^"]+)"',tag).group(1);rel[i]=t
    dseq=[rel[i] for i in re.findall(r'r:embed="([^"]+)"',x)]
    cm,cd=canon(mseq),canon(dseq)
    print(d,len(mseq),len(dseq),cm==cd)
    if cm!=cd:
        for k,(a,b) in enumerate(zip(cm,cd)):
            if a!=b: print(' first diff at',k,mseq[k-2:k+3],dseq[k-2:k+3]);break
    # build mapping by order of first appearance
    um=list(dict.fromkeys(mseq)); ud=list(dict.fromkeys(dseq))
    res[d]=dict(zip(um,ud)); print(len(um),len(ud))
json.dump(res,open('imgmap.json','w'),indent=1)
print('--- try drop')
res={}
for d in ['doc1','doc3']:
    md=open(d+'.md').read(); mseq=re.findall(r'!\[[^\]]*\]\[(image\d+)\]',md)
    x=open(d+'/word/document.xml').read(); r=open(d+'/word/_rels/document.xml.rels').read()
    rel={re.search(r'Id="([^"]+)"',t).group(1):re.search(r'Target="([^"]+)"',t).group(1) for t in re.findall(r'<Relationship [^>]*>',r)}
    dseq=[rel[i] for i in re.findall(r'r:embed="([^"]+)"',x)]
    for i in range(len(dseq)):
        s=dseq[:i]+dseq[i+1:]
        if canon(s)==canon(mseq):
            print(d,'drop',i,dseq[i]); res[d]=dict(zip(mseq,s)); break
json.dump(res,open('imgmap.json','w'),indent=1)
