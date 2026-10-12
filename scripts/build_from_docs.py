#!/usr/bin/env python3
"""One-off importer: Google Docs markdown exports (source/*.md) -> data/entries/*.json + data/index.json"""
import re,json,os,datetime,collections
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC=os.path.join(ROOT,'source')
DOCS=[('doc1','Experimental-Updates-311024-310425','1VE4v9ap6SylVcGGisu24-jmKzcgVo_tur4v6WxylYQI'),
      ('doc2','Experiments_010525-211025','1gx7RDXnt8inD6ISdLTUPSVEhSz9Sov-EVPCOZ-cgjO8'),
      ('doc3','Experiments_21Oct2025','1ZugPdUknVMhRgscwFRA_5i72k8TAO7xecUhTBMvM8iI')]
MON={m:i+1 for i,m in enumerate(['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'])}
D1=re.compile(r'^(\d{1,2})(?:st|nd|rd|th)?\s+([A-Za-z]{3,9})\.?,?\s+(20\d\d)$')
D2=re.compile(r'^([A-Za-z]{3,9})\.?\s+(\d{1,2})(?:st|nd|rd|th)?,?\s+(20\d\d)$')
imginfo=json.load(open(os.path.join(SRC,'imginfo.json')))
def strip_md(s): return re.sub(r'[\*\_\\#`>|:\-\s]','',s)
def parse_date(line):
    s=line.strip().strip('*').strip().strip('*').strip()
    s=re.sub(r'\\','',s)
    m=D1.match(s)
    if m: d,mo,y=m.groups()
    else:
        m=D2.match(s)
        if not m: return None
        mo,d,y=m.groups()
    k=mo[:3].lower()
    if k not in MON: return None
    if mo.lower() not in ('may','june','july','sept') and len(mo)>3 and not any(full.startswith(mo.lower()) for full in ['january','february','march','april','june','july','august','september','october','november','december']): return None
    try: return datetime.date(int(y),MON[k],int(d))
    except ValueError: return None

TECH=collections.OrderedDict([
 ('qPCR',r'\bq-?PCR\b|\bRT-?qPCR\b'),('PCR',r'\bPCR\d*\b'),('SELEX',r'SELEX'),('MNase',r'MNase'),('Hia5',r'Hia5'),
 ('Reconstitution',r'reconstitut|\brecon\b|\w+recon\b'),('Gel electrophoresis',r'\bgel\b|agarose|PAGE\b|TBE'),('Qubit',r'Qubit'),
 ('Dialysis',r'dialy'),('Ligation',r'ligat'),('Transfection',r'transfect'),('Lentivirus',r'lentivir|viral titer|ViraBind'),
 ('Cell culture',r'passag|\bDMEM\b|\bcells?\b.*(seed|split)|293T|HEK'),('Nanopore sequencing',r'nanopore|ONT\b|MinION|PromethION|flow ?cell'),
 ('Library prep',r'library prep|\blibrar(y|ies)\b'),('Bead purification',r'AMPure|SPRI|beads?\b'),('Column purification',r'MinElute|QIAquick|spin column|column'),
 ('Nanodrop',r'nano ?drop'),('Restriction digest',r'digest|EcoRI|BamHI|HindIII|NotI|XhoI|restriction'),('gDNA isolation',r'gDNA'),
 ('Fragmentation',r'g-?Tube|shear|fragment'),('Western blot',r'western'),('ELISA',r'ELISA|p24'),('Protein purification',r'Ni-?NTA|Ni²⁺|His-?tag|elution|purif(y|ied|ication) protein'),
 ('Buffer exchange',r'buffer exchange|diafiltrat|Amicon'),('Bioinformatics',r'python|\bscript\b|pipeline|alignment|fastq|bam\b|IGV|Dorado|minimap'),
 ('Proteinase K',r'Proteinase K'),('Seminar/notes',r'seminar|\bSem\b|talk|meeting'),
])
REAG=collections.OrderedDict([
 ('Phusion',r'Phusion'),('SYBR',r'SYBR'),('Proteinase K',r'Proteinase K'),('SAM',r'\bSAM\b'),('Spermidine',r'Spermidine'),('MinElute',r'MinElute'),
 ('AMPure',r'AMPure'),('Hia5',r'Hia5'),('MNase',r'MNase'),('SDS',r'\bSDS\b'),('EDTA',r'EDTA'),('Tris',r'\bTris\b'),('NaCl',r'NaCl'),('KCl',r'KCl'),
 ('MgCl2',r'MgCl'),('BSA',r'\bBSA\b'),('DTT',r'\bDTT\b'),('Histone octamer',r'octamer|histone'),('T4 ligase',r'T4 (DNA )?ligase'),('Taq',r'\bTaq\b'),
 ('Q5',r'\bQ5\b'),('dNTPs',r'dNTP'),('TE buffer',r'\bTE\b'),('Ni-NTA',r'Ni-?NTA'),('Lipofectamine',r'Lipofectamine'),('Puromycin',r'puromycin'),
 ('Ethanol',r'ethanol|EtOH'),('Glycerol',r'glycerol'),('ViraBind',r'ViraBind'),('Nuc buffer',r'Nuc buffer'),('Exonuclease',r'\bExo ?(I|III)\b|exonuclease'),
])
SAMPLE_PATTERNS=[r'\blig(?=[0-9A-Z])[A-Za-z0-9]+',r'\b[A-Z]\d{1,2}recon\b',r'\b(?:D|B)\d{1,2}\b(?=[ ,&\)]|$)',r'\b(?:GCDv|HCDv|Gclav)\d(?:-\d)?\b',r'\bN?CAP_?[FR]\b|\bNCAP\\?_[FR]\b',r'\bCAPAMP\d\b',r'\bSELEX_?AMP\b',r'\bHEK ?293T?X?\b|\b293T[X]?\b']
def tags_for(text):
    t=text.replace('\\','')
    tech=[k for k,p in TECH.items() if re.search(p,t,re.I if k not in('qPCR','PCR','SAM') else 0)]
    reag=[k for k,p in REAG.items() if re.search(p,t,re.I if k not in ('SAM','TE buffer','SDS','Q5','Taq','DTT','BSA','EDTA') else 0)]
    samp=collections.Counter()
    for p in SAMPLE_PATTERNS:
        for m in re.findall(p,t): samp[m.replace('-MAIN','').strip()]+=1
    samples=[s for s,_ in samp.most_common(25)]
    return tech,reag,samples

def normalize(lines,doc):
    out=[];imgs=[]
    for l in lines:
        def rep(m):
            name=f"{doc}-{m.group(2)}"; info=imginfo.get(name,{})
            imgs.append({'name':name,**info})
            alt=m.group(1) or ''
            p=info.get('file') or ''
            note=' (partial: image too large to export fully - see original Google Doc)' if info.get('partial') else ''
            return f"![{alt}{note}]({p})"
        l2=re.sub(r'!\[([^\]]*)\]\[(image\d+)\]',rep,l)
        # bold-wrapped lone image -> plain image
        l2=re.sub(r'^\*\*\s*(!\[[^\]]*\]\([^)]*\))\s*\*\*\s*$',r'\1',l2)
        # numbered bold sub-experiment heading -> h3
        m=re.match(r'^\*\*(\d+)\\?\.\s*(.+?)\s*\*\*\s*$',l2)
        if m and '**' not in m.group(2): l2=f"### {m.group(1)}. {m.group(2)}"
        out.append(l2)
    # collapse >2 blank lines
    txt=re.sub(r'\n{3,}','\n\n','\n'.join(out)).strip('\n')+'\n'
    return txt,imgs

def main():
    entries=[];report={}
    for doc,name,fid in DOCS:
        L=open(os.path.join(SRC,doc+'.md'),encoding='utf-8').read().split('\n')
        heads=[(i,parse_date(l)) for i,l in enumerate(L) if len(l.strip())<45]
        heads=[(i,d) for i,d in heads if d]
        pre=L[:heads[0][0]]
        segs=[]
        for k,(i,d) in enumerate(heads):
            j=heads[k+1][0] if k+1<len(heads) else len(L)
            body=L[i+1:j]
            if k==0 and any(x.strip() for x in pre): body=pre+['']+body
            segs.append((d,L[i],body))
        nimg=ntab=0
        fixed=[];prev=None;segs2=[]
        for d,head,body in segs:
            if prev and d<prev:
                try:
                    d2=d.replace(year=prev.year)
                    if d2>=prev: fixed.append((head.strip(),d.isoformat(),d2.isoformat())); d=d2
                except ValueError: pass
            prev=d; segs2.append((d,head,body))
        segs=segs2
        for d,head,body in segs:
            md,imgs=normalize(body,doc)
            tables=len(re.findall(r'^\| *:?-{3,}',md,re.M))
            subs=re.findall(r'^### (.+)$',md,re.M)
            nimg+=len(imgs);ntab+=tables
            entries.append(dict(date=d.isoformat(),heading=head.strip(),date_note=(f'Heading says {head.strip()}; year assumed to be a typo (placed chronologically).' if any(f[2]==d.isoformat() for f in fixed) else None),source=dict(doc=name,fileId=fid),body=md,experiments=subs,images=[i['file'] for i in imgs if i.get('file')],tables=tables))
        src_chars=len(strip_md(re.sub(r'!\[[^\]]*\]\[image\d+\]','','\n'.join(L))))
        out_chars=sum(len(strip_md(re.sub(r'!\[[^\]]*\]\([^)]*\)','',e['heading']+e['body']))) for e in entries if e['source']['doc']==name)
        report[name]=dict(entries=len(segs),images=nimg,image_refs_unique=len({x for e in entries if e['source']['doc']==name for x in e['images']}),tables=ntab,src_chars=src_chars,out_chars=out_chars,year_fixes=fixed,first=segs[0][0].isoformat(),last=segs[-1][0].isoformat())
    # chronological + ids
    order=[];seen=collections.Counter();nonmono=[]
    prev=None
    for e in entries:
        if prev and e['date']<prev: nonmono.append((prev,e['date'],e['heading']))
        prev=e['date']
    entries.sort(key=lambda e:e['date'])  # stable
    os.makedirs(os.path.join(ROOT,'data','entries'),exist_ok=True)
    for f in os.listdir(os.path.join(ROOT,'data','entries')): os.remove(os.path.join(ROOT,'data','entries',f))
    idx=[]
    for e in entries:
        seen[e['date']]+=1
        e['id']=e['date'] if seen[e['date']]==1 else f"{e['date']}-{seen[e['date']]}"
        tech,reag,samp=tags_for(e['body'])
        e['tags']=dict(techniques=tech,reagents=reag,samples=samp,custom=[])
        e['title']=('; '.join(re.sub(r'^\d+\.\s*','',s) for s in e['experiments'][:3]) or (re.sub(r'[\*\\#]','',e['body'].strip().split('\n')[0])[:120]))
        json.dump(e,open(os.path.join(ROOT,'data','entries',e['id']+'.json'),'w',encoding='utf-8'),ensure_ascii=False,indent=1)
        idx.append(dict(id=e['id'],date=e['date'],title=e['title'],experiments=e['experiments'],tags=e['tags'],source=e['source']['doc'],images=len(e['images']),tables=e['tables'],
                        text=re.sub(r'\s+',' ',re.sub(r'!\[[^\]]*\]\([^)]*\)|[\*\\#|]|:?-{3,}:?','',e['body']))))
    json.dump(dict(generated=datetime.datetime.now().isoformat(timespec='seconds'),entries=idx),open(os.path.join(ROOT,'data','index.json'),'w',encoding='utf-8'),ensure_ascii=False)
    dup=[k for k,v in seen.items() if v>1]
    json.dump(dict(per_doc=report,duplicate_dates=dup,non_monotonic=nonmono,total_entries=len(entries)),open(os.path.join(SRC,'import_report.json'),'w'),indent=1)
    rules=dict(techniques=[[k,p,'' if k in('qPCR','PCR','SAM') else 'i'] for k,p in TECH.items()],
               reagents=[[k,p,'' if k in ('SAM','TE buffer','SDS','Q5','Taq','DTT','BSA','EDTA') else 'i'] for k,p in REAG.items()],
               samples=SAMPLE_PATTERNS)
    json.dump(rules,open(os.path.join(ROOT,'data','tag_rules.json'),'w'),indent=1)
    print(json.dumps(dict(per_doc=report,duplicate_dates=dup,non_monotonic=nonmono,total=len(entries)),indent=1))
main()
