**Experimental Updates – 31/10/2024 Onwards**  
**31st October 2024**  
SELEX Notes

| Step | Summary | Detailed Remarks |
| ----- | ----- | ----- |
| 1\. 5 uL DNA \+ 1.7 uL SBP-Octamer | DNA ligand is of good quality and has been pre-checked (20 ng/uL)\*. Octamer was prepared and diluted and stored at 4 degrees just before experiments were started Both DNA and octamer are completely transferred onto dried salt plates Dried salt plates are 4ti384 type and transferred mid recon to NUNC plates one original plate fills up Incubated for 30 mins, RT | Only problem could be any degradation or problems with the octamer itself OR if the tag was not present in a stable manner on the nucleosome. OR too little DNA was used for the assay (the recommendation was 100-150 ng) and I have used 100 ng. |
| 2\. Dilution buffer addition | Dilution buffer prepared was fresh. 1h after adding 5 uL 1h after adding 2.5 uL 1h after adding 2.5 uL 30 min after adding 3.5 uL 30 min after adding 3.5 uL 1h after adding 30 uL Add 15 uL and transfer to SBP-beads Buffer was removed from SBP-beads before addition of recon mix SBP-beads were also prepared fresh before the assay  (Dilution is performed over a period of 6 hours) | NA Changing 30 min incubation times to 20 min? \[This should not matter\] Final salt concentration after nucleosome recon \= **130 mM salt** |
| Shake at 1400 rpm, 60 mins | Post-addition of mix to SBP beads, immediately shake at 1400 rpm, 1 hour Plates are spun at 1200 rpm, 1 min  |  |
| Wash steps post nucleosome reconstitution | Used 1X TCAPT buffer (with 2-ME) for a no soak, no shake wash (6+6+3)  | For cycles 1-3 rinse and prime before wash cycles was not performed for the tips. This was done for cycle 4\. As general rule: Rinse with water – 5 secs Prime with water – 5 secs Prime with buffer – 5 secs |
| Biotin elution steps | New Biotin buffer has been prepared with TCAPT-Block buffer as the base Biotin buffer added from aliquoted 384-well plates Seal plates. Shake SBP beads \+ biotin buffer for 3 mins at 1400 rpm Spin briefly 1000 rpm, 30 secs Incubate on magnetic rack for 2 mins. | NA  |
| Incubation of nucleosomal DNA with TFs | Transfer all liquid to a fresh NUNC plate containing proteins. Proteins aliquoted into plates containing 4 uL per well.\* (\*original proteins were diluted 5-fold) TF and eluted DNA incubated for 20 mins. Buffer removed from HIS beads and TF-DNA mix transferred to HIS beads Shake at 1400 rpm, 1 hour Plates are spun at 1200 rpm, 1 min | Only issue could be if the quality/quantity of proteins is compromised for some reason. Previously proteins have been run on an SDS-PAGE gel and concentration has been measured 🡪 the proteins should be fine \[especially now freeze-thaw cycles are also minimised\] Alternative reasoning might be that too little protein was used? (average amount of protein used was 100 ng for this round of assays) Salt concentration during TF-DNA interaction – **80 mM salt** \[1.75 umoles salt from Biotin elution buffer \+ 0.6 umoles salt from protein solution\]  |
| Wash steps post TF incubation | Used 0.5X TCAPT buffer (with 2-ME) for a soak but NO shake wash (6+3+6+3) | For cycles 1-3 rinse and prime before wash cycles was not performed for the tips. This was done for cycle 4\. As general rule: Rinse with water – 5 secs Prime with water – 5 secs Prime with buffer – 5 secs |
| Elution | Add 40 uL per well of the elution buffer Elution buffer prepared is fresh and tested to be the correct pH Post-wash beads are mixed well with buffer by pipetting 10-15 times  Plates are heated at 80 degrees using the NUNC plate itself on the 384-well PCR block Soon after heating part of the sample was transferred to qPCR plate  | NA Unless for some reason heating is unable to elute out the DNA from protein-bead complexes for some reason. Typically, the heating for 10 mins to denature proteins as well as the His-Ni interactions and therefore let the DNA out of the system |

*Samples prepared for sequencing:*

1. C1\_NCAP2\_lig147  
2. C1\_NCAP2\_ligN20w100  
3. C2\_NCAP2\_lig147  
4. C2\_NCAP2\_ligN20w100  
5. C3\_NCAP2\_lig147  
6. C3\_NCAP2\_ligN20w100  
7. C4\_NCAP2\_lig147  
8. C4\_NCAP2\_ligN20w100

*Cycle 0 libraries were prepared for the following:*

1. C0 lig147  
2. C0 ligN20w100

*HT-SELEX Control: How was the complete experiment done?*

| Step | Summary | Any Potential Issues? |
| ----- | ----- | ----- |
| 1\. 4 uL protein \+ 6 uL SBP-Octamer | To aliquoted protein plate add 6 uL of 1.55X SELEX buffer Salt conc: \~117 mM salt |  |
| 2\. Add 5 uL of DNA for TF-DNA interactions | Add DNA to the protein \+ 1.55X SELEX buffer mix Salt conc. \= 77 mM salt Incubate for 20 mins, RT.  |  |
| 3\. Add 20 uL 1X SELEX buffer to HIS-beads | Remove beads blocking buffer from HIS beads and add fresh 1X SELEX buffer (20 uL) to all beads  |  |
| 4\. Transfer TF-DNA mix to HIS beads and incubate | Transfer entire TF-DNA mix to the HIS beads containing 20 uL 1X SELEX buffer Maintained salt conc of around 76 mM. Seal and shake plates at 1400 rpm, 60 mins. |  |
| 5\. Washes | Add DTT to wash buffer. Keep wash buffer on ice. Rinse with water. Prime with water. Briefly prime with wash buffer. Wash for around 4-5 mins totally for each plate. |   |
| 5\. Elution | Elution buffer for NCAP-SELEX was in pH 8 and for HT-SELEX is 7.5 \[however the pH 8 buffer can be used for HT-SELEX as well\]  Add 35 uL buffer to the beads post-washing and then mix well and incubate at 80 degrees, 10 mins on the 384-well PCR  |   |

*Samples prepared for sequencing:*

1. C1\_HTS2\_lig147  
2. C1\_HTS2\_ligN20w100  
3. C2\_HTS2\_lig147  
4. C2\_HTS2\_ligN20w100  
5. C3\_HTS2\_lig147  
6. C3\_HTS2\_ligN20w100  
7. C4\_HTS2\_lig147  
8. C4\_HTS2\_ligN20w100

*All samples being sent out for sequencing on the BGI platforms.*

| Step | Summary | Detailed Remarks |
| ----- | ----- | ----- |
| 1\. 5 uL DNA \+ 1.7 uL SBP-Octamer | DNA ligand is of good quality and has been pre-checked (20 ng/uL). Octamer was prepared and diluted and stored at 4 degrees just before experiments were started Both DNA and octamer are completely transferred onto dried salt plates Dried salt plates are 4ti384 type and transferred mid recon to NUNC plates one original plate fills up Incubated for 30 mins, RT | Only problem could be any degradation or problems with the octamer itself OR if the tag was not present in a stable manner on the nucleosome. OR too little DNA was used for the assay (the recommendation was 100-150 ng) and I have used 100 ng. |
| 2\. Dilution buffer addition | Dilution buffer prepared was fresh. *\[Recipe: TE buffer \+ 1mM TCEP \+ cocktail Tablet \+ 2mM MgCl2\]*  1h after adding 5 uL 1h after adding 2.5 uL 1h after adding 2.5 uL 30 min after adding 3.5 uL 30 min after adding 3.5 uL 1h after adding 30 uL Add 15 uL and transfer to SBP-beads Buffer was removed from SBP-beads before addition of recon mix SBP-beads were also prepared fresh before the assay  (Dilution is performed over a period of 6 hours) | NA Final salt concentration after nucleosome recon \= **130 mM salt** |
| Shake at 1400 rpm, 60 mins | Post-addition of mix to SBP beads, immediately shake at 1400 rpm, 1 hour Plates are spun at 1200 rpm, 1 min  |  |
| Wash steps post nucleosome reconstitution | Used 1X TCAPT buffer (with 2-ME) for a no soak, no shake wash (6+6+3)  | For cycles 1-3 rinse and prime before wash cycles was not performed for the tips. This was done for cycle 4\. As general rule: Rinse with water – 5 secs Prime with water – 5 secs Prime with buffer – 5 secs |
| Biotin elution steps | New Biotin buffer has been prepared with TCAPT-Block buffer as the base Biotin buffer added from aliquoted 384-well plates Seal plates. Shake SBP beads \+ biotin buffer for 3 mins at 1400 rpm Spin briefly 1000 rpm, 30 secs Incubate on magnetic rack for 2 mins. | NA  |
| Incubation of nucleosomal DNA with TFs | Transfer all liquid to a fresh NUNC plate containing proteins. Proteins aliquoted into plates containing 4 uL per well.\* (\*original proteins were diluted 5-fold) TF and eluted DNA incubated for 20 mins. Buffer removed from HIS beads and TF-DNA mix transferred to HIS beads Shake at 1400 rpm, 1 hour Plates are spun at 1200 rpm, 1 min | Only issue could be if the quality/quantity of proteins is compromised for some reason. Previously proteins have been run on an SDS-PAGE gel and concentration has been measured 🡪 the proteins should be fine \[especially now freeze-thaw cycles are also minimised\] Alternative reasoning might be that too little protein was used? (average amount of protein used was 100 ng for this round of assays) Salt concentration during TF-DNA interaction – **80 mM salt** \[1.75 umoles salt from Biotin elution buffer \+ 0.6 umoles salt from protein solution\]  |
| Wash steps post TF incubation | Used 0.5X TCAPT buffer (with 2-ME) for a soak but NO shake wash (6+3+6+3) | For cycles 1-3 rinse and prime before wash cycles was not performed for the tips. This was done for cycle 4\. As general rule: Rinse with water – 5 secs Prime with water – 5 secs Prime with buffer – 5 secs |
| Elution | Add 40 uL per well of the elution buffer Elution buffer prepared is fresh and tested to be the correct pH Post-wash beads are mixed well with buffer by pipetting 10-15 times  Plates are heated at 80 degrees using the NUNC plate itself on the 384-well PCR block Soon after heating part of the sample was transferred to qPCR plate  | NA Unless for some reason heating is unable to elute out the DNA from protein-bead complexes for some reason. Typically, the heating for 10 mins to denature proteins as well as the His-Ni interactions and therefore let the DNA out of the system |

*Samples prepared for sequencing:*

9. C1\_NCAP2\_lig147  
10. C1\_NCAP2\_ligN20w100  
11. C2\_NCAP2\_lig147  
12. C2\_NCAP2\_ligN20w100  
13. C3\_NCAP2\_lig147  
14. C3\_NCAP2\_ligN20w100  
15. C4\_NCAP2\_lig147  
16. C4\_NCAP2\_ligN20w100

*Cycle 0 libraries were prepared for the following:*

3. C0 lig147  
4. C0 ligN20w100

*HT-SELEX Control: How was the complete experiment done?*

| Step | Summary | Any Potential Issues? |
| ----- | ----- | ----- |
| 1\. 4 uL protein \+ 6 uL SBP-Octamer | To aliquoted protein plate add 6 uL of 1.55X SELEX buffer Salt conc: \~117 mM salt |  |
| 2\. Add 5 uL of DNA for TF-DNA interactions | Add DNA to the protein \+ 1.55X SELEX buffer mix Salt conc. \= 77 mM salt Incubate for 20 mins, RT.  |  |
| 3\. Add 20 uL 1X SELEX buffer to HIS-beads | Remove beads blocking buffer from HIS beads and add fresh 1X SELEX buffer (20 uL) to all beads  |  |
| 4\. Transfer TF-DNA mix to HIS beads and incubate | Transfer entire TF-DNA mix to the HIS beads containing 20 uL 1X SELEX buffer Maintained salt conc of around 76 mM. Seal and shake plates at 1400 rpm, 60 mins. |  |
| 5\. Washes | Add DTT to wash buffer. Keep wash buffer on ice. Rinse with water. Prime with water. Briefly prime with wash buffer. Wash for around 4-5 mins totally for each plate. |   |
| 5\. Elution | Elution buffer for NCAP-SELEX was in pH 8 and for HT-SELEX is 7.5 \[however the pH 8 buffer can be used for HT-SELEX as well\]  Add 35 uL buffer to the beads post-washing and then mix well and incubate at 80 degrees, 10 mins on the 384-well PCR  |   |

*Samples prepared for sequencing:*

9. C1\_HTS2\_lig147  
10. C1\_HTS2\_ligN20w100  
11. C2\_HTS2\_lig147  
12. C2\_HTS2\_ligN20w100  
13. C3\_HTS2\_lig147  
14. C3\_HTS2\_ligN20w100  
15. C4\_HTS2\_lig147  
16. C4\_HTS2\_ligN20w100

*All samples being sent out for sequencing on the BGI platforms.*  
\*C0 DNA was diluted after PCR to 20 ng/uL and then 5 uL was used per well for the SELEX experiments. This was done keeping in mind the original instructions in Fangjie’s paper that recommends using 100 – 200 ng DNA \[as per my calculations the amount of DNA used is 100 ng\]  
This DNA concentration was estimated based on Nanodrop. Qubit readings for these C0 ligands are much lower – 6-7 ng/uL of dsDNA.  
Based on Qubit reading around 50 ng max of the dsDNA ligand was added per well – however my suspicion is that the Qubit readings are also not very accurate and that actual DNA content is more than the concentration values seen.  
***NOTE: To test this run 5 uL of ligands on 3% agarose gel to see if clear visible bands of correct size are seen.***  
*Ligands were tested before and clear bands for seen in terms of quality for both ligands. Moreover, final library shows bands of accurate and expected size.*  
Further testing:

- Check Qubit DNA content of C1, C2, C3 post-SELEX PCR plates to get an estimate of how much material was loaded during each cycle of SELEX

Some conceptual notes around stoichiometry of TF-DNA and DNA-histone octamer interactions.  
According to the Luger et al protocol (1999) for nucleosomal reconstitution – ratio used between octamer:DNA ranges from 0.9:1, 1:1 and 1.1:1 for adequate reconstitution.  
Based on the experiment I have set up for NCAP-SELEX:  
***![A screenshot of a computerDescription automatically generated][image1]![A screenshot of a computerDescription automatically generated][image2]***  
*Therefore, it does seem like even if the actual dsDNA content in the cells is around 50 ng (\< 100 ng), then the nucleosome recon should still be fine.*  
TF-DNA interactions:  
![][image3]

**1st November 2024**  
*NCAP-SELEX ligand and inter-cycle PCR product verification on agarose gel (6 uL sample loaded per well):*  
The following samples were run on an agarose gel:

- C0 lig147  
- C0 ligN20w100  
- C1-NCAP2-PCR147 (B3)  
- C1-NCAP2-PCRN20 (B3)

Based on the gel results the bands corresponding to the ligands was seen to be very clean and specific and of an accurate size. The bands were also very bright and therefore definitely higher in concentration than what was suggested by the Qubit 1X dsDNA assay.

**6th November 2024**

| 1\. Segregate out pHRS-NEW-GB clones |
| :---- |
| 2\. Confirm TWIST-TCF-ALX vectors to be sent out by Katja |
| 3\. Send AT10-Gcla-MIX pool whitelist library for sequencing to CRUK |
| 4\. Work on strategy for nucleosome recon with 20kbp ligand for FIBER-SEQ |
| 5\. Design gene blocks with MYC355 enhancer and loxP system surrounding the enhancer  |
| 6\. Design strategy for matching barcode tracking between enhancers and promoter/reporter |

*pHRS-NEW plasmids with gene blocks for HiFi cloning of enhancer oligos*

Since most of the previous vector sequences were lost, whole plasmid sequences were downloaded again and verified in terms of their sequence. All the pHRS-geneblock clones contained a small G🡪A mutation in the T2A peptide between mCherry and PuroTK. This changed the first amino acid in the T2A peptide from E to K.

These were the clones confirmed with just this issue as shown above:

* pHRS-NEW3-Gcla-1  
* pHRS-NEW3-Hcla-1  
* pHRS-NEW3-GCD-2  
* pHRS-NEW3-HCD-1  
* pHRS-NEW3-GCC-2  
* pHRS-NEW3-HCC-2  
* pHRS-NEW3-Nh-2

These plasmids were marked out and placed in the VECTORS box. These vectors to be expanded later and digested with *MluI* for HiFi cloning with the enhancer oligo pools.

*Send AT10-Gcla-MIX pool whitelist library for sequencing to CRUK*  
SLX-25178 is the batch of sequencing samples that has been sent out to CRUK for the AT10-MIX-pool BC whitelist library  
Library Description:

- This library consists of amplified fragments from the AT10 enhancer oligo pools. Each amplified pool consists of a single unique barcode on the P7 side.   
- The 7th sample in this mixed pool consists of the amplified fragments from a clones spGFPo-AT10-Gcla plasmid library. This will allow for an estimation of the cloning efficiency of the oligo pool into the digested vector (in this case the spGFPo digested with *MluI*)

Barcodes used are as follows:

| Sample | Barcode |
| :---: | :---: |
| AT10-Gcla-BC1 | CGGTTCAA |
| spGFPo-AT10-Gcla-BC2 | GCTGGATT |
| AT10-Hcla-BC1 | TAACTCGG |
| AT10-GCD-BC1 | CGGTGACC |
| AT10-HCD-BC1 | ATTGTCAA |
| AT10-GCC-BC1 | ATACTCAA |
| AT10-HCC-BC1 | ATTGGAGG |

*Expected Outcomes:* The expected outcomes of this library sequencing are to reveal the diversity and representation of PCR-based amplification of individual enhancer oligo pools as well as what fraction of the diversity is preserved after cloning of the original amplified pool into a vector (this can be determined by a comparison between AT10-Gcla-BC1 and spGFPo-AT10-Gcla-BC2).

*Information Box*  
**N-Myc** and **c-Myc** are both members of the Myc family of transcription factors, which play essential roles in cell growth, proliferation, differentiation, and apoptosis. However, they differ in terms of their genetic structure, expression patterns, regulation, and their roles in various tissues. Here’s a breakdown of their structural and functional differences:

**1\. Gene Structure and Chromosomal Location**

	•	**c-Myc**: The gene encoding c-Myc is located on **chromosome 8q24** in humans. It consists of **three exons** and spans a smaller region compared to N-Myc.  
	•	**N-Myc**: The N-Myc gene is located on **chromosome 2p24**. It is also composed of several exons, but it tends to be more complex in regulatory regions and structure compared to c-Myc.

**2\. Protein Structure**

Both c-Myc and N-Myc proteins share a similar structure:

	•	**Basic-Helix-Loop-Helix-Leucine Zipper (bHLH-LZ) Domain**: This domain allows them to bind to DNA and interact with other proteins, particularly Max, to form active transcription factor complexes.  
	•	**Myc Box (MB) Domains**: Both proteins have conserved regions known as Myc Boxes (I-IV), which are critical for their transcriptional regulation functions. However, there can be slight variations in the amino acid sequences of these boxes, contributing to differences in activity and target specificity.

**3\. Tissue-Specific Expression**

	•	**c-Myc**: c-Myc is **ubiquitously expressed** and involved in a broad range of cellular processes. Its expression levels vary across different tissues but are generally present at a basal level in many cell types.  
	•	**N-Myc**: N-Myc has **more restricted expression**. It is highly expressed in certain tissues, particularly during early development, such as in the **brain, neural tissues, and some parts of the peripheral nervous system**. N-Myc is essential for the development of these tissues and is tightly regulated.

**4\. Regulation and Response to Signals**

	•	**c-Myc**: c-Myc is regulated by various signaling pathways (e.g., Wnt, MAPK) and responds to extracellular signals like growth factors. It has rapid transcriptional activation and degradation, allowing for quick response to cellular signals.  
	•	**N-Myc**: N-Myc is also regulated by signaling pathways but is subject to different developmental and tissue-specific control mechanisms. For example, N-Myc expression is regulated by Sonic Hedgehog (Shh) signaling, especially in neuroblastoma cells.

**5\. Function and Role in Cancer**

	•	**c-Myc**: c-Myc is frequently overexpressed or mutated in many cancers, including **breast, colon, and lung cancers**. Its overexpression can lead to uncontrolled cell growth and proliferation by driving the expression of genes involved in metabolism, ribosome biogenesis, and cell cycle progression.  
	•	**N-Myc**: N-Myc is more specifically associated with **neuroblastoma**, **retinoblastoma**, and certain types of brain tumors. Amplification of the N-Myc gene (often a result of genetic instability in cancer) leads to aggressive tumor growth in these specific tissues. Unlike c-Myc, N-Myc is not as broadly implicated across different cancer types.

**6\. Mechanism of Action**

Both c-Myc and N-Myc function by binding to DNA at **E-box sequences** (5’-CACGTG-3’) and regulating gene transcription:

	•	**c-Myc**: c-Myc regulates genes involved in cell cycle progression, apoptosis, and metabolism. Its effects are wide-ranging due to its ubiquitous expression and responsiveness to a variety of cellular signals.  
	•	**N-Myc**: N-Myc targets many of the same genes as c-Myc but with specificity toward neuronal and developmental genes. Its role is more prominent during **embryogenesis and in neuroblastoma** due to its expression patterns.

**7\. Stability and Degradation**

	•	**c-Myc**: c-Myc protein is generally less stable and undergoes rapid turnover, allowing cells to quickly adjust c-Myc levels in response to changing signals.  
	•	**N-Myc**: N-Myc is also tightly regulated at the post-translational level, with degradation pathways in place to control its levels, particularly in development. In cancer, however, mutations can disrupt N-Myc degradation, leading to prolonged activity.

In essence, while c-Myc and N-Myc share structural similarities and belong to the same family of transcription factors, they have distinct roles, regulatory mechanisms, and cancer associations due to their differences in expression patterns and tissue specificity. 

*Information Box*  
The BGI DNBSEQ-G400 is a versatile benchtop sequencer designed for medium to large genomics projects. It utilizes BGI’s proprietary DNBSEQ™ technology, which combines advanced biochemistry, optics, fluidics, and temperature control systems to deliver high-throughput and accurate sequencing results. ([MGI Tech](https://mgi-tech.eu/sequencing-products/dnbseq-g400))

**Key Features of the DNBSEQ-G400:**

	•	**High Throughput:** Supports multiple read lengths and sequencing modes, accommodating various research needs. ([MGI Tech](https://mgi-tech.eu/sequencing-products/dnbseq-g400))  
	•	**Accuracy:** Employs innovative DNBSEQ™ technology to reduce errors, decrease duplicates, and minimize index hopping, ensuring precise sequencing data. ([MGI Tech](https://mgi-tech.eu/sequencing-products/dnbseq-g400))  
	•	**Flexibility:** Offers dual flow cell options and multiple read lengths, providing adaptability for diverse applications. ([MGI Tech](https://mgi-tech.eu/sequencing-products/dnbseq-g400))

**Importance of Sequence Complexity and Diversity:**

Sequence complexity and diversity are crucial for optimal performance in next-generation sequencing (NGS) platforms, including the DNBSEQ-G400. High sequence complexity ensures a broad representation of nucleotide combinations, which is vital for accurate cluster identification and base calling during sequencing. Low-complexity sequences can lead to challenges such as misalignment, increased duplication rates, and reduced data quality. ([Genome Biology](https://genomebiology.biomedcentral.com/articles/10.1186/s13059-014-0555-3))

**Resources for Further Understanding:**

	•	**DNBSEQ-G400 Product Page:** Provides detailed specifications and applications of the sequencer. ([MGI Tech](https://mgi-tech.eu/sequencing-products/dnbseq-g400))  
	•	**Technical Documentation:** Offers in-depth information on the sequencing set and protocols. ([MGI Tech](https://en.mgitech.cn/Uploads/Temp/file/20200226/5e5635c03c37f.pdf))  
	•	**Research Article on Sequence Complexity:** Discusses methods for assessing the quality and complexity of sequencing data without a reference genome. ([Genome Biology](https://genomebiology.biomedcentral.com/articles/10.1186/s13059-014-0555-3))

These resources will provide comprehensive insights into the operation of the DNBSEQ-G400 and the significance of sequence complexity in achieving high-quality sequencing results.

**18th November 2024**

| 1\. *Mlu*I digestion and gel extraction for pHRS-NEW-GB plasmids |
| :---- |
| 2\. Clean-up for AT10-MIX-Pool library  |
| 3\. Work on strategy for nucleosome recon with 20kbp ligand for FIBER-SEQ |
| 4\. Design gene blocks with MYC355 enhancer and loxP system surrounding the enhancer  |
| 5\. Design strategy for matching barcode tracking between enhancers and promoter/reporter |

*Clean-up for AT10-MIX-Pool library*

	  
Comments received during time-off were that the library I had sent was too high in concentration and the CRUK facility was unsure of how much to load due to the potential presence of high bp fragments.

The main fragment of interest for us is around \~427 bp or so based on the library design.  
   
![][image4]   
2% agarose gel was run with the total sample (120V, 1 hour 15 mins):

| 100-bp ladder | AT10-MIX-Pool | AT10-MIX-Pool | AT10-MIX-Pool | 1-kb ladder |

The brightest bands are seen between 400-500 bp and this chunk was cut out for further gel extraction and quantification.

Post gel-extraction sample concentration \= 29 ng/uL

*MluI digestion and gel extraction for pHRS-NEW-GB plasmids:*

* pHRS-NEW3-Gcla-1  
* pHRS-NEW3-Hcla-1  
* pHRS-NEW3-GCD-2  
* pHRS-NEW3-HCD-1  
* pHRS-NEW3-GCC-2  
* pHRS-NEW3-HCC-2\*  
* pHRS-NEW3-Nh-2

| COMPONENT | 50 µl REACTION |
| :---- | :---- |
| DNA | 1 µg |
| 10X rCutSmart Buffer | 5 µl (1X) |
| MluI-HF | 1.0 µl (20 units) |
| Nuclease-free Water | to 50 µl |


  Incubate at 37°C for 15 minutes as MluI-HF is Time-Saver qualified.

\*Nothing was remaining in this tube and therefore digestion was setup using the remaining plasmids. 

Digested tubes have been placed at 4 degrees and will be run on a gel and extracted tomorrow.

**19th November 2024**

| 1\. Prepare large LB-AMP plates |
| :---- |
| 2\. Clean-up for AT10-MIX-Pool library & quantification |
| 3\. Work on strategy for nucleosome recon with 20kbp ligand for FIBER-SEQ |
| 4\. Design gene blocks with MYC355 enhancer and loxP system surrounding the enhancer  |
| 5\. Design strategy for matching barcode tracking between enhancers and promoter/reporter |
| 6\. Thaw new 293T-X cells for large scale virus packaging |
| 7\. Purify MluI digested pHRS-GB plasmids to prepare for AT10, Nh100 library cloning |

*Prepare large LB-AMP plates:*

40 g of LB-AGAR powder was dissolved in 1 L of water and set up for autoclaving 🡪 2 bottles  
1 mL of AMP to be added to each bottle.  
110-120 mL of LB-AMP agar was added to each BioAssay plate. 6 total plates were prepared in this manner.

*Clean-up for AT10-MIX-Pool library & quantification:*

After gel extraction, the sample was combined with PB buffer and passed through the MinElute column again to refurbish the salt levels of the DNA sample (as this is diminished greatly after gel extraction). The final sample was eluted in 35 uL of TE buffer. Concentration was seen to be \~75 ng/uL.   
![A graph of a graph showing a number of different sizesDescription automatically generated with medium confidence][image5]

*Purify MluI digested pHRS-GB plasmids to prepare for AT10, Nh100 library cloning:*

The following plasmids (post-digestion) were run on a 0.8% agarose gel and then clear single bands of the expected size (9517 bp) were cut out, melted and purified using MinElute columns.

Reactions use an insert: vector ratio of 5:1 (since inserts in the oligo pool are \~300 bp). Set up 2 reactions of each type.

**20th November 2024**

| 1\. Work on strategy for nucleosome recon with 20kbp ligand for FIBER-SEQ |
| :---- |
| 2\. Design gene blocks with MYC355 enhancer and loxP system surrounding the enhancer  |
| 3\. Design strategy for matching barcode tracking between enhancers and promoter/reporter |
| 4\. Thaw new 293T-X cells for large scale virus packaging |
| 5\. Purify MluI digested pHRS-GB plasmids to prepare for AT10, Nh100 library cloning |

R1 (Gcla-M \+ AT10-Gcla)

| NEBuilder HiFi DNA Assembly Master Mix | 10 uL |
| :---- | :---- |
| Gcla-M (vector) – 50 ng | 5.21 uL |
| AT10-Gcla – 7.88 ng\* | 0.61 uL |
| NF H2O | 4.18 uL |

R2 ((Hcla-M \+ AT10-Hcla))

| NEBuilder HiFi DNA Assembly Master Mix | 10 uL |
| :---- | :---- |
| Hcla-M (vector) – 50 ng | 2.2 uL |
| AT10-Hcla – 7.88 ng\* | 0.47 uL |
| NF H2O |  7.33 uL |

R3 (GCC-M \+ AT10-GCC)

| NEBuilder HiFi DNA Assembly Master Mix | 10 uL |
| :---- | :---- |
| GCC-M (vector) – 50 ng | 1.47 uL |
| AT10-GCC – 7.88 ng\* | 0.48 uL |
| NF H2O | 8.05 uL |

R4 (GCD-M \+ AT10-GCD)

| NEBuilder HiFi DNA Assembly Master Mix | 10 uL |
| :---- | :---- |
| GCD-M (vector) – 50 ng | 2.03uL |
| AT10-GCD – 7.88 ng\* | 0.69 uL |
| NF H2O | 7.28 uL |

R5 (HCD-M \+ AT10-HCD)

| NEBuilder HiFi DNA Assembly Master Mix | 10 uL |
| :---- | :---- |
| HCD-M (vector) – 50 ng | 1.28 uL |
| AT10-HCD – 7.88 ng\* | 0.44 uL |
| NF H2O | 8.28 uL |

Incubate at 50°C for 60 minutes.

Post-incubation, the samples were cooled on ice for 2 mins and 5 uL of each reaction was added to 50 uL of DH5a competent cells. **Erroneously, SOC medium was added to the tubes before heat shock and hence the transformation was messed up. Tubes were discarded at this point.**

*Information Box*

**Inteins: Structure, Function, and Applications**

**What Are Inteins?**

Inteins (short for “internal proteins”) are protein segments that catalyze their own excision from a precursor protein and ligate the remaining portions (called exteins) to produce a functional protein. This process, known as **protein splicing**, is a post-translational modification that occurs in a wide range of organisms, from bacteria to archaea and eukaryotes. Inteins are conceptually similar to introns in nucleic acids, except they operate at the protein level.

**Structure of Inteins**

Inteins typically consist of three key domains:  
	1\.	**N-terminal cleavage site (N-terminal splicing motif):** Facilitates the nucleophilic attack that initiates splicing.  
	2\.	**Central endonuclease domain:** Found in “intein homing” versions, it enables horizontal gene transfer by cleaving DNA at specific sites to insert the intein-coding gene.  
	3\.	**C-terminal cleavage site (C-terminal splicing motif):** Completes the ligation of exteins.

A minimal intein only contains the catalytic regions necessary for protein splicing, whereas full-length inteins may also include domains like homing endonucleases, which promote their spread through genomes (Perler, 1998; Novikova et al., 2016).

**Mechanism of Protein Splicing**

The splicing process involves a precise sequence of nucleophilic attacks and rearrangements:  
	1\.	**N-terminal cleavage:** The side chain of a conserved cysteine, serine, or threonine at the intein’s N-terminal attacks the peptide bond, forming a thioester or ester intermediate.  
	2\.	**Transesterification:** The ester intermediate facilitates transfer to a conserved cysteine or serine in the C-terminal splicing motif, creating a branched intermediate.  
	3\.	**Extein ligation:** The branched intermediate resolves, forming a new peptide bond between the exteins and releasing the intein.

This autocatalytic reaction is highly specific and requires no external cofactors, making inteins powerful tools in biotechnology.

**The Logic Behind Inteins**

Inteins likely evolved as selfish genetic elements, exploiting protein splicing to propagate themselves within host genomes while maintaining host viability. Homing endonuclease domains enable the intein gene to be copied into unoccupied alleles of homologous genes through homologous recombination. This ensures their inheritance without significantly disrupting host fitness, as the splicing process is typically efficient and leaves the protein functional (Pietrokovski, 1994; Dassa et al., 2014).

**Applications of Inteins**

Inteins have become invaluable tools in biotechnology due to their unique properties. Key applications include:  
	1\.	**Protein Purification (Affinity Tags):**  
	•	Inteins can be engineered to include a chitin-binding domain, allowing proteins to be purified using affinity chromatography. Splicing can then be triggered to release the purified protein without additional tags or protease treatment (Chong et al., 1998).  
	2\.	**Controlled Protein Activation:**  
	•	Split inteins, which exist as two separate fragments, can reassemble and splice under specific conditions, allowing researchers to control protein activation spatially or temporally (Shah & Muir, 2011).  
	3\.	**Cyclic Peptides and Therapeutics:**  
	•	Inteins have been used to create cyclic peptides, which are more stable and have enhanced bioactivity compared to linear peptides (Aranko et al., 2014).  
	4\.	**Labeling Proteins for Imaging or Studies:**  
	•	By inserting inteins into specific sites, fluorescent or other chemical tags can be ligated to proteins in vivo, aiding structural and functional studies (Wu et al., 2011).  
	5\.	**Synthetic Biology:**  
	•	Inteins enable modular assembly of synthetic proteins by splicing together protein fragments produced separately, expanding the toolkit for designing complex systems (Tori et al., 2020).

**Seminal Scientific Literature**

	1\.	**Discovery of Inteins:** Kane et al. (1990) identified the first intein in the VMA1 gene of *Saccharomyces cerevisiae*, demonstrating its autocatalytic splicing ability.  
	2\.	**Mechanistic Insights:** Perler (1998) provided a comprehensive review of intein biochemistry, detailing the splicing mechanism and structural features.  
	3\.	**Applications in Biotechnology:** Chong et al. (1998) demonstrated the utility of inteins in protein purification with affinity tags.  
	4\.	**Split Inteins and Synthetic Biology:** Shah & Muir (2011) explored the use of split inteins in chemical biology for controlled protein activation.

**Conclusion**

Inteins are remarkable molecular tools derived from a fascinating evolutionary phenomenon. Their ability to perform self-contained and highly specific splicing reactions has made them a cornerstone in protein engineering, with applications spanning from purification to synthetic biology and therapeutic design. Advances in understanding their structure and mechanism continue to enhance their utility in research and industry.

**21st November 2024**

| 1\. Work on strategy for nucleosome recon with 20kbp ligand for FIBER-SEQ |
| :---- |
| 2\. Design gene blocks with MYC355 enhancer and loxP system surrounding the enhancer  |
| 3\. Design strategy for matching barcode tracking between enhancers and promoter/reporter |
| 4\. Thaw new 293T-X cells for large scale virus packaging |
| 5\. Cloning of pHRS-Nh100 library and plating on BioAssay plate |
| 6\. Re-run SELEX batch2 libraries on TapeStation with HS-DNA1000 reagents   |
| 7\. Transformation of pHRS-AT10 libraries (except HCC) |

*Transformation of pHRS-AT10 libraries (except HCC):*

- Thaw chemically competent cells (NEB DH5a) on ice.    
- Add 5 µl of the chilled assembled product to 50 uL competent cells. Mix gently by flicking/swirling the tube 4–5 times. Do not vortex.     
- Place the mixture on ice for 30 minutes. Do not mix.    
- Heat shock at 42°C for 30 seconds. Do not mix.    
- Transfer tubes to ice for 2 minutes.   
- Add 700 µl of room-temperature SOC media to the tube.   
- Incubate the tube at 37°C for 60 minutes. Shake vigorously (500 rpm) or rotate.   
- Warm selection plates to 37°C.    
- Spread entire liquid culture over the BioAssay plates.  
- Incubate overnight at 37°C.

*Re-run SELEX batch2 libraries on TapeStation with DNA1000 reagents:*

1 uL ladder \+ 3 uL buffer  
1 uL sample \+ 3 uL buffer

Both the ladder and buffer used are from the HS DNA1000 kit.

Samples are loaded and run on the DNA1000 ScreenTape:

 ![A graph of a graph of a personDescription automatically generated with medium confidence][image6]![A graph of a person's graphDescription automatically generated with medium confidence][image7]  
![A graph of a graph of a personDescription automatically generated with medium confidence][image8]![A graph of a number of linesDescription automatically generated with medium confidence][image9]  
![A graph of a number of linesDescription automatically generated with medium confidence][image10]![A graph of a graph showing a number of numbersDescription automatically generated with medium confidence][image11]  
![][image12]![A graph of a graphDescription automatically generated][image13]  
![A graph of a graphDescription automatically generated][image14]![A graph of a graphDescription automatically generated][image15]  
![A graph of a graphDescription automatically generated][image16]![A graph of a graphDescription automatically generated][image17]  
![A graph with numbers and linesDescription automatically generated][image18]![A graph of a personDescription automatically generated][image19]  
Based on the TapeStation profiles the concentrations for the samples are seen to be as follows:

| Library | Concentration (nM) |
| :---: | :---: |
| ﻿NCAP2C1PE0147 | 95.6 |
| ﻿NCAP2C2PE2147 | 19.9 |
| ﻿NCAP2C3PE3147 | 51.76 |
| ﻿NCAP2C4PE1147 | 25.2 |
| ﻿NCAP2C1PE1N20W100 | 129 |
| ﻿NCAP2C2PE2N20W100 | 104.1 |
| ﻿NCAP2C3PE3N20W100 | 44.3 |
| ﻿NCAP2C4PE0N20W100 | 95.4 |
| ﻿HTS2C1PE0147 | 6.57 |
| ﻿HTS2C2PE1147 | 3.05 |
| ﻿HTS2C3PE2147 | 2.91 |
| ﻿HTS2C4PE3147 | 3.33 |
| ﻿C0PE0147 | 1.47 |
| ﻿C0PE1N20W100 | 385 |

Sizes of dominant peaks shown are relatively accurate and in the range of 180-250 bp (both ligand sizes are in this range after PE PCR), except in the case of the C0PE1N20W100 library which gives an aberrantly high fragment size for some reason.

Shown below are the comparisons of these results to the QC performed by BGI using the Agilent 2100 Bioanalyzer (DNA HSD). The QC on the BGI side shows a lot more aberrant fragments than what is seen in the case of my internal QC.  
![A table of text with numbersDescription automatically generated][image20]  
![A grid of numbers with black textDescription automatically generated][image21]

![A graph of a sampleDescription automatically generated with medium confidence][image22]![A screenshot of a computerDescription automatically generated][image23]  
![A graph of a person's reactionDescription automatically generated with medium confidence][image24]![A screenshot of a computer screenDescription automatically generated][image25]

![A graph of a test resultsDescription automatically generated with medium confidence][image26]  
![A screenshot of a computerDescription automatically generated][image27]  
![A screenshot of a computer screenDescription automatically generated][image28]  
![A graph of a test resultsDescription automatically generated with medium confidence][image29]  
![A graph showing results of a testDescription automatically generated with medium confidence][image30]  
![A screenshot of a computer screenDescription automatically generated][image31]

![A screenshot of a computer screenDescription automatically generated][image32]  
![A graph of a test resultsDescription automatically generated][image33]

*Troubleshooting Box*  
The discrepancy between the agarose gel results and the Agilent TapeStation/Bioanalyzer results is likely due to differences in the detection mechanisms and sensitivity of these methods, combined with the potential for DNA secondary structures, incomplete denaturation, or sample preparation artifacts affecting the TapeStation/Bioanalyzer analysis.

**How Agilent TapeStation and Bioanalyzer Work**  
**Principle**:  
Both the TapeStation and Bioanalyzer use **capillary electrophoresis** with an integrated dye-based fluorescence detection system to assess DNA size and concentration.  
They rely on **electrophoretic mobility**, which can be influenced by both fragment size and shape.  
**Electrophoretic Mobility**:  
DNA fragments are separated in a polymer matrix based on their size. Smaller fragments migrate faster than larger ones.  
Secondary structures or DNA bound to contaminants (e.g., protein, RNA, salts) can alter electrophoretic behavior, making fragments appear larger or smaller than they are.  
**Fluorescence Detection**:  
DNA is stained with an intercalating dye, and the fluorescence intensity correlates with the amount of DNA in a fragment.  
This method is highly sensitive and can detect low-abundance DNA species that might not be visible on an agarose gel.  
**Sizing Algorithms**:  
Agilent systems compare migration patterns to a DNA ladder or standard curve to estimate fragment sizes.  
Complex or anomalous migration patterns can lead to inaccurate size predictions.

**Why Larger Fragments Might Be Dominant on TapeStation/Bioanalyzer**

**Secondary Structures**:  
DNA fragments around 250 bp can form secondary structures, such as hairpins or partial duplexes, which alter their electrophoretic mobility.  
These structures migrate more slowly, leading the TapeStation/Bioanalyzer to interpret them as larger fragments (\>400 bp).  
**Sample Preparation Artifacts**:  
Improper pipetting or over-drying of samples during library preparation can lead to aggregation of DNA fragments, which appear as larger fragments.  
TapeStation and Bioanalyzer are sensitive enough to detect these aggregates.  
**Contaminants or Overloading**:  
Contaminants (e.g., RNA, leftover primers, salts) can bind to the DNA, affecting its migration pattern.  
Overloading the sample on the TapeStation or Bioanalyzer can exaggerate fluorescence signals from anomalous species.  
**Sensitivity Differences**:  
Agarose gels require a significant amount of DNA for visualization; low-abundance species or contaminants may not be visible.  
TapeStation and Bioanalyzer can detect even minute amounts of DNA, highlighting species that might go unnoticed on a gel.  
**Matrix and Dye Interactions**:  
The polymer matrices in TapeStation/Bioanalyzer chips interact differently with DNA than agarose, potentially altering migration behaviors.  
The fluorescence detection is more susceptible to overestimating the presence of certain structures or species due to high dye affinity for aggregated or structured DNA.

**Suggested Solutions and Tests**

**Denaturation**:  
Denature the DNA libraries before analysis (e.g., heat the sample at 95°C for 2 minutes, followed by rapid cooling on ice) to disrupt secondary structures and aggregates.  
Run the denatured samples on both TapeStation and agarose gels to compare results.  
**Dilution**:  
Dilute your DNA libraries to reduce overloading effects and reassess on the TapeStation/Bioanalyzer.  
**Additional Purification**:  
Use a purification step, such as AMPure beads or ethanol precipitation, to remove contaminants.  
**RNA/DNAse Treatment**:  
Treat the samples with RNase to remove any residual RNA contamination that might be contributing to anomalous signals.  
**Cross-Validation**:  
Use a second gel system (e.g., polyacrylamide gel electrophoresis, PAGE) to confirm the fragment size.  
**Instrument Calibration**:  
Confirm that the TapeStation and Bioanalyzer are calibrated properly and ensure you’re using the correct chip and settings for DNA size analysis. By accounting for these differences and taking steps to address potential causes, you should be able to reconcile the discrepancies between the agarose gel and Agilent instrument results.

If you denature DNA before running it on an agarose gel and rapidly cool it, you can encourage the DNA to re-anneal and reform its double-stranded (dsDNA) nature. However, the outcome depends on the cooling process and the DNA sequence. Here’s what you can do to selectively retain the dsDNA structure:

**Why Worry About ssDNA?**

Denatured single-stranded DNA (ssDNA) migrates differently on an agarose gel due to its altered structure and charge-to-mass ratio. The migration pattern of ssDNA is less predictable and can lead to misinterpretation.

**Strategies to Minimize ssDNA and Preserve dsDNA**

**Use Gentle Denaturation**:  
Heat the sample to **95°C for 2 minutes** but avoid prolonged denaturation, which might prevent effective re-annealing.  
**Rapid Cooling**:  
Quickly cool the samples by placing them on ice immediately after denaturation. This ensures complementary strands re-anneal before secondary structures form.  
**Salt Buffer for Stability**:  
Perform the denaturation and cooling in a **buffer containing salts** (e.g., 10 mM NaCl or a standard TE buffer). Salts stabilize the double-stranded form by facilitating base pairing.  
**Annealing Step**:  
After denaturation, allow the DNA to cool at room temperature for a minute or two before placing it on ice. This gives the strands enough time to re-anneal selectively into dsDNA while preventing secondary structures.  
**Use a Control Sample**:  
Run a non-denatured aliquot of the same DNA library alongside the treated sample to compare their migration patterns on the agarose gel.

**Additional Suggestions**  
If you are concerned about dsDNA being disrupted, consider an enzymatic approach instead of heat denaturation. For example:  
**S1 Nuclease** (specific for ssDNA) can remove any unwanted ssDNA while leaving dsDNA intact.  
Use RNase to remove RNA contamination, which can mimic DNA on gels.  
Use **formamide-free loading buffers** to ensure the gel electrophoresis conditions support dsDNA migration.

**Expected Results**  
If executed correctly:  
dsDNA fragments will re-anneal and migrate as expected on the gel, retaining their proper size.  
Secondary structures and ssDNA contamination should be minimized, making your agarose gel results more reliable.

Testing this approach first with a small subset of your sample will help confirm its effectiveness.

**22nd November 2024**

| 1\. Work on strategy for nucleosome recon with 20kbp ligand for FIBER-SEQ |
| :---- |
| 2\. Design gene blocks with MYC355 enhancer and loxP system surrounding the enhancer  |
| 3\. Design strategy for matching barcode tracking between enhancers and promoter/reporter |
| 4\. Thaw new 293T-X cells for large scale virus packaging |
| 5\. Cloning of pHRS-Nh100 library and plating on BioAssay plate |
| 6\. Re-run SELEX batch2 libraries on TapeStation with HS-DNA1000 reagents \- denatured   |
| 7\. Set up liquid culture for pHRS-AT10 (except HCC) transformants |

*Cloning of pHRS-Nh100 library and plating on BioAssay plate:*

Nh (Nh-M \+ Nh100)

Insert size is actually 158 bp (lower than AT10 library), so 5:1 ratio or higher may be needed. By calculation the insert to be added for 5:1 works out to 4.15 ng, but we are adding higher as per the previous calculations for AT10 for this trial.

| NEBuilder HiFi DNA Assembly Master Mix | 10 uL |
| :---- | :---- |
| Nh-M (vector) – 50 ng | 1.47 uL |
| Nh100 – 7.88 ng\* | 0.20 uL |
| NF H2O | 8.33 uL |

Incubate at 50°C for 60 minutes.

- Thaw chemically competent cells (NEB DH5a) on ice.    
- Add 5 µl of the chilled assembled product to 50 uL competent cells. Mix gently by flicking/swirling the tube 4–5 times. Do not vortex.     
- Place the mixture on ice for 30 minutes. Do not mix.    
- Heat shock at 42°C for 30 seconds. Do not mix.    
- Transfer tubes to ice for 2 minutes.   
- Add 700 µl of room-temperature SOC media to the tube.   
- Incubate the tube at 37°C for 60 minutes. Shake vigorously (500 rpm) or rotate.   
- Warm selection plates to 37°C.    
- Spread entire liquid culture over the BioAssay plate.  
- Incubate overnight at 37°C.

*Re-run SELEX batch2 libraries on TapeStation with HS-DNA1000 reagents – denatured:*

Some samples from the recent SELEX libraries (5 uL each) were taken and denatured at 95°C, 2 mins and then immediately cooled for around 5-10 mins on ice.

1 uL of the sample was then combined with 3 uL of the HS sample buffer and loaded on to the DNA1000 ScreenTape.

The denaturing did not yield any clear results – in fact all fragment sizes were shifted to very high sizes – consistent \~690 bp sizes were seen, suggesting further secondary structure formation during the re-annealing of the separated ssDNA strands. The enriched DNA in SELEX likely consists of a lot of GC-rich and palindromic which leads to a lot of secondary structure formation.

![A screenshot of a graphDescription automatically generated][image34]  
*Set up liquid culture for pHRS-AT10 (except HCC) transformants:*

Add 70 mL media on each plate and scrape all colonies into the liquid medium. Shake gently for about 10 mins to allow even mixing of colonies into LB media. Mix and transfer to a culture flask. Make volume up to 150 mL and add 150 uL of Ampicillin.

Culture O/N at 37°C.

Cultures are:

- pHRS-Gcla-libv1  
- pHRS-Hcla-libv1  
- pHRS-GCC-libv1  
- pHRS-GCD-libv1  
- pHRS-HCD-libv1

*28th November 2024*  
*SELEX data analysis notes:*

* New batch of SELEX data has returned – data was downloaded through AWS  
* To test whether this batch of experiments worked, the data was first analysed for well C12 – MAX FL protein \[since data was analyzed only for cyc1, an E-box motif was seen i.e. CAATTG while the actual MAX E-box is CACGTG\]  
* Scripts used to merge reads, trim adapters and convert .fq to .fa/.seq files by insertion of random DNA bases – SELEXseq\_p0.sh, SELEXseq\_p1.sh, SELEXseq\_p2.sh & SELEXseq\_p3.sh  
* Next analysis was run for TETR (F2) – a clean motif was seen \[need to check if this is the accurate/expected motif\]  
* ELF2-m2 (B2) & ELF2 (D4) were also run – commands used were:   
  ./totalautomodelIC \-40N Tru147HTSELF21\_sig.seq Tru147HTSELF21\_sig.seq 1 10 10 .35 \- 20 100 0.2 Tru147HTSELF2 \[this picks up & displays typically longer motifs – ideally I would need to scan for something in the range of 6-8 nucleotides\]  
* New trials will use the following script: ./totalautomodelIC \-40N Tru147HTSELF21\_sig.seq Tru147HTSELF21\_sig.seq 1 6 8 .35 \- 20 100 0.2 Tru147HTSELF2  
* Still having some issues with uploading data into the kaz pipeline – I can see the sequence moving on to the kaz website but none of the analysis results, models, kmers can be seen after the data upload \[Talk to Ilya to see how this can be fixed\]

![A yellow sign with black textDescription automatically generated][image35]

7th December 2024

Transfection of pHRS-libv1 for the following:

- Gcla  
- Hcla  
- GCC  
- GCD  
- HCD  
- Nh100

Tube 1: 125 uL OM \+ 5 uL P3000 \+ 3.5 ug library

Tube 2: 125 uL OM \+ 7.5 uL P3000

Mix after 5 mins, RT.   
Incubate 15 mins, RT.

Add drop-by-drop to wells.

**21 February 2025**

**AT10 plasmid pool amplification with Illumina PE primers**

P5\_staggered\_F(™) \= 58 C  
P7\_BC1\_R \= 62 C  
Annealing temperature \= 60 C

Per reaction:

| KAPA HiFi MM (2X) | 25 uL |
| :---- | :---- |
| P5 primer mix (100 uM) | 0.25 uL |
| Plasmid library  |  |
| P7 primer (5 uM) | 5 uL |
| NF H2O | Up to 50 uL |

| 95 C | 1 min |
| :---- | :---- |
| 95 C | 30 s |
| 60 C | 30 s |
| 72 C | 30 s |
| 72 C | 10 min |
| 4 C | Forever |

28 cycles of amplification was performed

For the P5 primer mix: 5 uL of each primer (100 uM) in a single tube  
Master-Mix \[4 tubes per plasmid library\]:

| KAPA HiFi MM (2X) | 125 uL |
| :---- | :---- |
| P5 primer mix (100 uM) | 1.25 uL |
| Plasmid library  | 50 ng\* |
| P7 primer (5 uM) | 5 uL\* |
| NF H2O | Up to 50 uL |

\* to be added separately to each pool of reactions  
**25 February 2025**

**293T-X cell thaw and culture**

Use T125 or T175 flasks for thawing and extended culture of 293T-X cells.

293T Media

| HI FBS (10%) | 1000 mL |
| :---- | :---- |
| Sodium Pyruvate (100 mM) | 10 mL (1 mM final) |
| Pen-Strep (10kU/mL) | 10 mL (100 U/mL) |
| DMEM | Top up to 1000 mL |

The media was prepared and filtered and then used to thaw two vials of 293T-X Takara cells (P6) into a T150 flask. 

- Stocks of HI FBS prepared in 50 mL tubes  
- Stocks of L-Glutamine (Q) & P/S prepared in 15 mL tubes

**AT10 plasmid libraries**

From the PCR reactions set-up using the library pools, perform PCR purification for each pool and then elute the pooled product into 50 uL of sample in TE buffer.

Run 5 uL of the pooled samples on a 2% agarose gel with the 100-bp DNA ladder \[120 V, 60 min\]:

Ladder (100 bp) – Gcla\_BC1 – Hcla\_BC1 – GCD\_BC1 – HCD\_BC1 – GCC\_BC1

![][image36]

Based on the results seen in the gel, the dominant band is seen to be of the expected size i.e. between 400-500 bp \[expected fragment size is 427 bp\]. However, there do seem to be smeared fragments of higher and lower size around the main band \- suggesting that a clean-up or gel extraction will need to be performed to select the specific band of interest representing the enhancer oligo library.

**27 February 2025**

**Gene Block Resuspension & Annealing:**

IDT gene blocks \- MYC335gb1, MYC335gb2 contained 1000 ng of lyophilised dsDNA each.

- Tubes were briefly spun down.  
- 100 uL TE buffer was added to each tube to achieve a final concentration of 10 ng/uL.  
- The tubes were vortexed briefly.  
- Tubes incubated at 50°C for 20 minutes for resuspension.  
- Concentration was verified by using the NanoDrop.

 The annealing section between both gene blocks has a Tm \= 66.5°C

| Gb-1 | 1 uL (\~10 ng) |
| :---- | :---- |
| Gb-2 | 1 uL (\~10 ng) |
| Phusion 5X HF buffer | 3 uL |
| NF water | 10 uL |

| 97°C | 5 min |
| :---- | :---- |
| \-1°C/cycle | 32X |
| 65°C | 30 min |
| \-1°C/cycle | 5X\* |

\* Rapid cooling to 60°C

Extension: (EXT, Machine 4\)

To complete the annealing reaction, the following components were added:

| Phusion 5X HF buffer  | 1 uL |
| :---- | :---- |
| 10 mM dNTPs | 2.5 uL |
| Phusion Pol | 1.5 uL |

Extension PCR 🡪 72°C for 60 minutes.

Annealing reaction tube is stored at 4°C.

**PCR for cloning of Shh-BC into pHRS backbone \[backbone\] \- 9396 bp:**

Perform this PCR on all backbones (2X each):

- pHRS-Gcla-GB  
- pHRS-Hcla-GB  
- pHRS-GCD-GB  
- pHRS-HCD-GB  
- pHRS-GCC-GB  
- pHRS-Nh100-GB

SHHBCVEC

3X

| 2X Phusion Mix  | 30 uL |
| :---- | :---- |
| ShhF1 10 uM | 3 uL |
| ShhR1 10 uM | 3 uL |
| pHRS-Gcla-GB (10 ng) | 3 uL |
| NF H2O | 21 uL |

3X

| 2X Phusion Mix  | 30 uL |
| :---- | :---- |
| ShhF1 10 uM | 3 uL |
| ShhR1 10 uM | 3 uL |
| pHRS-Hcla-GB (10 ng) | 3 uL |
| NF H2O | 21 uL |

3X

| 2X Phusion Mix  | 30 uL |
| :---- | :---- |
| ShhF1 10 uM | 3 uL |
| ShhR1 10 uM | 3 uL |
| pHRS-GCD-GB (10 ng) | 3 uL |
| NF H2O | 21 uL |

3X

| 2X Phusion Mix  | 30 uL |
| :---- | :---- |
| ShhF1 10 uM | 3 uL |
| ShhR1 10 uM | 3 uL |
| pHRS-HCD-GB (10 ng) | 3 uL |
| NF H2O | 21 uL |

3X

| 2X Phusion Mix  | 30 uL |
| :---- | :---- |
| ShhF1 10 uM | 3 uL |
| ShhR1 10 uM | 3 uL |
| pHRS-GCC-GB (10 ng) | 3 uL |
| NF H2O | 21 uL |

3X

| 2X Phusion Mix  | 30 uL |
| :---- | :---- |
| ShhF1 10 uM | 3 uL |
| ShhR1 10 uM | 3 uL |
| pHRS-Nh100-GB (10 ng) | 3 uL |
| NF H2O | 21 uL |

Transfer 20 uL to 2 tubes for each plasmid subtype:

| 98°C | 30 s |
| :---- | :---- |
| **98°C** | **10 s** |
| **64°C** | **30 s       35X** |
| **72°C** | **5 min** |
| 72°C | 10 min |
| 4°C | HOLD |

**PCR for cloning of MYC335gb into pHRS backbone \[backbone\] \- 9350 bp:**

Perform this PCR on any one backbones (4X):

pHRS-Gcla-GB to be used for the setup.

MYC335VE

5X

| 2X Phusion Mix  | 50 uL |
| :---- | :---- |
| ShhF1 10 uM | 5 uL |
| ShhR1 10 uM | 5 uL |
| pHRS-Gcla-GB (10 ng) | 5 uL |
| NF H2O | 35 uL |

Transfer 20 uL to 4 tubes for each plasmid subtype:

| 98°C | 30 s |
| :---- | :---- |
| **98°C** | **10 s** |
| **65°C** | **30 s       35X** |
| **72°C** | **5 min** |
| 72°C | 10 min |
| 4°C | HOLD |

**28 February 2025**

**Gene Block Resuspension & Annealing:**

IDT gene blocks \- MYC335gb1, MYC335gb2 contained 1000 ng of lyophilised dsDNA each.

- Tubes were briefly spun down.  
- 100 uL TE buffer was added to each tube to achieve a final concentration of 10 ng/uL.  
- The tubes were vortexed briefly.  
- Tubes incubated at 50°C for 20 minutes for resuspension.  
- Concentration was verified by using the NanoDrop.

 The annealing section between both gene blocks has a Tm \= 66.5°C

| Gb-1 | 1 uL (\~10 ng) |
| :---- | :---- |
| Gb-2 | 1 uL (\~10 ng) |
| Phusion 5X HF buffer | 3 uL |
| NF water | 10 uL |

| 97°C | 5 min |
| :---- | :---- |
| \-1°C/cycle | 32X |
| 65°C | 30 min |
| \-1°C/cycle | 5X\* |

\* Rapid cooling to 60°C

Extension: (EXT, Machine 4\)

To complete the annealing reaction, the following components were added:

| Phusion 5X HF buffer  | 1 uL |
| :---- | :---- |
| 10 mM dNTPs | 2.5 uL |
| Phusion Pol | 1.5 uL |

Extension PCR 🡪 72°C for 60 minutes.

Annealing reaction tube is stored at 4°C.

**Checking PCR product size & gel extraction:**

i. \[SHHBCVEC\] Products for each pool of the pHRS libraries were combined and purified by passing through a MinElute column. Elute each product in 20 uL of pre-warmed TE buffer.

ii. \[MYC335VE\] Pool the PCR reactions and pass through the MinElute column to purify the PCR reactions. Elute in 40 uL of pre-warmed TE buffer.

iii. Run all purified products on a 0.8% agarose gel and cut out the bands for gel extraction.

iv. Store the purified vector PCR DNA at 4 degrees.

**QC for pooled PE PCR whitelist libraries for AT10-pools:**

i. Run the samples on an Agilent High Sensitivity ScreenTape to get an accurate estimate of the sizes of the libraries.

**Rapid Ligation Trial for SELEX ligands:**

i. Re-quantify lig147 and ligN20w100 pools and note the concentrations of these ligands down.

ii. Use Rapid Ligation kit with a total of 400 ng of each ligand in a volume of 50 uL for a period of 30 mins at room temperature.

| Linearized vector DNA | 400 ng |
| :---- | :---- |
| 5X Rapid ligation buffer | 10 uL |
| T4 DNA ligase | 1 uL (5U/uL) |
| NF water | Up to 50 uL |

   
No blunt-end treatment or phosphorylation of ligands was performed for this round.

iii. Run the product of ligation on a 0.8% agarose gel to check the size of the ligation product.

**4 March 2025**

**SHHBCVEC PCR** 

i. \[SHHBCVEC\] \- This time around set up 4X reactions for each of the vector pools:

5X

| 2X Phusion Mix  | 50 uL |
| :---- | :---- |
| ShhF1 10 uM | 5 uL |
| ShhR1 10 uM | 5 uL |
| pHRS-Gcla-GB (10 ng) | 5 uL |
| NF H2O | 35 uL |

5X

| 2X Phusion Mix  | 50 uL |
| :---- | :---- |
| ShhF1 10 uM | 5 uL |
| ShhR1 10 uM | 5 uL |
| pHRS-Hcla-GB (10 ng) | 5 uL |
| NF H2O | 35 uL |

5X

| 2X Phusion Mix  | 50 uL |
| :---- | :---- |
| ShhF1 10 uM | 5 uL |
| ShhR1 10 uM | 5 uL |
| pHRS-GCD-GB (10 ng) | 5 uL |
| NF H2O | 35 uL |

5X

| 2X Phusion Mix  | 50 uL |
| :---- | :---- |
| ShhF1 10 uM | 5 uL |
| ShhR1 10 uM | 5 uL |
| pHRS-HCD-GB (10 ng) | 5 uL |
| NF H2O | 35 uL |

5X

| 2X Phusion Mix  | 50 uL |
| :---- | :---- |
| ShhF1 10 uM | 5 uL |
| ShhR1 10 uM | 5 uL |
| pHRS-GCC-GB (10 ng) | 5 uL |
| NF H2O | 35 uL |

5X

| 2X Phusion Mix  | 50 uL |
| :---- | :---- |
| ShhF1 10 uM | 5 uL |
| ShhR1 10 uM | 5 uL |
| pHRS-Nh100-GB (10 ng) | 5 uL |
| NF H2O | 35 uL |

Transfer 20 uL to 2 tubes for each plasmid subtype:

| 98°C | 30 s |
| :---- | :---- |
| **98°C** | **10 s** |
| **64°C** | **30 s       35X** |
| **72°C** | **5 min** |
| 72°C | 10 min |
| 4°C | HOLD |

**MYC335VE PCR** 

i. \[MYC335VE\] \- Incorrect product size was seen the last time. This time run a gradient PCR using the original pHRS corrected backbone

9X

| 2X Phusion Mix  | 90 uL |
| :---- | :---- |
| spGFPF1 10 uM | 9 uL |
| spGFPR1 10 uM | 9 uL |
| pHRS-corrected (10 ng) | 9 uL |
| NF H2O | 63 uL |

Transfer 20 uL to 4 tubes for each plasmid subtype:

| 98°C | 30 s |
| :---- | :---- |
| **98°C** | **10 s** |
| **63-67°C** | **30 s       35X** |
| **72°C** | **5 min** |
| 72°C | 10 min |
| 4°C | HOLD |

**Rapid Ligation Trial for SELEX ligands:**

Use Rapid Ligation kit with a total of 400 ng of each ligand in a volume of 50 uL for a period of 15 mins at 25 degrees.

Two reactions:

1. lig147 MAIN  
2. ligN20w100 MAIN

| Linearized vector DNA | 400 ng |
| :---- | :---- |
| 5X Rapid ligation buffer | 10 uL |
| T4 DNA ligase | 1 uL (5U/uL) |
| NF water | Up to 50 uL |

   
No blunt-end treatment or phosphorylation of ligands was performed for this round.

**Amplification of annealed MYC335 gene block:**

5X

| MYC335gb\_F (10 uM) | 5 uL |
| :---- | :---- |
| MYC335gb\_R (10 uM) | 5 uL |
| 2X Phusion Mix | 50 uL |
| Annealed GB | 10 uL |
| DMSO | 3 uL |
| NF H2O | 27 uL |

GBPCR

| 95°C | 3 min |
| :---- | :---- |
| 98°C | 20 s |
| **69°C\*** | **15 s       20X** |
| 72°C | 30 s |
| 72°C | 40 min |
| 4°C | HOLD |

\*MYC335gb\_F has a Tm\=72°C and MYC335gb\_R has a Tm\=69°C; Ta accordingly set to 69°C.

The concentration for the gene blocks to be measured post column purification.

**pHRS-Nh100 plasmid pool amplification with Illumina PE primers**

P5\_staggered\_F(™) \= 58 C  
P7\_BC1\_R \= 60 C  
Annealing temperature \= 58 C

Per reaction:

| KAPA HiFi MM (2X) | 25 uL |
| :---- | :---- |
| P5 primer mix (100 uM) | 0.25 uL |
| Plasmid library  |  |
| P7 primer (5 uM) | 5 uL |
| NF H2O | Up to 50 uL |

| 95 C | 1 min |
| :---- | :---- |
| 95 C | 30 s |
| 60 C | 30 s |
| 72 C | 30 s |
| 72 C | 10 min |
| 4 C | Forever |

28 cycles of amplification was performed

For the P5 primer mix: 5 uL of each primer (100 uM) in a single tube  
Master-Mix \[4 tubes per plasmid library\]:

| KAPA HiFi MM (2X) | 125 uL |
| :---- | :---- |
| P5 primer mix (100 uM) | 1.25 uL |
| Plasmid library  | 50 ng\* |
| P7 primer (5 uM) | 5 uL\* |
| NF H2O | Up to 50 uL |

\* to be added separately to each pool of reactions

**QC for pooled PE PCR whitelist libraries for AT10-pools:**

i. Run the samples on an Agilent High Sensitivity ScreenTape to get an accurate estimate of the sizes of the libraries.

Samples:

1. pHRS-Gcla-BC1  
2. pHRS-Hcla-BC1  
3. pHRS-GCD-BC1  
4. pHRS-HCD-BC1  
5. pHRS-GCC-BC1

**6 March 2025**

**Agarose gel check for MYC335VE product after amplification from pHRS-NEW2 backbone**

0.8% gel was cast (some gel was lost during heating).

Samples 1-8 were loaded on the gel to check for the band with the most accurate size (9350 bp).  
![][image37]

Based on the gel results condition 4 or 5 seem to be best suited for the PCR

**Agarose gel check for purified pHRS-Nh100-PE library & MYC335-gb PCR product**

On the same agarose gel, load 5 uL of pHRS-Nh100-PE & MYC335-gb PCR. Compare with 100 bp DNA ladders to determine accurate size.

![][image38]  
As per the gel, the pHRS-Nh100-PEBC1 product is seen to be of the correct size i.e. \~285 bp. Further quantification and size estimation will be performed on the TapeStation to check for the size.

The complete annealed and amplified MYC335gb is supposed to be 1543 bp in size and therefore seems accurate (\> 1000 bp when compared to the 100 bp DNA ladder)

**Gel extraction for SHHBCVEC PCR products:**

Cast another 0.8% agarose gel with at least 28 loadable wells (two rows minimum), and then load the following samples:

Ladder (1 kb) \- pHRS-Gcla (4X) \- pHRS-Hcla (4X) \- pHRS-GCD (4X) \- pHRS-HCD (4X) \- pHRS-GCC (4X)

Cut out the bands of the correct size (9396 bp) and perform gel extraction and purification.

**Rapid Ligation Trial for SELEX ligands:**

Use Rapid Ligation kit with a total of 400 ng of each ligand in a volume of 50 uL for a period of 15 mins at 25 degrees.

Two reactions:

3. lig147 MAIN  
4. ligN20w100 MAIN

| Linearized vector DNA | 400 ng |
| :---- | :---- |
| 5X Rapid ligation buffer | 10 uL |
| T4 DNA ligase | 1 uL (5U/uL) |
| NF water | Up to 50 uL |

   
No blunt-end treatment or phosphorylation of ligands was performed for this round.

**10 March 2025**

**Gel extraction for SHHBCVEC PCR products:**

Cast another 0.8% agarose gel with at least 28 loadable wells (two rows minimum), and then load the following samples:

Ladder (1 kb) \- pHRS-Gcla (4X) \- pHRS-Hcla (4X) \- pHRS-GCD (4X) \- pHRS-HCD (4X) \- pHRS-GCC (4X)

Cut out the bands of the correct size (9396 bp) and perform gel extraction and purification.

**MYC335VE PCR** 

i. \[MYC335VE\] \- Using the gradient PCR result the 4th tube setting was chosen to set the annealing temperature for this reaction.

5X

| 2X Phusion Mix  | 50 uL |
| :---- | :---- |
| spGFPF1 10 uM | 5 uL |
| spGFPR1 10 uM | 5 uL |
| pHRS-corrected (10 ng) | 5 uL |
| NF H2O | 35 uL |

Transfer 20 uL to 4 tubes for each plasmid subtype:

| 98°C | 30 s |
| :---- | :---- |
| **98°C** | **10 s** |
| **64.6°C** | **30 s       35X** |
| **72°C** | **5 min** |
| 72°C | 10 min |
| 4°C | HOLD |

Run on an agarose gel and cut out the specific bands for the gel extraction of the correct product.

**Clean-Up of SELEX libraries for AVITI sequencing**

*SPRIselect Bead-Based Size Selection Protocol for Retaining 100-400 bp Fragments and Removing \>500 bp Fragments*  
*(Modified with a 0.7× ratio for better exclusion of larger fragments)*  
   
This protocol is optimized for **SPRIselect beads** (Beckman Coulter) to selectively retain **100-400 bp DNA fragments**, while removing **fragments \>500 bp**, using a higher bead-to-sample ratio (**0.7× instead of 0.6×**) to improve exclusion of large fragments.  
   
**Materials Needed**

 	•       	**SPRIselect beads** (Beckman Coulter, B23317)

 	•       	**Freshly prepared 80% ethanol (molecular biology grade)**

 	•       	**10 mM Tris-HCl, pH 8.0 or nuclease-free water**

 	•       	**Magnetic stand for bead separation**

 	•       	**Pipettes and tips**

 	•       	**DNA sample (e.g., PCR product, fragmented DNA library)**

 	•       	**0.2 mL or 1.5 mL tubes (depending on sample volume)**  
 

**Protocol Overview**  
   
This protocol consists of a **two-step size selection**:

    	1\.  	**First selection (high cutoff step)** – Removes large fragments (\>500 bp).

    	2\.  	**Second selection (low cutoff step)** – Retains the desired 100-400 bp range while removing fragments \<100 bp.  
   
**Step-by-Step Protocol**  
   
**Step 1: First Bead Selection to Remove Large Fragments (\>500 bp)**

    	1\.  	**Resuspend SPRIselect beads** by vortexing or pipetting thoroughly.

    	2\.  	In a clean PCR or 1.5 mL tube, mix your **DNA sample** with **SPRIselect beads at a 0.7× bead-to-sample ratio**:

         	•	Example: For **50 µL of DNA sample**, add **35 µL of SPRIselect beads**.

    	3\.  	Mix thoroughly by pipetting up and down or vortexing briefly.

    	4\.  	Incubate at **room temperature for 5-10 minutes** to allow binding.

    	5\.  	Place the tube on a **magnetic stand** for **5 minutes**, or until the solution clears.

    	6\.  	**Carefully transfer the supernatant** (which contains fragments \<500 bp) to a new clean tube. **Do not disturb the beads**, as they contain larger fragments bound to them.

    	7\.  	Discard the beads containing the \>500 bp fragments.  
   
**Step 2: Second Bead Selection to Remove Small Fragments (\<100 bp)**

        	8\.   Add **(1.8x – 0.7x) SPRIselect beads** to the collected supernatant:

         	•	Example: If you have **50 µL of supernatant**, add **55 µL of SPRIselect beads**.

        	9\.   Mix thoroughly by pipetting up and down or vortexing briefly.

        	10\.              	Incubate at **room temperature for 5-10 minutes**.

        	11\.              	Place the tube on a **magnetic stand** for **5 minutes**, or until the solution clears.

        	12\.              	**Carefully remove and discard the supernatant**, which contains unwanted fragments \<100 bp.

        	13\.              	Keeping the tube on the magnetic stand, **add 200 µL of freshly prepared 85% ethanol**, avoiding bead resuspension.

        	14\.              	Incubate for **30 seconds**, then carefully remove the ethanol.

        	15\.              	**Repeat Steps 13-14** for a **second ethanol wash**.

        	16\.              	**Air-dry the beads** for **2-3 minutes** (do not over-dry, as it may reduce DNA recovery).

        	17\.              	Remove the tube from the magnetic stand and **resuspend the beads in 20-50 µL of 10 mM Tris-HCl (pH 8.0) or nuclease-free water**.

        	18\.              	Incubate at **room temperature for 5 minutes**.

        	19\.              	Place the tube back on the **magnetic stand** for 1-2 minutes.

        	20\.              	**Transfer the clear eluate** to a new tube—this contains your size-selected DNA (100-400 bp).  
   
**Quality Control**

 	•       	**Assess DNA fragment size distribution** using an **Agilent Bioanalyzer, TapeStation, or gel electrophoresis**.

 	•       	**Measure DNA concentration** using a **Qubit fluorometer or Nanodrop spectrophotometer**.

 	•       	**Confirm fragment size enrichment** before proceeding to downstream applications.  
   
**Expected Results**

 	•       	**Retained DNA fragments:** **100-400 bp**

 	•       	**Removed fragments:** **\>500 bp (high molecular weight contaminants) and \<100 bp (adapter dimers, primer-dimers, or short degradation products)**  
   
**Notes & Optimizations**

 	•       	The **0.7× ratio** increases the likelihood of **excluding larger fragments (\>500 bp)** but may slightly reduce yield.

 	•       	If small fragments persist, increasing the **second bead selection ratio** may help remove more unwanted \<100 bp fragments.

 	•       	Avoid overdrying the beads during ethanol washes to prevent low DNA recovery.

 	•       	Ensure beads are fully resuspended before use for consistency.  
 

**NEBuilder HiFi Assembly – for pHRSin with HCC gene block**

Using the pHRSin bb product (vector) and the gene blocks \[H-CC-gb\]

Both reactions use an insert:vector ratio of 5:1 (since inserts are \~200 bp)

G-CD-gb:

| NEBuilder HiFi DNA Assembly Master Mix | 10 uL |
| :---- | :---- |
| pHRSin bb (vector) – 50 ng | 1.98  uL |
| G-CD-gb – 5.58 ng\* | 0.56 uL |
| NF H2O | 7.46 uL |

\*from freshly prepared 10 ng/uL stocks of the gene blocks

Incubate at 50 degrees for 60 mins.

This reaction was transformed into DH5a cells.

In case the pHRSin bb product does not exist any more or is scant, then use the following amplification program to get more of this:

**Reamplification of pHRSin backbone**

Set up 5 tubes of this reaction:

HRSIN (x6)

| 2X KAPA HiFi | 75 uL |
| :---- | :---- |
| spGFP\_F (10 uM) | 6 uL |
| spGFP\_R (10 uM) | 6 uL |
| pHRSin-NEW3 (10 ng/uL) | 6 uL |
| NF H2O | 58 uL |

Aliquot 25 uL per reaction tube.

| 98°C | 30 s |
| :---- | :---- |
| 98°C | 10 s |
| 70.7°C | 30 s       35X |
| 72°C | 9 min\* |
| 72°C | 10 min |
| 4°C | HOLD |

\*changing extension to 60 s/kb for better yields and more specific product

Clean-Up of SELEX libraries:

Two of the samples had very low quantities remaining \- C0 lig147 & C1 NCAP lig147. Take 1.5 mL of original sample from tube and pass through 2 PCR purification columns and pool the final sample in 100 uL of TE buffer.

Once this is done mix together 20 uL of each cycle for the following samples:

1\. C1-C4 HTS ligN20w100

2\. C1-C4 NCAP ligN20w100

3\. C1-C4 NCAP lig147

4\. C0 lig147 \+ C0 ligN20w100

**11 March 2025**

**Clean-Up of SELEX libraries for AVITI sequencing**

Combine the following samples:

1. 25 uL each of C1-C4 of ligN20w100 HT-SELEX  
2. 25 uL each of C1-C4 of ligN20w100 NCAP-SELEX  
3. 25 uL each of C1-C4 of lig147 NCAP-SELEX  
4. 25 uL each of C0 lig147 and C0 ligN20w100

*SPRIselect Bead-Based Size Selection Protocol for Retaining 100-400 bp Fragments and Removing \>500 bp Fragments*  
*(Modified with a 0.7× ratio for better exclusion of larger fragments)*  
   
This protocol is optimized for **SPRIselect beads** (Beckman Coulter) to selectively retain **100-400 bp DNA fragments**, while removing **fragments \>500 bp**, using a higher bead-to-sample ratio (**0.7× instead of 0.6×**) to improve exclusion of large fragments.  
   
**Materials Needed**

 	•       	**SPRIselect beads** (Beckman Coulter, B23317)

 	•       	**Freshly prepared 80% ethanol (molecular biology grade)**

 	•       	**10 mM Tris-HCl, pH 8.0 or nuclease-free water**

 	•       	**Magnetic stand for bead separation**

 	•       	**Pipettes and tips**

 	•       	**DNA sample (e.g., PCR product, fragmented DNA library)**

 	•       	**0.2 mL or 1.5 mL tubes (depending on sample volume)**  
 

**Protocol Overview**  
   
This protocol consists of a **two-step size selection**:

    	1\.  	**First selection (high cutoff step)** – Removes large fragments (\>500 bp).

    	2\.  	**Second selection (low cutoff step)** – Retains the desired 100-400 bp range while removing fragments \<100 bp.  
   
**Step-by-Step Protocol**  
   
**Step 1: First Bead Selection to Remove Large Fragments (\>500 bp)**

    	1\.  	**Resuspend SPRIselect beads** by vortexing or pipetting thoroughly.

    	2\.  	In a clean PCR or 1.5 mL tube, mix your **DNA sample** with **SPRIselect beads at a 0.7× bead-to-sample ratio**:

         	•	Example: For **50 µL of DNA sample**, add **35 µL of SPRIselect beads**.

    	3\.  	Mix thoroughly by pipetting up and down or vortexing briefly.

    	4\.  	Incubate at **room temperature for 5-10 minutes** to allow binding.

    	5\.  	Place the tube on a **magnetic stand** for **5 minutes**, or until the solution clears.

    	6\.  	**Carefully transfer the supernatant** (which contains fragments \<500 bp) to a new clean tube. **Do not disturb the beads**, as they contain larger fragments bound to them.

    	7\.  	Discard the beads containing the \>500 bp fragments.  
   
**Step 2: Second Bead Selection to Remove Small Fragments (\<100 bp)**

        	8\.   Add **(1.8x – 0.7x) SPRIselect beads** to the collected supernatant:

         	•	Example: If you have **50 µL of supernatant**, add **55 µL of SPRIselect beads**.

        	9\.   Mix thoroughly by pipetting up and down or vortexing briefly.

        	10\.              	Incubate at **room temperature for 5-10 minutes**.

        	11\.              	Place the tube on a **magnetic stand** for **5 minutes**, or until the solution clears.

        	12\.              	**Carefully remove and discard the supernatant**, which contains unwanted fragments \<100 bp.

        	13\.              	Keeping the tube on the magnetic stand, **add 200 µL of freshly prepared 85% ethanol**, avoiding bead resuspension.

        	14\.              	Incubate for **30 seconds**, then carefully remove the ethanol.

        	15\.              	**Repeat Steps 13-14** for a **second ethanol wash**.

        	16\.              	**Air-dry the beads** for **2-3 minutes** (do not over-dry, as it may reduce DNA recovery).

        	17\.              	Remove the tube from the magnetic stand and **resuspend the beads in 20-50 µL of 10 mM Tris-HCl (pH 8.0) or nuclease-free water**.

        	18\.              	Incubate at **room temperature for 5 minutes**.

        	19\.              	Place the tube back on the **magnetic stand** for 1-2 minutes.

        	20\.              	**Transfer the clear eluate** to a new tube—this contains your size-selected DNA (100-400 bp).  
   
**Quality Control**

 	•       	**Assess DNA fragment size distribution** using an **Agilent Bioanalyzer, TapeStation, or gel electrophoresis**.

 	•       	**Measure DNA concentration** using a **Qubit fluorometer or Nanodrop spectrophotometer**.

 	•       	**Confirm fragment size enrichment** before proceeding to downstream applications.  
   
**Expected Results**

 	•       	**Retained DNA fragments:** **100-400 bp**

 	•       	**Removed fragments:** **\>500 bp (high molecular weight contaminants) and \<100 bp (adapter dimers, primer-dimers, or short degradation products)**  
   
**Notes & Optimizations**

 	•       	The **0.7× ratio** increases the likelihood of **excluding larger fragments (\>500 bp)** but may slightly reduce yield.

 	•       	If small fragments persist, increasing the **second bead selection ratio** may help remove more unwanted \<100 bp fragments.

 	•       	Avoid overdrying the beads during ethanol washes to prevent low DNA recovery.

 	•       	Ensure beads are fully resuspended before use for consistency.

**Ligation Trials with Blunt T/A ligase**

Use 400 ng each of the following DNA samples:

- lig147 MAIN  
- lig147 QB  
- lig147 MN  
- lig147 PNK  
- ligN20w100 MAIN  
- ligN20w100 QB  
- ligN20w100 MN  
- ligN20w100 PNK

| Blunt T/A ligase Master Mix (2X) | 5 uL |
| :---- | :---- |
| 400 ng of DNA | Make up to 5 uL |

Incubate all samples for 60 mins at 25 degrees (RT) and then run the ligation reaction (after addition of the stop solution), on a 0.8% agarose gel.

**13 March 2025**

**MYC335VE PCR** 

i. \[MYC335VE\] \- Using the gradient PCR result the 4th tube setting was chosen to set the annealing temperature for this reaction.

Run the PCR products on a 0.8% agarose gel and cut out the specific bands for the gel extraction of the correct product.

Multiple bands of products are seen and the top band closest to 10 kb was selected and cut-out.

**DO NOT PERFORM PURIFICATION AND ASSEMBLY USING THIS MYC335VEC PCR PRODUCT.** THE ISSUE HERE IS THAT THE VECTOR BACKBONE STILL CONTAINS LOXP SITES AND THEREFORE THE LOXP SITES FLANKING THE MYC335 ENHANCER CAN NOT BE TESTED PROPERLY.

I NEED AN ALTERNATIVE DESIGN THAT I CAN CLONE THE MYC355 ENHANCER INTO SO THAT THE RESISTANCE MARKERS ARE NOT RETAINED IN THE CELLS POST INFECTION, AND THE MYC355 FLANKING SITES CAN BE TESTED.

![][image39]  
Create an alternative design here for the vector that contains mCherry, no selection marker, the MYC355 enhancer and the spGFP construct.

**TapeStation quantification for purified SELEX libraries (& Nh100PEBC1)** 

Add 2 uL of diluted samples \+ 2 uL marker

Do the same thing with 2 uL of ladder.

Run all the samples on a High Sensitivity D1000 ScreenTape

**Ligation Trials** 

Checking the results of the ligation trials for ligands, I seemed to get a high molecular weight band especially in the case of DNA treated with QB followed by Blunt T/A ligase. However, lower molecular weight DNA was also seen in this case \- suggesting that more ligase may be required for complete ligation.

This can potentially be achieved by scaling up the volume of the reaction:

Use lig147 MAIN and lig147 QB to set up a reaction with 400 ng in 20 uL and 30 uL of solution.

| Blunt T/A ligase Master Mix (2X) | 10 uL |
| :---- | :---- |
| 400 ng of DNA | Make up to 10 uL |

| Blunt T/A ligase Master Mix (2X) | 15 uL |
| :---- | :---- |
| 400 ng of DNA | Make up to 15 uL |

Incubate at 25 degrees for 60 mins. Add 30 uL of 50 mM EDTA solution to stop the reaction.

Run the ligation products on a gel to check the profile.

**17 March 2025**

**ShhOligo1 PCR**

Oligo 1 was ordered as a ssDNA oligo that needs to be converted into dsDNA by PCR:

![][image40]

Amplification PCR (CAPAMP1):

| Shhgb\_F (10 uM) | 2.25 uL |
| :---- | :---- |
| Shhgb\_R (10 uM) | 2.25 uL |
| 2X KAPA HiFi | 12.5 uL |
| ssDNA (1 uL of 100 uM oligo) | 1 uL |
| NF H2O | 7 uL |

 

| 95 degrees C | 3 min |
| :---- | :---- |
| **98 C** | **20 s** |
| **64 C** | **15 s                                                           6X** |
| **72 C** | **30 s** |
| 72 C | 40 min |
| 4 C | HOLD |

Amplification PCR repeat (CAPAMP2):

| Shhgb\_F (10 uM) | 2.25 uL |
| :---- | :---- |
| Shhgb\_R (10 uM) | 2.25 uL |
| 2X KAPA HiFi | 12.5 uL |
| ShhBColigo1 dsDNA (from 1st PCR reaction) | 2.5 uL |
| NF H2O | 5.5 uL |

 

| 95 degrees C | 3 min |
| :---- | :---- |
| **98 C** | **20 s** |
| **64 C** | **15 s                                                           2X** |
| **72 C** | **30 s** |
| 72 C | 40 min |
| 4 C | HOLD |

**SELEX library quantification:**

Repeat the SELEX library quantification by using a new set of Agilent HSD1000 ScreenTape reagents.

The samples were diluted 5-fold and run on the Agilent TapeStation. Regions between 100-500 bp were marked out and used for quantification. Fragments \> 250 bp were still seen in this region.

Another repeat SPRI clean-up will be needed in this case. 

**Inoculation of pHRS-HCCgb clones**

From the pHRS-HCCgb plate, select 5 colonies and inoculate in 5 mL each of LB-Amp media. Incubate O/N at 37 degrees. These tubes are labeled as:

- pHRS-HCCgb1  
- pHRS-HCCgb2  
- pHRS-HCCgb3  
- pHRS-HCCgb4  
- pHRS-HCCgb5

**18 March 2025**

**Clean-Up of SELEX libraries for AVITI sequencing (repeated clean-up of samples):**

*SPRIselect Bead-Based Size Selection Protocol for Retaining 100-400 bp Fragments and Removing \>500 bp Fragments*  
*(Modified with a 0.75× ratio for better exclusion of larger fragments)*  
   
This protocol is optimized for **SPRIselect beads** (Beckman Coulter) to selectively retain **100-400 bp DNA fragments**, while removing **fragments \>500 bp**, using a higher bead-to-sample ratio (**0.75×**) to improve exclusion of large fragments.  
   
**Materials Needed**

 	•       	**SPRIselect beads** (Beckman Coulter, B23317)

 	•       	**Freshly prepared 80% ethanol (molecular biology grade)**

 	•       	**10 mM Tris-HCl, pH 8.0 or nuclease-free water**

 	•       	**Magnetic stand for bead separation**

 	•       	**Pipettes and tips**

 	•       	**DNA sample (e.g., PCR product, fragmented DNA library)**

 	•       	**0.2 mL or 1.5 mL tubes (depending on sample volume)**  
 

**Protocol Overview**  
   
This protocol consists of a **two-step size selection**:

    	1\.  	**First selection (high cutoff step)** – Removes large fragments (\>500 bp).

    	2\.  	**Second selection (low cutoff step)** – Retains the desired 100-400 bp range while removing fragments \<100 bp.  
   
**Step-by-Step Protocol**  
   
**Step 1: First Bead Selection to Remove Large Fragments (\>500 bp)**

    	1\.  	**Resuspend SPRIselect beads** by vortexing or pipetting thoroughly.

    	2\.  	In a clean PCR or 1.5 mL tube, mix your **DNA sample** with **SPRIselect beads at a 0.75× bead-to-sample ratio**:

         	•	Example: For **50 µL of DNA sample**, add **37.5 µL of SPRIselect beads**.

    	3\.  	Mix thoroughly by pipetting up and down or vortexing briefly.

    	4\.  	Incubate at **room temperature for 5 minutes** to allow binding.

    	5\.  	Place the tube on a **magnetic stand** for **5 minutes**, or until the solution clears.

    	6\.  	**Carefully transfer the supernatant** (which contains fragments \<500 bp) to a new clean tube. **Do not disturb the beads**, as they contain larger fragments bound to them.

    	7\.  	Discard the beads containing the \>500 bp fragments.  
   
**Step 2: Second Bead Selection to Remove Small Fragments (\<100 bp)**

        	8\.   Add **(1.8x – 0.75x) SPRIselect beads** to the collected supernatant:

         	•	Example: If you have **50 µL of supernatant**, add **52.5 µL of SPRIselect beads**.

        	9\.   Mix thoroughly by pipetting up and down or vortexing briefly.

        	10\.              	Incubate at **room temperature for 5 minutes**.

        	11\.              	Place the tube on a **magnetic stand** for **5 minutes**, or until the solution clears.

        	12\.              	**Carefully remove and discard the supernatant**, which contains unwanted fragments \<100 bp.

        	13\.              	Keeping the tube on the magnetic stand, **add 200 µL of freshly prepared 85% ethanol**, avoiding bead resuspension.

        	14\.              	Incubate for **30 seconds**, then carefully remove the ethanol.

        	15\.              	**Repeat Steps 13-14** for a **second ethanol wash**.

        	16\.              	**Air-dry the beads** for **2-3 minutes** (do not over-dry, as it may reduce DNA recovery).

        	17\.              	Remove the tube from the magnetic stand and **resuspend the beads in 20-50 µL of 10 mM Tris-HCl (pH 8.0) or nuclease-free water**.

        	18\.              	Incubate at **room temperature for 5 minutes**.

        	19\.              	Place the tube back on the **magnetic stand** for 1-2 minutes.

        	20\.              	**Transfer the clear eluate** to a new tube—this contains your size-selected DNA (100-400 bp).  
   
**Quality Control**

 	•       	**Assess DNA fragment size distribution** using an **Agilent Bioanalyzer, TapeStation, or gel electrophoresis**.

  	•       	**Confirm fragment size enrichment** before proceeding to downstream applications.

**pHRS-HCCgb clones**

The 5 clones for pHRS-HCCgb were isolated as plasmids and quantified:

HCCgb1

HCCgb2

HCCgb3

HCCgb4

HCCgb5

These plasmids also were digested with MluI-HF to check for successful insertion of the gene block.

| COMPONENTS |  50 µl REACTION  | FINAL CONC. OR AMOUNT  |
| ----- | ----- | ----- |
| DNA | 500 ng |   |
| 10X NEBuffer\*\* | 2.5 µl | 1X  |
| Restriction Enzyme | 1 µl |   |
| Nuclease-free Water | to 25 µl | Varies\* |

Incubate at 37 degrees, 30 mins. I should see a single band of 9517 bp for successful clones.

**19 March 2025**

**TapeStation profiling for new purified SELEX libraries:**

Incubate the TapeStation ladder and marker as well as a ScreenTape at RT for \~ 30 mins, and then run following samples for quality/quantity check:

1. N20w100HTS (S1)  
2. N20w100NCAP (S2)  
3. lig147NCAP (S3)  
4. cycle0-N20+147 (S4)

**pHRS-HCCgb clones:**

Digestion of HCCgb clones 1-5 revealed a single band corresponding to the expected size:

![][image41]

Hence, send clone 1 which has the cleanest band for whole plasmid sequencing with Source Bioscience.

**ShhBColigo1 dsDNA product confirmation:**

Run 5 uL of the PCR1 product for ShhBColigo1 dsDNA on a 2% agarose gel with a 100-bp ladder and confirm the size of the product.

While purifying the previous PCR2 product for this reaction, alkaline lysis buffer was added to the column bound by DNA instead of the PE wash buffer. This will lead to denaturation of the linear PCR product and therefore the yield was very low.

Once PCR1 product is confirmed (expected product size is 181 bp), set up the following PCR reaction again:

Amplification PCR repeat (CAPAMP2):

| Shhgb\_F (10 uM) | 2.25 uL |
| :---- | :---- |
| Shhgb\_R (10 uM) | 2.25 uL |
| 2X KAPA HiFi | 12.5 uL |
| ShhBColigo1 dsDNA (from 1st PCR reaction) | 2.5 uL |
| NF H2O | 5.5 uL |

 

| 95 degrees C | 3 min |
| :---- | :---- |
| **98 C** | **20 s** |
| **64 C** | **15 s                                                           2X** |
| **72 C** | **30 s** |
| 72 C | 40 min |
| 4 C | HOLD |

**Confirmation & clean-up for linear PCR product of pHRS-Gcla-AT10 libraries (PE-BC1):**

To check for the complexity of the cloned pool of enhancer oligos i.e. pHRS-Gcla-AT10, PE PCR was performed earlier to prepare a PCR whitelist library. 

The idea is to use Sanger sequencing of the PCR product with Source Bioscience, while using Mixed-Base identification to check for the library complexity. Run 5-10 uL of this PCR pool on the previous 2% agarose gel and check for whether there is a single band of the expected size (\~427 bp). If there are too many non-specific fragments, then the fragment of interest needs to be cut-out and purified and sent along with a forward primer for Sanger sequencing of this product.

**20 March 2025**

**Cycle 0 library purification and profiling**

From the bioanalyser results, the cycle 0 libraries had aberrant profiles and were too low in concentration. The original PCR pools (1.25 mL each of lig147 and ligN20w100) to be pooled and PCR purified to elute in 50 uL each of TE buffer using MinElute columns. Then further size select this with 0.75X \+ 1.05X of SPRIselect beads purification.

**Test ligation and purification of pHRS-Gcla library ligation product:**

1. Set up the reaction on ice (see table).

| Component | Volume | Amount |
| ----- | ----- | ----- |
| pHRS | 3.9 μl | 0.067 pmoles |
| oligopool | 0.5 μl | 0.133 pmoles |
| Deionized H2O | 5.6 μl | \--- |
| NEBuilder HiFi DNA Assembly Master Mix | 10.0 μl | \--- |
| Total | 20.0 μl | 0.200 pmoles |

 

2. Incubate samples in a thermocycler at 50°C for 60 minutes. Following incubation, pool samples and pass through a column to purify ligated DNA and other fragments (elute in about 50-100 uL of TE buffer). Check concentration and some of the product on a 0.8% gel to check for product sizes.

**21 March 2025**

**Gel extraction for MluI digested plasmid backbones:**

| Gcla (M) |  |
| :---- | :---- |
| Hcla (M) |  |
| GCD (M) |  |
| HCD (M) |  |
| GCC (M) |  |
| HCC (M) |  |
| Nh (M) |  |

**Run PCR for different Gcla oligos to estimate diversity using the primers containing distinct barcodes:**

The product sizes for this PCR should be 262 bp. The F primer starts at the unique barcode for the enhancer oligo and the product then ends at the common Gcla pool R primer.  
Per reaction:

| 2X Phusion Mix  | 10 uL |
| :---- | :---- |
| FP 10 uM | 1 uL |
| RP 10 uM | 1 uL |
| pHRS-Gcla-libv1 (10 ng) | 1 uL |
| NF H2O | 7 uL |

Prepare a master-mix with the following:

| 2X Phusion Mix  | 110 uL |
| :---- | :---- |
| pHRS-Gcla-libv1 (10 ng) | 11 uL |
| Gcla-RP (10 uM) | 11 uL |
| NF H2O | 77 uL |

Distribute 19 uL per tube for 10 tubes.  
Add 1 uL of the unique 10 uM F primer to each tube. Run the following program:

| 98°C | 30 s |
| :---- | :---- |
| **98°C** | **10 s** |
| **59°C** | **30 s       30X** |
| **72°C** | **30 s** |
| 72°C | 10 min |
| 4°C | HOLD |

**![][image42]**

Based on the gel run, 8 out of 10 samples from the Gcla oligo pool show amplification of a specific band corresponding to the expected size (262 bp). And in the last couple of lanes close to the 100 bp ladder, the Shholigo1PCR2 library shows a bit of a smear but a band of the expected size as well. 

Lastly the Cycle0 SELEX library was also run on the agarose gel and this showed two distinct bands that would represent the expected fragments corresponding to the lig147 and ligN20w100 libraries. No obvious smearing is seen in this sample, suggesting that some noise or single-stranded DNA is being picked up in the TapeStation runs.

**TapeStation run for newly purified Cycle 0 library:**

Run the Cycle 0 \- 147 \+ N20 sample on the TapeStation for quantification and profiling. Sample has been run on the TapeStation without dilution.

**24 March 2025**

**TapeStation run \- re-quantify regions between 200-1000 bp:**

In the previous TapeStation runs, re-adjust the regions to 200-1000 bp on the TapeStation software and then note the final concentration of the libraries according to this (in nM).

**Ligation and purification of ligated products for pHRS libraries:**

Use 5:1 insert to vector ratios for the assembly since the insert fragments are quite small in this case.

1\. pHRS-Gcla (2X)

| pHRS-Gcla (M) | 2.19 uL |
| :---- | :---- |
| GclaAT10-PCR | 10 ng |
| 2X NEB HiFi Assembly Mix | 10 uL |
| NF H2O | Make up volume to 20 uL |

2\. pHRS-Hcla (2X)

| pHRS-Hcla (M) | 1.28 uL |
| :---- | :---- |
| GclaAT10-PCR | 10 ng |
| 2X NEB HiFi Assembly Mix | 10 uL |
| NF H2O | Make up volume to 20 uL |

3\. pHRS-GCD (2X) 

| pHRS-Hcla (M) | 7.69 uL |
| :---- | :---- |
| GclaAT10-PCR | 10 ng |
| 2X NEB HiFi Assembly Mix | 10 uL |
| NF H2O | Make up volume to 20 uL |

4\. pHRS-HCD (2X) 

| pHRS-Hcla (M) | 4.03 uL |
| :---- | :---- |
| GclaAT10-PCR | 10 ng |
| 2X NEB HiFi Assembly Mix | 10 uL |
| NF H2O | Make up volume to 20 uL |

5\. pHRS-GCC (2X) 

| pHRS-Hcla (M) | 4.81 uL |
| :---- | :---- |
| GclaAT10-PCR | 10 ng |
| 2X NEB HiFi Assembly Mix | 10 uL |
| NF H2O | Make up volume to 20 uL |

6\. pHRS-HCC (2X) 

| pHRS-Hcla (M) | 1.52 uL |
| :---- | :---- |
| GclaAT10-PCR | 10 ng |
| 2X NEB HiFi Assembly Mix | 10 uL |
| NF H2O | Make up volume to 20 uL |

After setting up the reactions, incubate at 50 degrees, 60 mins. Pool each type of reaction and PCR purify the same. Then run a 0.8 % agarose gel (load depending on the concentration of the purified sample), and estimate the accurate sizes of the bands or major product on the gel. Expected product size for clean ligation product is **9817 bp**.

*NOTE: While running this gel make sure to also run an equivalent amount of the digested vector to distinguish between the sizes of the digested and ligated vectors.*

**Ligation and transformation of ligated products for pHRS-ShhBC libraries:**

Again use a 5:1 insert to vector ratio for performing this assembly.

1\. pHRS-Gcla (3X)

| pHRS-Gcla (M) | 2.19 uL |
| :---- | :---- |
| ShhBColigo1PCR2 | 10 ng |
| 2X NEB HiFi Assembly Mix | 10 uL |
| NF H2O | Make up volume to 20 uL |

2\. pHRS-Hcla (3X)

| pHRS-Hcla (M) | 1.28 uL |
| :---- | :---- |
| ShhBColigo1PCR2 | 10 ng |
| 2X NEB HiFi Assembly Mix | 10 uL |
| NF H2O | Make up volume to 20 uL |

As a test run we just do the reaction for pHRS-Gcla and pHRS-Hcla \- 3X reactions each. Pool the reactions and then purify using a PCR column into 20-25 uL final volume in NF H2O. Check the concentration and size profiles of the product on an agarose gel.

Based on the gel runs for the ligation products, I do see a clean band corresponding to the expected high molecular weight. This band also seems to have a slight upward shift compared to the MluI digested vector control.

**Prepare HepG2, GP5d and HAP1 cell culture medium:**

HepG2 media (500 mL)

| DMEM high glucose | Make up to 500 mL |
| :---- | :---- |
| HI FBS (10%) | 50 mL |
| L-Glutamine | 5 mL |
| Sodium Pyruvate | 5 mL |

GP5d media (500 mL)

| DMEM high glucose | Make up to 500 mL |
| :---- | :---- |
| HI FBS (10%) | 50 mL |
| L-Glutamine | 5 mL |

HAP1 media (500 mL)

| IMDM | Make up to 500 mL |
| :---- | :---- |
| HI FBS (10%) | 50 mL |

**25 March 2025**

**Transformation of ligated ShhBC vectors into LB-Amp plates**

1. For pHRS-Gcla-ShhBC and pHRS-Hcla-ShhBC we have \~10 uL of product remaining. Transform 2.5 uL of product per 50 uL of competent cells. Therefore, use 8 tubes of C2987H chemically competent cells for this process (5 each).  
2. Add 950 uL SOC media after heat shock and recovery and allow the tubes to grow at 37 degrees for at least 1 hour. Pool all the liquid culture.  
3. Take 1:100 of the total culture to plate onto a 10 cm LB-Amp plate. Make 2 dilution plates in total for each.   
4. First dilution \=  10 uL culture \+ 990 uL LB. Plate 100 uL from this dilution.  
5. Second dilution \= 10 uL from first dilution \+ 990 uL LB. Plate 100 uL from this dilution.

   Colony Yield/Total Colonies \= (count X 100 X 100)/0.1 \[calculation for two dilutions\]

   

**Electroporation Trial for pHRS-Gcla-AT10 library**

1. Thaw Lucigen recovery media (at least two bottles).  
2. 2.5 uL of ligation mix to be added to every 50 uL of electrocompetent cells. Mix briefly by tapping and then add 20 uL of mix to pre-chilled cuvettes.  
3. Electroporation: Ec1, 0.1 cm cuvette, 1.8 kV, 1 pulse \[Bio-Rad Micropulser\]  
4. Immediately add 950 uL of SOC or Lucigen recovery media. Use SOC media for TransforMax cells and Lucigen media for Endura cells.  
5. Do not mix after adding recovery media and immediately transfer to a larger falcon tube or several Eppendorf tubes. Once all transformations are done, culture the media at 37 degrees for 1.5 hours, 225 rpm.  
6. Dilute 1:100 to prepare first, second and third dilutions and plate 100 uL from each dilution on a single bioassay plate split into 4 quadrants. Use 100 uL of the original culture on the first quadrant.  
7. Store remaining liquid culture at 4 degrees or incubate overnight in about 1-2 L of culture \- 37 degrees, 220 rpm.

**26 March 2025**

**PCR for pHRS-MYC335 vector assembly**

PCR purify the product and run on a gel to check the size of the product. Perform additional gel extraction or additional PCRs if needed. (4635 bp)

**SELEX libraries \- discuss sequencing with AVITI**

The current TapeStation quantified values for the library as follows:

| Sample Name | TapeStation Concentration (nM) |
| :---: | :---: |
| ligN20w100 HTS | 41.8 |
| ligN20w100 NCAP | 7.27 |
| lig147 NCAP | 5.1 |
| Cyc0 | 1.8 |

![][image43]

![][image44]  
**Assembly of MYC335 pHRSin vector**

IDT gene blocks \- pHRSnoloxgb1, pHRSnoloxgb2 contained 1000 ng of lyophilised dsDNA each.

- Tubes were briefly spun down.  
- 40 uL TE buffer was added to each tube to achieve a final concentration of 25 ng/uL.  
- The tubes were vortexed briefly.  
- Tubes incubated at 50°C for 20 minutes for resuspension.  
- Concentration was verified by using the NanoDrop.

After purifying the new MYC335vec PCR product, set up the following assembly reaction:

| Component | Volume | Amount |
| ----- | ----- | ----- |
| MYCvec | 3.8 μl | 0.027 pmoles |
| gb1 | 3.1 μl | 0.053 pmoles |
| gb2 | 3.1 μl | 0.053 pmoles |
| NEBuilder HiFi DNA Assembly Master Mix | 10.0 μl | \--- |
| Total | 20.0 μl | 0.133 pmoles |

Incubate samples in a thermocycler at 50°C for 60 minutes. Following incubation, store samples on ice or at –20°C for subsequent transformation.

Transform 2 uL of the reaction into NEB DH5a cells and then plate 100 uL on an LB-AMP plate.

**Repeat ligation and transformation of pHRS-GCC-ShhBC**

1. Set up the reaction on ice (see table).

| Component | Volume | Amount |
| ----- | ----- | ----- |
| GCCShh | 7.8 μl | 0.033 pmoles |
| ShhBC | 0.4 μl | 0.167 pmoles |
| Deionized H2O | 1.8 μl | \--- |
| NEBuilder HiFi DNA Assembly Master Mix | 10.0 μl | \--- |
| Total | 20.0 μl | 0.200 pmoles |

 Incubate samples in a thermocycler at 50°C for 60 minutes. Following incubation, store samples on ice or at –20°C for subsequent transformation.

Electroporate by adding \~6.5 uL of the reaction mix into per 100 uL of Transformax cells (3 tubes needed). Split 20 uL per chilled cuvette and provide one pulse and add 950 uL of recovery media immediately. Pool all the bacteria and recovery media and plate on a large Bioassay plate in original, 1:100. Incubate O/N at 37 degrees.

NOTE: During electroporation, most of the tubes yield a TC \< 4 ms which suggests that pores of the cells have opened too briefly \- either due to very high cell density or too much DNA loaded onto each cuvette.

While these cells will be grown and plated, it is quite likely that this experiment may have failed. If checking the plates tomorrow does not reveal any significant colonies then set up 3X ligation reaction, purify the product by a column purification and then use the purified DNA for electroporation.


**27 March 2025**

**Re-assembly for pHRS-Gcla with ShhBC oligos:**

1\. pHRS-Gcla (3X)

| GclaShhvec (50 ng) | 4.18 uL |
| :---- | :---- |
| ShhBColigo1PCR2 (5 ng)\* | 1 uL |
| 2X NEB HiFi Assembly Mix | 10 uL |
| NF H2O | 4.82 uL |

\*dilute to a 5 ng/uL stock and then use 1 uL of this for each reaction

Pool 3 reactions and PCR column purify with MinElute. Measure concentration.

To the NEB high-efficiency competent cells add 5 ng maximum of ligated DNA to 50 uL of competent cells. Use at least 10 such tubes for the transformation. Pool all the transformed cells with recovery media in a single tube.

Plate 100 uL original on a section of a bioassay plate and a 1:100 dilution on another section of the plate. Scale up the rest of the culture to 1.5 L culture.

**Scale-up culture for pHRS-Gcla-AT10:**

Scale up this liquid culture to 1.5 L culture using LB-AMP media. Incubate both flasks of culture O/N at 37 degrees.

**Assembly of MYC335 pHRSin vector**

Set up the reaction on ice (see table).

| Component | Volume | Amount |
| ----- | ----- | ----- |
| MYCvec | 4.6 μl | 0.040 pmoles |
| gb1 | 2.2 μl | 0.080 pmoles |
| gb2 | 2.6 μl | 0.080 pmoles |
| Deionized H2O | 0.7 μl | \--- |
| NEBuilder HiFi DNA Assembly Master Mix | 10.0 μl | \--- |
| Total | 20.0 μl | 0.200 pmoles  |

    

Incubate for 60 minutes and then transform into a single tube of competent cells.

**1st April 2025**

**Scale-Up SELEX for QuantumSI trial**

50 mM HEPES pH 8, 150 mM NaCl

1-5 uM in 300 uL buffer

For MAX protein (\~18.28 kDa) this corresponds to 4.4 ug of protein in 120 uL of buffer.

![][image45]

![][image46]

![][image47]

![][image48]

Prepare the buffers required for this reaction again:

10X Promega Buffer for 1X SELEX buffer

| Reagents | Final 10x: |
| :---- | :---- |
| Tris pH 7.5 | 200mM |
| KCl | 750 mM |
| MgCl2 | 10mM |
| Glycerol | 40% |
| MQ water | \- |

For 250 mL buffer

| Tris pH 7.5 (1M) | 50 mL |
| :---- | :---- |
| KCl | 13.98 g |
| MgCl2 (1M) | 2.5 mL |
| Glycerol | 100 mL |
| MQ water | Make up to 250 mL |

10X Promega Buffer for 1.55X SELEX buffer

| Reagents | Final 10x: |
| :---- | :---- |
| Tris pH 7.5 | 200mM |
| KCl | 770 mM |
| MgCl2 | 10mM |
| Glycerol | 40% |
| MQ water | \- |

For 250 mL buffer

| Tris pH 7.5 (1M) | 50 mL |
| :---- | :---- |
| KCl | 14.35 g |
| MgCl2 (1M) | 2.5 mL |
| Glycerol | 100 mL |
| MQ water | Make up to 250 mL |

**Whole Plasmid Sequencing for pHRS-MYC355 clones**

pHRS-MYC355-2 and pHRS-MYC355-3 have been sent to Source Bioscience for whole plasmid sequencing.

For reconfirmation, perform MluI digest for all 5 plasmids with exactly 500 ng of plasmid and 0.5 uL enzyme per reaction in 25 uL volume (for 30 mins), and then run on an agarose gel for confirmation.

**Complete Endofree Plasmid isolation for pHRS-Gcla-ShhBC and pHRS-Gcla-AT10-Ep1**

After isolation of these plasmids, resuspend pellets in 1.5 mL of TE buffer and also confirm by MluI digestion and gel run. As a control run a gel for a pHRS-NEW3 plasmid without any insert.

pHRS-Gcla-ShhBC:

pHRS-Gcla-AT10:

**Conversion of Hia5testlig to dsDNA and quantification**

Amplification PCR: (CAPAMP1) 2X

| NCAP\_F (10 uM) | 2.25 uL |
| :---- | :---- |
| NCAP\_R (10 uM) | 2.25 uL |
| 2X KAPA HiFi HS | 12.5 uL |
| Hia5testlig 100 uM | 2 uL |
| NF water | 6 uL |

![][image49]

Using this PCR product, set up the second PCR:

Amplification PCR: (CAPAMP2) 6X

| NCAP\_F (10 uM) | 2.25 uL |
| :---- | :---- |
| NCAP\_R (10 uM) | 2.25 uL |
| 2X KAPA HiFi HS | 12.5 uL |
| CAPAMP1 product | 2.5 uL |
| NF water | 5.5 uL |

Products were pooled and column purified, quantified and then run on a 2% agarose gel to confirm the size.

**Dilution of SELEX libraries to standard concentration for sequencing:**

All quantification on the TapeStation HS D5000 between 100-1000 bp fragments

1. ligN20w100 HT-SELEX: 90.24 nM  
2. ligN20w100 NCAP-SELEX: 75.5 nM  
3. lig147 NCAP-SELEX: 104 nM  
4. Cyc0 (new): 639 nM

Dilute all samples to exactly 50 nM:

1. ligN20w100 HT-SELEX \= 13.85 uL \+ 11.15 uL NF H2O  
2. ligN20w100 NCAP-SELEX \= 16.56 uL \+ 8.44 uL NF H2O  
3. lig147 NCAP-SELEX \= 12.02 uL \+ 12.98 uL NF H2O  
4. Cyc0 (new) \= 1.96 uL \+ 23.04 uL NF H2O

**2 April 2025** 

**Characterisation of digested pHRS-Gcla libraries:**

Use 500 ng of each library for digestion with MluI at 37 degrees, 30 mins (with a pHRS-Gcla digestion control).

Tested samples include:

- pHRS-Gcla-AT10-Ep1  
- pHRS-Gcla-ShhBC

The expectation here is that the pHRS-Gcla-ShhBC plasmid library digest should give a similar profile as the control pHRS-Gcla digest. With the pHRS-Gcla-AT10-Ep1 library digest, the MluI site is disrupted and unless there are any sites within the inserted enhancer library, there should be no digestion and multiple bands or bands of larger sizes due to the intact plasmid might be seen on the gel. 

Also run the digestion products of pHRS-MYC335 on a 1% agarose gel for testing.

**Characterisation of Hia5testlig:**

Run some of the purified PCR product on a 2% agarose gel to check for the size and purity.

**pHRS-MYC335 assembly:**

Incorrect assembly was performed the last time around and the MYC335gb was not included.

Set up this assembly again at 50 degrees, 60 minutes and then transform and plate on to a fresh bacterial plate.

MYCvec \- 50 ng/uL

All other gene blocks at a concentration of 25 ng/uL.

| Component | Volume | Amount |
| ----- | ----- | ----- |
| MYCvec | 3.7 μl | 0.065 pmoles |
| noloxgb1 | 1.8 μl | 0.065 pmoles |
| noloxgb1 | 2.1 μl | 0.065 pmoles |
| MYC335gb | 2.5 μl | 0.065 pmoles |
| NEBuilder HiFi DNA Assembly Master Mix | 10.0 μl | \--- |
| Total | 20.0 μl | 0.260 pmoles |

2 uL of product was transferred to 50 uL of competent cells and then cultured at 37 degrees for 45 mins post heat-shock. 

**3 April 2025**

**Characterization of complexity of pHRS-Gcla-ShhBC and pHRS-Gcla-AT10-Ep1 libraries**

For pHRS-Gcla-ShhBC, perform amplification with ShhBC\_complexity primers:  
4X

| 2X Phusion Mix  | 40 uL |
| :---- | :---- |
| ShhBC\_complexF 10 uM | 4 uL |
| ShhBC\_complexR 10 uM | 4 uL |
| pHRS-Gcla-ShhBC (10 ng) | 4 uL |
| NF H2O | 25.6 uL |
| DMSO | 2.4 uL |

| 98°C | 30 s |
| :---- | :---- |
| **98°C** | **10 s** |
| **58°C** | **30 s       35X** |
| **72°C** | **30 s** |
| 72°C | 10 min |
| 4°C | HOLD |

Expected product size is 700 bp

For pHRS-Gcla-AT10-Ep1, perform amplification with enh\_complexity primers:  
4X

| 2X Phusion Mix  | 40 uL |
| :---- | :---- |
| enh\_complexF 10 uM | 4 uL |
| enh\_complexR 10 uM | 4 uL |
| pHRS-Gcla-AT10-Ep1 (10 ng) | 4 uL |
| NF H2O | 25.6 uL |
| DMSO | 2.4 uL |

| 98°C | 30 s |
| :---- | :---- |
| **98°C** | **10 s** |
| **62°C** | **30 s       35X** |
| **72°C** | **30 s** |
| 72°C | 10 min |
| 4°C | HOLD |

Expected product size is 528 bp.

Pool the products for each type and purify and run on a 2% agarose gel to check the product size.

These products are to be sent for Sanger sequencing for Source Bioscience.

**Pick colonies from new pHRS-MYC355 plate:**

Pick 5 colonies from the new pHRS-MYC355 plate and culture each in 5 mL of LB-AMP media O/N. 

**Tianyun’s experience with optimising the viral packaging and transduction efficiency**

Most optimal condition summarised:

1. Transfection performed for packaging vectors and transfer vector into LentiX cell lines in mass ratio of 1.67:1:6.02  
2. Viralboost reagent added to culture \~8 hours post-transfection  
3. Virus packaged as normal (no concentration performed) → *More volume obtained in this case but evidently less concentrated, therefore I can package in lesser plates for a trial. For larger scale experiments i.e. multi-plate perhaps might be worth using the concentrator*  
4. Transduction performed with Polybrene (we can use TransDux to further enhance efficiency of transduction here)

**7 April 2025**

**Updates from the weekend:**

1. **enh\_complexity\_PCR was set up separately for pHRS-Gcla-AT10, pHRS-Hcla-AT10, pHRS-GCD-AT10, pHRS-HCD-AT10, pHRS-GCC-AT10, pHRS-Nh100 (all these are library v1 obtained from chemical transformation)**  
2. **5 plasmids each were isolated for pHRS-Gcla-AT10-Ep1 and pHRS-Gcla-ShhBC libraries**

**Buffer Preparation for SELEX**

Zinc sulphate monohydrate stock \- Dissolve 0.9 g of powder in 45 mL of water. Make the volume up to 50 mL to make a stable stock solution.

*1.55X SELEX buffer*

*1.55x Promega Buffer, 155μM EGTA, 1.55mM DTT, 3μM ZnSO4 (no dIdC)*

250 mL

| Promega Buffer 1.55 (10X) | 38.75 mL |
| :---- | :---- |
| EGTA (0.5 M) | 77.5 uL |
| DTT (1 M) |  |
| ZnSO4 (100 uM) | 7.5 mL |

Make up the volume to 250 mL and filter the solution. Store at 4 degrees.

*1X SELEX buffer*

*1x Promega Buffer, 100μM EGTA, 1mM DTT, 3μM ZnSO4 (no dIdC)*

250 mL

| Promega Buffer 1 (10X) | 25 mL |
| :---- | :---- |
| EGTA (0.5 M) | 50 uL |
| DTT (1 M) |  |
| ZnSO4 (100 uM) | 7.5 mL |

Make up the volume to 250 mL and filter the solution. Store at 4 degrees.

Prepare the wash buffer without the DTT:

| Wash Buffer |  |  |  |
| ----- | :---- | :---- | :---- |
| Reagents | STOCK | Final 1x: | 5 L |
| Tris pH 7.5 | 1M | 5mM | 25 mL |
| EDTA | 0.5M | 5mM | 50 mL |
| MQ water |   | \- | 4925 mL |

5 mL of the buffer to be removed and substituted with 5 mL DTT subsequently.

**Purification of enh\_complexity\_PCR products** 

Check all products on a 2% agarose gel after PCR purification on MinElute columns.

enh\_complex.\_Gcla

enh\_complex.\_Hcla

enh\_complex.\_GCD

enh\_complex.\_HCD

enh\_complex.\_GCC

enh\_complex.\_Nh100

**8 April 2025**

**Whole plasmid sequencing for pHRS-MYC355 clones**

Based on the gel image the clone 4 seems to be of the correct size and must be sequenced for full confirmation.

![][image50]

This plasmid has been sent for whole plasmid sequencing.

The sequence result was checked and it was seen that the MYC335gb was not annealed into the final vector.

**Checking clonal diversity for pHRS-Gcla-ShhBC and pHRS-Gcla-AT10Ep1**

To check for the barcode and sequence diversity within these libraries, the following plasmids were sent for whole plasmid sequencing:

- pHRS-Gcla-ShhBC\_1  
- pHRS-Gcla-ShhBC\_2  
- pHRS-Gcla-ShhBC\_3  
- pHRS-Gcla-AT10Ep1\_1  
- pHRS-Gcla-AT10Ep1\_2  
- pHRS-Gcla-AT10Ep1\_3

![][image51]

![][image52]

Two different enhancers and barcodes seen in 2 out of 3 sequenced plasmids from the AT10Ep1 pool.

Similarly 2 out of 3 plasmids sequenced for the pHRS-Gcla-ShhBC pool has unique Shh barcodes:

![][image53]

![][image54]

**Enhancer complexity check in chemically transformed enhancer pools**

Multiple bands were seen in the PCR products from various pools. In Gcla, Hcla, GCD, HCD and GCC pools the expected size of the PCR product is **770 bp** (this would likely be the top band in most of the lanes seen below). For the Nh100 pool, the expected fragment size is **628 bp**.

![][image55]

To send the pure fragment for Sanger sequencing, run the total purified PCR products on a 1% agarose gel and then cut out for gel extraction. Ideally minimum required concentration per sample is around 10 ng/uL.

**MAX ligand preparation for QuantumSI trial experiment**

![][image56]

Amplification PCR: (CAPAMP1) 2X

| NCAP\_F (10 uM) | 2.25 uL |
| :---- | :---- |
| NCAP\_R (10 uM) | 2.25 uL |
| 2X KAPA HiFi HS | 12.5 uL |
| MAXlig 100 uM | 2 uL |
| NF water | 6 uL |

![][image49]

Using this PCR product, set up the second PCR:

Amplification PCR: (CAPAMP2) 6X

| NCAP\_F (10 uM) | 2.25 uL |
| :---- | :---- |
| NCAP\_R (10 uM) | 2.25 uL |
| 2X KAPA HiFi HS | 12.5 uL |
| CAPAMP1 product | 2.5 uL |
| NF water | 5.5 uL |

Products were pooled and column purified, quantified and then run on a 2% agarose gel to confirm the size.

**9 April 2025**

**Assembly & PCR for pHRS-nolox gb1 and gb2**

pHRS-nolox-gb1 \= 34 nM solution

pHRS-nolox-gb2 \= 29 nM solution

Annealing reaction:

1. Mix equal volumes of the equimolar oligonucleotides in a PCR tube (Add 1.47 uL of gb1 and 1.72 uL of gb2 for obtaining 50 nmoles of each gene block). Add 4 uL of Phusion 5X HF buffer and make up the total volume to 20 uL.  
2. Use the following thermal profile:  
   1. Heat to 95 °C and maintain the temperature for 2 min.  
   2. Cool to 25 °C over 45 min. (Cool at the rate of 5 degrees in 3 mins → 1.6 degrees/min → 0.02 degrees/sec)  
   3. Cool to 4 °C for temporary storage.  
3. Centrifuge the PCR tube briefly to draw all moisture away from the lid.

To complete the annealing reaction, the following components were added:

| Phusion 5X HF buffer  | 1 uL |
| :---- | :---- |
| 10 mM dNTPs | 2.5 uL |
| Phusion Pol | 1.5 uL |

Extension PCR 🡪 72°C for 60 minutes.

**Amplification of annealed pHRSnolox gene block:**

5X

| pHRSnolox\_F (10 uM) | 5 uL |
| :---- | :---- |
| pHRSnolox\_R (10 uM) | 5 uL |
| 2X Phusion Mix | 50 uL |
| Annealed GB | 10 uL |
| DMSO | 3 uL |
| NF H2O | 27 uL |

GBPCR

| 95°C | 3 min |
| :---- | :---- |
| 98°C | 20 s |
| **69°C\*** | **15 s       20X** |
| 72°C | 30 s |
| 72°C | 40 min |
| 4°C | HOLD |

\*pHRSnolox\_F has a Tm\=57°C and pHRSnolox\_R has a Tm\=59°C; Ta accordingly set to 57°C.

The concentration for the gene blocks to be measured post column purification.

Check the PCR product on an agarose gel along with some of the purified biotinylated MAXligand. 

If this product is clean, anneal this product with the MYC355gb.

**Whole plasmid sequencing for additional clones of pHRS-Gcla-AT10Ep1 and pHRS-Gcla-ShhBC:**

Two additional clones of both plasmid library types were sent out for whole plasmid sequencing:

- pHRS-Gcla-AT10Ep1\_4  
- pHRS-Gcla-AT10Ep1\_5  
- pHRS-Gcla-ShhBC\_4  
- pHRS-Gcla-ShhBC\_5

**Enhancer oligo libraries from chemical transformation \- complexity estimation:**

The following PCR inserts were sent for Sanger sequencing:

- enh\_complex\_Gcla  
- enh\_complex\_Hcla  
- enh\_complex\_GCD  
- enh\_complex\_HCD  
- enh\_complex\_GCC  
- enh\_complex\_Nh100

**14 April 2025**

**Amplification of annealed pHRSnolox gene block:**

PCR column purify these tubes and then run a gel to check the size of the dominant product. The expected size of this PCR product is **2375 bp.**

Run a 1% agarose gel to check for the size here.

**Size check for MAXlig PCR product:**

Run the purified PCR product for MAXlig on the same gel as above \- post PCR the product size here should be **91 bp**.

**Ligand pool large-scale preparation for Hia5testlig and MAXlig for SELEX trials:**

Once the size of MAXlig is confirmed to be accurate and the ligand quality is confirmed to be clean, perform the large scale amplification of the same to produce a lot more of the ligand.

For MAXlig:

Using this PCR product, set up the second PCR:

Amplification PCR: (CAPAMP2) 8X

| bioNCAP\_F (10 uM) | 18 uL |
| :---- | :---- |
| bioNCAP\_R (10 uM) | 18 uL |
| 2X KAPA HiFi HS | 100 uL |
| MAXlig CAPAMP1 product | 20 uL |
| NF water | 44 uL |

Split 25 uL per tube and use the following PCR conditions:

| 95 degrees C | 3 min |
| :---- | :---- |
| **98 C** | **20 s** |
| **64 C** | **15 s                                                           2X** |
| **72 C** | **30 s** |
| 72 C | 40 min |
| 4 C | HOLD |

Similarly for Hia5testlig:

Amplification PCR: (CAPAMP2) 8X

| NCAP\_F (10 uM) | 18 uL |
| :---- | :---- |
| NCAP\_R (10 uM) | 18 uL |
| 2X KAPA HiFi HS | 100 uL |
| Hia5testlig CAPAMP1 product | 20 uL |
| NF water | 44 uL |

Split 25 uL per tube and use the following PCR conditions:

| 95 degrees C | 3 min |
| :---- | :---- |
| **98 C** | **20 s** |
| **64 C** | **15 s                                                           2X** |
| **72 C** | **30 s** |
| 72 C | 40 min |
| 4 C | HOLD |

**Transformation of libv1-CC libraries into LB-AMP plates:**

The libv1-CC libraries have the following concentrations:

Gcla \- 608.8 ng/uL  
Hcla \- 581.7 ng/uL  
GCD \- 902 ng/uL  
HCD \- 570.6 ng/uL  
GCC \- 1059.7 ng/uL  
Nh100 \- 573.8 ng/uL

Dilute all 6 libraries to stocks of 50 ng/uL (10 uL each):

Gcla \- 0.82 uL \+ 9.18 uL H2O  
Hcla \- 0.86 uL \+ 9.14 uL H2O  
GCD \- 0.55 uL \+ 9.45 uL H2O  
HCD \- 0.88 uL \+ 9.12 uL H2O  
GCC \- 0.47 uL \+ 9.53 uL H2O  
Nh100 \- 0.87 uL \+ 9.13 uL H2O

Further dilute these stocks to 0.1 ng/uL (100 uL each):

0.2 uL \+ 98.8 uL H2O

Take 1 uL of these final diluted stocks and add to 50 uL of competent cells for transformation.

**Annealing and PCR for pHRSnoloxGB and MYC335GB:**

pHRS-nolox-gb \= 115.3 ng/uL \= 47.75 nM

MYC335-gb \= 73.6 ng/uL \= 73.5  nM solution

Annealing reaction:

4. Mix equal volumes of the equimolar oligonucleotides (100 nM each) in a PCR tube (Add 2.09 uL of  pHRS-nolox-gb and 1.36 uL of MYC335-gb). Add 4 uL of Phusion 5X HF buffer and make up the total volume to 20 uL.  
5. Use the following thermal profile:  
   1. Heat to 95 °C and maintain the temperature for 2 min.  
   2. Cool to 25 °C over 45 min. (Cool at the rate of 5 degrees in 3 mins → 1.6 degrees/min → 0.02 degrees/sec)  
   3. Cool to 4 °C for temporary storage.  
6. Centrifuge the PCR tube briefly to draw all moisture away from the lid.

To complete the annealing reaction, the following components were added:

| Phusion 5X HF buffer  | 1 uL |
| :---- | :---- |
| 10 mM dNTPs | 2.5 uL |
| Phusion Pol | 1.5 uL |

Extension PCR 🡪 72°C for 60 minutes.

**Amplification of annealed pHRSnolox gene block:**

5X

| pHRSnolox\_F (10 uM) | 5 uL |
| :---- | :---- |
| MYC335gb\_correct\_R (10 uM) | 5 uL |
| 2X Phusion Mix | 50 uL |
| Annealed GB | 10 uL |
| DMSO | 3 uL |
| NF H2O | 27 uL |

GBPCR

| 95°C | 3 min |
| :---- | :---- |
| 98°C | 20 s |
| **66°C\*** | **15 s       20X** |
| 72°C | 2 min |
| 72°C | 40 min |
| 4°C | HOLD |

\*pHRSnolox\_F has a Tm\=57°C and MYC335gb\_correct\_R has a Tm\=69°C; Ta accordingly set to 57°C. Total expected product size is **3918 bp**.

The concentration for the gene blocks to be measured post column purification.

Check the PCR product on an agarose gel along with some of the purified biotinylated MAXligand. 

If this product is clean, anneal this product with the MYC355gb.

**15 April 2025**

**pHRSnolox \+ MYC355 gene block purification:**

The PCR product from this PCR reaction is to be purified via a MinElute column and then run on a 1% agarose gel to check the exact size of the product \- expected size is 3918 bp

If the product is clean and of expected size, then will need to run the total product on the gel and gel extract the sample for greater purity.

Quantify the final PCR product after purifications and size/quality estimation.

**Ligand stock preparation**

Both the Hia5testlig and MAXligand PCR products to be column purified and eluted in 25 uL each with two MinElute columns each.

Combine with the previous amplified stock of these ligands and re-quantify. 

Tube SELEX assay for QuantumSI trial

- According to the proposed scale-up, 4.4 ug of protein was to be used i.e. 4400 ng of protein. In the original HT-SELEX that was performed by me, the ratio of DNA to protein (in amount not molar concentration\!) was 1:1. Therefore, by this logic 4400 ng of DNA is to be used. This DNA will be in 37.5 uL volume according to the scale-up  
    
- Desired concentration of DNA \= 117.3 ng/uL (once I have this pool this can be stored and further used for the scale-up assay)

**Design for Hia5testlig SELEX \+ Hia5 treatment experiments:**

Group 1: Hia5testlig DNA (150 ng)

Group 2: MAX protein (150 ng) \+ Hia5testlig DNA (150 ng) (eluted DNA after cycle 2 \- elution to be performed with Imidazole buffers so that protein-DNA binding is still intact)\*

Group 3: MAX protein (150 ng) \+ ELF2 protein (150 ng) \+ Hia5testlig DNA (150 ng) (eluted DNA after cycle 2 \- elution to be performed with Imidazole buffers so that protein-DNA binding is still intact)\*

Group 4: Hia5testlig DNA (150 ng) \+ Hia5 (methylation of A’s)

Group 5: Hia5testlig DNA (150 ng) \+ Hia5 (methylation of A’s) \+ DpnI treatment

Group 6: MAX protein (150 ng) \+ Hia5testlig DNA (150 ng) \+ Hia5 \+ treated with DpnI (eluted DNA after cycle 2 \- elution to be performed with Imidazole buffers so that protein-DNA binding is still intact)\*

Group 7: MAX protein (150 ng) \+ ELF2 protein (150 ng) \+ Hia5testlig DNA (150 ng) \+ Hia5 \+ treated with DpnI (eluted DNA after cycle 2 \- elution to be performed with Imidazole buffers so that protein-DNA binding is still intact)\*

Quoting from Siwei’s lab report:

*“psfHia5 was put into a 20 μL reaction containing 500 ng DNA, 0.8 mM SAM (S-adenosylmethionine)*  
*and buffer A (15 mM Tris, 1mM EDTA, 0.5 mM EGTA, 15 mM NaCl, 60 mM KCl, 0.5 mM Spermidine, pH 8.0), and incubated at 37C for 1 h and 80C for 10 min on a thermal cycler, then add 1 μL DpnI and 2 μL rCutSmart 10x buffer, incubate again at 37C for 1 h and 80C for 10 min.”*

*“1 μL psfHia5 can completely methylate all the adenine in 500 ng DNA fragments (containing about 50% AT) even after diluted 16 folds, suggesting an activity of at least 8 U/μL.”*

To transfer the mix of DNA+proteins post-SELEX into Hia5 reaction buffer, options to be explored are:

- Buffer exchange into Hia5 reaction buffer enabling proteins to remain bound to DNA  
- Carry out reaction within the same DNA+protein mix buffer by complementing with spermidine and SAM at desired concentrations  
- Precipitate DNA \+ protein mix and then resuspend in Hia5 reaction buffer to carry out the desired reaction

**Picking colonies for further validation of libv1CC enhancer libraries:**

Pick 3 colonies each for all the plates:

- Gcla  
- Hcla  
- GCD  
- HCD  
- GCC  
- Nh100

Culture these overnight for plasmid isolation on the next day.

 ![][image57]

**17 April 2025**

**Whole plasmid sequencing for libv1CC clones:**

Based on the SalI digestion gel results,

**21 April 2025**

**Quick Blunting treatment of lig147 DNA**

1\. Mix the following components in a sterile microfuge tube:

|  | AMOUNT |
| :---- | :---- |
| Purified DNA (up to 5 μg) | 1–19 μl |
| 10X Blunting Buffer | 2.5 μl |
| 1 mM dNTP Mix | 2.5 μl |
| Blunt Enzyme Mix | 1.0 μl |
| Sterile water | variable |
| Total volume | 25 μl |

2\. Reactions containing restriction enzyme digested DNA are incubated at room temperature for 15 minutes. **Reactions with sheared/nebulized DNA or PCR products are incubated at room temperature for 30 minutes.**

3\. Immediately inactivate enzyme in the blunting reaction by heating at 70°C for 10 minutes.

4\. Proceed directly to the ligation step using the Quick Ligation Kit (NEB [\#M2200](https://www.neb.com/en-gb/products/m2200-quick-ligation-kit)) or standard T4 DNA Ligase (NEB [\#M0202](https://www.neb.com/en-gb/products/m0202-t4-dna-ligase)). Blunt ligation reactions using standard T4 DNA Ligase should be incubated overnight at 16°C.

Purify this DNA and then set up treatment with Blunt TA ligase. 

Transfer master mix to ice prior to reaction setup. Mix tube by flicking before use. 

Combine 5´-phosphorylated dsDNA ligation substrates in water with an equal volume  of Blunt/TA Master Mix. 

Mix thoroughly, by pipetting up and down 7-10 times or by flicking. 

Incubate at room temperature (25°C) for 15 minutes. Then, place the tube on ice  (incubation times can be extended up to 1 hour if yields are still low after 15 minutes).\* \* Incubation overnight may give improved ligation yields; however, DNA intended for transformation applications should never be incubated longer than 1 hour in the ligation mixture. For overnight incubations and/or prolonged DNA storage, the ligation products should be purified using and appropriate method (e.g., spin column, AMPure® Beads, gel purification) before storage at –20°C. 

Stop the reaction by adding 10 µl of stop solution (50 mM EDTA). Do not heat inactivate. 

**T4 PNK treatment of lig147**

1\. Set-up the following reaction in a microcentrifuge tube on ice:

| DNA | up to 300 pmol of 5´ termini (Up to 14 ug of DNA) |
| :---- | :---- |
| T4 PNK Reaction Buffer (10X) | 5 µl |
| ATP (10 mM) | 5 µl |
| [T4 PNK](https://www.neb.com/en-gb/products/m0201-t4-polynucleotide-kinase) | 1 µl (10 units) |
| Nuclease-free Water | up to 50 µl |

2\. Incubate at 37°C for 20 minutes.

3\. Heat inactivate by incubating at 75°C for 10 minutes.

Notes:

* ATP is not supplied  
* 1X T4 DNA Ligase Buffer contains 1 mM ATP and can be substituted in non-radioactive phosphorylations (T4 Polynucleotide Kinase exhibits 100% activity in this buffer).

Purify this DNA and then set up treatment with Blunt TA ligase. 

Transfer master mix to ice prior to reaction setup. Mix tube by flicking before use. 

Combine 5´-phosphorylated dsDNA ligation substrates in water with an equal volume  of Blunt/TA Master Mix. 

Mix thoroughly, by pipetting up and down 7-10 times or by flicking. 

Incubate at room temperature (25°C) for 15 minutes. Then, place the tube on ice  (incubation times can be extended up to 1 hour if yields are still low after 15 minutes).\* \* Incubation overnight may give improved ligation yields; however, DNA intended for transformation applications should never be incubated longer than 1 hour in the ligation mixture. For overnight incubations and/or prolonged DNA storage, the ligation products should be purified using and appropriate method (e.g., spin column, AMPure® Beads, gel purification) before storage at –20°C. 

Stop the reaction by adding 10 µl of stop solution (50 mM EDTA). Do not heat inactivate. 

**22 April 2025**

**Repeated ligation and sonication trials for SELEX ligands**

3 ligation trials were set up as follows:

1) lig147  
2) lig147-QB  
3) lig147-PNK

Each reaction was 20 uL in volume. 10 uL of 50 mM EDTA stop solution was added to each tube.

Let the reaction tubes sit at RT for a few mins. Then use spin column purification to purify out the ligated DNA.

Run these products on a 0.5% agarose gel to resolve the DNA. Run at 110 V for 1 hour (minimum).

After running gel and quantification use most optimal sample to run the g-Tube for optimised shearing:

DNA should be resuspended in TE buffer with a total volume of 150 uL.

Check the centrifuge being used and set the spin time and speed according to the specified conditions in the g-Tube manual. 

For a fragment size of 20 kb and for total mass of DNA \< 4 ug, we have to use 4200 RPM, 60 sec. Repeat the spin by inverting the g-Tube. Collect the sheared DNA from the inverted g-Tube cap. 

**Repeat ligation with optimised treatment**

Set up the Blunt TA ligase treatment again for multiple tubes:

3X

| DNA (PNK-treated) | 500 ng |
| :---: | :---: |
| Blunt TA ligase mix | 10 uL |
| NF H2O | Make up volume to 20 uL |

Incubate all tubes at 25 degrees O/N. The last ligation trial was performed for around 16 hours O/N.

**PNK-treated ligand preparation**

1\. Set-up the following reaction in a microcentrifuge tube on ice:

**2X**

| DNA | up to 300 pmol of 5´ termini (Use 2 ug of DNA per reaction) |
| :---- | :---- |
| T4 PNK Reaction Buffer (10X) | 5 µl |
| ATP (10 mM) | 5 µl |
| [T4 PNK](https://www.neb.com/en-gb/products/m0201-t4-polynucleotide-kinase) | 1 µl (10 units) |
| Nuclease-free Water | up to 50 µl |

2\. Incubate at 37°C for 20 minutes.  
3\. Heat inactivate by incubating at 75°C for 10 minutes.

Notes:

* ATP is not supplied  
* 1X T4 DNA Ligase Buffer contains 1 mM ATP and can be substituted in non-radioactive phosphorylations (T4 Polynucleotide Kinase exhibits 100% activity in this buffer).

Purify this DNA and then set up treatment with Blunt TA ligase.

 

**24 April 2025**

**Bradford Assay for Proteins**

**Note:** Concentration of the BSA standard solution should be measured photometrically. A 1 mg/ml solution of BSA should have an A280 of 0.66.

1. Prepare a standard curve by pipetting together carefully the solution volumes listed in the table *“Standard curve samples for Bradford protein assay”* corresponding to 0, 0.05, 0.1, 0.2, 0.3, 0.4, and 0.5 mg/ml BSA. The end volume of all samples should be 200 µl.  
2. Dilute an aliquot of the dye reagent concentrate 1:5 with distilled water. Pipet 20 µl of each BSA dilution into a plastic cuvette, add 1 ml diluted dye reagent, mix well, and incubate for 5 min at room temperature.  
   Note: Stored in the dark, diluted dye reagent is stable for 2 weeks. Write the date of preparation on the bottle and cover with aluminum foil.  
3. Measure the OD at 595 nm for each sample, and plot the standard curve.  
4. Prepare a second standard curve by pipetting together carefully the solution volumes listed in the table Standard curve samples for Bradford protein assay corresponding to 0, 0.2, 0.4, 0.6, 0.8, and 1.0 mg/ml BSA. The end volume of all samples should be 200 µl.  
5. Dilute an aliquot of the dye reagent concentrate 1:5 with distilled water. Pipet 20 µl of each BSA dilution into a plastic cuvette, add 1 ml diluted dye reagent, mix well, and incubate for 5 min at room temperature.  
6. Measure the OD at 595 nm for each sample, and plot the standard curve.  
7. Prepare dilutions of the protein sample of interest and test 20 µl aliquots in duplicate as above. It is important that the protein samples to be tested are handled in exactly the same manner as the samples used in generating the standard curves. Calculate the protein concentration of the test samples by comparing the OD595 with the standard curve(s), taking into account dilution factors (see figure *Standard curve generated using the Bradford method*).

Standard microplate protocol Working range \= 100-1500 µg/mL 1\. Pipette 5 µL of each standard or unknown sample into the appropriate microplate wells (e.g., Thermo Scientific™ Pierce™ 96-Well Plates, Cat. No. 15041). 2\. Add 250 µL of the Bradford reagent to each well, then mix with plate shaker for 30 seconds. 3\. Remove the plate from the shaker. 4\. Incubate the plate for 10 minutes at RT. 5\. Measure the absorbance at or near 595 nm with a plate reader. 6\. Subtract the average 595 nm measurement for the blank replicates from the 595 nm measurements of all other individual standard and unknown sample replicates. Pierce™ Bradford Protein Assay Kit User Guide 37\. Prepare a standard curve by plotting the average blank-corrected 595 nm measurement for each BSA standard vs. its concentration in µg/mL. Use the standard curve to determine the protein concentration of each unknown sample. Note: If using curve-fitting algorithms associated with a microplate reader, a four-parameter (quadratic) or best-fit curve will provide more accurate results than a purely linear fit. If plotting results by hand, a point-to-point curve is preferable to a linear fit to the standard points.

**25 April 2025**

**Genomic DNA ScreenTape estimation of ligated SELEX ligands and gDNA-tube sheared ligated products**

For shearing spin 300 ng total of sample in 150 uL TE buffer at 4200 rpm, 60 s. Then reverse the gTube and spin again at the same speed and collect the sample.

To test the sample size, mix 1 uL of ladder \+ 10 uL sample buffer as well as 1 uL sample \+ 10 uL sample buffer

**28 April 2025**

**Scale-Up SELEX for QuantumSI trial**

50 mM HEPES pH 8, 150 mM NaCl

1-5 uM in 300 uL buffer

For MAX protein (\~19.08 kDa) this corresponds to 14 ug of protein in 350 uL of buffer.

| Component | Volume (µL) | \[KCl\] (mM) |
| ----- | ----- | ----- |
| **Protein \+ 2nd solution mix** | 300 | 117.6 |
|  • Protein (Buffer A) | 120 | 150 (stock) |
|  • 2nd solution (Buffer B) | 180 | 119.35 (stock) |
| **DNA (no salt)** | 150 | 0 |
| → **Intermediate mix** | 450 | 78.4 |
| **Buffer C** | 315 | 75 |
| → **Final reaction** | 765 | **77** |

1. For MAX protein the concentration determined was **0.462 ug/uL.** Hence:  
   For 12 ug protein \= 25.9 \= 26 uL of protein solution

   Top this up to 100 uL in TF dilution buffer: 

![][image58]

*1xTris (5mL 1M pH8) \+ 0.1% BSA (0.5g) \+ 150mM KCl (5.57g) \+ 10µM Zn (500µL 10mM) \+ 50% EG*

2. The next step is to bring the salt concentration to 117.7 mM salt using 1.55X SELEX buffer. 

![][image59]  
Hence 406 uL of 1.55X SELEX buffer is added.

3. Now I want to add 14 ug of DNA in the mix (in no salt buffer) to achieve a salt concentration of 78 mM.![][image60]

NOTE: During incubation of DNA-protein, nutate gently at RT for the period of 30 minutes.

4. Finally I want to now bring down the salt concentration by adding the entire mix to 77 mM salt by transferring the mix to HIS beads contained in 1X SELEX buffer, which is derived from the following buffer:

| Reagents | Final 10x: |
| :---- | :---- |
| Tris pH 7.5 | 200mM |
| KCl | 750 mM |
| MgCl2 | 10mM |
| Glycerol | 40% |
| MQ water | \- |

   
*1X SELEX buffer*  
*1x Promega Buffer, 100μM EGTA, 1mM DTT, 3μM ZnSO4 (no dIdC)![][image61]*

Beads Preparation: 1.82 uL beads/well is used in regular SELEX i.e. for 100 ng of protein

If we scale this accordingly, for 14000 ng of protein \= 255 uL beads

4 mL beads are washed and dissolved in 55 mL of buffer for 1.82 uL beads in 25 uL buffer.   
So for washing and rinsing beads use, 3.5 mL of blocking buffer (salt-free). Separate out this buffer on a magnet and add 332.3 uL of 1X SELEX buffer from before and then add this to the final mix of protein-DNA. 

After addition of the beads, sample has to be shaken at RT, 1400 RPM for one hour.   
Spin tube at 1200 rpm, 1min after shaking.

## **Materials & Reagents**

1. **Ni²⁺ Beads**

   * \~1 mL slurry containing His-tagged protein–DNA complexes in beads.

2. **Buffers**

   * **Ni Wash Buffer**

     * 10 mM Tris-HCl pH 7.8

     * 100 mM KCl

     * 10 mM imidazole

     * 0.1% Tween-20

     * 1 mM DTT (fresh)

     * 3 µM ZnSO₄

   * **Ni Elution Buffer**

     * 10 mM Tris-HCl pH 7.8

     * 100 mM KCl

     * **250 mM imidazole**

     * 0.1% Tween-20

     * 1 mM DTT

     * 3 µM ZnSO₄

   * **Streptavidin Binding Buffer**

     * 10 mM Tris-HCl pH 7.8

     * 100 mM KCl

     * 1 mM MgCl₂

     * 0.1% Tween-20

3. **Amicon Ultra® centrifugal concentrator**

   * 0.5 mL or 4 mL, 10 kDa MWCO (choose appropriate capacity)

4. **Magnetic rack** (for bead separation)

5. **Low-binding microcentrifuge tubes**

---

## **Procedure**

### **A. Ni²⁺ Bead Elution**

1. **Pellet Beads (×1)**

   * Place the 1 mL bead slurry on the magnetic rack.

   * Wait until the supernatant is clear (\~1 min).

   * Carefully remove and discard the supernatant.

2. **Wash Beads (×3)**  
    For each wash:

   * Resuspend beads in **1 mL Ni Wash Buffer** by gentle pipetting or inversion.

   * Incubate 2 min at room temperature with end-over-end mixing or gentle vortex.

   * Pellet on magnet, discard supernatant.

3. **First Elution**

   * Resuspend beads in **100 µL Ni Elution Buffer**.

   * Incubate **5 min** at room temperature, with gentle mixing.

   * Pellet beads, transfer supernatant (Eluate \#1) to a fresh low-binding tube.

4. **Second Elution** (to maximize yield)

   * Add **100 µL Ni Elution Buffer** to the beads.

   * Incubate **3 min**, mix gently.

   * Pellet beads, collect supernatant (Eluate \#2) and **pool** with Eluate \#1.

5. **Optional Clarification**

   * Spin the pooled eluate at 10,000 ×g for 1 min to remove any particulate.

   * Transfer the clear supernatant to a fresh tube.

---

**Reagents & Equipment**

* Your **200 µL** Ni-eluted sample (0.1% Tween, 10 mM Tris pH 7.8, 1 mM MgCl₂, 250 mM imidazole)

* **Sample/Binding Buffer** (10 mM Tris pH 7.8, 100 mM KCl, 1 mM MgCl₂, 0.1% Tween-20)

* **Amicon Ultra 0.5 mL, 3 kDa MWCO**

* Microcentrifuge (up to 14,000×g)

* Low-binding tubes

---

### **1\. Pre-Rinse Filter**

1. Add **500 µL** nuclease-free water to the filter (upper chamber).

2. Centrifuge **10 min @ 14,000×g**.

3. Discard the filtrate (flow-through).

---

### **2\. Adjust Sample to 350 µL**

1. Transfer your **200 µL** sample into a fresh low-binding tube.

2. Add **150 µL** Streptavidin Binding Buffer → **total \= 350 µL**.

---

### **3\. First Diafiltration**

1. Load the **350 µL** diluted sample into the filter unit.

2. Centrifuge **10 min @ 14,000×g**.

3. Discard the filtrate (contains imidazole, Tween, etc.).

---

### **4\. Wash Step**

1. Add **350 µL** fresh Streptavidin Binding Buffer to the filter unit.

2. Centrifuge **10 min @ 14,000×g**.

3. Discard the filtrate.

> *If you suspect residual imidazole, repeat this wash (step 4\) once more with another 350 µL.*

---

### **5\. Recover Buffer-Exchanged Sample**

1. Move the filter to a **new collection tube** (provided).

2. Invert the unit and spin **5 min @ 1,000×g**.

3. Discard the filter—your retentate (\~350 µL) is now in the tube.

---

## **Outcome**

* **Final Volume:** \~350 µL

* **Buffer:** Streptavidin Binding Buffer (10 mM Tris pH 7.8, 100 mM KCl, 1 mM MgCl₂, 0.1% Tween-20)

* **Sample:** Fully buffer-exchanged protein–DNA complexes, ready for streptavidin pulldown.

---

### **Notes & Tips**

* **Volume Control:** Because you load and wash with exactly 350 µL each time, and recover by inversion, your final volume closely matches the 350 µL you want.

* **Extra Washes:** A second wash (step 4\) ensures complete removal of imidazole.

* **Recovery:** Rinse your original sample tube with a small (10–20 µL) volume of binding buffer, load and spin once more to maximize yield.

* **Temperature:** Keep everything at 4 °C if your complexes are heat-sensitive.

Tentative binding capacity of streptavidin magnetic beads \= 0.3 ug biotinylated molecules/uL. Assuming we have 14 ug of biotinylated DNA molecules in the mix, 47 uL of these beads will be required. To prepare these beads, we use 1 mL blocking buffer (salt-free). Nutate for about 15-20 minutes for blocking and then store the beads in this buffer. Remove the buffer on a magnetic rack just before incubation.  

## **Materials & Reagents**

1. **Streptavidin magnetic beads** (e.g. 50 µL bead slurry per reaction)

2. **Streptavidin Binding Buffer**

   * 10 mM Tris-HCl pH 7.8

   * 100 mM KCl

   * 1 mM MgCl₂

   * 0.1% Tween-20

3. **Elution Buffer** (for native elution)

   * Streptavidin Binding Buffer \+ **2 mM free biotin**

4. **Sample Buffer (final)**

   * 50 mM HEPES pH 8.0

   * 150 mM NaCl

5. **Amicon Ultra-4 mL, 10 kDa MWCO** centrifugal filter

6. Magnetic rack, low-binding tubes, centrifuge

---

## **A. Bead Equilibration (→ Streptavidin Binding Buffer)**

1. **Aliquot beads**

   * Transfer **50 µL** streptavidin bead slurry into a 1.5 mL low-binding tube.

2. **Magnetize & discard storage buffer**

   * Place on magnet, wait 1 min, remove supernatant.

3. **Wash ×2**

   * Add **1 mL** Binding Buffer, resuspend gently (pipette or invert).

   * Magnetize, discard supernatant.

---

## **B. Binding of Complexes**

4. **Combine beads & sample**

   * Add **350 µL** of your protein–DNA sample to the equilibrated beads.

5. **Incubate**

   * Gently rotate or end-over-end mix for **30 min at 4 °C**.

---

## **C. Washes (Remove Unbound Protein & DNA)**

6. **Magnetize & discard unbound**

   * Place on magnet, remove supernatant.

7. **Wash ×3**

   * For each wash:

     * Add **1 mL** Binding Buffer, resuspend beads gently.

     * Magnetize, discard supernatant.

---

## **D. Native Elution of Biotinylated Complexes**

8. **Elution \#1**

   * Resuspend beads in **500 µL** Elution Buffer (2 mM biotin).

   * Incubate **15 min at room temperature**, gentle mixing.

9. **Collect Eluate \#1**

   * Magnetize, transfer supernatant to a fresh tube.

10. **Elution \#2**

    * Add **300 µL** Elution Buffer, incubate **5 min**, mix gently.

11. **Collect Eluate \#2 & pool**

    * Magnetize, transfer supernatant into the same tube as Eluate \#1.

    * **Total pooled eluate:** \~800 µL.

---

## **E. Buffer Exchange into Sample Buffer (50 mM HEPES, 150 mM NaCl)**

1. **Pre-rinse filter unit**

   * Add **4 mL** Sample Buffer to the Amicon Ultra-4 mL device; spin **3,000 ×g, 5 min**.

   * Discard filtrate.

2. **Load pooled eluate**

   * Transfer the \~800 µL pooled eluate into the filter.

3. **Concentrate to \~350 µL**

   * Spin at **3,000 ×g**, monitor retentate, stop when \~350 µL remains.

4. **(Optional) Diafiltration**

   * If you need to remove residual biotin or small molecules, add Sample Buffer to 4 mL, spin back to 350 µL (repeat once).

5. **Recover final sample**

   * Invert the device into a clean tube; spin **1,000 ×g for 2 min**.

   * **Final volume:** \~350 µL in Sample Buffer.

---

## **F. Downstream Usage**

* **Protein quantification:** e.g. BCA or Bradford assay on the 350 µL.

* **DNA quantification:** e.g. Qubit or Nanodrop, or qPCR.

* **Denaturing gel:**

  * Take an aliquot (e.g. 20 µL), add SDS–PAGE loading buffer, heat, and run.

---

**Key Points & Tips**

* **Biotin elution** at 2 mM is rapid and gentle; complexes remain intact.

* **Stringent washes** (100 mM KCl) minimize background.

* **10 kDa MWCO** retains protein–DNA complexes while removing free biotin and salts.

* **Keep samples cold** to preserve complexes.

**MAX ligand preparation for QuantumSI trial experiment**

![][image56]

Amplification PCR: (CAPAMP1) 2X

| NCAP\_F bio (10 uM) | 2.25 uL |
| :---- | :---- |
| NCAP\_R bio (10 uM) | 2.25 uL |
| 2X KAPA HiFi HS | 12.5 uL |
| MAXlig 100 uM | 2 uL |
| NF water | 6 uL |

![][image49]

Using this PCR product, set up the second PCR:

Amplification PCR: (CAPAMP2) 6X

| NCAP\_F (10 uM) | 2.25 uL |
| :---- | :---- |
| NCAP\_R (10 uM) | 2.25 uL |
| 2X KAPA HiFi HS | 12.5 uL |
| CAPAMP1 product | 2.5 uL |
| NF water | 5.5 uL |

Products were pooled and column purified, quantified and then run on a 2% agarose gel to confirm the size.

Blocking Buffer (salt-free):

*Blocking buff (salt free): 25mM Tris, 0.5% BSA, 0.1% tween, 0.02% NaN3 pH8 \[500 mL buffer\]*

25 mM Tris pH 8 \= 12.5 mL  
0.5 % BSA \= 2.5 g BSA  
0.1 % Tween20 \= 500 uL  
0.02% NaN3 \= 0.1 g

**30 April 2025**

**SELEX Elution Buffer**

Elu buff:  0.1% Tween, 10 mM Tris pH7.8, 1 mM MgCl2 (0.5mM in PCR rxn)

50 mL buffer:

50 uL Tween20  
0.5 mL Tris pH 8  
50 uL 1M MgCl2

Use 200 uL of this elution buffer to resuspend the Ni beads and then heat at 80 degrees for 10 mins.

**Streptavidin Binding of Biotinylated DNA**

Use 350 uL of sample and combine with 600 uL of Strep Binding Buffer. Use 150 uL Streptavidin Beads for this purpose.

**Bradford Assay based measurements of Protein concentration during QSI-SELEX**

Pipette 5 µL of each standard or unknown sample into the appropriate microplate wells (e.g., Thermo Scientific™ Pierce™ 96-Well Plates, Cat. No. 15041). 2\. Add 250 µL of the Bradford reagent to each well, then mix with plate shaker for 30 seconds.

| Blank \- Water |  |
| :---- | :---- |
| Blank \- Incubation Buffer Mix (170 uL TFdil \+ 217.6 uL 1.55X \+ 197 uL water \+ 293 uL 1X ) |  |
| Nibead \- FT |  |
| Ni wash buffer \- Blank |  |
| Nibead \- W1 |  |
| Nibead \- W2 |  |
| Nibead \- W3 |  |
| 200 uL Nielute buffer \+ 150 strepbind buffer |  |
| Amicon1 \- filtrate |  |
| Stredbind buffer \- Blank |  |
| Amicon1 \- w1 |  |
| **Strep \- FT (this was discarded by mistake)** |  |
| Strep \- W1 |  |
| Strep \- W2 |  |
| Strep \- W3 |  |
| 200 uL StrepElute \+ 150 uL QSI \- Blank |  |
| Amicon2 \- filtrate |  |
| QSI \- Blank |  |
| Amicon2 \- w1 |  |
| Final sample |  |
| SELEX elution buffer \- Blank |  |
| Nibead-boiled |  |
| Strepbead-boiled |  |
