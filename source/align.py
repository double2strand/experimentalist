import re,json,difflib
res={};rep={}
def norm(s): return re.sub(r'[^A-Za-z0-9]','',s)[-25:]
for d in ['doc1','doc3']:
    x=open(d+'/word/document.xml').read()
    r=open(d+'/word/_rels/document.xml.rels').read()
    rel={re.search(r'Id="([^"]+)"',t).group(1):re.search(r'Target="([^"]+)"',t).group(1) for t in re.findall(r'<Relationship [^>]*>',r)}
    toks=re.findall(r'<w:t(?: [^>]*)?>([^<]*)</w:t>|r:embed="([^"]+)"',x)
    txt='';dx=[]
    for t,e in toks:
        if e: dx.append((rel[e],norm(txt)))
        else: txt+=t
    md=open(d+'.md').read()
    mo=[(m.group(1),norm(re.sub(r'!\[[^\]]*\]\[image\d+\]|\\','',md[max(0,m.start()-300):m.start()]))) for m in re.finditer(r'!\[[^\]]*\]\[(image\d+)\]',md)]
    # DP alignment allowing skips on docx side
    n,m=len(dx),len(mo)
    sim=lambda a,b: difflib.SequenceMatcher(None,a,b).ratio()
    import functools,sys
    sys.setrecursionlimit(10000)
    INF=-1e9
    dp=[[INF]*(m+1) for _ in range(n+1)]; dp[0][0]=0
    bk={}
    for i in range(n+1):
        for j in range(m+1):
            if dp[i][j]==INF: continue
            if i<n and dp[i][j]-0.5>dp[i+1][j]: dp[i+1][j]=dp[i][j]-0.5; bk[(i+1,j)]=(i,j,'skipd')
            if j<m and dp[i][j]-2>dp[i][j+1]: dp[i][j+1]=dp[i][j]-2; bk[(i,j+1)]=(i,j,'skipm')
            if i<n and j<m:
                v=dp[i][j]+sim(dx[i][1],mo[j][1])
                if v>dp[i+1][j+1]: dp[i+1][j+1]=v; bk[(i+1,j+1)]=(i,j,'pair')
    i,j=n,m;pairs=[];skd=[];skm=[]
    while (i,j)!=(0,0):
        pi,pj,k=bk[(i,j)]
        if k=='pair': pairs.append((mo[pj][0],dx[pi][0],sim(dx[pi][1],mo[pj][1])))
        elif k=='skipd': skd.append(dx[pi][0])
        else: skm.append(mo[pj][0])
        i,j=pi,pj
    mp={};conf=[]
    for a,b,s in pairs:
        if a in mp and mp[a]!=b: conf.append((a,mp[a],b))
        mp.setdefault(a,b)
    res[d]=mp; rep[d]=dict(skipped_docx=skd,skipped_md=skm,conflicts=conf,low=[(a,b,round(s,2)) for a,b,s in pairs if s<0.6])
    print(d,len(mp),rep[d])
json.dump(res,open('imgmap.json','w'),indent=1)
