**1 May 2025**

Upon measuring Nanodrop concentrations for the samples in the table above \- it was seen that the maximum concentration (and in fact all the DNA) in the sample was found in the FT sample after separation from the Ni beads. \[This large scale SELEX assay did not work\]

Switch to 96 well format for the assay.

Single-SELEX experiment \= 4 uL protein \+ 6 uL 1.55 X SELEX buffer \+ 5 uL DNA  
25 uL Ni beads \= remove buffer and add 20 uL 1X SELEX buffer

Scale up to 500 ng of DNA and 500 ng of protein per well of a 96-well plate i.e. 5 times the volume per well.

Per well:

20 uL protein \+ 30 uL 1.55X SELEX buffer \+ 25 uL DNA

910 uL of Ni beads dissolved in a total 12.5 mL blocking buffer. Separate beads on magnetic rack and resuspend beads in 10 mL of 1X SELEX buffer. Aliquot 100 uL of the beads to each well.

Total 50 ug protein \= 109 uL protein to a 25 ng/uL stock in TF dilution buffer \= 109 uL protein in total 2000 uL (add 1891 uL TF dilution buffer \= diluted \~18-fold)

DNA solution \= 50 ug DNA at 20 ng/uL \= 50 ug in 2500 uL of TE buffer

After incubation of Ni beads with DNA-protein mix, pool mix from all wells. Split into 16 low DNA binding tubes (1050 uL per tube). Wash samples with Ni wash buffer.

Prepare the following buffers for Ni washing and elution:

| Buffer | 20 mM Na+ Phosphate pH 7.4 | NaCl | Imidazole | Additives |
| ----- | ----- | ----- | ----- | ----- |
| **First Wash** | 20 mM | **77 mM** | **10 mM** | 0.1% Tween-20, 1 mM MgCl₂, 1 mM DTT |
| **Second Wash** | 20 mM | **77 mM** | **30 mM** | 0.1% Tween-20, 1 mM MgCl₂, 1 mM DTT |
| **Elution** | 20 mM | **77 mM** | **250 mM** | 0.1% Tween-20, 1 mM MgCl₂, 1 mM DTT |

For each wash add 1 mL buffer per tube and incubate at 2 mins, RT.

For elution, add 15 uL of Ni elution buffer per tube and shake tubes at 1400 rpm, 25 mins for 5 mins. Perform a second elution with 10 uL of Ni elution buffer.

Total eluate \= 400 uL

**Whole Plasmid Sequencing for pHRS clones**

![][image1]  
Based on SalI digestion results for clones, send for sequencing:

Hclav1cc-1  
Hclav1cc-2  
Hclav1cc-3  
Nh100v1cc-1  
Nh100v1cc-2  
Nh100v1cc-3  
Nh100v1cc-4

![][image2]

HCDv1cc-1  
HCDv1cc-2  
HCDv1cc-3  
HCDv1cc-4

MYC335-1  
MYC335-2 (?)

**Large-Scale PCR for MAXligand**

The MAXligand works out to be about 2.95 ug/uL of ssDNA in the stock tube.

If I use 10 nM of ssDNA in 25 uL of PCR reactions, then this would be \~8 ng of DNA per reaction.

Dilute 1 uL of the oligo to 50 uL total using TE buffer (\~60 ng/uL). Then set up 30X reactions.

Amplification PCR: (CAPAMP1) 30X

| NCAP\_F bio (10 uM) | 60 uL |
| :---- | :---- |
| NCAP\_R bio (10 uM) | 60 uL |
| 2X KAPA HiFi HS | 375 uL |
| MAXlig (diluted 1:50) | 30 uL |
| NF water | 225 uL |

| 95 C | 3 min |
| :---- | :---- |
| **98 C** | **20 s** |
| **55 C** | **15 s               25X** |
| **72 C** | **30 s** |
| 72 C | 40 min |
| 4 C | HOLD |

Purification of these PCR products yielded 67.5 ng/uL (in 400 uL) of DNA (MAXlig PCR). 5 uL of this has been run on a 2% agarose gel.

Check the band and then based on whether the band is clear, set up 45X reactions

**Data Processing for new AVITI SELEX data**

ligN20NCAP (Order of samples)

- PE0 (N20NCAPc4) 1-384  
- PE1 (N20NCAPc1) 385-768  
- PE2 (N20NCAPc2) 769-1152  
- PE3 (N20NCAPc3) 1153-1536

./selex.sh has been run for adapter trimming and read-merging, as well as conversion to .fa files

**Large-Scale PCR for MAXligand**

Amplification PCR: (CAPAMP1) 45X

| NCAP\_F bio (10 uM) | 90 uL |
| :---- | :---- |
| NCAP\_R bio (10 uM) | 90 uL |
| 2X KAPA HiFi HS | 562.5 uL |
| MAXlig (diluted 1:50) | 45 uL |
| NF water | 337.5 uL |

| 95 C | 3 min |
| :---- | :---- |
| **98 C** | **20 s** |
| **55 C** | **15 s               25X** |
| **72 C** | **30 s** |
| 72 C | 40 min |
| 4 C | HOLD |

**2 May 2025**

**Buffer Preparation for QSI-SELEX Trial II**

| Buffer | 20 mM Na+ Phosphate pH 7.4 | NaCl | Imidazole | Additives |
| ----- | ----- | ----- | ----- | ----- |
| **First Wash** | 20 mM | **77 mM** | **10 mM** | 0.1% Tween-20, 1 mM MgCl₂, 1 mM DTT |
| **Second Wash** | 20 mM | **77 mM** | **30 mM** | 0.1% Tween-20, 1 mM MgCl₂, 1 mM DTT |
| **Elution** | 20 mM | **77 mM** | **300 mM** | 0.1% Tween-20, 1 mM MgCl₂, 1 mM DTT |

First Wash Ni bead buffer (100 mL) \= 100 uL Tween20, 100 uL MgCl2, 100 uL DTT, 0.45 g NaCl, 0.28 g sodium phosphate, 0.07 g Imidazole 

Second Wash Ni bead buffer \= 100 uL Tween20, 100 uL MgCl2, 100 uL DTT, 0.45 g NaCl, 0.28 g sodium phosphate, 0.2 g Imidazole 

Ni elution buffer \= 100 uL Tween20, 100 uL MgCl2, 100 uL DTT, 0.45 g NaCl, 0.28 g sodium phosphate, 2.04 g Imidazole 

**Analysis of ligN20w100 HTS samples**

Barcodes for the libraries:

ligN20w100 HTS PE0 \- c1  
ligN20w100 HTS PE1 \- c2  
ligN20w100 HTS PE2 \- c3  
ligN20w100 HTS PE3 \- c4

**QSI-SELEX Trial II**

Upon rethinking the strategy for this assay, I think I just need to purify the protein-DNA mix with Strep beads instead of Ni beads. Since ultimately the goal is to obtain the DNA bound to the protein, and unbound protein will be washed away in the flow-through when the complex is pulled down with Strep beads, this process might be good enough.

Hence new protocol for this assay can be split into the following steps:

Per well:

20 uL diluted protein \+ 30 uL 1.55X SELEX buffer \+ 25 uL DNA

910 uL of Ni beads dissolved in a total 12.5 mL blocking buffer. Separate beads on magnetic rack and resuspend beads in 10 mL of 1X SELEX buffer. Aliquot 100 uL of the beads to each well.

Total 50 ug protein \= 109 uL protein to a 25 ng/uL stock in TF dilution buffer \= 109 uL protein in total 2000 uL (add 1891 uL TF dilution buffer \= diluted \~18-fold)

DNA solution \= 50 ug DNA at 20 ng/uL \= 50 ug in 2500 uL of TE buffer

Allow the protein \+ DNA mix to interact at RT for 30 minutes.

Pool the entire mix after the incubation \= this gives about 16 mL of solution ⇒ split into 16 low DNA binding tubes of about 1 mL per tube.

Streptavidin Mag Sepharose beads ⇒ based on their binding capacity about 200 uL beads are needed for capture of around 50 ug of DNA ⇒ 12.5 uL beads per tube ⇒ round off to about 15 uL beads per tube

# **Streptavidin Pulldown Protocol for Biotinylated 91‑bp DNA–TF Complex**

## **Buffer Composition for Binding and Washing**

**Binding/Wash Buffer (maintain DNA–TF interaction):** Use a buffer that preserves the 91-bp DNA–TF complex while allowing efficient streptavidin-biotin binding. A suitable composition is **\~20 mM HEPES or Tris-HCl (pH 7.4–7.5), 75–80 mM NaCl (or KCl), 0.05–0.1% Nonidet P-40 (NP-40) or Tween-20, 1 mM DTT**, and optionally **5–10% glycerol**. This moderate salt (\~77 mM) is chosen to match the complex’s stability range and prevent dissociation of the 20 kDa TF from DNA ( [Optimization of Biotinylated RNA or DNA Pull-Down Assays for Detection of Binding Proteins: Examples of IRP1, IRP2, HuR, AUF1, and Nrf2 \- PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9965622/#:~:text=in%20the%20MB%20binding%20buffer,Figure%201B) ). Avoid high-salt buffers (e.g. the 0.5 M NaCl often recommended for streptavidin binding) because such conditions can strip the TF off the DNA, drastically reducing pulldown efficiency ( [Optimization of Biotinylated RNA or DNA Pull-Down Assays for Detection of Binding Proteins: Examples of IRP1, IRP2, HuR, AUF1, and Nrf2 \- PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9965622/#:~:text=in%20the%20MB%20binding%20buffer,Figure%201B) ). The small amount of non-ionic detergent helps block nonspecific protein adsorption to beads or tube walls ( [Optimization of Biotinylated RNA or DNA Pull-Down Assays for Detection of Binding Proteins: Examples of IRP1, IRP2, HuR, AUF1, and Nrf2 \- PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9965622/#:~:text=Section%204%29,the%20biotinylated%20probe%2C%20WCL%2C%20and) ), and DTT (1 mM) maintains reducing conditions to protect cysteine residues. A modest glycerol content (5–10%) can be included to stabilize the TF’s folded state during binding ( [Optimization of Biotinylated RNA or DNA Pull-Down Assays for Detection of Binding Proteins: Examples of IRP1, IRP2, HuR, AUF1, and Nrf2 \- PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9965622/#:~:text=Binding%20Buffer%20C%2020%20mM,NaCl%2C%20and%201%20mM%20EDTA) ) – this is beneficial for small DNA-binding proteins and was used in a successful DNA pull-down protocol (20% glycerol for a DNA–protein complex) without hindering binding ( [Optimization of Biotinylated RNA or DNA Pull-Down Assays for Detection of Binding Proteins: Examples of IRP1, IRP2, HuR, AUF1, and Nrf2 \- PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9965622/#:~:text=Binding%20Buffer%20C%2020%20mM,NaCl%2C%20and%201%20mM%20EDTA) ). *(Note: Any glycerol introduced will be removed later by buffer exchange.)* Magnesium is generally not required for typical protein–DNA binding, but **1–2 mM MgCl₂** can be added if the TF or DNA structure demands it (ensure no EDTA if a metal cofactor like Zn²⁺ is needed for TF binding). Include a protease inhibitor (e.g. 0.5 mM PMSF or cocktail) if working with extracts, though for a purified TF and short incubation, proteolysis is minimal.

**Preventing biotin interference:** Ensure the biotinylated DNA is **free of excess biotin** or biotinylated primers before the assay. Even trace free biotin will occupy streptavidin binding sites and reduce capture capacity ([Biotinylation Guidelines—Creating Biotinylated DNA | Thermo Fisher Scientific \- IT](https://www.thermofisher.com/us/en/home/brands/product-brand/dynal/streptavidin-coupled-dynabeads/capture-of-biotinylated-targets.html#:~:text=Purification%20options%3A%20Free%20biotin%20in,one%20of%20the%20following%20options)). Purify the labeled DNA (e.g. via spin column or PAGE) to remove any unincorporated biotin ([Biotinylation Guidelines—Creating Biotinylated DNA | Thermo Fisher Scientific \- IT](https://www.thermofisher.com/us/en/home/brands/product-brand/dynal/streptavidin-coupled-dynabeads/capture-of-biotinylated-targets.html#:~:text=Purification%20options%3A%20Free%20biotin%20in,one%20of%20the%20following%20options)). Equilibrate the streptavidin beads in the binding buffer (wash out the storage buffer containing azide/EDTA) so that the beads and sample share the same buffer conditions. Maintaining consistent pH (\~7.4) and ionic strength in all steps (binding and washes) prevents shocks to the DNA–TF complex.

## **Gentle Elution Strategy (Preserving the DNA–TF Complex)**

To recover the DNA–TF complex **intact**, a gentle elution is critical – avoid heat, extreme pH, or denaturants that could dissociate or unfold the protein. Instead, use a **competitive biotin elution**:

* **Elution Buffer:** Use the same base buffer as above (pH 7.4, ±75 mM salt, 1 mM DTT, no detergent or minimal 0.01% to avoid foaming) and add **excess D-biotin (e.g. 5–10 mM)**. This free biotin will compete with the biotinylated DNA for streptavidin binding sites, releasing the DNA–TF complex into solution. Keep the salt in the elution buffer at a low or moderate level (you may drop NaCl to \~50 mM if desired) to maximize TF–DNA affinity during elution – the complex is even more stable at lower ionic strength, and low salt won’t significantly weaken the streptavidin-biotin bond on its own. The streptavidin–biotin interaction is extraordinarily strong (resistant to most pH or temperature changes) ([Biotinylation Guidelines—Creating Biotinylated DNA | Thermo Fisher Scientific \- IT](https://www.thermofisher.com/us/en/home/brands/product-brand/dynal/streptavidin-coupled-dynabeads/capture-of-biotinylated-targets.html#:~:text=The%20streptavidin,streptavidin%20in%20a%20gentle%20way)), so simply reducing salt or changing pH is not sufficient for elution. **Excess biotin** is the key to a gentle release: it gradually displaces the biotinylated DNA from the bead without harming the protein. This method avoids any surfactants or chaotropes that might denature the TF.

**Elution conditions:** Incubate the beads in Elution Buffer at **room temperature** (20–25 °C) for \~10–15 minutes with gentle mixing. *Do not heat* – even mild heating can risk destabilizing this small complex, and it isn’t necessary if enough biotin is provided. Competitive elution at room temp is milder than the harsh elutions (boiling SDS or 6 M guanidine) often used to break streptavidin-biotin ([Which is the best method for elution of DNA (biotin tagged) from Streptavidin Magnetic Beads? | ResearchGate](https://www.researchgate.net/post/Which-is-the-best-method-for-elution-of-DNA-biotin-tagged-from-Streptavidin-Magnetic-Beads#:~:text=In%20protein%20work%20we%20sometimes,works%20more%20poorly%20than%20guanidine)). (Those harsh methods yield higher recovery but would denature or separate the TF ([Which is the best method for elution of DNA (biotin tagged) from Streptavidin Magnetic Beads? | ResearchGate](https://www.researchgate.net/post/Which-is-the-best-method-for-elution-of-DNA-biotin-tagged-from-Streptavidin-Magnetic-Beads#:~:text=In%20protein%20work%20we%20sometimes,works%20more%20poorly%20than%20guanidine)), which we must avoid.) It’s known that recovery with free biotin elution may be somewhat lower than with denaturants ([Which is the best method for elution of DNA (biotin tagged) from Streptavidin Magnetic Beads? | ResearchGate](https://www.researchgate.net/post/Which-is-the-best-method-for-elution-of-DNA-biotin-tagged-from-Streptavidin-Magnetic-Beads#:~:text=In%20protein%20work%20we%20sometimes,works%20more%20poorly%20than%20guanidine)), so to maximize yield we will perform two sequential elutions (see below) and combine them. Importantly, this approach keeps the TF folded and bound to DNA throughout – no denaturants, no extreme pH shifts (we stay near neutral pH), and no \> room-temp heat.

*Rationale:* By out-competing the immobilized biotin, we gently liberate the DNA–TF complex. Streptavidin’s affinity for biotin is extremely high (K\_d \~10^(-14)–10^(-15) M), so we flood with a large molar excess of biotin to drive the equilibrium toward dissociation. Some protocols use 2–5 mM biotin at 37 °C for faster elution, but here we prefer \~5 mM at room temperature for a truly gentle treatment. If the biotinylated DNA had been attached via a **reversible tag** (e.g. desthiobiotin or a cleavable disulfide-biotin linker), elution could be achieved even more easily (desthiobiotin can be eluted with dilute biotin, and disulfide-linked biotin can be cleaved with reducing agent) ([Biotinylation Guidelines—Creating Biotinylated DNA | Thermo Fisher Scientific \- IT](https://www.thermofisher.com/us/en/home/brands/product-brand/dynal/streptavidin-coupled-dynabeads/capture-of-biotinylated-targets.html#:~:text=The%20streptavidin,streptavidin%20in%20a%20gentle%20way)). Assuming standard biotin was used, the described high-biotin wash is the most protein-friendly option. *Free biotin and any glycerol will be removed after elution by a spin filter, ensuring compatibility with downstream assays.*

## **Step-by-Step Pulldown Procedure**

1. **Bead Equilibration:** Gently resuspend the streptavidin magnetic beads (e.g. Dynabeads or similar; use a volume sufficient to bind all biotin-DNA, typically 20–50 µL of bead slurry per sample). Place the beads on a magnetic rack and discard the storage supernatant. Wash the beads **3×** with Binding/Wash Buffer (e.g. add 0.5 mL buffer, invert to mix, separate on magnet, remove supernatant). This equilibrates the beads to the correct salt/pH and removes azide or EDTA from storage. *(Perform washes in a low-bind tube to minimize bead and protein sticking. You can **pre-block** the beads at this stage by including 0.1% BSA in the wash buffer if non-specific binding is a concern.)*

2. **Binding Reaction (DNA–TF complex formation):** If not already done, mix the **biotinylated 91-bp dsDNA** with the **20 kDa TF** in Binding Buffer. For example, dilute your TF and DNA into Buffer so that the final binding mix is \~100–200 µL in the buffer composition described above (ensure \~77 mM salt). You may incubate the DNA and TF together for \~10 minutes prior to adding beads to allow the complex to form in solution (this can be done on ice or at room temperature, depending on what preserves the interaction best – since the complex is stable at 77 mM salt, room temp for a short time is acceptable). *If the TF came in a glycerol-containing storage buffer, dilute it at least 1:10 into the Binding Buffer to reduce glycerol to ≤5% during binding.* Optionally add **0.1 mg/mL poly(dI·dC)** or BSA in this mix to act as a carrier and block non-specific DNA-binding proteins (not usually needed if TF is purified). Ensure no **free biotin** is in this mixture ([Biotinylation Guidelines—Creating Biotinylated DNA | Thermo Fisher Scientific \- IT](https://www.thermofisher.com/us/en/home/brands/product-brand/dynal/streptavidin-coupled-dynabeads/capture-of-biotinylated-targets.html#:~:text=Purification%20options%3A%20Free%20biotin%20in,one%20of%20the%20following%20options)).

3. **Capture of Biotin-DNA–TF on Beads:** Add the prepared DNA–TF mixture to the equilibrated beads. Gently **rotate or nutate** the tube at **room temperature** for \~30–60 minutes. This allows the biotinylated DNA (with bound TF) to attach to the streptavidin on the beads. Room temp incubation promotes efficient binding; the TF–DNA complex remains stable in this buffer during this period. (If instead incubated at 4 °C, you may extend the time to 1–2 hours to achieve similar binding, as kinetics are slower.) After incubation, place the tube on the magnet to separate the beads from the supernatant. **Collect the supernatant** as the **“Unbound” fraction** – this contains any DNA or TF that did not bind to the beads. (*Save this fraction* at 4 °C for analysis; a successful pulldown should find very little TF or biotin-DNA here, but keeping it allows you to check for binding efficiency or protein loss.)

4. **Wash Beads (preserve complex):** Remove the tube from the magnet and add 200 µL of fresh Binding/Wash Buffer to the beads. Gently resuspend the beads by pipetting up/down or flicking the tube (avoid creating bubbles or foam). Incubate the beads in wash buffer for 5 minutes at room temp (or 4 °C) with occasional gentle mixing. Place on magnet and **collect the supernatant as Wash 1**. Repeat the wash **two more times** (Wash 2 and Wash 3), each with 200 µL buffer, 5 min incubation. Use the same buffer conditions for all washes – the \~75 mM salt and presence of NP-40/Tween prevent the TF–DNA complex from dissociating while still removing nonspecific background ( [Optimization of Biotinylated RNA or DNA Pull-Down Assays for Detection of Binding Proteins: Examples of IRP1, IRP2, HuR, AUF1, and Nrf2 \- PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9965622/#:~:text=Section%204%29,the%20biotinylated%20probe%2C%20WCL%2C%20and) ). *Save all wash fractions (especially Wash 1\) to monitor if any TF or DNA is bleeding off* – ideally, the washes should contain only trace amounts of the TF (a small amount of unrelated proteins might come off if using an extract). If you observe significant TF in the washes, it may indicate the interaction is marginally stable; in that case you could shorten the wash time or reduce the salt slightly in the buffer. Generally, three gentle washes are sufficient to yield a clean final complex ([Purification or Removal of Biotin and Biotinylated Substances](https://www.sigmaaldrich.com/US/en/technical-documents/protocol/protein-biology/protein-labeling-and-modification/purification-of-biotin-and-biotinylated-substances?srsltid=AfmBOoqfqIotmAdHZgr9Meet-1zNQu6FSgOnXUsW37DKdOsn_j8lwNet#:~:text=conditions%20are%20generally%20required%20for,using%20relatively%20mild%20elution%20conditions)).

5. **Gentle Elution – First Eluate:** After the last wash, remove all residual wash buffer from the beads (on the magnet). Elute the complex by adding **100 µL of Elution Buffer** (Binding Buffer \+ 5 mM biotin, prepared fresh) to the bead pellet. Mix the beads gently to ensure full contact (pipette up and down a few times without introducing bubbles). Incubate the suspension at **room temperature for 10–15 minutes** with gentle mixing (e.g. slowly rotating or tapping the tube every few minutes). During this time, free biotin competes with the DNA’s biotin for streptavidin binding sites, releasing the biotinylated DNA along with any bound TF into solution ([Which is the best method for elution of DNA (biotin tagged) from Streptavidin Magnetic Beads? | ResearchGate](https://www.researchgate.net/post/Which-is-the-best-method-for-elution-of-DNA-biotin-tagged-from-Streptavidin-Magnetic-Beads#:~:text=In%20protein%20work%20we%20sometimes,works%20more%20poorly%20than%20guanidine)). After incubation, place the tube on the magnet until the beads clear. **Carefully transfer the supernatant to a new tube** – this is **Eluate 1**, containing the DNA–TF complexes. *Keep this eluate on ice.* (It contains 5 mM biotin, which is harmless to the complex but will be removed later.)

6. **Second Elution (maximize recovery):** To retrieve any remaining complex, add another 100 µL of fresh biotin Elution Buffer to the beads and repeat the incubation for an additional 5–10 minutes at room temp. Magnet separate and collect **Eluate 2** in a separate tube. You can either combine Eluate 1 and 2 now or keep them separate to analyze the efficiency of the first elution versus second. In practice, most of the complex often comes off in the first elution, but the second can recover an extra \~10–20%. (If desired, a **third elution** can be done, but usually two are sufficient for \>90% yield.)

7. **Post-elution Bead Treatment (optional):** At this point, the beads still have biotin bound to streptavidin (either free biotin from the elution buffer or any residual biotin-DNA). If you need to **verify that all TF has been eluted**, you can boil the beads in SDS sample buffer and run SDS-PAGE to check for any remaining TF band. This is purely for analysis – do not combine this with the gentle eluates. (If the protocol worked well, there should be little to no TF left on the beads.)

8. **Buffer Exchange and Concentration:** The eluates (combined) contain the TF–DNA complexes in a buffer with \~5 mM biotin, \~75 mM salt, and possibly glycerol from earlier steps. To make this sample compatible with downstream applications (which may be sensitive to biotin or glycerol), **buffer-exchange the eluate** into a clean buffer. Use a 0.5 mL 10 kDa MWCO ultrafiltration spin column (Amicon or similar). Pre-rinse the column with water or buffer, then load the combined eluate and spin according to the manufacturer’s instructions (typically 14,000×g, 5–10 min) to concentrate the sample. The DNA–TF complex (\~80 kDa total) will be retained, while free biotin (244 Da), salts, and other small molecules pass through. Add fresh desired buffer (e.g. 20 mM HEPES, 50–100 mM KCl, 1 mM DTT, pH \~7.5) to the concentrate and spin again; repeat this dilution and concentration cycle **3×** to effectively remove small contaminants ([Which is the best method for elution of DNA (biotin tagged) from Streptavidin Magnetic Beads? | ResearchGate](https://www.researchgate.net/post/Which-is-the-best-method-for-elution-of-DNA-biotin-tagged-from-Streptavidin-Magnetic-Beads#:~:text=In%20protein%20work%20we%20sometimes,works%20more%20poorly%20than%20guanidine)). After the final spin, recover the purified DNA–TF complex from the concentrator (typically in 50–100 µL). The sample is now in a gentle, final buffer with no glycerol or free biotin (confirmed by the fact that small molecules are washed out through the filter).

9. **Storage/Downstream Use:** Keep the complex on ice (for immediate use) or at 4 °C for short-term storage. Because no denaturants were used, the TF should remain bound to the DNA. At this stage, you can assess the fractions: for example, run an SDS-PAGE of the Unbound, Wash 1, and Eluate to see where the TF is. The **unbound fraction** might contain excess TF that didn’t bind DNA (or excess DNA if DNA was limiting), the **wash fractions** ideally show no TF (confirming the complex stayed on beads), and the **eluate** will show the 20 kDa TF band. You may also run an agarose gel or qPCR for the DNA if needed, to verify the 91-bp DNA is predominantly in the eluate. If the eluate shows the TF band and a DNA band (91 bp) by gel, the complex was successfully recovered.

## **Additional Notes and Optimizations**

* **Fraction collection:** We emphasized saving the Unbound and Wash fractions in steps 3–4 – this is to monitor protein loss. If significant TF is found in the Unbound fraction, it may indicate the beads were saturated or the binding step was too short. In that case, use more beads or incubate slightly longer next time. TF in Wash fractions suggests the complex might be coming off during washes; to fix that, use slightly lower salt or add a stabilizer (e.g. 5% glycerol, or shorten the wash). By analyzing these fractions, you ensure that the protocol is tuned to **minimize TF loss** at each stage.

* **Yield considerations:** Competitive biotin elution is very gentle but may not strip 100% of complexes in one go. That’s why we perform two elutions and use sufficient biotin concentration. Empirically, free biotin elution yields can be \~50–90% of the bound material ([Which is the best method for elution of DNA (biotin tagged) from Streptavidin Magnetic Beads? | ResearchGate](https://www.researchgate.net/post/Which-is-the-best-method-for-elution-of-DNA-biotin-tagged-from-Streptavidin-Magnetic-Beads#:~:text=In%20protein%20work%20we%20sometimes,works%20more%20poorly%20than%20guanidine)). If you find the recovery consistently low, you can increase biotin to \~10 mM or lengthen the elution time (even up to 30 min or a second round of 15 min). The complexes remain stable during this period as long as the buffer is gentle. *Do not exceed room temperature or use any SDS/urea,* as those would undermine the whole purpose of keeping the complex intact.

* **Alternative elution strategies:** Very **low ionic strength** alone (e.g. \<10 mM salt) does not effectively release biotinylated DNA from streptavidin – the biotin bond is essentially unaffected by such mild changes ([Biotinylation Guidelines—Creating Biotinylated DNA | Thermo Fisher Scientific \- IT](https://www.thermofisher.com/us/en/home/brands/product-brand/dynal/streptavidin-coupled-dynabeads/capture-of-biotinylated-targets.html#:~:text=The%20streptavidin,streptavidin%20in%20a%20gentle%20way)). Similarly, **pH changes** would need to be extreme (pH \>11 or \<2) to weaken streptavidin-biotin, which would likely harm the TF and DNA. Therefore, we rely on the biotin competition method. Another gentle method reported for nucleic acids is using **room-temperature phenol** to extract the complexes from the beads ([Simple and Efficient Room-Temperature Release of Biotinylated ...](https://pmc.ncbi.nlm.nih.gov/articles/PMC6854530/#:~:text=Simple%20and%20Efficient%20Room,from%20streptavidin%20rapidly%20and%20efficiently)), but this is not ideal here as phenol could denature the protein and requires additional extraction steps. Our protocol avoids any organic solvents for simplicity.

* **Monomeric avidin option:** If routine recovery of intact complexes is needed, consider using **monomeric avidin** resin instead of streptavidin. Monomeric avidin binds biotin with lower affinity (K\_d \~10^(-7) M), allowing bound molecules to be eluted under mild conditions (e.g. 2 mM biotin in PBS) ([Which is the best method for elution of DNA (biotin tagged) from Streptavidin Magnetic Beads? | ResearchGate](https://www.researchgate.net/post/Which-is-the-best-method-for-elution-of-DNA-biotin-tagged-from-Streptavidin-Magnetic-Beads#:~:text=Augusta%20University)). This avoids the extremely tight binding of streptavidin and makes elutions more efficient without harsh steps. Vendors offer monomeric avidin agarose specifically for reversible biotin capture ([Which is the best method for elution of DNA (biotin tagged) from Streptavidin Magnetic Beads? | ResearchGate](https://www.researchgate.net/post/Which-is-the-best-method-for-elution-of-DNA-biotin-tagged-from-Streptavidin-Magnetic-Beads#:~:text=Augusta%20University)). In the context of a 91-bp DNA and 20 kDa TF, using monomeric avidin could let you skip the high biotin concentrations or lengthy incubations – the complex would elute more readily. The trade-off is slightly lower binding capacity and stability of the resin. For the current protocol, we assumed streptavidin beads (for maximum capture), and thus implemented the high-affinity competition elution.

* **Downstream compatibility:** After the final buffer exchange, the sample is free of glycerol and biotin, which could interfere with sensitive downstream applications (e.g. mass spectrometry or single-molecule assays). The TF–DNA complex is now in a clean buffer and can be concentrated as needed. If you plan to use techniques that involve streptavidin again (for example, a streptavidin-based detection), it’s crucial that free biotin is removed – our spin filtration achieves this, as biotin is far below the 10 kDa cutoff. Glycerol, which can inhibit dry-down steps or certain enzymatic reactions, is also removed by the same step. Using a 10 kDa MWCO (rather than 30 kDa) is important here because the 20 kDa TF by itself is small; 10 kDa cutoff retains the TF and the DNA (which is \~60 kDa double-stranded) reliably.

* **Validation:** To ensure the DNA–TF complex stayed intact throughout, one can perform an EMSA (electrophoretic mobility shift assay) on the eluate versus the input. The eluate should show the shifted DNA band (indicating TF is still bound). Additionally, Western blotting for the TF in the eluate vs input can confirm it wasn’t degraded or lost. Because all steps were done at gentle conditions (\~4–25 °C, no denaturants), the TF should remain active. In fact, similar pull-down protocols for small transcription factors have been used to prepare complexes for functional assays or footprinting directly ([Biotinylation Guidelines—Creating Biotinylated DNA | Thermo Fisher Scientific \- IT](https://www.thermofisher.com/us/en/home/brands/product-brand/dynal/streptavidin-coupled-dynabeads/capture-of-biotinylated-targets.html#:~:text=Immobilize%20the%20biotin,to%20DNase%20footprinting%20studies)).

By following this protocol, you will selectively isolate the biotinylated 91-bp DNA bound to the 20 kDa TF, with buffers optimized to keep the complex intact. The binding and wash steps use just enough stringency to avoid nonspecific interactions without disrupting the specific DNA–protein binding ( [Optimization of Biotinylated RNA or DNA Pull-Down Assays for Detection of Binding Proteins: Examples of IRP1, IRP2, HuR, AUF1, and Nrf2 \- PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9965622/#:~:text=in%20the%20MB%20binding%20buffer,Figure%201B) ) ( [Optimization of Biotinylated RNA or DNA Pull-Down Assays for Detection of Binding Proteins: Examples of IRP1, IRP2, HuR, AUF1, and Nrf2 \- PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9965622/#:~:text=Section%204%29,the%20biotinylated%20probe%2C%20WCL%2C%20and) ). The gentle biotin-based elution preserves the native state of the protein ([Which is the best method for elution of DNA (biotin tagged) from Streptavidin Magnetic Beads? | ResearchGate](https://www.researchgate.net/post/Which-is-the-best-method-for-elution-of-DNA-biotin-tagged-from-Streptavidin-Magnetic-Beads#:~:text=In%20protein%20work%20we%20sometimes,works%20more%20poorly%20than%20guanidine)), and collecting all fractions ensures any losses can be tracked and mitigated in future optimizations. The final sample is in a clean buffer suitable for downstream applications, with any glycerol or free biotin removed by ultrafiltration. This strategy, drawn from both vendor guidelines and literature on DNA pull-down assays, is designed for small dsDNA–TF complexes and prioritizes the integrity of the DNA–protein interaction at every step.

**References:**

* Binding buffer conditions for streptavidin pull-down (high salt vs moderate salt) and their effect on DNA–protein complex recovery ( [Optimization of Biotinylated RNA or DNA Pull-Down Assays for Detection of Binding Proteins: Examples of IRP1, IRP2, HuR, AUF1, and Nrf2 \- PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9965622/#:~:text=in%20the%20MB%20binding%20buffer,Figure%201B) ).

* Use of mild detergent in buffers to reduce non-specific binding as recommended by manufacturers ( [Optimization of Biotinylated RNA or DNA Pull-Down Assays for Detection of Binding Proteins: Examples of IRP1, IRP2, HuR, AUF1, and Nrf2 \- PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9965622/#:~:text=Section%204%29,the%20biotinylated%20probe%2C%20WCL%2C%20and) ).

* Inclusion of glycerol and DTT in DNA–protein binding buffers to stabilize complexes (as in Tsuji *et al.*, 2023\) ( [Optimization of Biotinylated RNA or DNA Pull-Down Assays for Detection of Binding Proteins: Examples of IRP1, IRP2, HuR, AUF1, and Nrf2 \- PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9965622/#:~:text=Binding%20Buffer%20C%2020%20mM,NaCl%2C%20and%201%20mM%20EDTA) ).

* Necessity of removing free biotin prior to pull-down to maximize bead binding capacity ([Biotinylation Guidelines—Creating Biotinylated DNA | Thermo Fisher Scientific \- IT](https://www.thermofisher.com/us/en/home/brands/product-brand/dynal/streptavidin-coupled-dynabeads/capture-of-biotinylated-targets.html#:~:text=Purification%20options%3A%20Free%20biotin%20in,one%20of%20the%20following%20options)).

* Strength of the biotin–streptavidin bond and the need for harsh vs. gentle elution methods ([Biotinylation Guidelines—Creating Biotinylated DNA | Thermo Fisher Scientific \- IT](https://www.thermofisher.com/us/en/home/brands/product-brand/dynal/streptavidin-coupled-dynabeads/capture-of-biotinylated-targets.html#:~:text=The%20streptavidin,streptavidin%20in%20a%20gentle%20way)) ([Which is the best method for elution of DNA (biotin tagged) from Streptavidin Magnetic Beads? | ResearchGate](https://www.researchgate.net/post/Which-is-the-best-method-for-elution-of-DNA-biotin-tagged-from-Streptavidin-Magnetic-Beads#:~:text=In%20protein%20work%20we%20sometimes,works%20more%20poorly%20than%20guanidine)).

* Efficacy of free biotin competition for gentle elution (trade-offs in yield vs. harsh elution) ([Which is the best method for elution of DNA (biotin tagged) from Streptavidin Magnetic Beads? | ResearchGate](https://www.researchgate.net/post/Which-is-the-best-method-for-elution-of-DNA-biotin-tagged-from-Streptavidin-Magnetic-Beads#:~:text=In%20protein%20work%20we%20sometimes,works%20more%20poorly%20than%20guanidine)).

* Advantage of monomeric avidin for reversible binding and mild elution of biotinylated targets ([Which is the best method for elution of DNA (biotin tagged) from Streptavidin Magnetic Beads? | ResearchGate](https://www.researchgate.net/post/Which-is-the-best-method-for-elution-of-DNA-biotin-tagged-from-Streptavidin-Magnetic-Beads#:~:text=Augusta%20University)).

* Vendor and literature notes on handling of fractions and direct application of complexes in downstream analyses ([Biotinylation Guidelines—Creating Biotinylated DNA | Thermo Fisher Scientific \- IT](https://www.thermofisher.com/us/en/home/brands/product-brand/dynal/streptavidin-coupled-dynabeads/capture-of-biotinylated-targets.html#:~:text=Immobilize%20the%20biotin,to%20DNase%20footprinting%20studies)).

**6 May 2025**

**Quantification of protein and DNA in the QSI-SELEX trial II**

| Sample | DNA (Qubit) | Protein (Bradford) |
| :---: | :---: | :---: |
| Strep Binding Buffer (Blank) U1 |  |  |
| Unbound U2 |  |  |
| Wash1 U3 |  |  |
| Wash2 U4 |  |  |
| Wash3 U5 |  |  |
| Strep Elution Buffer (Blank) U6 |  |  |
| Strep Buffer Elute U7 |  |  |
| SELEX elution buffer (Blank) U8 |  |  |
| Strep Beads \- Boiled\_round1 U9 |  |  |
| Strep Beads \+ elution buffer (post boiling) U10 |  |  |

Heat the Strep beads in SELEX elution buffer at 99 degrees, 15 mins to denature the beads (this will ensure denaturation of proteins, dsDNA and the beads, so that nothing remains conjugated to the beads).

Qubit \= 190 uL dye \+ 10 uL standards & 190 uL dye \+ 10 uL samples

Bradford \= 250 uL dye \+ 5 uL standards and samples

| S1 | S1 | U1 | U1 | U9 | U9 |  |  |  |  |  |  |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| S2 | S2 | U2 | U2 | U10 | U10 |  |  |  |  |  |  |
| S3 | S3 | U3 | U3 |  |  |  |  |  |  |  |  |
| S4 | S4 | U4 | U4 |  |  |  |  |  |  |  |  |
| S5 | S5 | U5 | U5 |  |  |  |  |  |  |  |  |
| S6 | S6 | U6 | U6 |  |  |  |  |  |  |  |  |
| S7 | S7 | U7 | U7 |  |  |  |  |  |  |  |  |
| S8 | S8 | U8 | U8 |  |  |  |  |  |  |  |  |

###  

### 

### **Pre-Rinse Filter**

Do this for two columns simultaneously:

1. Add **500 µL** nuclease-free water to the filter (upper chamber).

2. Centrifuge **5 min @ 14,000×g**.

3. Discard the filtrate (flow-through).  
4. Add **500 µL** QSI sample buffer to the filter (upper chamber).

---

### **2\. Adjust Sample to 350 µL**

1. Transfer your **250 µL** sample into a fresh low-binding tube.

2. Add **150 µL** QSI sample buffer → **total \= 400 µL**.

---

### **3\. First Diafiltration**

1. Load the **400 µL** diluted sample into the filter unit.

2. Centrifuge **10 min @ 14,000×g**. Keep doing this till the entire sample is taken up.  
3. Collect the filtrate together in one single tube.

---

### **4\. Wash Step**

1. Add **400 µL** fresh Streptavidin Binding Buffer to the filter unit.

2. Centrifuge **10 min @ 14,000×g**.

3. Collect the wash .

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

Minimum required protein amount (as per 100 nM of protein in 50 uL solution) \= 96 ng of protein

**8 May 2025**

**MAX protein buffer exchange**

For MAX protein the concentration determined was **0.462 ug/uL.** Concentration required is \~ 12 uM in 100 uL (start with 26 ug)

26 ug \= 60 uL protein \+ 290 uL QSI SELEX buffer

- Wash once with nuclease free water, 14000g, 10 min  
- Wash once with QSI SELEX buffer, 14000g, 10 min  
- Run sample through column, 14000g, 10 min  
- Wash again with QSI SELEX buffer, 14000g, 10 min  
- Elute by inverting, 5 min, 1000g

Measure protein concentration with Bradford assay.

**28 May 2025**

**Cloning of pHRS-HCC library v1**

*Cloning of pHRS-Nh100 library and plating on BioAssay plate:*

Nh (HCC-M \+ HCC-PCR)

Insert size is actually 158 bp (lower than AT10 library), so 5:1 ratio or higher may be needed. By calculation the insert to be added for 5:1 works out to 4.15 ng, but we are adding higher as per the previous calculations for AT10 for this trial.

6X

| NEBuilder HiFi DNA Assembly Master Mix | 10 uL |
| :---- | :---- |
| HCC-M (vector) – 50 ng | 1.47 uL |
| HCC – 7.8 ng\* | 0.20 uL |
| NF H2O | 8.33 uL |

Incubate at 50°C for 60 minutes.

Combine the assembled product and purify via column purification.

- Thaw chemically competent cells (NEB DH5a) on ice.    
- Add 100 pg of the chilled assembled product to 50 uL competent cells. Mix gently by flicking/swirling the tube 4–5 times. Do not vortex.     
- Place the mixture on ice for 30 minutes. Do not mix.    
- Heat shock at 42°C for 30 seconds. Do not mix.    
- Transfer tubes to ice for 2 minutes.   
- Add 700 µl of room-temperature SOC media to the tube.   
- Incubate the tube at 37°C for 60 minutes. Shake vigorously (500 rpm) or rotate.   
- Warm selection plates to 37°C.    
- Spread entire liquid culture over the BioAssay plate.  
- Incubate overnight at 37°C.

**Transform and expand pHRS-MYC355**

The pHRS-MYC355 confirmed plasmid was transformed into a single tube of 50 uL competent cells. The transformed product was plated into an LB-AMP plate.

**Testing compatibility of SELEX with Hia5 enzyme treatment**

Prepare Hia5 buffer and resuspend DNA ligand in the same.

In parallel, resuspend the same amount of DNA in the SELEX buffer. Add spermidine and SAM in the required concentration and then follow up with Hia5 treatment. Purify the treated DNA and treat with DpnI.

Run the two DNA samples along with untreated DNA on a 0.5% agarose gel.

“*We tested the methyltransferase activity of psfHia5 with the in vitro assay using PCR-amplified*

*DNA fragment containing several DpnI sites. As shown in Fig.1a, after methylated by Hia5,*  
*the fragments should be digested into several pieces (mainly 502 and 532 bp) by DpnI. Certain*  
*amount of psfHia5 was put into a 20 μL reaction containing 500 ng DNA, 0.8 mM SAM (Sadenosylmethionine)*  
*and buffer A (15 mM Tris, 1mM EDTA, 0.5 mM EGTA, 15 mM NaCl,*  
*60 mM KCl, 0.5 mM Spermidine, pH 8.0), and incubated at 37ÅãC for 1 h and 80ÅãC for 10 min*  
*on a thermal cycler, then add 1 μL DpnI and 2 μL rCutSmart 10x buffer, incubate again at*  
*37ÅãC for 1 h and 80ÅãC for 10 min. Sometimes we set a reaction of 50 μL and purified the DNA*  
*before DpnI digestion, and the results were the same. We used to detect the fragments on 1.5%*  
*agarose gel, but it needs at least 1 μg DNA to be loaded to show clear bands. So we now load*  
*samples on fragment analyzer which can detect as low as 0.3 ng/μL input DNA. 2 μL of the*  
*reaction solution was loaded. As show from the gel image and peak images, 1 μL psfHia5 can*  
*completely methylate all the adenine in 500 ng DNA fragments (containing about 50% AT)*  
*even after diluted 16 folds, suggesting an activity of at least 8 U/μL.*  
”

Comments:

- Suggestions are that 1 uL Hia5 (diluted 16-fold i.e. effectively 0.06 uL of enzyme) is sufficient to methylate all adenine on 500 ng of linear DNA

Hia5 buffer:

1 mL

| 1 M Tris pH 8 | 15 uL |
| :---- | :---- |
| EDTA (0.5 M) | 2 uL |
| EGTA (0.5 M) | 1 uL |
| NaCl (100 mM) | 150 uL |
| KCl (100 mM) | 600 uL |
| Spermidine (100X) | (1X) 10 uL |

Prepare stocks of 100 mM for KCl, NaCl

KCl \- 0.37 g in 50 mL water

NaCl \- 0.29 g in 50 mL water

For spermidine also prepare a 20X stock \= 20 uL \+ 80 uL NF H2O

Buffer composition at point of Hia5 addition in SELEX:

4 uL protein \+ 6 uL 1.55X SELEX buffer \+ 5 uL DNA

Therefore for this buffer mix combine 4 uL TF-dilution buffer, 6 uL 1.55X SELEX buffer and 5 uL NF-water.

Resuspend 1 ug DNA in this buffer.

Dilute psf-Hia5 (1 uL in total of 15 uL with water) **\[dil psf-Hia5 \- dpH\]**

*Titration of Hia5 for the SELEX+FIBER-Seq (500 ng DNA per trial)*

1. Hia5 ligand \+ SELEX buffer \+ 1 uL dpH \+ 0.5 uL SAM \+ 1 uL 20X Spermidine  
2. Hia5 ligand \+ SELEX buffer \+ 2 uL dpH \+ 0.5 uL SAM \+ 1 uL 20X Spermidine  
3. Hia5 ligand \+ SELEX buffer \+ 3 uL dpH \+ 0.5 uL SAM \+ 1 uL 20X Spermidine  
4. Hia5 ligand \+ SELEX buffer \+ 4 uL dpH \+ 0.5 uL SAM \+ 1 uL 20X Spermidine  
5. Hia5 ligand \+ SELEX buffer \+ 5 uL dpH \+ 0.5 uL SAM \+ 1 uL 20X Spermidine  
6. Hia5 ligand \+ Hia5 buffer \+ 1 uL dpH \+ 0.5 uL SAM  
7. Hia5 ligand \+ Hia5 buffer \+ 2 uL dpH \+ 0.5 uL SAM  
8. Hia5 ligand \+ Hia5 buffer \+ 3 uL dpH \+ 0.5 uL SAM  
9. Hia5 ligand \+ Hia5 buffer \+ 4 uL dpH \+ 0.5 uL SAM  
10. Hia5 ligand \+ Hia5 buffer \+ 5 uL dpH \+ 0.5 uL SAM

![][image3]

**29 May 2025**

**Digestion of pHRS-HCCgb-1 (3X)**

| COMPONENTS |  50 µl REACTION  | FINAL CONC. OR AMOUNT  |
| ----- | ----- | ----- |
| DNA | 1000 ng |   |
| 10X NEBuffer\*\* | 5 µl | 1X  |
| Restriction Enzyme | 1 µl |   |
| Nuclease-free Water | to 50 µl | Varies\* |

Incubate at 37 degrees, 30 mins. Run the digestion products through a MinElute column to purify the DNA.

**AT10 PCR for AT10-HCC**

The stock concentration for the AT10 pool is 10 ng/uL. Dilute 1 uL of this to 10 uL. Set up 5 PCR reactions as follows:  
5X

| 2X KAPA HiFi | 12.5 uL |
| :---- | :---- |
| Nhancer142\_F (10 uM) | 0.75 uL |
| HCC\_R\* (10 uM) | 0.75 uL |
| Diluted AT10 | 2 uL |
| NF H2O | 10 uL |

OLIGOAMP

| 95°C | 3 min |
| :---- | :---- |
| 98°C | 20 s |
| 55°C | 15 s       **20X** |
| 72°C | 15 s |
| 72°C | 1 min |
| 4°C | HOLD |

Pool PCR tubes and column purify the product.  
Run a bit of the product on a gel to check the consistency of size and off-target PCR products.

Once confirmed that both the digested plasmid and PCR product are fine, prepare 6X NEB HiFi reactions:

1\. pHRS-HCC (6X)

| pHRS-HCC (M) | 50 ng |
| :---- | :---- |
| HCCAT10-PCR | 10 ng |
| 2X NEB HiFi Assembly Mix | 10 uL |
| NF H2O | Make up volume to 20 uL |

   
Incubate at 50 degrees, 1 hour.

**2 June 2025**

**Hia5 treatment repeat**

Prepare Hia5 buffer and resuspend DNA ligand in the same.

In parallel, resuspend the same amount of DNA in the SELEX buffer. Add spermidine and SAM in the required concentration and then follow up with Hia5 treatment. Purify the treated DNA and treat with DpnI.

Run the two DNA samples along with untreated DNA on a 3% agarose gel.

“*We tested the methyltransferase activity of psfHia5 with the in vitro assay using PCR-amplified*

*DNA fragment containing several DpnI sites. As shown in Fig.1a, after methylated by Hia5,*  
*the fragments should be digested into several pieces (mainly 502 and 532 bp) by DpnI. Certain*  
*amount of psfHia5 was put into a 20 μL reaction containing 500 ng DNA, 0.8 mM SAM (Sadenosylmethionine)*  
*and buffer A (15 mM Tris, 1mM EDTA, 0.5 mM EGTA, 15 mM NaCl,*  
*60 mM KCl, 0.5 mM Spermidine, pH 8.0), and incubated at 37ÅãC for 1 h and 80ÅãC for 10 min*  
*on a thermal cycler, then add 1 μL DpnI and 2 μL rCutSmart 10x buffer, incubate again at*  
*37ÅãC for 1 h and 80ÅãC for 10 min. Sometimes we set a reaction of 50 μL and purified the DNA*  
*before DpnI digestion, and the results were the same. We used to detect the fragments on 1.5%*  
*agarose gel, but it needs at least 1 μg DNA to be loaded to show clear bands. So we now load*  
*samples on fragment analyzer which can detect as low as 0.3 ng/μL input DNA. 2 μL of the*  
*reaction solution was loaded. As show from the gel image and peak images, 1 μL psfHia5 can*  
*completely methylate all the adenine in 500 ng DNA fragments (containing about 50% AT)*  
*even after diluted 16 folds, suggesting an activity of at least 8 U/μL.*  
”

Comments:

- Dilute 2 uL Hia5 to 15 uL with water

Hia5 buffer:

1 mL

| 1 M Tris pH 8 | 15 uL |
| :---- | :---- |
| EDTA (0.5 M) | 2 uL |
| EGTA (0.5 M) | 1 uL |
| NaCl (100 mM) | 150 uL |
| KCl (100 mM) | 600 uL |
| Spermidine (100X) | (1X) 10 uL |

Prepare stocks of 100 mM for KCl, NaCl

KCl \- 0.37 g in 50 mL water

NaCl \- 0.29 g in 50 mL water

For spermidine also prepare a 20X stock \= 20 uL \+ 80 uL NF H2O

Buffer composition at point of Hia5 addition in SELEX:

4 uL protein \+ 6 uL 1.55X SELEX buffer \+ 5 uL DNA

Therefore for this buffer mix combine 4 uL TF-dilution buffer, 6 uL 1.55X SELEX buffer and 5 uL NF-water.

Resuspend 1 ug DNA in this buffer.

Dilute psf-Hia5 (1 uL in total of 15 uL with water) **\[dil psf-Hia5 \- dpH\]**

*Titration of Hia5 for the SELEX+FIBER-Seq (500 ng DNA per trial)*

11. Hia5 ligand \+ SELEX buffer \+ 1 uL dpH \+ 0.5 uL SAM \+ 1 uL 20X Spermidine  
12. Hia5 ligand \+ SELEX buffer \+ 2 uL dpH \+ 0.5 uL SAM \+ 1 uL 20X Spermidine  
13. Hia5 ligand \+ SELEX buffer \+ 3 uL dpH \+ 0.5 uL SAM \+ 1 uL 20X Spermidine  
14. Hia5 ligand \+ SELEX buffer \+ 4 uL dpH \+ 0.5 uL SAM \+ 1 uL 20X Spermidine  
15. Hia5 ligand \+ SELEX buffer \+ 5 uL dpH \+ 0.5 uL SAM \+ 1 uL 20X Spermidine  
16. Hia5 ligand \+ Hia5 buffer \+ 1 uL dpH \+ 0.5 uL SAM  
17. Hia5 ligand \+ Hia5 buffer \+ 2 uL dpH \+ 0.5 uL SAM  
18. Hia5 ligand \+ Hia5 buffer \+ 3 uL dpH \+ 0.5 uL SAM  
19. Hia5 ligand \+ Hia5 buffer \+ 4 uL dpH \+ 0.5 uL SAM  
20. Hia5 ligand \+ Hia5 buffer \+ 5 uL dpH \+ 0.5 uL SAM

**Ligation trial repeat for ligands**

To test for large-scale amplification of dsDNA ligands, set up the following reaction:

Take 1 uL of the original oligos and dilute to 10 uL

10X

| NCAP\_F (10 uM) | 15 uL |
| :---- | :---- |
| NCAP\_R (10 uM) | 15 uL |
| 2X KAPA HiFi | 250 uL |
| diluted lig147 | 10 uL |
| NF H2O | 210 uL |

lig147\_T1

PCR4, SELEX\_AMP

| 95°C | 3 min |
| :---- | :---- |
| 98°C | 20 s |
| 55°C | 15 s       **14X** |
| 72°C | 30 s |
| 72°C | 40 min |
| 4°C | HOLD |

Pool the products and columns, purify and measure the concentration. Also, check the purity of the product on a high percentage agarose gel.

**T4 PNK treatment of purified new lig147**

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

1X T4 DNA Ligase Buffer contains 1 mM ATP and can be substituted in non-radioactive phosphorylations (T4 Polynucleotide Kinase exhibits 100% activity in this buffer). 

**17 June 2025**

Library Preparation from pHRSv1cc libraries. TruSeq library generation primers for these samples are as follows:

| Sample | Barcode |
| :---: | :---: |
| AT10-Gcla-BC1 | CGGTTCAA |
| spGFPo-AT10-Gcla-BC2 | GCTGGATT |
| AT10-Hcla-BC1 | TAACTCGG |
| AT10-GCD-BC1 | CGGTGACC |
| AT10-HCD-BC1 | ATTGTCAA |
| AT10-GCC-BC1 | ATACTCAA |
| AT10-HCC-BC1 | ATTGGAGG |

Gcla-BC1

CAAGCAGAAGACGGCATACGAGAT**CGGTTCAA**GTGACTGGAGTTCAGACGTGTGCTCTTCCGATCTCGCTGAGCGGTACGGAAGAT

Gcla-BC2

CAAGCAGAAGACGGCATACGAGAT**GCTGGATT**GTGACTGGAGTTCAGACGTGTGCTCTTCCGATCTCGCTGAGCGGTACGGAAGAT

Hcla-BC1

CAAGCAGAAGACGGCATACGAGAT**TAACTCGG**GTGACTGGAGTTCAGACGTGTGCTCTTCCGATCTGTCAAGCGTACGCAATGGAG

Hcla-BC2

CAAGCAGAAGACGGCATACGAGAT**TAACAGTT**GTGACTGGAGTTCAGACGTGTGCTCTTCCGATCTGTCAAGCGTACGCAATGGAG

GCD-BC1

CAAGCAGAAGACGGCATACGAGAT**CGGTGACC**GTGACTGGAGTTCAGACGTGTGCTCTTCCGATCTGCCGCTGCACTCAGTATACA

GCD-BC2

CAAGCAGAAGACGGCATACGAGAT**TACAGAGG**GTGACTGGAGTTCAGACGTGTGCTCTTCCGATCTGCCGCTGCACTCAGTATACA

HCD-BC1

CAAGCAGAAGACGGCATACGAGAT**ATTGTCAA**GTGACTGGAGTTCAGACGTGTGCTCTTCCGATCTATTTCATGCCTCCGCCAGGC

HCD-BC2

CAAGCAGAAGACGGCATACGAGAT**TATGTCTT**GTGACTGGAGTTCAGACGTGTGCTCTTCCGATCTATTTCATGCCTCCGCCAGGC

GCC-BC1

CAAGCAGAAGACGGCATACGAGAT**ATACTCAA**GTGACTGGAGTTCAGACGTGTGCTCTTCCGATCTGGGCTACGCGCTTTGTCTTG

GCC-BC2

CAAGCAGAAGACGGCATACGAGAT**GCTGAGAA**GTGACTGGAGTTCAGACGTGTGCTCTTCCGATCTGGGCTACGCGCTTTGTCTTG

HCC-BC1

CAAGCAGAAGACGGCATACGAGAT**ATTGGAGG**GTGACTGGAGTTCAGACGTGTGCTCTTCCGATCTGATGTGCTCCAATTGGCGCC

HCC-BC2

CAAGCAGAAGACGGCATACGAGAT**TAGTCTAA**GTGACTGGAGTTCAGACGTGTGCTCTTCCGATCTGATGTGCTCCAATTGGCGCC

Nh100-BC1

CAAGCAGAAGACGGCATACGAGAT**AGCGTAGC**GTGACTGGAGTTCAGACGTGTGCTCTTCCGATCTGCATCGGAGGGTAGCAATGC

Nh100-BC2

CAAGCAGAAGACGGCATACGAGAT**CAGCCTCG**GTGACTGGAGTTCAGACGTGTGCTCTTCCGATCTGCATCGGAGGGTAGCAATGC

Per reaction:

| KAPA HiFi MM (2X) | 25 uL |
| :---- | :---- |
| P5 primer mix (100 uM) | 0.25 uL |
| Plasmid library  | 50 ng (per reaction) |
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

BC1 libraries

| KAPA HiFi MM (2X) | 100 uL |
| :---- | :---- |
| P5 primer mix (100 uM) | 1 uL |
| Plasmid library  | 4 uL\* |
| P7 primer (5 uM) BC1 | 20 uL |
| NF H2O | 75 uL |

\* make mix of 50 ng/uL and then add 5 uL to the mastermix  
BC2 libraries

| KAPA HiFi MM (2X) | 100 uL |
| :---- | :---- |
| P5 primer mix (100 uM) | 1 uL |
| Plasmid library  | 4 uL\* |
| P7 primer (5 uM) BC2 | 20 uL |
| NF H2O | 75 uL |

\* make mix of 50 ng/uL and then add 5 uL to the mastermix

**18 June 2025**

| pHRS-MYC355 Maxi plasmid isolation |
| :---- |
| **Seeding and culture of 293TX cells** |
| **Purification of AT10 plasmid libraries & testing on TapeStation D1000** |

**pHRS-MYC355 Maxi plasmid isolation**

The Maxi-Prep plasmid was isolated and the concentration for the same was measured:

**Seeding and culture of 293TX cells**

Two P7 vials of 293T-X cells were seeded into a single 15-cm culture plate in \~30 mL of media.

**Purification of AT10 plasmid libraries & testing on TapeStation D1000**

Both BC1 and BC2 samples were purified separately and each of the samples was run (1.5 uL per sample) on a 2% agarose gel.

The samples were all diluted 1:1000 to adjust the sample concentrations to the desired range for the High Sensitivity D5000 ScreenTape. Fairly clean profiles were seen for the  

**23rd June 2025**

| Transfection for pHRS-MYC355 viral packaging |
| :---- |
| **Plan & protocol for nucleosome reconstitution dry run** |
| **AT10 library pooling for MiSeq PE150 sequencing** |

**Transfection for pHRS-MYC355 viral packaging**

Two trials will be performed for the virus packaging:

Trial 1:

2 plates (10-cm dishes) with 6 ug of transfer plasmids and 6 ug each of the packaging and envelope vectors.

3 mL Opti-MEM \+ 22.85 uL pHRS-MYC335 \+ 14.5 uL pCMV-dR8.2 \+ 10.08 uL pMD2.G

Incubate for 5 mins.

Add 66 uL Turbofectin & incubate for 15 mins.

Split the solution dropwise across two plates. Label these plates as T1 pHRS-MYC355.  
   
Trial 2:

1 plate (10-cm dish) with 7.9 ug transfer plasmid, 8.3 ug packaging vector and 1.8 ug envelope plasmid (mass ratio 3:2:1)

1.5 mL Opti-MEM \+ 15.03 uL pHRS-MYC355 \+ 10 uL pCMV-dR8.2 \+ 1.52 uL pMD2.G

Incubate for 5 mins.

Add 33 uL Turbofectin & incubate for 15 mins.

Split the solution dropwise across two plates. Label these plates as T1 pHRS-MYC355.

Viralboost reagent added to culture on the day post-transfection

Virus packaged as normal (no concentration performed) → *More volume obtained in this case but evidently less concentrated, therefore I can package in lesser plates for a trial. For larger scale experiments i.e. multi-plate perhaps might be worth using the concentrator*

Transduction performed with Polybrene (we can use TransDux to further enhance efficiency of transduction here)

**2\. Plan & protocol for nucleosome reconstitution dry run**

The equipment being used during the pump-based reconstitution includes the following:

Slide-A-Lyzer™ MINI Dialysis Device, 7K MWCO

Ismatec ISM4212 pump (REGLO peristaltic pump)

Ismatec TYGON LMT \- 55 tubing

3\. **AT10 library pooling for MiSeq PE150 sequencing**

Set of i7 barcodes in the pooled AT10 \+ Nh100 libraries:

| AT10-Gcla-BC1 | CGGTTCAA |
| :---- | :---- |
| **AT10-Gcla-BC2** | **GCTGGATT** |
| **AT10-Hcla-BC1** | **TAACTCGG** |
| **AT10-Hcla-BC2** | **TAACAGTT** |
| **AT10-GCD-BC1** | **CGGTGACC** |
| **AT10-GCD-BC2** | **TACAGAGG** |
| **AT10-HCD-BC1** | **ATTGTCAA** |
| **AT10-HCD-BC2** | **TATGTCTT** |
| **AT10-GCC-BC1** | **ATACTCAA** |
| **AT10-GCC-BC2** | **GCTGAGAA** |
| **AT10-HCC-BC1** | **ATTGGAGG** |
| **AT10-HCC-BC2** | **TAGTCTAA** |
| **Nh100-BC1** | **AGCGTAGC** |
| **Nh100-BC2** | **CAGCCTCG** |

The concentrations of the samples are as follows:

| AT10-Gcla-BC1 | 116 nM |
| :---- | :---- |
| **AT10-Gcla-BC2** | **56 nM** |
| **AT10-Hcla-BC1** | **62.8 nM** |
| **AT10-Hcla-BC2** | **74.9 nM** |
| **AT10-GCD-BC1** | **55.5 nM** |
| **AT10-GCD-BC2** | **46 nM** |
| **AT10-HCD-BC1** | **37.5 nM** |
| **AT10-HCD-BC2** | **32.7 nM** |
| **AT10-GCC-BC1** | **104 nM** |
| **AT10-GCC-BC2** | **88.3 nM** |
| **AT10-HCC-BC1** | **117 nM** |
| **AT10-HCC-BC2** | **86.5 nM** |
| **Nh100-BC1** | **21.7 nM** |
| **Nh100-BC2** | **31 nM** |

It does not look like all the samples can be pooled into one pool with equal concentration representation. I will now try splitting these into two pools with pooling of the low concentration samples together.

| AT10-Gcla-BC1 | 4.31 |
| :---- | :---- |
| **AT10-Gcla-BC2** | **8.93** |
| **AT10-Hcla-BC1** | **7.96** |
| **AT10-Hcla-BC2** | **6.68** |
| **AT10-GCD-BC1** | **9** |
| **AT10-GCD-BC2** | **10.87** |
| **AT10-HCD-BC1** | **13.33** |
| **AT10-HCD-BC2** | **15.29** |
| **AT10-GCC-BC1** | **4.81** |
| **AT10-GCC-BC2** | **5.66** |
| **AT10-HCC-BC1** | **4.27** |
| **AT10-HCC-BC2** | **5.78** |
| **Nh100-BC1** | **23** |
| **Nh100-BC2** | **16.13** |

All BC1 samples pooled add up to 66.68 uL. Top up to 100 uL with TE buffer to achieve per sample concentration of 5 nM.

All BC1 samples pooled add up to 69.34 uL. Top up to 100 uL with TE buffer to achieve per sample concentration of 5 nM.

**24 June 2025**

| HCCv1cc clones whole plasmid sequencing |
| :---- |
| **Viralboost treatment for lentiviral packaging** |
| **Plan & protocol for nucleosome reconstitution dry run** |

1. **HCCv1cc clones whole plasmid sequencing**

The HCCv1cc clones 1-5 were all sent for whole plasmid sequencing.

2. **Viralboost treatment for lentiviral packaging**

The old media was aspirated out from all plates and fresh media was added to the plates \- supplemented with 20 uL of 500X Viralboost reagent.

3. **Plan & protocol for nucleosome reconstitution dry run**

![][image4]  
To test the setup a dry run is set up with the following:

A: Bottle with dialysis setup contains two tubes i.e. one coming in from B and one going out to C  
B: Bottle with MQ water  
C: Bottle collecting waste water

Flow rates:  
B → A : 0.7 mL/min  
A → C : 0.6 mL/min

![][image5]

This test experiment will also serve to clean up the tubing that is currently in use (and was passed to me by Tianyi).

Next, prepare the two reconstitution buffers (RB):

1. High salt RB (2 L)

298.2 g KCl  
20 mL 1 M Tris-HCl, pH 7.5  
4 mL 0.5 M EDTA  
2 mL DTT

2. Low salt RB (2 L)

37.28 g KCl  
20 mL 1 M Tris-HCl, pH 7.5  
4 mL 0.5 M EDTA  
2 mL DTT

Resuspend 1.54 g of DTT in 10 mL of water to prepare a 1 M stock if needed.

**Ligation trial repeat for ligands**

To test for large-scale amplification of dsDNA ligands, set up the following reaction:

Take 1 uL of the original oligos and dilute to 10 uL

10X

| NCAP\_F (10 uM) | 15 uL |
| :---- | :---- |
| NCAP\_R (10 uM) | 15 uL |
| 2X KAPA HiFi | 250 uL |
| diluted lig147 | 10 uL |
| NF H2O | 210 uL |

lig147\_T1

PCR4, SELEX\_AMP

| 95°C | 3 min |
| :---- | :---- |
| 98°C | 20 s |
| 55°C | 15 s       **14X** |
| 72°C | 30 s |
| 72°C | 40 min |
| 4°C | HOLD |

Pool the products and columns, purify and measure the concentration. Also, check the purity of the product on a high percentage agarose gel.

**26 June 2025**

| HCCv1cc clone 5-9 plasmid isolation & digestion check |
| :---- |
| **Test current dialysis apparatus with pump 1 tubing reset**  |
| **Final virus collection and filtering using 0.45 um filter**  |
| **Thaw LEDGF KO cell lines** |

1. **HCCv1cc clone 5-9 plasmid isolation & digestion check**

Plasmids for colonies 5-9 were isolated from the HCCv1cc plate. To check for the right colonies to be sequenced, MluI digestion was performed for all the clones.

| COMPONENT | 50 µl REACTION |
| :---- | :---- |
| DNA | 500 ng |
| 10X rCutSmart Buffer | 2.5 µl (1X) |
| MluI-HF | 0.5 µl (10 units) |
| Nuclease-free Water | to 25 µl |

Incubate at 37°C for 30 minutes as MluI-HF is Time-Saver qualified.

Run the products on a gel to check for which of the plasmids does NOT get digested cleanly by MluI \- since these should be the ones with insertion of the HCC oligo library.

Lanes 3-7 represent the colonies 5-9 post-digestion. HCC clone library has about 24 oligos that may contain MluI digestion sites. Therefore, the assumption can not be made that the lanes containing a single band are exclusively the empty vector. 

![][image6]

**3\. Final virus collection and filtering using 0.45 um filter**

Collect the second round of viral supernatant into the same tube as the previous day’s collection.

Pass supernatant through 0..45 um filters and collect in new tube.

Add 1 volume of concentrator per 4 volumes of the lentivirus. Incubate O/N at 4 degrees with gentle mixing for concentration.

NOTE: Virus packaged in this round:

- MYC355lv-T1 (35 mL \+ \~9 mL concentrator)  
- MYC335lv-T2 (18 mL \+ 4.5 mL concentrator)

**4\. Thaw LEDGF KO cell lines**

The following cell lines were thawed:

- GP5d LEDGF KO P4  
- HepG2 LEDGF KO P4  
- HAP1 P2  
- K562 LEDGF KO P4\*

\*The K562 LEDGF KO cells were thawed in a plain RPMI medium containing 2 mM glutamine.

**27 June 2025**

| HCCv1cc clone sequencing |
| :---- |
| **Re-run TapeStation for oligo AT10 \+ Nh100 BC1 & BC2 pools** |
| **Transfect 293TX cells for viral packaging of pHRS-Hclav1cc & pHRS-Gclav1cc** |
| **Concentrate virus for MYC355 T1 & T2** |

1. **HCCv1cc clone sequencing**

The HCC clones were all sent out for whole plasmid sequencing.

2. **Re-run TapeStation for oligo AT10 \+ Nh100 BC1 & BC2 pools**

Previous tapestation run on the high sensitivity D5000 yielded good results but also showed several high range fragments and overall showed much higher than expected concentration.

BC1 pool  
**![][image7]**

BC2 pool

**![][image8]**

To fix the issues with the concentration, both the BC1 and BC2 samples were run with a 50-fold and 100-fold dilution on the HS D1000 ScreenTape.

**3\. Transfect 293TX cells for viral packaging of pHRS-Hclav1cc & pHRS-Gclav1cc**

pHRS-Hclav1cc:

4 plates (10-cm dishes) with 6 ug of transfer plasmids and 6 ug each of the packaging and envelope vectors.

6 mL Opti-MEM \+ 41.3 uL pHRS-Hclav1cc \+ 20.2 uL pMD2.G \+ 29 uL pCMV-dR8.2

Incubate for 5 mins.

Add 132 uL Turbofectin & incubate for 15 mins.

Split the solution dropwise across two plates. Label these plates as T1 pHRS-MYC355.  
   
pHRS-Gclav1cc:

4 plates (10-cm dish) with 6 ug of transfer plasmids and 6 ug each of the packaging and envelope vectors.

6 mL Opti-MEM \+ 39.5 uL pHRS-Gclav1cc \+ 20.2 uL pMD2.G \+ 29 uL pCMV-dR8.2

Incubate for 5 mins.

Add 33 uL Turbofectin & incubate for 15 mins.

Split the solution dropwise across two plates. Label these plates as T1 pHRS-MYC355.

**4\. Concentrate virus for MYC355 T1 & T2**

Centrifugation: Centrifuge at 3,090g\* for 25 min at 4 degrees, remove the supernatant carefully. 

\*this was purely because the maximum speed on the smaller centrifuge in the TC room was 3090g

Note: The lentiviral particles appear as white pellet at the bottom of the tube.  Do not disturb the white pellet. Each of the white pellets is resuspended in 5 mL of DMEM media and then aliquots are made with \~500 uL per tube. These tubes are then stored at \-80oC in the pHRS virus box. 

**28 June 2025**

| Add ViralBoost containing media to cells undergoing viral packaging |
| :---- |
| **Prepare fresh 293TX media** |

**1\. Add ViralBoost containing media to cells undergoing viral packaging**

Prepare 80 mL of fresh media and take out 160 uL of media from the mix. Then add 160 uL ViralBoost and mix gently by pipetting. Distribute 10 mL of the media to each plate.

**2\. Prepare fresh 293TX media**

| HI FBS (10%) | 50 mL |
| :---- | :---- |
| Sodium Pyruvate (100 mM) | 5 mL (1 mM final) |
| Pen-Strep (10kU/mL) | 5 mL (100 U/mL) |
| DMEM | Top up to 500 mL |

**30 June 2025**

| Viral supernatant collection for pHRS-Hcla & pHRS-Gcla virus packaging |
| :---- |
| **Seed new 293TX cells for next batch of virus packaging** |
| **Passage and seed HAP1 cells for transduction with MYC355-T1, MYC355-T2 viruses** |
| **Digest pHRS-Gcla-ShhBC with MluI-HF** |

1\. **Viral supernatant collection for pHRS-Hcla & pHRS-Gcla virus packaging**

Collect the media and filter through (0.45 um filter) along with media collected on the previous day. Add lentiviral concentrator solution to all media and incubate O/N at 4 degrees.

2\. **Seed new 293TX cells for next batch of virus packaging**

Harvest 293TX P7 and count cells to seed 2.5 million cells per 10-cm plate (8 dishes total).

3\. **Passage and seed HAP1 cells for transduction with MYC355-T1, MYC355-T2 viruses**

Harvest HAP1 and K562 cells and seed in two 6-well plates with 300K cells per well

4\. **Digest pHRS-Gcla-ShhBC with MluI-HF**

4X

| COMPONENT | 25 µl REACTION |
| :---- | :---- |
| pHRS-Gcla-ShhBC | 1000 ng |
| 10X rCutSmart Buffer | 2.5 µl (1X) |
| MluI-HF | 1 µl (20 units) |
| Nuclease-free Water | to 25 µl |

Incubate at 37°C for 30 minutes as MluI-HF is Time-Saver qualified.

Combine the digested DNA and purify the same with a PCR purification column.

Set up the reaction on ice (see table).

pHRS-Hcla (3X)

| HclaShhvec (50 ng) | 4.09 uL |
| :---- | :---- |
| ShhBColigo1PCR2 (5 ng)\* | 1 uL |
| 2X NEB HiFi Assembly Mix | 10 uL |
| NF H2O | 4.91 uL |

pHRS-GCD (3X)

| GCDShhvec (50 ng) | 2.6 uL |
| :---- | :---- |
| ShhBColigo1PCR2 (5 ng)\* | 1 uL |
| 2X NEB HiFi Assembly Mix | 10 uL |
| NF H2O | 6.4 uL |

pHRS-HCD (3X)

| HCDShhvec (50 ng) | 2.69 uL |
| :---- | :---- |
| ShhBColigo1PCR2 (5 ng)\* | 1 uL |
| 2X NEB HiFi Assembly Mix | 10 uL |
| NF H2O | 6.31 uL |

pHRS-GCC (3X)

| GCCShhvec (50 ng) | 2.15 uL |
| :---- | :---- |
| ShhBColigo1PCR2 (5 ng)\* | 1 uL |
| 2X NEB HiFi Assembly Mix | 10 uL |
| NF H2O | 6.85 uL |

pHRS-Nh100 (3X)

| Nh100Shhvec (50 ng) | 2.56 uL |
| :---- | :---- |
| ShhBColigo1PCR2 (5 ng)\* | 1 uL |
| 2X NEB HiFi Assembly Mix | 10 uL |
| NF H2O | 6.44 uL |

**1 July 2025**

| Transduction of K562 & HAP1 cells with MYC355 T1 & T2 viruses |
| :---- |
| **Transform ShhBC ligation products into E.coli** |
| **Concentrate lentivirus for pHRS-Gcla and pHRS-Hcla** |

1. **Transduction of K562 & HAP1 cells with MYC355 T1 & T2 viruses**

K562

W1 \- 100 uL MYC355-T1  
W2 \- 200 uL MYC355-T1  
W3 \- 100 uL MYC355-T2  
W4 \- 200 uL MYC355-T2

HAP1

W1 \- 100 uL MYC355-T1  
W2 \- 200 uL MYC355-T1  
W3 \- 100 uL MYC355-T2  
W4 \- 200 uL MYC355-T2

W1 \- 1.890 mL media \+ 100 uL virus T1 \+ 10 uL TransDux  
W2 \- 1.790 mL media \+ 200 uL virus T1 \+ 10 uL TransDux  
W3 \- 1.890 mL media \+ 100 uL virus T2 \+ 10 uL TransDux  
W4 \- 1.790 mL media \+ 200 uL virus T2 \+ 10 uL TransDux

Mix gently by pipetting and then add the mix for each well to the annotated wells. Label the wells as indicated above for both plates.

2. **Transform ShhBC ligation products into E.coli**

For efficiency, it’s always best to transform 100 pg of DNA into 50 uL of competent cells. For the 5 reactions I have, transform 0.1 ng into 3 tubes each \[total 15 tubes\].

Dilute all reactions to 0.1 ng/uL stocks and then add 1 uL of these stocks to each competent cell tube.

Rest of the transformation protocol stays unchanged. Pool the cultures of each tube together and transfer into a falcon & store O/N.

After pooling, each culture type has about 0.3 ng of DNA transformed into the bacteria. This converts to about 0.1 pg/uL. Use 200 uL of this culture to plate on an LB-Amp plate (\~20 pg). 

3. **Concentrate lentivirus for pHRS-Gcla and pHRS-Hcla**

Lentivirus for pHRS-Gcla and pHRS-Hcla were concentrated and aliquot into 0.5 mL batches for both viruses.

NOTE: For the pHRS-Gcla, the virus was resuspended in DMEM, low-glucose {by oversight} \- in theory this should be ok since virus can also be resuspended and stored in PBS.

**2 July 2025**

| Re-cloning of ShhBC into individual gene block vector pools |
| :---- |
| **Check cells and change media \+ Seed 293TX cells for virus packaging** |

1. **Re-cloning of ShhBC into individual gene block vector pools**

Upon checking the plates that were transformed the day before, no colonies at all were seen across the plates.

For troubleshooting:

- Run the ligation samples for ShhBC on a 0.8% agarose gel to check for the product size. Run a pHRS-gene block vector (without ShhBC and oligo pool) as a control.

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

5X

| 2X Phusion Mix  | 50 uL |
| :---- | :---- |
| ShhF1 10 uM | 5 uL |
| ShhR1 10 uM | 5 uL |
| pHRS-Nh100-GB (10 ng) | 5 uL |
| NF H2O | 35 uL |

Transfer 20 uL to 5 tubes for each plasmid subtype:

| 98°C | 30 s |
| :---- | :---- |
| **98°C** | **10 s** |
| **64°C** | **30 s       35X** |
| **72°C** | **5 min** |
| 72°C | 10 min |
| 4°C | HOLD |

2. **Check cells and change media \+ Seed 293TX cells for virus packaging**

The 293TX cells were harvested and 2.5 million cells were seeded into each plate of a 10-well plate.

Totally 8 plates were seeded for transfection for lentiviral packaging while 1 plate was seeded for the expansion of the cells.

Media was changed for the GP5d and HepG2 cells.  
*NOTE: GP5d cells may need to be passaged tomorrow while the HepG2 cells are still growing steadily but slowly.* 

For K562 cells that were transduced with the MYC335 viruses, there is no need to do anything today.

While for the HAP1 cells that were transduced, due to the nature of the cells they grow pretty fast and the wells are almost 70% confluent at this point. Since it is not recommended to harvest prior to 48 hours (to allow for protein/gene accumulation )

*NOTE: In retrospect, 300K cells per well for HAP1 for transduction might be too much and may not be in favour of high MOI. For the HAP1 cells this experiment may need to be repeated with lower cell density while a similar amount of virus can be used.*

Harvest the two control wells of HAP1 cells and reduce the seeding intensity to 1:100, so that the growth of these cells can be controlled.

**3 July 2025**

| Purify Shhvec PCR product |
| :---- |
| **Set up assembly and cloning of Hcla-Shhvec with Shholigo** |
| **Harvest transduced HAP1 cells and transfer to 10-cm plates** |
| **Transfect pHRS-GCD & pHRS-HCD for viral packaging** |

**2\. Set up assembly and cloning of Hcla-Shhvec with Shholigo**

pHRS-Hcla (3X)

| HclaShhvec (50 ng) |  uL |
| :---- | :---- |
| ShhBColigo1PCR2 (5 ng) | 1 uL |
| 2X NEB HiFi Assembly Mix | 10 uL |
| NF H2O |  uL |

Post-assembly transform 2 uL of the reaction directly into 50 uL of competent cells (5X).

**4\. Transfect pHRS-GCD & pHRS-HCD for viral packaging**

pHRS-HCDv1cc:

4 plates (10-cm dishes) with 6 ug of transfer plasmids and 6 ug each of the packaging and envelope vectors.

6 mL Opti-MEM \+ 6 ug pHRS-HCDv1cc \+ 20.2 uL pMD2.G \+ 29 uL pCMV-dR8.2

Incubate for 5 mins.

Add 132 uL Turbofectin & incubate for 15 mins.

Split the solution dropwise across two plates. Label these plates as pHRS-HCD.  
   
pHRS-GCDv1cc:

4 plates (10-cm dish) with 6 ug of transfer plasmids and 6 ug each of the packaging and envelope vectors.

6 mL Opti-MEM \+ 6 ug pHRS-GCDv1cc \+ 20.2 uL pMD2.G \+ 29 uL pCMV-dR8.2

Incubate for 5 mins.

Add 132 uL Turbofectin & incubate for 15 mins.

Split the solution dropwise across two plates. Label these plates as pHRS-GCD.

**6 July 2025**

| Isolate HclaShhBC plasmids |
| :---- |
| **Harvest pHRS-HCD & pHRS-GCD viral supernatant & set up lentiviral concentration** |
| **Infection of HAP1 and GP5d delLEDGF cells with MYC355, pHRS-Hcla & pHRS-Gcla viruses** |
| **Transfection of 293TX cells with pHRS-HCC & pHRS-GCC libraries for lentiviral packaging** |
| **K562-delLEDGF cells were also seeded at 150K per well across 3 6-well plates** |

1. **Isolate HclaShhBC plasmids**

HclaShhBC-1 & HclaShhBC-2 plasmids were isolated and concentration was estimated. These will be sent for whole plasmid sequencing to check the current cloning protocol as well as to estimate the diversity of the introduced Shh barcodes.

2. **Harvest pHRS-HCD & pHRS-GCD viral supernatant & set up lentiviral concentration**

3. **Infection of HAP1 and GP5d delLEDGF cells with MYC355, pHRS-Hcla & pHRS-Gcla viruses**

HAP1

Plate1:  
W1-W3 \- 200 uL MYC355-T1  
W4-W6 \- 200 uL MYC355-T2

Plate2:  
W1-W3 \- 200 uL pHRS-Hclav1  
W4-W6 \- 200 uL pHRS-Gclav1

Plate3:

W1: 300 uL pHRS-Hclav1  
W2: 300 uL pHRS-Gclav1

Plate1:  
W1-W3 \- 5.394 mL media \+ 600 uL MYC355-T1 \+ 6 uL Polybrene  
W4-W6 \- 5.394 mL media \+ 600 uL MYC355-T2 \+ 6 uL Polybrene

Plate2:  
W1-W3 \- 5.394 mL media \+ 600 uL pHRS-Hclav1 \+ 6 uL Polybrene  
W4-W6 \- 5.394 mL media \+ 600 uL pHRS-Gclav1 \+ 6 uL Polybrene

Plate3:

W1: 1.698 mL \+ 300 uL pHRS-Hclav1 \+ 2 uL  
W2: 1.698 mL \+ 300 uL pHRS-Gclav1 \+ 2 uL

GP5d

Plate1:  
W1-W3 \- 200 uL MYC355-T1  
W4-W6 \- 200 uL MYC355-T2

Plate2:  
W1-W3 \- 200 uL pHRS-Hclav1  
W4-W6 \- 200 uL pHRS-Gclav1

Plate3:

W1: 300 uL pHRS-Hclav1  
W2: 300 uL pHRS-Gclav1

Plate1:  
W1-W3 \- 5.394 mL media \+ 600 uL MYC355-T1 \+ 6 uL  
W4-W6 \- 5.394 mL media \+ 600 uL MYC355-T2 \+ 6 uL

Plate2:  
W1-W3 \- 5.394 mL media \+ 600 uL pHRS-Hclav1 \+ 6 uL  
W4-W6 \- 5.394 mL media \+ 600 uL pHRS-Gclav1 \+ 6 uL

Plate3:

W1: 1.698 mL \+ 300 uL pHRS-Hclav1 \+ 2 uL  
W2: 1.698 mL \+ 300 uL pHRS-Gclav1 \+ 2 uL

Mix gently by pipetting and then add the mix for each well to the annotated wells. Label the wells as indicated above for both plates.

4. **Transfection of 293TX cells with pHRS-HCC & pHRS-GCC libraries for lentiviral packaging**

pHRS-HCCv1cc:

4 plates (10-cm dishes) with 6 ug of transfer plasmids and 6 ug each of the packaging and envelope vectors.

6 mL Opti-MEM \+ 6 ug pHRS-HCDv1cc \+ 20.2 uL pMD2.G \+ 29 uL pCMV-dR8.2

Incubate for 5 mins.

Add 132 uL Turbofectin & incubate for 15 mins.

Split the solution dropwise across two plates. Label these plates as pHRS-HCD.  
   
pHRS-GCCv1cc:

4 plates (10-cm dish) with 6 ug of transfer plasmids and 6 ug each of the packaging and envelope vectors.

6 mL Opti-MEM \+ 6 ug pHRS-GCDv1cc \+ 20.2 uL pMD2.G \+ 29 uL pCMV-dR8.2

Incubate for 5 mins.

Add 132 uL Turbofectin & incubate for 15 mins.

Split the solution dropwise across two plates. Label these plates as pHRS-GCD.

5. **K562-delLEDGF cells were also seeded at 150K per well across 3 6-well plates**

**7 July 2025**

| Send HclaShhBC plasmids for whole plasmid sequencing |
| :---- |
| **Concentrate pHRS-HCD and pHRS-GCD viruses** |
| **Image the cells transduced with MYC355 and pHRS-Hcla, pHRS-Gcla viruses** |
| **Transduce the K562-delLEDGFb cells with MYC355, pHRS-Hcla, pHRS-Gcla viruses** |
| **Change media for 293TX cells that are packaging virus for pHRS-HCC, pHRS-GCC** |
| **Assembly for pHRS-GclaShhBC-M & Gcla-AT10-pool** |
| **Transformation of pHRS-HCDShhBC & pHRS-GCDShhBC assembly products** |

**4\. Transduce the K562-delLEDGFb cells with MYC355, pHRS-Hcla, pHRS-Gcla viruses**

K562

Plate1:  
W1-W3 \- 200 uL MYC355-T1  
W4-W6 \- 200 uL MYC355-T2

Plate2:  
W1-W3 \- 200 uL pHRS-Hclav1  
W4-W6 \- 200 uL pHRS-Gclav1

Plate3:

W1: 300 uL pHRS-Hclav1  
W2: 300 uL pHRS-Gclav1

Plate1:  
W1-W3 \- 5.394 mL media \+ 600 uL MYC355-T1 \+ 6 uL  
W4-W6 \- 5.394 mL media \+ 600 uL MYC355-T2 \+ 6 uL

Plate2:  
W1-W3 \- 5.394 mL media \+ 600 uL pHRS-Hclav1 \+ 6 uL  
W4-W6 \- 5.394 mL media \+ 600 uL pHRS-Gclav1 \+ 6 uL

Plate3:

W1: 1.698 mL \+ 300 uL pHRS-Hclav1 \+ 2 uL  
W2: 1.698 mL \+ 300 uL pHRS-Gclav1 \+ 2 uL

Mix gently by pipetting and then add the mix for each well to the annotated wells. Label the wells as indicated above for both plates.

**6\. Assembly for pHRS-GclaShhBC-M & Gcla-AT10-pool**

pHRS-Gcla-ShhBC (5X)

| GclaShh-lib (50 ng) | 0.42 uL |
| :---- | :---- |
| Gcla-AT10-pool (8 ng) | 0.58 uL |
| 2X NEB HiFi Assembly Mix | 10 uL |
| NF H2O | 9 uL |

Incubate at 50 degrees for 1 hour. Store reactions at \-20 O/N.

For 2 out of the 5 reactions mentioned here, the AT10-Gcla-PCR3 pool was used (conc. 15 ng/uL).

**7\. Transformation of pHRS-HCDShhBC & pHRS-GCDShhBC assembly products**

Add 2 uL of the pooled ligation product per 50 uL of competent cells. For each assembly, perform 5 transformations.

Plate 200 uL of the pooled transformants into a single 10-cm LB-AMP plate. 

**8 July 2025**

| Image the cells transduced with MYC355 and pHRS-Hcla, pHRS-Gcla viruses |
| :---- |
| **Transduce the HepG2-delLEDGFb cells with MYC355, pHRS-Hcla, pHRS-Gcla viruses** |
| **Change media for 293TX cells that are packaging virus for pHRS-HCC, pHRS-GCC** |
| **Change media for 293TX master plate and HAP1 cells** |

**1\. Image the cells transduced with MYC355 and pHRS-Hcla, pHRS-Gcla viruses**

HAP1

**![][image9]**

**![][image10]**

**![][image11]**  
**![][image12]**

**![][image13]**

**GP5d delLEDGF**  
**![][image14]**

**![][image15]**

**![][image16]**

**![][image17]![][image18]**

K562

![][image19]

**![][image20]**

**![][image21]**  
**![][image22]**  
**![][image23]**

**2\. Transduce the HepG2-delLEDGFb cells with MYC355, pHRS-Hcla, pHRS-Gcla viruses**

HepG2

Plate1:  
W1-W3 \- 200 uL MYC355-T1  
W4-W6 \- 200 uL MYC355-T2

Plate2:  
W1-W3 \- 200 uL pHRS-Hclav1  
W4-W6 \- 200 uL pHRS-Gclav1

Plate3:

W1: 300 uL pHRS-Hclav1  
W2: 300 uL pHRS-Gclav1

Plate1:  
W1-W3 \- 5.394 mL media \+ 600 uL MYC355-T1 \+ 6 uL  
W4-W6 \- 5.394 mL media \+ 600 uL MYC355-T2 \+ 6 uL

Plate2:  
W1-W3 \- 5.394 mL media \+ 600 uL pHRS-Hclav1 \+ 6 uL  
W4-W6 \- 5.394 mL media \+ 600 uL pHRS-Gclav1 \+ 6 uL

Plate3:

W1: 1.698 mL \+ 300 uL pHRS-Hclav1 \+ 2 uL  
W2: 1.698 mL \+ 300 uL pHRS-Gclav1 \+ 2 uL

Mix gently by pipetting and then add the mix for each well to the annotated wells. Label the wells as indicated above for both plates.

**3\. Change media for 293TX cells that are packaging virus for pHRS-HCC, pHRS-GCC**

Media was changed for the pHRS-HCC and pHRS-GCC packaging cells with 10 mL per plate (containing 40 uL of Viralboost). Supernatant was collected and stored at 4 degrees.

**4\. Change media for 293TX master plate and HAP1 cells**

**10 July 2025**

| Image the cells transduced with MYC355 and pHRS-Hcla, pHRS-Gcla viruses \- HepG2 & K562 |
| :---- |
| **Freeze down stock tubes for HAP1 & GP5d cells transduced with MYC355 and pHRS-Hcla, pHRS-Gcla viruses** |
| **Transfect HAP1\_MYC335 T1 & T2 as well as GP5d\_MYC335 T1 & T2 with 1 ug of Super PiggyBac (per well)** |
|  |

**2\. Freeze down stock tubes for HAP1 & GP5d cells transduced with MYC355 and pHRS-Hcla, pHRS-Gcla viruses**

HAP1 Freezing medium: IMDM \+ 20% FBS \+ 10% DMSO (10 mL FBS \+ 5 mL DMSO \+ 35 mL IMDM)

**3\. Transfect HAP1\_MYC335 T1 & T2 as well as GP5d\_MYC335 T1 & T2 with 2 ug of Super PiggyBac (per well)**

HAP1 (+MYC335\_T1 & \+MYC335\_T2)

Tube1: 1250 uL \+ 50 uL Lipo3000  
Tube2: 1250 uL \+ 50 uL P3000 \+ 20 ug SPB

GP5d (+MYC335\_T1 & \+MYC335\_T2)

Tube1: 1250 uL \+ 50 uL Lipo3000  
Tube2: 1250 uL \+ 50 uL P3000 \+ 20 ug SPB

NOTES: Incubate tubes separately for 5 mins each. Add DNA mix to lipo3000 tubes and then incubate for 15 mins, RT.

Add drop-wise to the cells.

**14 July 2025**

| Harvest and seed HepG2del cells again for expansion and stable growth prior to freezing down stocks |
| :---- |
| **Prepare stocks for K562 cells transduced with viruses** |
| **Set up tubing apparatus for water transfer to test dialysis apparatus overnight** |
| **Write and test pipetting template on Beckman i7** |
| **Write programs on the robot for inoculating 10 uL of culture into plates containing 500 uL media** |

**2\.  Prepare stocks for K562 cells transduced with viruses**

Freezing medium for K562 \= 95% complete medium \+ 5% DMSO

Freeze about 1.5-2 million cells per vial  
**15 July 2025**

| Transfect the pHRS-Nh100 libraries into 293TX cells for virus packaging |
| :---- |
| **Prepare stocks for K562del cells** |
| **Prepare stocks for HepG2del cells** |
| **Move already prepared stocks to liquid nitrogen** |
| **Write programs on the robot for inoculating 10 uL of culture into plates containing 500 uL media** |
| **Set up dialysis pump for overnight operation for testing** |

1. **Transfect the pHRS-Nh100 libraries into 293TX cells for virus packaging**

pHRS-Nh100:

4 plates (10-cm dishes) with 6 ug of transfer plasmids and 6 ug each of the packaging and envelope vectors.

6 mL Opti-MEM \+ 18 ug pHRS-Nh100 \+ 20.2 uL pMD2.G \+ 29 uL pCMV-dR8.2

Incubate for 5 mins.

Add 132 uL Turbofectin & incubate for 15 mins.

**17 July 2025**

| Collect Nh100 first viral supernatant \+ Add repeat dose of Viralboost |
| :---- |
| **Figure out taping system for peristaltic pump tubing feat Tianyi** |
| **Check confluence of HAP1 and GP5d\_del MYC335 transduced cells \+ PB & passage to multiple wells if over confluent** |
| **Chemical transformation and plating for previously assembled ShhBC libraries as well as pHRS-GclaAT10-ShhBC assembly products** |
| **Finish writing and testing nucleosome recon protocol on i7** |
| **Transfer Fangjie pipetting template to i7** |

3\. **Check confluence of HAP1 and GP5d\_del MYC335 transduced cells \+ PB & passage to multiple wells if over confluent**

All the HAP1 plates are very confluent while the GP5d (with PB) plates are quite confluent. Harvest these and seed into a 6-well plate (per experiment) \[150K cells per well\]. Out of these, 5 wells will be transfected with SPB while one will be a control.

For regular extended culture, each harvested plate will be seeded into 3 10-cm plates each.

Only media is changed for the GP5ddel cells that are transduced with the MYC335 viruses (but not treated with SPB).

HAP1 media:

HAP1 media (500 mL)

| IMDM | Make up to 500 mL |
| :---- | :---- |
| HI FBS (10%) | 50 mL |

4\. **Chemical transformation and plating for previously assembled ShhBC libraries as well as pHRS-GclaAT10-ShhBC assembly products**

Add 2 uL of the pooled ligation product per 50 uL of competent cells. For each assembly, perform 5 transformations. Plate 200 uL of the pooled transformants into a single 10-cm LB-AMP plate.   
**5\. Finish writing and testing nucleosome recon protocol on i7**

HAP1 (+MYC335\_T1(+PB) & \+MYC335\_T2(+PB))

Tube1: 1250 uL \+ 50 uL Lipo3000  
Tube2: 1250 uL \+ 50 uL P3000 \+ 25 ug SPB

GP5d (+MYC335\_T1(+PB) & \+MYC335\_T2(+PB))

Tube1: 1250 uL \+ 50 uL Lipo3000  
Tube2: 1250 uL \+ 50 uL P3000 \+ 25 ug SPB

NOTES: Incubate tubes separately for 5 mins each. Add DNA mix to lipo3000 tubes and then incubate for 15 mins, RT.

Add drop-wise to the cells.

**Prepare HepG2 culture medium for sorting:**

HepG2 media (100 mL)

| DMEM high glucose | Make up to 100 mL |
| :---- | :---- |
| HI FBS (50%) | 50 mL |
| L-Glutamine | 1 mL |
| Sodium Pyruvate | 1 mL |
| Pen-Strep | 1 mL |

**23 July 2025**

| Change media for HAP1, GP5d PB-treated cells |
| :---- |
| **Change media for HepG2 cells \+ Thaw new HepG2del non-treated cells** |
| **Take images of mCherry and GFP cells**  |
| **gDNA extraction for HAP1, GP5d PB-treated and non-PB MYCT1, MYCT2 cells** |
| **Test recon protocol with magnetic rack stacking adjustment** |
| **Transfer Fangjie pipetting template to i7** |
| **Set up FJ\_FL\_Q3 plate for bacterial growth and O/N incubation at 37 degrees** |

**24 July 2025**

| Sorting of HepG2del Gcla, Hcla T1 & T2 cells for mCherry+ cells |
| :---- |
| **Images of mCherry and GFP cells** |
| **Test nucleosome reconstitution protocol with liquids \- test run** |
| **Transfer Fangjie pipetting template to i7** |
| **Set up Maxi cultures for remaining AT10-ShhBC pools** |

**1.Sorting of HepG2del Gcla, Hcla T1 & T2 cells for mCherry+ cells**

Trypsinize the following plates:

HepG2del \- GclaT1  
HepG2del \- HclaT1  
HepG2del \- GclaT2  
HepG2del \- HclaT2

The cells need to be in the sorting buffer:

1X Phosphate Buffered Saline (without Ca/Mg)   
1% Fetal Bovine Serum (heat-inactivated)    
1 mM EDTA   
25 mM HEPES pH 7.0   
0.2 um filter sterilize, store at 4°C   
Prepare 250 mL of this sorting buffer:

2.5 mL FBS  
0.5 mL EDTA  
6.25 mL HEPES  
Top up with PBS

Count cells and suspend in densities of about 10-20 million per mL \- total \~1 mL in FACS tubes after passing through the filter on the head.

Also prepare collection tubes (carry both spare FACS tubes as well as 15 mL falcon tubes) for adding the sorting media (high % FBS).

While harvesting the cells, seed 30-50% of the original pool back into a fresh 10-cm plate (per sample) for continued culture.

Also prepare fresh media for the HepG2 cells:

HepG2 media (500 mL)

| DMEM high glucose | Make up to 500 mL |
| :---- | :---- |
| HI FBS (10%) | 50 mL |
| L-Glutamine | 5 mL |
| Sodium Pyruvate | 5 mL |

**2\. Images of mCherry and GFP cells**

**3\. Test nucleosome reconstitution protocol with liquids \- test run**

**4\. Transfer Fangjie pipetting template to i7**

**5\. Set up Maxi cultures for remaining AT10-ShhBC pools**

Set up the pHRS-Hcla-ShhBC and pHRS-GCC-ShhBC for a large scale Maxi culture O/N. Use 1 L of culture per Maxi culture in this case.

**25 July 2025**

**1\. Sorting of HepG2del cells:**

Cells were sorted and the preliminary results of the sort can be seen below. Cells are generally stressed after the sort and are being cultured in P/S containing high serum media.

Around 12 hours post the sort, the surviving cells in culture don’t really show mCherry reporter expression. This could be because cells are experiencing growth and transcriptional lag due to stress (?).

Additionally, based on the preliminary results I see, the sorting strategy needs to be further refined. Take cues from the PB enhancer paper and use gating strategy as follows:

![][image24]  
![][image25]

![][image26]

**2\. MiSeq library re-prep with new PCR primers**

PCR 1:

P5\_staggered\_F(™) \= 59 C  
P7\_BC1\_R \= 62 C  
Annealing temperature \= 59 C

For preparing the P5 primer mix, add 5 uL of each staggered primer to create a 100 uM master-mix.

Per library (5X reactions):

| KAPA HiFi MM (2X) | 62.5 uL |
| :---- | :---- |
| P5 primer mix (100 uM) | 1.25 uL |
| Plasmid library  | 250 ng (50 ng per reaction) |
| P7 primer (5 uM) | 12.5 uL |
| NF H2O | Up to 125 uL |

| 95 C | 1 min |
| :---- | :---- |
| 98 C | 15 s |
| 59 C | 30 s |
| 72 C | 20 s |
| 72 C | 2 min |
| 4 C | Forever |

10 cycles of amplification was performed

![][image27]

**HepG2del-GclaT1**

![][image28]![][image29]

**HepG2del-GclaT2**  
**![][image30]![][image31]**

**HepG2del-HclaT1**

**![][image32]![][image33]**

**HepG2del-HclaT2**  
**![][image34]![][image35]**

**HepG2del-GclaT1+ post-sorted**  
**![][image36]![][image37]**

**HepG2del-GclaT2- post-sorted**  
**![][image38]![][image39]**  
**HepG2del-GclaT2+ post-sorted**  
**![][image40]![][image41]**

**HepG2del-HclaT1- post-sorted**  
**![][image42]![][image43]**

**HepG2del-HclaT1+ post-sorted**  
**![][image44]![][image45]**

**HepG2del-HclaT2- post-sorted**  
**![][image46]![][image47]**

**HepG2del-HclaT2+ post-sorted**  
**![][image48]![][image49]**

**HepG2del-WT**  
**![][image50]![][image51]**

**26 July 2025**

GP5d\_del\_MYCT1-PB  
**![][image52]![][image53]**  
GP5d\_del\_MYCT1-PB2  
![][image54]![][image55]

GP5d\_del\_MYCT2-PB  
![][image56]![][image57]  
GP5d\_del\_MYCT2-PB2  
![][image58]![][image59]

HAP1\_MYCT1-PB  
![][image60]![][image61]  
HAP1\_MYCT1-PB2  
![][image62]![][image63]

HAP1\_MYCT2-PB  
![][image64]![][image65]  
HAP1\_MYCT2-PB2  
![][image66]![][image67]

**28 July 2025**

**PE PCR for AT10, Nh100 libraries**

Add 20 uL nuclease-free water to two wells of the barcode plates:

Gcla \- A1, A2  
Hcla \- B1, B2  
GCD \- C1, C2  
HCD \- D1, D2  
GCC \- E1, E2  
HCC \- F1, F2  
Nh100 \- G1, G2

Use the complete 19 uL here to set up an individual 50 uL reaction for the final PE PCR.

Per library (per reaction):

| KAPA HiFi MM (2X) | 25 uL |
| :---- | :---- |
| Primer mix | 19 uL |
| PE PCR1 | 10 ng |
| NF H2O | Up to 50 uL |

| 95 C | 1 min |
| :---- | :---- |
| 98 C | 15 s |
| 62 C | 30 s |
| 72 C | 20 s |
| 72 C | 2 min |
| 4 C | Forever |

10 cycles of amplification was performed

Pool the two barcodes of each type per condition and perform AmpureXP purification:

- Add 100 uL of beads to the pooled PCR products. Mix thoroughly and incubate at RT for 5 mins.  
- Place tubes on magnetic rack for 5 mins.  
- Aspirate clear supernatant and discard the same.  
- Add 200 uL 70% ethanol and incubate with beads for about 30 seconds. Repeat this step once more.  
- Air dry beads on the magnet for 2-3 mins.  
- Add 30 uL TE buffer and resuspend beads thoroughly. Incubate at RT for 5 mins.  
- Place back on magnet for 5 mins to separate the elute. Measure concentration on NanoDrop and also run TapeStation D1000 ScreenTape to check the size of the libraries.

**Cell culture maintenance**

HepG2del cultures:

- Check how the sorted cells are growing and change media to high serum media if the growth is still retarded  
- Change media for the other HepG2del cultures  
- Record images for the post-sorted cells

HAP1, GP5d cultures

- Check confluence of cultures  
- If too confluent, harvest → combine each type of cells and then seed at lower density into a single flask per condition

**29 July 2025**

**AT10 & Nh100 libraries**

Gcla\_A1+A2 \= 94.5 nM  
Hcla\_B1+B2 \= 330 nM  
GCD\_C1+C2 \= 428 nM  
HCD\_D1+D2 \= 380 nM  
GCC\_E1+E2 \= 170 nM  
HCC\_F1+F2 \= 98.5 nM  
Nh100\_G1+G2 \= 494 nM

Expected size for AT10 libraries is 444-445 bp and most of these samples show values along the expected lines.

For the Nh100 samples the expected size is \~293 bp so the size of 295 seen on the TapeStation is also correct.  
To make a pool with each library at 10 nM, add the following amounts \[Total volume 100 uL\]:

Gcla\_A1+A2 \= 10.6 uL  
Hcla\_B1+B2 \= 3.1 uL  
GCD\_C1+C2 \= 2.4 uL  
HCD\_D1+D2 \= 2.7 uL  
GCC\_E1+E2 \= 6 uL  
HCC\_F1+F2 \= 10.2 uL  
Nh100\_G1+G2 \= 2.1 uL

Add 62.9 uL TE buffer to make up volume to 100 uL.

The mix was diluted 1:100 and 2 uL of this was run on a D1000 TapeStation:

![][image68]![][image69]  
![][image70]

GP5d\_del\_MYCT1+PB  
![][image71]![][image72]

GP5d\_del\_MYCT2+PB  
![][image73]![][image74]

GP5d\_del\_MYCT1+PB2  
![][image75]![][image76]

GP5d\_del\_MYCT2+PB2  
![][image77]![][image78]

HepG2del\_GclaT1\_sorted (-)  
![][image79]![][image80]

HepG2del\_GclaT1\_sorted (+)  
![][image81]![][image82]

HepG2del\_GclaT2\_sorted (-)  
![][image83]![][image84]

HepG2del\_GclaT2\_sorted (+)  
![][image85]![][image86]

HepG2del\_HclaT1\_sorted (-)  
![][image87]![][image88]

HepG2del\_HclaT1\_sorted (+)  
![][image89]![][image90]

HepG2del\_HclaT2\_sorted (-)  
![][image91]![][image92]

HepG2del\_HclaT2\_sorted (+)  
![][image93]![][image94]

**30 July 2025**

1. **Isolation of GCC-ShhBC v1 plasmid library**  
2. **Check cell confluency and change media**  
3. **Prepare new HAP1 media**  
4. **Finalise nucleosome recon protocol**  
5. **Design primers for testing MYC355 transposition on gDNA level**  
6. **Prepare fixing buffer for Flow Cytometry**  
   

**3\. Prepare new HAP1 media**

HAP1 media (500 mL)

| IMDM | Make up to 500 mL |
| :---- | :---- |
| HI FBS (10%) | 50 mL |

**4\. Finalise nucleosome recon protocol**

Dilution buffer for nucleosome reconstitution:

*TE buffer \+ 1mM TCEP \+ cocktail Tablet \+ 2mM MgCl2*

1.5 cocktail tablets \+ TCEP \+ MgCl2 (Make up volume to 250 mL by filtering) \[pH 8\]

For dried salt plates:

Consider that I add 10 uL of DNA solution. Then according to this, the salt that needs to be dried is as follows (per well of a 96-well plate):

5 uL of 4 M KCl solution needs to be dried in each well of the plate in order to achieve the required moles of KCl after adding 10 uL of neutral no-salt DNA solution.

**6\. Prepare fixing buffer for Flow Cytometry**

Fixing Buffer for Flow cytometry

- PBS (w/o Ca, Mg)  
- 1% BSA  
- 0.05% Sodium Azide

Prepare a stock sodium azide solution (1%) \- 0.1 g in 10 mL water. Since there was no Sodium azide, this was not added to the prepared FACS buffer.

**31 July 2025**

1. **Record images for HAP1 cells PB and PB2 treatments**  
2. **Harvest HAP1 cells and seed them along with transduction of GFP, mCherry viruses for control samples**  
3. **Finalise nucleosome recon protocol**  
4. **Prepare the salt dried 96-well plates using the robot**

**1 August 2025**

1. **Prepare flow cytometry samples for Aurora analyser**  
2. **Aliquot salt plates to two 96-well plates and leave for drying**

**1\. Prepare flow cytometry samples for Aurora analyser**

Harvest and prepare two tubes each of the following samples:

1. HepG2del\_WT  
2. HAP1\_WT  
3. HepG2del\_GclaT1  
4. HepG2del\_GclaT2  
5. HepG2del\_HclaT1  
6. HepG2del\_HclaT2  
7. HAP1\_MYCT1PB  
8. HAP1\_MYCT2PB  
9. HAP1\_MYCT1PB2  
10. HAP1\_MYCT2PB2  
11. GP5del\_MYCT1PB  
12. GP5del\_MYCT2PB  
13. GP5del\_MYCT1PB2  
14. GP5del\_MYCT2PB2  
    

Sample preparation:

- Trypsinize and harvest the cells and spin them down.  
- Resuspend cells in 2% paraformaldehyde solution for fixing and keep at RT for 30 mins.  
- Spin the cells at 500g, 5 mins and wash once with ice-cold PBS.  
- After wash and spin, resuspend cell pellet in 1 mL of FACS Buffer (with BSA) and pass through FACS tube filters.

Standardisation of FACS parameters:

- FSC-A versus SSC-A to select P1 \- overall population of cells with correct size and granularity  
- FSC-W versus FSC-A to exclude doublets: Only select the cells along a straight line, discard cells with larger width P2.  
- SSC-W versus SSC\_A: Select cells along the line or uniform cluster and mark as P3.  
- Plot P3 for GFP versus mCherry for only GFP cell screening, and mCherry versus GFP for only mCherry screening. Mark these respective populations as P4.

![][image95]

**5 August 2025**

**Nucleosome microplate reconstitution trials**

| A1 | A2 | A3 |  |  |  |  |  |  |  |  |  |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **B1** | **B2** |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |

Prepare stock of lig147 \= 50 ng/uL (8.65 uL in 35 uL TE buffer)  
Prepare stock of 20kblig \= 50 ng/uL (20.34 uL in 31 uL TE buffer)

Prepare a working stock of octamer in refolding buffer:glycerol \= 100 ng/uL (1.85 uL octamer in 100 uL refolding buffer:glycerol). Make a dilution with a concentration at 10 ng/uL and then 

Prepare 6 stocks of histone octamer:

A1 \= 52 ng/uL (2.6 uL in 5 uL refolding buffer:glycerol)  
A2 \= 57 ng/uL (2.9 uL in 5 uL refolding buffer:glycerol)  
A3 \= 63 ng/uL (3.15 uL in 5 uL refolding buffer:glycerol)

For B1, which is reconstitution with the 20 kb DNA ligand, the same octamer:DNA ratios are unlikely to work as here we consider the nucleosome repeat lengths (NRL) *in vivo* to derive the actual number of nucleosomes we might reconstitute on long DNA.

On average a nucleosome occurs once \~200 bp in the chromatin i.e. \~5 times across 1 kb of chromatin. When we extrapolate this for the 20 kb DNA, we could expect about 100 nucleosomes across this length.

Therefore, an octamer:DNA molar ratio of 100:1 (or greater) would be ideal for reconstitution of nucleosomes on this DNA. To check whether excess octamer causes aggregation instead of ideal reconstitution use another lesser ratio of 50:1 for an experimental comparison.

Based on this we would need:  
B1 \= 130 ng octamer  
B2 \= 65 ng octamer

B1 \= 44 ng/uL (2.2 uL in 5 uL refolding buffer:glycerol)  
B2 \= 22 ng/uL (1.1 uL in 5 uL refolding buffer:glycerol)

Dilution Steps:

| Add DNA to salt (10 uL) \+ Add octamer (3 uL) → Incubate 30 mins, RT |
| :---- |
| Add 6.5 uL dilution buffer → Incubate 60 mins, RT |
| Add 9.5 uL dilution buffer → Incubate 60 mins, RT |
| Add 14.5 uL dilution buffer → Incubate 60 mins, RT |
| Add 22 uL dilution buffer → Incubate 60 mins, RT |
| Add 33 uL dilution buffer → Incubate 60 mins, RT |
| Add X uL dilution buffer → Incubate 60 mins, RT |
| Move samples to tubes and store at 4 degrees. |

**Transfection of HAP1 and HepG2\_del for FACS positive controls**

HepG2\_del

T1: 25 uL OM \+ 1.5 uL Lipo3000  
T2: 25 uL OM+ 1 ug pHRS-NEW3 \+ 2 uL P3000

**Transfection of HAP1 cells with pCMV-GFP**

Seed 150K cells per well of a 6-well plate the day before transfection is to be performed.

Change media to fresh media \~2 hours prior to transfection.

Set up two tubes of reactions as follows: (this transfection was done on two wells of HAP1 cells i.e. all the values are 2X)

HAP1 WT (2 wells)

T1: 250 uL OM \+ 15 uL Lipo3000  
T2: 250 uL OM \+ 6 ug pCMV-GFP \+ 20 uL P3000

Per well:

Tube 1: 125 uL OptiMEM \+ 7.5 uL Lipo3000  
Tube 2: 125 uL OptiMEM \+ 3 ug pCMV-GFP \+ 10 uL P3000

Incubate both tubes separately at RT, 5 mins.

Add DNA mix to Tube 1 slowly. Do NOT pipette. Incubate at RT, 15 mins.

Add entire mix (after mixing gently by pipetting), dropwise to the cells. Incubate O/N.

**6 August 2025**

**Concentration of reconstituted nucleosomes**

### **Pre-Rinse Filter**

Add **500 µL** nuclease-free water to the filter (upper chamber).  
Centrifuge **10 min @ 14,000×g**.  
Discard the filtrate (flow-through).

**Adjust Sample to 200 µL**

Transfer your **200 µL** sample into a fresh low-binding tube.

**First Diafiltration**

Load the **200 µL** diluted sample into the filter unit.  
Centrifuge **10 min @ 14,000×g**.  
Store the filtrate (contains imidazole, Tween, etc.) so that it can be checked for any remaining DNA, protein.

**Wash Step**

Add **200 µL** fresh Streptavidin Binding Buffer to the filter unit.  
Centrifuge **10 min @ 14,000×g**.  
Store the wash.

**Recover Buffer-Exchanged Sample**

Move the filter to a **new collection tube** (provided).  
Invert the unit and spin **5 min @ 1,500×g**.  
Discard the filter—your retentate is now in the tube.

The following tubes will now be generated based on these purifications:

| Sample | ng/uL |
| ----- | ----- |
| A1\_FT |  |
| A1\_W |  |
| A1\_E |  |
| A2\_FT |  |
| A2\_W |  |
| A2\_E |  |
| A3\_FT |  |
| A3\_W |  |
| A3\_E |  |
| B1\_FT |  |
| B1\_W |  |
| B1\_E |  |
| B2\_FT |  |
| B2\_W |  |
| B2\_E |  |

**7 August 2025**

**MNase digestion for Nucleosome Recon profiling**

1 unit of MNase can digest 1 ug of DNA at 37 degrees, 15 mins.

For \~ 100 ng of DNA use 1/10 of a unit for this reaction.

Reactions to set up:

1. lig147  
2. A1recon  
3. A2recon  
4. A3recon  
5. lig20K  
6. B1recon  
7. B2recon

**8 August 2025**

**Flow Cytometry Cytek Analyser Repeat:**

1. Type dyes needed and drag them to the selection panel \- eGFP, mCherry

![][image96]  
2\. Add Reference Group and use Unstained as the Negative control for each of the dyes that are being used in the assay:

![][image97]

3\. Add new Groups for each set of samples to be run & analysed![][image98]

4\. Add marker names to the samples to identify samples properly![][image99]

5\. Select P1 as the stopping gate which is the FSC vs SSC population.![][image100]

6\. Keep all the fluorophores and plots on the Worksheet as they are

![][image101]

7\. Set up FCS and SSC optimal thresholds but do not change any of the fluorophore values. Let all the fluorophores be present in the panels shown below the main FSC v SSC graphs.

![][image102]![][image103]

While running the single colour controls, we can also perform gating by adding a population P2 that represents the positive cells for the specific marker we are looking at.

8\. Once all the single colour controls have been run, first run the first type of samples (under a new group) with a few events. Check that the responsible fluorophores are giving some signal. For my experiment, the colours/lasers I am looking for are:

eGFP \- B1/B2; mCherry \- B6

![][image104]

Duplicate the first sample and then proceed to Unmix for the first recorded sample. All Reference controls will be listed there. Then proceed to Live Unmixing. 

![][image105]

This will create a new sheet where P1 population must be selected and the positive and negative populations to be marked in the single colour controls for each dye.

9\. This creates a new Unmixing Worksheet. We can label the dye names on the axes here.

![][image106]

Then go to the copy of the sample that was created and recorded more events and then record both the unmixed and regular profiles. The copy process may need to be run separately only for each sample in a group.

![][image107]

![][image108]

Samples currently to be run:

Reference Group:

1. HAP1 Unstained (A1)  
2. HepG2del Unstained (A2)  
3. HAP1 GFP control (A3)  
4. HepG2del mCherry control (A4)

HAP1 Group:

5. HAP1 MYCT1PB (B1)  
6. HAP1 MYCT2PB (B2)  
7. HAP1 MYCT1PB2 (B3)  
8. HAP1 MYCT2PB2 (B4)

GP5d Group:

9. GP5d MYCT1PB (C1)  
10. GP5d MYCT2PB (C2)  
11. GP5d MYCT1PB2 (C3)  
12. GP5d MYCT2PB2 (C4)

HepG2 Group:

13. HepG2\_GclaT1+ (D1)  
14. HepG2\_GclaT2+ (D2)  
15. HepG2\_HclaT1+ (D3)  
16. HepG2\_HclaT2+ (D4)  
17. HepG2\_GclaT1- (D5)  
18. HepG2\_GclaT2- (D6)  
19. HepG2\_HclaT1- (D7)  
20. HepG2\_HclaT2- (D8)  
21. HepG2\_GclaT1 (D9)  
22. HepG2\_GclaT2 (D10)  
23. HepG2\_HclaT1 (D11)  
24. HepG2\_HclaT2 (D12)

Sample preparation:

- Trypsinize and harvest the cells and spin them down.  
- Resuspend cells in 2% paraformaldehyde solution for fixing and keep at RT for 30 mins.  
- Spin the cells at 500g, 5 mins and wash once with ice-cold PBS.  
- After wash and spin, resuspend cell pellet in 3 mL of FACS Buffer (with BSA) and pass through FACS tube filters.

Standardisation of FACS parameters:

- FSC-A versus SSC-A to select P1 \- overall population of cells with correct size and granularity  
- FSC-W versus FSC-A to exclude doublets: Only select the cells along a straight line, discard cells with larger width P2.  
- SSC-W versus SSC\_A: Select cells along the line or uniform cluster and mark as P3.  
- Plot P3 for GFP versus mCherry for only GFP cell screening, and mCherry versus GFP for only mCherry screening. Mark these respective populations as P4.

![][image95]

**MNase digestion & testing of nucleosome recon samples**

From the titration test that was run yesterday, just 2 units of the enzyme seemed sufficient to degrade the 147 bp DNA ligand completely (in 30 minutes).

For today’s run:

Dilute 1 uL MNase to 1000 uL of total solution with NF water. 1 uL of this solution has 2 gel units of the enzyme (MNase-dil).

Reactions to set up:

1. lig147 (0.5 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \[CONTROL\]  
2. lig147 (0.5 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \+ 1 uL MNase-dil  
3. A1recon (10 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \+ 1 uL MNase-dil  
4. A2recon (10 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \+ 1 uL MNase-dil  
5. A3recon (10 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \+ 1 uL MNase-dil  
6. lig20K (1.5 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \[CONTROL\]  
7. B1recon (10 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \[CONTROL\]  
8. B2recon (10 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \[CONTROL\]

Incubate at 37 degrees, 15 mins. Add 1.1 uL EGTA (0.5 M) to stop the reaction.

Run the samples on a HS D5000 Screentape with the regular lig147, lig20K ligands as control. 

**11 August 2025**

1. **gDNA extraction and PCR to check for GFP expression and MYC335 transposition in the genome**  
2. **Seeding of HAP1 cells for transduction of Gcla & Hcla libraries**  
3. **Thaw K562del cells for expansion**  
4. **Run 0.3% agarose gel with MNase-treated samples for lig20K recon as well as the remaining lig20K recon samples (Stain with SYBR green nucleic acid stain)**  
5. **Prepare glycerol stock plates for DBD culture plates**

   

1. **gDNA extraction and PCR to check for GFP expression and MYC335 transposition in the genome**

	GFPF1 \+ GFPR1

| KAPA HiFi | 12.5 uL |
| :---- | :---- |
| GFPF1 (10 uM) | 0.75 uL |
| GFPR1 (10 uM) | 0.75 uL |
| Genomic DNA | 50 ng |
| NF Water | Make up to 25 uL |

| 95 C | 3 min | 1 |
| :---- | :---- | :---- |
| 98 C | 20 s | 25 |
| 65 C | 15 s | 25 |
| 72 C | 2 min | 25 |
| 72 C | 10 min | 1 |
| 4 C | Forever |  |

	SHHF1 \+ MYC335R1 will also be set up

**NOTE: All the ShhBC libraries have now been transformed while the GclaAT10ShhBCv1 library has also been prepared. Libraries remaining:**

1. **HclaAT10ShhBCv1**  
2. **GCDAT10ShhBCv1**  
3. **HCDAT10ShhBCv1**  
4. **GCCAT10ShhBCv1**  
5. **HCCAT10ShhBCv1**  
6. **Nh100ShhBCv1**

**2\. Seeding of HAP1 cells for transduction of Gcla & Hcla libraries**

150K cells to be seeded per well of 2 6-well plates. This will include:

- 3 wells for pHRSGclav1  
- 3 wells for pHRSHclav1  
- 3 wells for pHRSHCDv1  
- 2 wells for mCherry control  
- 1 well of HAP1 control WT

**12 August 2025**

1. **Run gel for GP5del GFP and SHH-MYC335 PCR products**  
2. **Prepare glycerol stocks for DBD quadrant plates (X2)**  
3. **Transduce the seeded HAP1 cells with GCla, HCla and HCD viruses**  
4. **Transfect 2 wells of HAP1 with mCherry control plasmid**  
5. **Perform digestion for all ShhBC vector pools with MluI and purify gel extracted product**  
6. **Run 3% agarose gel for the lig147 recon reactions (stain with SYBR green nucleic acid)**  
7. **Set up test dialysis set up for nucleosome recon**

   

1. **Run gel for GP5del GFP and SHH-MYC335 PCR products**

	Loading order for the gel:

- 1 kb Plus ladder  
- G-WT (GFP)  
- GT1 (GFP)  
- GT2 (GFP)  
- GT1PB (GFP)  
- GT2PB (GFP)  
- GT1PB2 (GFP)  
- GT2PB2 (GFP)  
- G-WT (SHHMYC)  
- GT1 (SHHMYC)  
- GT2 (SHHMYC)  
- GT1PB (SHHMYC)  
- GT2PB (SHHMYC)  
- GT1PB2 (SHHMYC)

  The last sample could not be loaded due to sufficient number of wells not being present on the gel.

  GT2PB2 (SHHMYC)

* The GFP PCR product is expected to be 1786 bp in the non-transposed state. For the condition in which the enhancer has transposed the expected product size is around 312 bp  
* For the SHH-MYC335 PCR product the average product size is expected to be 1748 bp. Post-transposition we would potentially expect a range of sizes of this product depending on the locations of the MYC335 enhancer.

2. **Prepare glycerol stocks for DBD quadrant plates (X2)**

 	Copies of each quadrant (2 each) have been prepared and stored at \-80.

**3\. Transduce the seeded HAP1 cells with GCla, HCla and HCD viruses**

For transduction of the viruses, prepare the following mix:

pHRSGclav1

4.494 mL media \+ 1500 uL Gclav1 \+ 6 uL Polybrene

pHRSHclav1

4.494 mL media \+ 1500 uL Gclav1 \+ 6 uL Polybrene

pHRSHCDv1

4.494 mL media \+ 1500 uL Gclav1 \+ 6 uL Polybrene

**4\. Transfect 2 wells of HAP1 with mCherry control plasmid**

Tube 1: 250 uL OM \+ 15 uL Lipo3000

Tube 2: 250 uL OM \+ 20 uL P3000 \+ 6 ug pHRSNEW3 (mCherry)

**5\. Perform digestion for all ShhBC vector pools with MluI and purify gel extracted product**

Digestion to be performed for:

- HClaShhBCv1  
- GCDShhBCv1  
- HCDShhBCv1  
- GCCShhBCv1  
- HCCShhBCv1  
- Nh100ShhBCv1

**6\. Run 3% agarose gel for the lig147 recon reactions (stain with SYBR green nucleic acid)**

Loading order for this gel should be as follows:

1. lig147 untreated  
2. lig147recon A1  
3. lig147recon A2  
4. lig147recon A3  
5. lig147 No MNase control  
6. lig147 MNase-treated  
7. A1 MNase-treated  
8. A2 MNase-treated  
9. A3 MNase-treated

**13 August 2025**

1. **Gel extraction for MluI digested ShhBC vector libraries**  
2. **Set up HiFi assembly for HclaShhBCAT10, GCDShhBCAT10 & HCDShhBCAT10**  
3. **Transformation of HclaShhBCAT10 & HCDShhBCAT10 assembly products**  
4. **Check & record images for transduced and transfected HAP1 cells**  
5. **Change media for GP5d, HAP1 MYC335 transposed cell populations \[Passage to new plates if required\]**  
6. **Check dialysis set up through course of the day**  
7. **Write Bradford and protein glycerol stock program for Beckman**

   

1. **Gel extraction for MluI digested ShhBC vector libraries**

	Two tubes were extracted for each ShhBC library.

2. **Set up HiFi assembly for HclaShhBCAT10, GCDShhBCAT10 & HCDShhBCAT10**

pHRS-Hcla-ShhBC (5X)

| GclaShh-lib (50 ng) |      uL |
| :---- | :---- |
| Hcla-AT10-PCR (8 ng) |      uL |
| 2X NEB HiFi Assembly Mix | 10 uL |
| NF H2O |      uL |

pHRS-GCD-ShhBC (5X)

| GCDShh-lib (50 ng) |      uL |
| :---- | :---- |
| Hcla-AT10-PCR (8 ng) |      uL |
| 2X NEB HiFi Assembly Mix | 10 uL |
| NF H2O |      uL |

pHRS-HCD-ShhBC (5X)

| HCDShh-lib (50 ng) |      uL |
| :---- | :---- |
| Hcla-AT10-PCR (8 ng) |      uL |
| 2X NEB HiFi Assembly Mix | 10 uL |
| NF H2O |      uL |

Incubate at 50 degrees for 1 hour. Store reactions at \-20 O/N before transformation.

**14 August 2025**

1. **Set up cleaning of dialysis apparatus for \~2-3 hours by using MQ water**  
2. **Prepare HAP1 media for extended culture**  
3. **Harvest the MYC335 cell lines and seed them again for extended culture and sorting**  
4. **Prepare O/N cultures (1 L each) for HclaAT10ShhBCv1 and HCDAT10ShhBCv1**  
5. **Perform assembly reactions for HCCAT10ShhBCv1, GCCAT10ShhBCv1 and Nh100AT10ShhBCv1**  
6. **Transform GCDAT10ShhBCv1, HCCAT10ShhBCv1 into LB-AMP plates**  
7. **Record Day 2 images of HAP1 cells transduced with pHRS viruses**  
8. **Set up dialysis for lig147 recon set-up with WT octamer**  
9. **Fix nucleosome recon Beckman protocol**

**2\. Prepare HAP1 media for extended culture**

HAP1 media (500 mL)

| IMDM | Make up to 500 mL |
| :---- | :---- |
| HI FBS (10%) | 50 mL |

**8\. Set up dialysis for lig147 recon set-up with WT octamer**

The best conditions for reconstitution of the nucleosome with **lig147 was seen to be at a ratio of 1.1:1 for histone octamer:DNA**. This is the same condition that will be used for the dialysis set up.

![][image109]

To test the dialysis set up properly, I have now placed a magnetic stirrer and a 500 mL bottle on the stirrer. MQ/sterile water is passing from the large bottle to the smaller bottle and then being picked back up from the smaller bottle and sent to the waste bottle. Testing this set up O/N currently to test for stability of the system.

First I prepare more lig147:

To test for large-scale amplification of dsDNA ligands, set up the following reaction:

Take 1 uL of the lig147\_pool and dilute to 20 uL

20X

| NCAP\_F (10 uM) | 30 uL |
| :---- | :---- |
| NCAP\_R (10 uM) | 30 uL |
| 2X KAPA HiFi | 500 uL |
| diluted lig147 | 20 uL |
| NF H2O | 420 uL |

Split 50 uL per tube.

lig147\_T1

PCR4, SELEX\_AMP

| 95°C | 3 min |
| :---- | :---- |
| 98°C | 20 s |
| 55°C | 15 s       **14X** |
| 72°C | 30 s |
| 72°C | 40 min |
| 4°C | HOLD |

Pool the products and columns, purify and measure the concentration. Also, check the purity of the product on a high percentage agarose gel.

**5\. Perform assembly reactions for HCCAT10ShhBCv1, GCCAT10ShhBCv1 and Nh100AT10ShhBCv1**

pHRS-HCC-ShhBC (5X)

| GclaShh-lib (50 ng) |      uL |
| :---- | :---- |
| HCC-AT10-PCR (8 ng) |      uL |
| 2X NEB HiFi Assembly Mix | 10 uL |
| NF H2O |      uL |

pHRS-GCC-ShhBC (5X)

| GCDShh-lib (50 ng) |      uL |
| :---- | :---- |
| GCC-AT10-PCR (8 ng) |      uL |
| 2X NEB HiFi Assembly Mix | 10 uL |
| NF H2O |      uL |

pHRS-Nh100-ShhBC (5X)

| HCDShh-lib (50 ng) |      uL |
| :---- | :---- |
| Nh100-PCR (8 ng) |      uL |
| 2X NEB HiFi Assembly Mix | 10 uL |
| NF H2O |      uL |

Incubate at 50 degrees for 1 hour. Store reactions at \-20 O/N before transformation.

**15 August 2025**

1. **Set up nucleosome recon for lig147 with dialysis setup**  
2. **Plasmid extraction for HclaAT10ShhBCv1 and GCDAT10ShhBCv1**  
3. **Fix nucleosome recon protocol for Beckman robot**  
4. **Change media for HAP1 transduced cells**  
5. **Record images for Day3 HAP1 transduced cells**  
6. **Design GenScript new protein vectors**

**16 August 2025**

1. **Passage and re-seed complete HAP1 transduced/transfected cells for sorting next week**  
2. **Lower  flow rate for dialysis set up from 0.95 mL/min to 0.75 mL/min**

**17 August 2025**

1. **Reconstituted nucleosome concentration and agarose gel check**  
2. **Plasmid extraction from ShhBC plates**  
   

**2\. Reconstituted nucleosome concentration and agarose gel check**

This round of dialysis based reconstitution \- reconA4

Low salt buffer for nucleosome MWCO concentration (Nucleosome Exchange Buffer B):

NOTE: Here we keep the concentration steady at 0.26 M salt

0.193 g KCl

TCEP 100 uL

1 tablet EDTA free PI

20 uL MgCl2

0.5 mL glycerol

**Concentration of reconstituted nucleosomes**

### **Pre-Rinse Filter**

Add **500 µL** nuclease-free water to the filter (upper chamber) of a 30 kDa column.  
Centrifuge **10 min @ 14,000×g**.  
Discard the filtrate (flow-through).

**Adjust Sample to 200 µL**

Transfer your **200 µL** sample into a fresh low-binding tube.

**First Diafiltration**

Load the **200 µL** sample into the filter unit.  
Centrifuge **10 min @ 14,000×g**.  
Store the filtrate (contains imidazole, Tween, etc.) so that it can be checked for any remaining DNA, protein.

**Wash Step**

Add **200 µL** fresh Nucleosome Exchange Buffer B to the filter unit.  
Centrifuge **10 min @ 14,000×g**.  
Store the wash.

**Recover Buffer-Exchanged Sample**

Move the filter to a **new collection tube** (provided).  
Invert the unit and spin **5 min @ 1,500×g**.  
Discard the filter—your retentate is now in the tube.

The following tubes will now be generated based on these purifications:

| Sample | ng/uL |
| ----- | ----- |
| A4\_FT |  |
| A4\_W |  |
| A4\_E |  |

**18 August 2025**

1. **Send AT10+Nh100 pooled library for MiSeq sequencing**  
2. **Send two clones each of HCCAT10ShhBCv1, HCDAT10ShhBCv1, GCDAT10ShhBCv1 for whole-plasmid sequencing**  
3. **Perform MNase digest for new dialysis reconstituted lig147 & gel run**  
4. **Set up new nucleosome recon for B3, B4 with lig20K**  
5. **Change media for GP5d and HAP1 cell culture plates**  
6. **Prepare HAP1 medium for sorting**  
7. **Finish isolation of GCDAT10ShhBCv1 and HCCAT10ShhBCv1 plasmid libraries**  
   

**4\. Set up new nucleosome recon for B3, B4 with lig20K**

From the previous lig20K experiments, it seemed like the octamer:DNA ratio of 50:1 offered more protection to the DNA as compared to the 100:1 ratio (potentially due to over-saturation/aggregation).

Two new experiments to be tried:

B3 : 50:1 octamer:DNA ratio

B4: 80:1 octamer:DNA ratio

Prepare DNA stock lig20K \- 50 ng/uL (13.8 uL in 21 uL TE buffer total). 500 ng of this DNA in 10 uL solution corresponds to 2.96 nM DNA in total reaction volume of 13 uL.

prepare a second histone octamer working stock ⇒ 3.7 uL octamer in 100 uL refolding buffer (200 ng/uL)

Histone molarity required:

B3: 148 nM ⇒ 210 ng in 3 uL (70 ng/uL stock → 3.5 uL 100 ng/uL stock \+ 1.5 uL refolding buffer:glycerol)

B4: 237 nM ⇒ 336 ng in 3 uL (112 ng/uL stock → 2.8 uL 200 ng/uL stock \+ 2.2 uL refolding buffer:glycerol)

Add 3 uL of each octamer stock to the wells containing DNA \+ salt.

| B3 | B4 |
| ----- | ----- |
| Add 10 uL DNA to salt well (2 M) | Add 10 uL DNA to salt well (2 M) |
| Add 3 uL B3 octamer stock (1.93 M) | Add 3 uL B4 octamer stock (1.90 M) |
| Add 6.5 uL dilution buffer (1.29 M) | Add 6.5 uL dilution buffer (1.27 M) |
| Add 9.5 uL dilution buffer (0.87 M) | Add 9.5 uL dilution buffer (0.85 M) |
| Add 14.5 uL dilution buffer (0.58 M) | Add 14.5 uL dilution buffer (0.57 M) |
| Add 22 uL dilution buffer (0.38 M) | Add 22 uL dilution buffer (0.38 M) |
| Add 34.97 uL dilution buffer (0.25 M) | Add 33.43 uL dilution buffer (0.25 M) |

**Prepare HAP1 culture medium for sorting:**

HAP1 media (200 mL)

| IMDM | Make up to 200 mL |
| :---- | :---- |
| HI FBS (50%) | 100 mL |
| Pen-Strep | 2 mL |

**3\. Perform MNase digest for new dialysis reconstituted lig147 \+ gel run**

Dilute 1 uL MNase in 1000 uL NF water (2 units/uL). Set up the following reactions:

- lig147 (0.49 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \[CONTROL\]  
- lig147 (0.49 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \+ 1 uL MNase-dil  
- A4recon (3.15 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \+ 1 uL MNase-dil

Make up the reaction volumes to 50 uL and incubate tubes at 37 degrees, 15 mins.

Run the samples on a 3% agarose gel and stain with SYBR Green nucleic acid.

**19 August 2025**

1. **Purification of B3, B4 nucleosomes**  
2. **MNase testing of B3, B4 nucleosomes**  
3. **Set up dialysis recon of lig147 again with proper octamer:DNA molar ratio**  
4. **Sorting and culture of sorted mCherry+ cells for HAP1-Gclav1, HAP1-Hclav1, HAP1-HCDv1**  
5. **Passage and culture for MYCT1, MYCT2 populations for HAP1, GP5d**  
   

1. **Purification of B3, B4 nucleosomes**

	

| B3\_FT |  |
| :---- | :---- |
| B3\_W |  |
| B3\_E |  |
| B4\_FT |  |
| B4\_W |  |
| B4\_E |  |

2. **MNase testing of B3, B4 nucleosomes**

	Dilute 1 uL MNase in 1000 uL NF water (2 units/uL). Each reaction consists of 100 ng equivalent of DNA. Set up the following reactions:

- lig20K (      uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \[CONTROL\]  
- lig20K (      uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \+ 1 uL MNase-dil  
- B3recon (3.15 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \+ 1 uL MNase-dil  
- B4recon (3.15 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \+ 1 uL MNase-dil

Make up the reaction volumes to 50 uL and incubate tubes at 37 degrees, 15 mins.

Run the samples on a 3% agarose gel and stain with SYBR Green nucleic acid.

3. **Set up dialysis recon of lig147 again with proper octamer:DNA molar ratio**

	Add 100 uL (with 3 ug) DNA solution (in TE buffer) to dried salt tube. This gives a concentration of 2 M salt.

DNA molarity ⇒ 210 nM (calculated acc. to 150 uL total volume)

At a octamer:DNA ratio of 0.9 and 1.1

Octamer:DNA\_0.9 ⇒ reqd octamer molarity ⇒ 189 nM

3.09 ug in 25 uL volume (123.6 ng/uL ⇒ 15.45 uL of 200 ng/uL stock \+ 9.55 uL refolding buffer:glycerol ⇒ 1.62 M final salt conc. ⇒ Upon mixing with the DNA+salt we get 1.924 M salt)

Octamer:DNA\_1.1 ⇒ reqd octamer molarity ⇒ 231 nM

3.77 ug in 25 uL volume (150.8 ng/uL ⇒ 18.85 uL of 200 ng/uL stock \+ 6.15 uL refolding buffer:glycerol ⇒ 1.75 M final salt conc. ⇒ Upon mixing with the DNA+salt we get 1.95 M salt)

Prepare more low salt RB buffer:

Low salt RB (2 L)

37.28 g KCl  
20 mL 1 M Tris-HCl, pH 7.5  
4 mL 0.5 M EDTA  
2 mL DTT

Resuspend 1.54 g of DTT in 10 mL of water to prepare a 1 M stock if needed.

3. Low salt RB (2 L)

37.28 g KCl  
20 mL 1 M Tris-HCl, pH 7.5  
4 mL 0.5 M EDTA  
2 mL DTT

Resuspend 1.54 g of DTT in 10 mL of water to prepare a 1 M stock if needed.

4. **Sorting and culture of sorted mCherry+ cells for HAP1-Gclav1, HAP1-Hclav1, HAP1-HCDv1**

Trypsinize the following plates:

HAP1 \- WT  
HAP1 \- mCherry+  
HAP1 \- Gclav1  
HAP1 \- Hclav1  
HAP1 \- HCDv1

The cells need to be in the sorting buffer:

1X Phosphate Buffered Saline (without Ca/Mg)   
1% Fetal Bovine Serum (heat-inactivated)    
1 mM EDTA   
25 mM HEPES pH 7.0   
0.2 um filter sterilize, store at 4°C   
Prepare 250 mL of this sorting buffer:

2.5 mL FBS  
0.5 mL EDTA  
6.25 mL HEPES  
Top up with PBS

Count cells and suspend in densities of about 10-20 million per mL \- total \~3 mL in FACS tubes after passing through the filter on the head.

Also prepare collection tubes (carry both spare FACS tubes as well as 15 mL falcon tubes) for adding the sorting media (high % FBS).

While harvesting the cells, seed 30-50% of the original pool back into a fresh 10-cm plate (per sample) for continued culture.

Take cues from the PB enhancer paper and use gating strategy as follows:

![][image24]

	

**20 August 2025**

1. **Set up dialysis recon for 0.9:1 and 1.1:1 for lig147**  
2. **Run MNase profile for lower time treatment & stain gel (B3, B4 recon)**  
3. **Fragment HAP1 and GP5d\_del WT genomic DNA to 20 kb mean fragment sizes**  
4. **Image the sorted Gcla, Hcla, HCD cells for HAP1**  
5. **Design new recombinant protein vectors for GenScript order**  
6. **Run MOODS for gapped MYCMAX motifs on hg38 genome & correlate with MYC binding sites in varied cancers**

**1\. Set up dialysis recon for 0.9:1 and 1.1:1 for lig147**

Octamer:DNA ⇒ 0.9:1 (A5recon)

Octamer:DNA ⇒ 1.1:1 (A6recon)

**3\. Fragment HAP1 and GP5d\_del WT genomic DNA to 20 kb mean fragment sizes**

Take 8 ug each of the HAP1 and GP5d\_del WT genomic DNA and dilute in TE buffer to a total volume of 150 uL. Pre-warm this at RT.

Load both the samples in the gTubes. Screw the cap on.

Load the gTubes into the centrifuge and spin for 60 sec at 4800 rpm. Then invert the tube and spin again at 4800 rpm for 60 sec.

Place the gTube on the UNLOAD position and collect the sheared sample from the screw cap.

Run some of the sample on a 0.8% agarose gel to check for the integrity and shear size of the sample.

Upon running the gel:

**![][image110]**

What we see on the gel is that the intact gDNA has a band size much higher than the 20 kb ladder and possibly represents a size \~50 kb which is the average gDNA size obtained with the Monarch gDNA extraction kit.

gTube treatment however homogenises both the gDNA samples to 20 kb mean size fragments.

**21 August 2025**

1. **Set up dialysis recon for HAP1 and GP5d 20K fragmented genomic DNA**  
2. **Inoculate more colonies for plasmid isolation for GCDAT10ShhBCv1 and HCDAT10ShhBCv1 plates (5 each)**  
3. **Design new recombinant protein vectors for GenScript order**  
4. **Run MOODS for gapped MYCMAX motifs on hg38 genome & correlate with MYC binding sites in varied cancers**  
5. **Change to fresh high FBS HAP1 media for sorted cells**  
6. **Prepare more dried salt tubes (4 M KCl)**

1. **Set up dialysis recon for HAP1 and GP5d 20K fragmented genomic DNA**

We use 250 ng of each genomic DNA sample (per well), resuspended in 10 uL TE buffer. Add this solution to wells C1,C2 (HAP1) & C3, C4 (GP5d) on the salt plate.

Molarity of DNA ⇒ 1.48 nM according to 13 uL total volume (per well)

At a projected octamer:DNA ratio of 60:1 → the octamer molarity to be used is 89 nM ⇒ corresponds to 126 ng in 13 uL total mix.

Prepare a octamer stock of 42 ng/uL → 8.4 uL 100 ng/uL stock \+ 11.6 uL refolding buffer:glycerol ⇒ salt concentration ⇒ 1.42 M salt

Add 3 uL of the octamer stock to each of the recon wells ⇒ salt concentration ⇒ 1.87 M. Incubate at room temp for 30 mins.

| C1, C2 | C3, C4 | Time |
| ----- | ----- | ----- |
| Add 10 uL DNA to salt well (2 M) | Add 10 uL DNA to salt well (2 M) | \- |
| Add 3 uL C1 octamer stock (1.87 M) | Add 3 uL C3 octamer stock (1.87 M) | 30 minutes |
| Add 6.5 uL dilution buffer (1.25 M) | Add 6.5 uL dilution buffer (1.25 M) | 60 minutes |
| Add 9.5 uL dilution buffer (0.84 M) | Add 9.5 uL dilution buffer (0.84 M) | 60 minutes |
| Add 14.5 uL dilution buffer (0.561 M) | Add 14.5 uL dilution buffer (0.561 M) | 60 minutes |
| Add 22 uL dilution buffer (0.37 M) | Add 22 uL dilution buffer (0.37 M) | 60 minutes |
| Add 32.06 uL dilution buffer (0.25 M) | Add 32.06 uL dilution buffer (0.25 M) | 60 minutes |
| Incubate at 37 degrees | Incubate at 37 degrees | 30 minutes |

Post-recon, collect C1 and C2 together and C3 and C4 together.

**26 August 2025**

1. **Run MNase and gel for A5, A6 dialysis recon experiments**  
2. **Set up test recon for lig147 with commercial Active Motif histone octamer (microplate)**  
3. **Send HclaAT10, GCDAT10 and HCDAT10 colonies (5 each) for whole plasmid sequencing**  
4. **Change media for HAP1 sorted mCherry+ cells (passage cells as per need) \+ Image these cells**  
5. **Set up test recon for HAP1, GP5d 20K gDNA with WT octamer (dialysis)**  
   

1. **Run MNase and gel for A5, A6 dialysis recon experiments**

*NOTE: The yield for these A5, A6 recon experiments seems a bit on the lower side for using \~3 ug of DNA.* 

Dilute 1 uL MNase in 1000 uL NF water (2 units/uL). Each reaction consists of \~50 ng equivalent of DNA. Set up the following reactions:

- lig147 (0.25 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \[CONTROL\]  
- lig147 (0.25 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \+ 1 uL MNase-dil  
- A5recon (7 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \+ 1 uL MNase-dil  
- A6recon (12 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \+ 1 uL MNase-dil  
  Incubate at 37 degrees for 15 mins and then add 1.12 uL 0.5 M EGTA per tube to stop the reaction. Run all samples along with the original non-MNase treated samples on an agarose gel (3%). Stain with SYBR Green.

2. **Set up test recon for lig147 with commercial Epicypherhistone octamer (microplate)**

We use 500 ng of each genomic DNA sample (per well), resuspended in 10 uL TE buffer. Add this solution to wells A7 (37 treatment) and A8 (no 37 treatment).

Molarity of DNA ⇒ 403.2 nM according to 13 uL total volume (per well)

At a projected octamer:DNA ratio of 0.9:1 → the octamer molarity to be used is 363 nM ⇒ corresponds to 512 ng in 13 uL total mix.

Octamer stock ⇒ 1.07 ug/uL

Prepare an octamer stock ⇒ 171 ng/uL (5 uL) ⇒ 0.8 uL octamer stock \+ 4.2 uL refolding buffer:glycerol ⇒ salt concentration (1.16 M)

Add 3 uL of this stock to the 10 uL of DNA \+ salt ⇒ salt concentration 1.81 M

| A7 | A8 | Time |
| ----- | ----- | ----- |
| Add 10 uL DNA to salt well (2 M) | Add 10 uL DNA to salt well (2 M) | \- |
| Add 3 uL C1 octamer stock (1.81 M) | Add 3 uL C3 octamer stock (1.81 M) | 30 minutes |
| Add 6.5 uL dilution buffer (1.21 M) | Add 6.5 uL dilution buffer (1.21 M) | 60 minutes |
| Add 9.5 uL dilution buffer (0.81 M) | Add 9.5 uL dilution buffer (0.81 M) | 60 minutes |
| Add 14 uL dilution buffer (0.55 M) | Add 14 uL dilution buffer (0.55 M) | 60 minutes |
| Add 22 uL dilution buffer (0.36 M) | Add 22 uL dilution buffer (0.36 M) | 60 minutes |
| Add 28.9 uL dilution buffer (0.25 M) | Add 28.9 uL dilution buffer (0.25 M) | 60 minutes |
| Incubate at 37 degrees |  | 30 minutes/NA |

**5\. Set up test recon for HAP1, GP5d 20K gDNA with WT octamer (dialysis)**

Use 3 ug of each DNA:

HAP1 \[C5\] ⇒ 100 uL ⇒ 1.54 nM

GP5d \[C6\] ⇒ 100 uL ⇒ 1.54 nM

Octamer molarity acc. to 60:1 ratio ⇒ 93 nM ⇒ Prepare 1.52 ug in 50 uL solution ⇒ 7.6 uL of 200 ng/uL octamer stock \+ 42.4 uL refolding buffer:glycerol \[1.152 M salt\]

Add this to 100 uL of the DNA \+ salt mix \[1.788 M\]

**27 August 2025**

1. **Passage GP5d MYCT1, MYCT2 PB-treated cells**  
2. **Passage sorted HAP1 enhancer cells**  
3. **Thaw new HAP1, GP5del cells**  
4. **MYCMAX NCAP double/spaced motif analyses**  
5. **Set up test recon for lig147 with commercial Active Motif histone octamer (microplate)**  
6. **Run MOODS for gapped MYCMAX motifs on hg38 genome & correlate with MYC binding sites in varied cancers**

**28 August 2025**

1. **Purify A7recon, A8recon and C5recon, C6recon nucleosomes and test for MNase protection**  
2. **Treat PB-treated GP5d cells and sorted HAP1 cells with Ad-CRE virus**  
3. **Run MOODS for gapped MYCMAX motifs on hg38 genome & correlate with MYC binding sites in varied cancers**  
   

1. **Purify A7recon, A8recon and C5recon, C6recon nucleosomes and test for MNase protection**

	Prepare more Nucleosome Exchange Buffer B (10 mL):

- 650 uL 4 M KCl  
- TCEP 100 uL  
- 1 tablet EDTA free PI  
- 20 uL MgCl2  
- 0.5 mL glycerol

	The 50KDa MWCO columns are being used now for the nucleosome purification.

*NOTE: Because the dominant buffer in the dialysis recon (C5, C6) is a low salt buffer rather than the Nucleosome Exchange Buffer B, the actual concentration of these samples post-concentration is likely underestimated.* 

*It would be ideal to in future split each of these samples to two columns for the purpose of concentration and estimation. Alternatively, do not concentrate these samples at all and store them as it is at 4 degrees.*

MNase treatment (A7, A8):

- lig147 (0.5 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \[CONTROL\] \+ 44.25 uL water \[A\]  
- lig147 (0.5 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \+ 1 uL MNase-dil \+ 43.25 uL water \[B\]  
- A7recon (10 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \+ 1 uL MNase-dil \+ 33.75 uL water \[C\]  
- A8recon (10 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \+ 1 uL MNase-dil \+ 33.75 uL water \[D\]

Run these samples on a 3% agarose gel:

- 100 bp ladder  
- A  
- A  
- B  
- B  
- C  
- C  
- D  
- D  
- A7recon (10 uL)  
- A8recon (10 uL)

MNase treatment (C5, C6):

- HAP120K (3 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \[CONTROL\] \+ 41.75 uL water \[E\]  
- GP5d20K (2 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \[CONTROL\] \+ 42.75 uL water \[F\]  
- HAP120K (3 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \[CONTROL\] \+ 1 uL MNase-dil \+ 40.75 uL water \[G\]  
- GP5d20K (2 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \[CONTROL\] \+ 1 uL MNase-dil \+ 41.75 uL water \[H\]  
- C5recon (10 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \+ 1 uL MNase-dil \+ 33.75 uL water \[I\]  
- C6recon (10 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \+ 1 uL MNase-dil \+ 33.75 uL water \[J\]

Run these samples on a 0.5% agarose gel:

- 1 kb Plus ladder  
- E  
- E  
- F  
- F  
- G  
- G  
- H  
- H  
- C5recon (10 uL)  
- C6recon (10 uL)

2. **Treat PB-treated GP5d cells and sorted HAP1 cells with Ad-CRE virus**

	PFU/mL of Ad-CRE is 10^7 PFU/uL

	For \~500K cells at MOI=5, PFU needed \= 25 X 10^5

	Dilute virus in DMEM ⇒ 5 uL virus \+ 15 uL DMEM\* 

	

HAP1:

	Gcla+ (2 wells) ⇒ 4 uL polybrene \+ 2 uL diluted Ad-CRE \+ 1.994 mL media

	Hcla+ (2 wells) ⇒ 4 uL polybrene \+ 2 uL diluted Ad-CRE \+ 1.994 mL media

	HCD+ (2 wells) ⇒ 4 uL polybrene \+ 2 uL diluted Ad-CRE \+ 1.994 mL media

	GP5d:

	MYCT1-PB (2 wells) ⇒ 4 uL polybrene \+ 2 uL diluted Ad-CRE \+ 1.994 mL media

	MYCT2-PB (2 wells) ⇒ 4 uL polybrene \+ 2 uL diluted Ad-CRE \+ 1.994 mL media

	MYCT1PB2 (2 wells) ⇒ 4 uL polybrene \+ 2 uL diluted Ad-CRE \+ 1.994 mL media

	MYCT2PB2 (2 wells) ⇒ 4 uL polybrene \+ 2 uL diluted Ad-CRE \+ 1.994 mL media

	Use the bare minimum media i.e. 1 mL to cover the the cells. Incubate O/N and change the media to complete media next day ASAP

	After making the mix, add each mix drop-wise to the wells.

	\*All DMEM used here is of the high glucose type. All media here refers to   transduction media for that cell type.

	Transduction media \- low serum media:

	*HAP1 Transduction media:*

	10 mL HI FBS

	IMDM

	*GP5d Transduction media:*

	

| DMEM high glucose | Make up to 500 mL |
| :---- | :---- |
| HI FBS (2%) | 10 mL |
| L-Glutamine | 5 mL |

**29 August 2025**

1. **Change GP5d Ad-CRE treated cells with full media**  
2. **Seed HAP1 cells (150K cells per well) for repeated virus transduction (Gclav1, Hclav1, HCDv1)**  
3. **Order primers for dual barcode enhancer-promoter library preparation**  
4. **Order LB plates with carbenicillin and chloramphenicol**  
5. **Transform and plate 2 more assembly reactions on LB-Amp plates**

   

1. **Change GP5d Ad-CRE treated cells with full media**

	

	The HAP1 cells that were transduced with Gclav1, Hclav1, HCDv1 viruses and sorted were passaged a couple of days ago. But these cells were all seen to largely die and therefore could not be treated with Ad-CRE.

Thus, Ad-CRE was only added to the GP5d MYCT1 and MYCT2 cells. Media was changed to full media \~12 hours later.

	

**1st September 2025**

1. **Passage and seed 150K HAP1 cells per well for transduction**  
2. **Passage and seed the MYCT1, MYCT2 GP5del cells and Ad-CRE treated MYCT1, MYCT2 cells**  
3. **Image the seeded and settled MYCT1, MYCT2 and Ad-CRE treated cells**  
4. **Transform GCCAT10ShhBCv2 and Nh100ShhBCv2 assembly reactions**  
   

**2nd September 2025**

1. **Image the seeded and settled MYCT1, MYCT2 and Ad-CRE treated cells**  
2. **Set up large-scale liquid culture for GCCAT10ShhBCv2, Nh100ShhBCv2**  
3. **Pick colonies for GCCAT10ShhBCv2, Nh100ShhBCv2 (5 each) for whole plasmid sequencing**  
4. **Transduce HAP1 cells with Gclav1, Hclav1, HCDv1, GCDv1, GFP viruses to prepare cell lines**

**4\. Transduce HAP1 cells with Gclav1, Hclav1, HCDv1, GCDv1, GFP viruses to prepare cell lines**

Transduce two wells for each type of virus:

Gclav1: 1000 uL virus \+ 998 uL HAP1-T media \+ 2 uL polybrene

Hclav1: 1000 uL virus \+ 998 uL HAP1-T media \+ 2 uL polybrene

HCDv1: 1000 uL virus \+ 998 uL HAP1-T media \+ 2 uL polybrene

GCDv1: 1000 uL virus \+ 998 uL HAP1-T media \+ 2 uL polybrene

GFP: 200 uL virus \+ 1798 uL HAP1-T media \+ 2 uL polybrene

Add 1 mL of the mix per well of the cells.

Let the cells incubate O/N in this minimal media with the virus for a period of 18-20 hours.

**4 September 2025**

1. **Send GCCAT10ShhBCv1, Nh100ShhBCv2 clones for whole plasmid sequencing**  
2. **Image the MYCT1, MYCT2 GP5del cell lines**  
3. **Image the transduced HAP1 cell lines**  
4. **Finish design of new pETG20A constructs**  
5. **Do viral titer for current set of viruses**  
   

**5\. Do viral titer for current set of viruses**

Viruses to be titered are:

- Gclav1  
- Hclav1  
- GCDv1  
- HCDv1  
- GCCv1  
- HCCv1  
- Nh100v1  
- MYC335-T1  
- MYC335-T1  
- GFP

All viruses to be mixed in DMEM high glucose.

**8 September 2025**

1. **Test previous lig147 ligation product on gel**  
2. **Perform new ligation reaction for lig147 and test on gel**  
3. **Perform PCR for AT10-HCC & repeat HCC-pHRS-HCCgb assembly**  
4. **Finish design of new pETG20A constructs**  
5. **Passage & change media for GP5d, HAP1 cells in culture**  
6. **Seed new HAP1, GP5d cells for mCherry, GFP control lines preparation**  
   

**2\. Perform new ligation reaction for lig147 and test on gel**

First perform T4 PNK treatment for two lig147 (lig147-MASTER & lig147-ROOT)

**2X each**

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

2X (1 set each for lig147-MASTER-PNK & lig147-ROOT-PNK)

| DNA (PNK-treated) | 500 ng |
| :---: | :---: |
| Blunt TA ligase mix | 10 uL |
| NF H2O | Make up volume to 20 uL |

Incubate all tubes at 25 degrees O/N. The last ligation trial was performed for around 16 hours O/N.

Also prepare more lig147 as a source for the next experiments:

Take 1 uL of the original oligos\* and dilute to 10 uL

\*Do this with both lig147-MASTER and lig147-ROOT

10X

| NCAP\_F (10 uM) | 15 uL |
| :---- | :---- |
| NCAP\_R (10 uM) | 15 uL |
| 2X KAPA HiFi | 250 uL |
| diluted lig147 | 10 uL |
| NF H2O | 210 uL |

PCR4, SELEX\_AMP

| 95°C | 3 min |
| :---- | :---- |
| 98°C | 20 s |
| 55°C | 15 s       **8X\*** |
| 72°C | 30 s |
| 72°C | 40 min |
| 4°C | HOLD |

\*Reduced number of cycles to reduce noise in the product.

Pool the products and columns, purify and measure the concentration. Also, check the purity of the product on a high percentage agarose gel.

**3\. Perform PCR for AT10-HCC & repeat HCC-pHRS-HCCgb assembly**

**Amplification for AT10-HCC oligo pool:**

Dilute 1 uL of the original AT10 pool into 10 uL with TE buffer. Use 1 uL of this per reaction.

10X

| 2X KAPA HiFi | 12.5 uL |
| :---- | :---- |
| Nhancer142\_F (10 uM) | 0.75 uL |
| HCC\_R\* (10 uM) | 0.75 uL |
| AT10 | 1 uL |
| NF H2O | 10 uL |

\*enhancer\_R 🡪 GP5d\_classical\_R (for trial)

OLIGOAMP

| 95°C | 3 min |
| :---- | :---- |
| 98°C | 20 s |
| 55°C | 15 s       10X |
| 72°C | 15 s |
| 72°C | 1 min |
| 4°C | HOLD |

Pool the products and PCR column purify. Test the product on a gel.

For assembly use the following reaction:

pHRS-HCC (5X)

Per reaction:

| pHRS-HCC (M) | 50 ng |
| :---- | :---- |
| HCCAT10-PCR | 10 ng |
| 2X NEB HiFi Assembly Mix | 10 uL |
| NF H2O | Make up volume to 20 uL |

   
Incubate at 50 degrees, 1 hour. Transform the product into 5 tubes of NEB competent cells (2 uL of assembly pool per tube). Then, plate the product onto an LB-AMP plate. Pool rest of the culture and then store for further expansion.

When the initial product for AT10-HCC PCR is run on a gel, it seems like there is no product of the expected size. In order to fix this, let us proceed with a 2-step dilution PCR.

AT10-HCC PCR:

10X

| 2X KAPA HiFi | 12.5 uL |
| :---- | :---- |
| Nhancer142\_F (10 uM) | 0.75 uL |
| HCC\_R\* (10 uM) | 0.75 uL |
| AT10 | 1 uL |
| NF H2O | 10 uL |

OLIGOAMP

| 95°C | 3 min |
| :---- | :---- |
| 98°C | 20 s |
| 60°C | 15 s       10X |
| 72°C | 15 s |
| 72°C | 1 min |
| 4°C | HOLD |

Run 10 uL of this PCR product on a gel to check the product. One confirmed, dilute the PCR product 10-fold and run a 2nd PCR.

8X

| 2X KAPA HiFi | 12.5 uL |
| :---- | :---- |
| Nhancer142\_F (10 uM) | 0.75 uL |
| HCC\_R\* (10 uM) | 0.75 uL |
| AT10-PCR1 | 2.5 uL |
| NF H2O | 8.5 uL |

OLIGOAMP

| 95°C | 3 min |
| :---- | :---- |
| 98°C | 20 s |
| 60°C | 15 s       2X |
| 72°C | 15 s |
| 72°C | 1 min |
| 4°C | HOLD |

Pool the PCR product and purify with PCR column purification.

**9 September 2025**

1. **Fix AT10-HCC PCR and perform assembly and transformation of this library**  
2. **Perform transduction of GP5del cells with Hcla, Gcla, GCD, HCD viruses**  
3. **Perform transfection of GP5d cells with TF-ORF mCherry plasmid**  
4. **Finish design of new pETG20A constructs**  
5. **Test lig147 ligation products on an agarose gel**

**1\. Fix AT10-HCC PCR and perform assembly and transformation of this library**

The previous AT10-HCC PCR1 gave a smudge around 200 bp which is not right. The primers are correct. Set up two reactions:

HCC1

| 2X KAPA HiFi | 12.5 uL |
| :---- | :---- |
| Nhancer142\_F (10 uM) | 0.75 uL |
| HCC\_R\* (10 uM) | 0.75 uL |
| AT10 | 1 uL |
| NF H2O | 10 uL |

HCC2

| 2X KAPA HiFi | 12.5 uL |
| :---- | :---- |
| Nhancer142\_F (10 uM) | 0.75 uL |
| HCC\_R\* (10 uM) | 0.75 uL |
| AT10 | 2 uL |
| NF H2O | 10 uL |

OLIGOAMP

| 95°C | 3 min |
| :---- | :---- |
| 98°C | 20 s |
| 58°C | 15 s       14X |
| 72°C | 15 s |
| 72°C | 10 min |
| 4°C | HOLD |

   
Changes:

- Corrected annealing temp \= 58 degrees  
- Increased final elongation \= 10 mins

Check the products for these two reactions as well as for the previous AT10-HCC-PCR on a 2.5% agarose gel.

Upon running the gel with the following samples:

- AT10-HCC-PCR (old)  
- AT10-HCC-1  
- AT10-HCC-2

From the gel, clean products can be seen for both AT10-HCC-1 & AT10-HCC-2, however the latter has more DNA.

Follow-Up:

i. Set up another round of AT10-HCC-2 with 2 tubes

HCC2 X 2

| 2X KAPA HiFi | 12.5 uL |
| :---- | :---- |
| Nhancer142\_F (10 uM) | 0.75 uL |
| HCC\_R\* (10 uM) | 0.75 uL |
| AT10 | 2 uL |
| NF H2O | 10 uL |

OLIGOAMP

| 95°C | 3 min |
| :---- | :---- |
| 98°C | 20 s |
| 58°C | 15 s       14X |
| 72°C | 15 s |
| 72°C | 10 min |
| 4°C | HOLD |

ii. Set up PCR 2:

HCC2-2 X 10

| 2X KAPA HiFi | 12.5 uL |
| :---- | :---- |
| Nhancer142\_F (10 uM) | 0.75 uL |
| HCC\_R\* (10 uM) | 0.75 uL |
| AT10-HCC2  | 2.5 uL |
| NF H2O | 10 uL |

OLIGOAMP

| 95°C | 3 min |
| :---- | :---- |
| 98°C | 20 s |
| 58°C | 15 s       6X |
| 72°C | 15 s |
| 72°C | 10 min |
| 4°C | HOLD |

Pool these reaction and purify by column purification.

Next set up the assembly reaction:

pHRS-HCC (5X)

Per reaction:

| pHRS-HCC (M) | 50 ng |
| :---- | :---- |
| HCCAT10-PCR | 10 ng |
| 2X NEB HiFi Assembly Mix | 10 uL |
| NF H2O | Make up volume to 20 uL |

Incubate at 50 degrees for 1 hour. Transform 2 uL of the product into 5 tubes each of the competent cells.

**5\. Test lig147 ligation products on an agarose gel**

Load the samples in the following order:

1. 147-PNK-T/A (old)  
2. 147-Root-PNK-T/A  
3. 147-Mastercopy-PNK-T/A  
4. 147-Rootcopy-PNK-T/A

As a control also load the original lig147-Root.

Ligation was observed for all the new sets of samples but not in the case of 147-PNK-T/A (old) which was potentially column purified and therefore did not retain the long DNA.

**2\. Perform transduction of GP5del cells with Hcla, Gcla, GCD, HCD viruses**

Gcla X 2 \= 1000 uL virus \+ 998 uL GP5d1-T media \+ 2 uL polybrene  
Hcla X 2 \= 1000 uL virus \+ 998 uL GP5d1-T media \+ 2 uL polybrene  
GCD X 2 \= 1000 uL virus \+ 998 uL GP5d1-T media \+ 2 uL polybrene  
HCD X 2 \= 1000 uL virus \+ 998 uL GP5d1-T media \+ 2 uL polybrene  
GFP X 2 \= 200 uL virus \+ 1798 uL GP5d1-T media \+ 2 uL polybrene

Leave the media O/N on the cells.

**3\. Perform transfection of GP5d cells with TF-ORF mCherry plasmid**

Change the media 2 hours prior to the transfection.

Each well contains about 250K cells.

Hence, we add for 2 wells:

Tube 1: 250 uL Opti-MEM \+ 20 uL P3000 \+ 6 ug DNA  
Tube 2: 250 uL Opti-MEM \+ 15 uL L3000

**10 September 2025**

1. **Transformation of the new pHRS-AT10-HCC library**  
2. **Change the transduced GP5d cells with complete GP5d media**  
3. **Try clean up of super long ligated DNA with 100kDa MWCO columns**  
4. **Set up larger scale ligation of lig147**  
5. **Finish design of new pETG20A constructs**

**3\. Try clean up of super long ligated DNA with 100kDa MWCO columns**

i. Add 500 uL water to the 100 kDa column and do one spin at 12000 g, 10 mins  
ii. Add 500 uL TE buffer to the 100 kDa column and do one spin at 12000 g, 10 mins  
iii. Make up volume of sample to 500 uL withTE buffer and do one spin at 200g, 30 mins  
iv. Add 500 uL of fresh TE buffer and do a wash at 200g, 30 mins  
v. Invert the column and do a spin at 200g, 15 mins.

The spin at 200g does not result in the liquid coming down from the 100 kDa MWCO columns. Speed was eventually increased to 2500g, 10 mins to clear the flow-through and the wash liquids.

Both the FT, Wash did not have any DNA but lot of DNA was seen in the context of the elute \- however this DNA was seen to be fragmented with a maximum size around 10-15 kDa.

To purify a ligation reaction further with a gDNA cleanup kit:

Set up 2 O/N ligation reactions:

2X  (lig147-ROOT-PNK)

| DNA (PNK-treated) | 1000 ng |
| :---: | :---: |
| Blunt TA ligase mix | 10 uL |
| NF H2O | Make up volume to 20 uL |

**11 September 2025**

1. **Pick 5 clones for plasmid isolation for recently transformed pHRS-HCC-v2**  
2. **Change media for transduced GP5d cells**  
3. **Transduce seeded HAP1 cells with Hcla, Gcla, HCD, GCD, GFP viruses**  
4. **Transfect HAP1 cells with TF-mC plasmid for mCherry control cells**  
5. **Test Monarch gDNA extraction for lig147 ligated DNA**  
6. **Finish design of new pETG20A constructs**  
7. **Transform TF-mC plasmid into LB-AMP for expansion**  
   

**5\. Test Monarch gDNA extraction for lig147 ligated DNA**

i. 15 uL of the ligation reaction for lig147 was taken in two low-bind DNA tubes.  
ii. 200 uL of tissue lysis buffer was added and mixed very gently with a wide-bore tip  
iii. 1 uL of Proteinase K was added to the mix and incubated at 56 degrees for 5 mins. A wide-bore tip was swirled around to mix the solution prior to the incubation.  
iv. Next, we add 400 uL of the gDNA binding buffer and mix by inverting 15-20 times, gently. No pipetting or vortexing.  
v. Transfer the whole mix to gDNA spin columns. The columns are labeled as g1 and g2.  
vi. Both tubes are spun at 1000g for 3mins. Second spin without removing FT, for g1 \= 5000g, 1 min & g2 \= 10000g, 1min  
vii. Collect and retain the FT (in case further testing is needed) and throw away the collection tubes. Add 500 uL wash buffer to each column.  
viii. Spin g1 \= 5000g, 1 min & g2 \= 10000g, 1min. Discard the liquid in collection tube.  
ix. Spin g1 \= 5000g, 1 min & g2 \= 10000g, 1min. Discard the liquid in collection tube and the tubes.  
x. Air dry for \~1 min and add pre-heated gDNA elution buffer (30 uL) to each column. Incubate columns at RT for 2-3 mins.  
xi. Spin g1 \= 5000g, 1 min & g2 \= 10000g, 1min with new collection tubes.

The samples were loaded on a 0.5% agarose gel:

1. lig147 ligation (10 uL) \+ 10 uL water \+ 4 uL 6X dye \+ 2.6 uL 10% SDS (this sample was heated at 65 degrees, 10 mins for the SDS to act)  
2. lig147 lig. g1  
3. lig147 lig. g2

Samples were run with an ice pack at 90V for 70 mins, and will be stained with SYBR Green for \~1 hour.

**3\. Transduce seeded HAP1 cells with Hcla, Gcla, HCD, GCD, GFP viruses**

Gcla X 2 \= 1000 uL virus \+ 998 uL HAP1-T media \+ 2 uL polybrene  
Hcla X 2 \= 1000 uL virus \+ 998 uL HAP1-T media \+ 2 uL polybrene  
GCD X 2 \= 1000 uL virus \+ 998 uL HAP1-T media \+ 2 uL polybrene  
HCD X 2 \= 1000 uL virus \+ 998 uL HAP1-T media \+ 2 uL polybrene  
GFP X 2 \= 200 uL virus \+ 1798 uL HAP1-T media \+ 2 uL polybrene

**4\. Transfect HAP1 cells with TF-mC plasmid for mCherry control cells**

Change the media 2 hours prior to the transfection.

Each well contains about 100K cells.

Hence, we add for 2 wells:

Tube 1: 250 uL Opti-MEM \+ 20 uL P3000 \+ 6 ug DNA (4 uL)  
Tube 2: 250 uL Opti-MEM \+ 15 uL L3000

 

**15 September 2025**

GP5d sorting media (500 mL)

| DMEM high glucose | Make up to 200 mL |
| :---- | :---- |
| HI FBS (50%) | 100 mL |
| L-Glutamine | 5 mL |
| Pen-Strep | 5 mL |

**16 September 2025**

Count cells and suspend in densities of about 10-20 million per mL \- total \~3-4 mL in FACS tubes after passing through the filter on the head.

Also prepare collection tubes (carry both spare FACS tubes as well as 15 mL falcon tubes) for adding the sorting media (high % FBS). 5 mL collection media per tube.

While harvesting the cells, seed \~5-10% of the original pool back into a single well of a 6-well plate fresh 10-cm plate (per sample) for continued culture.

Samples prepared for sorting are:

Set A

- HAP1 Unstained  
- HAP1 mCherry control  
- HAP1 GFP control  
- HAP1 Gclav1 (A1)  
- HAP1 Gclav1 (A2)  
- HAP1 Hclav1 (B1)  
- HAP1 Hclav1 (B2)  
- HAP1 GCDv1 (C1)  
- HAP1 GCDv1 (C2)  
- HAP1 HCDv1 (D1)  
- HAP1 HCDv1 (D2)

Set B

- GP5del Unstained  
- GP5del mCherry control  
- GP5del GFP control  
- GP5del Gclav1 (E1)  
- GP5del Gclav1 (E2)  
- GP5del Hclav1 (F1)  
- GP5del Hclav1 (F2)  
- GP5del GCDv1 (G1)  
- GP5del GCDv1 (G2)  
- GP5del HCDv1 (H1)  
- GP5del HCDv1 (H2)

**17 September 2025**

1. **Change media for GP5d & HAP1 cells currently in culture & check on HAP1 sorted cells**  
2. **Purify 1st ligation reactions for lig147 and set up secondary ligation reaction**  
3. **Set up large scale culture for pHRS-HCCv2**  
4. **Pick a colony and set up culture for new mCherry plasmid**  
5. **Prepare new 200-bp ligands with PCR and set up ligation trials**

**1\. Change media for GP5d & HAP1 cells currently in culture & check on HAP1 sorted cells**

For the sorting it seems like changing to the low serum transduction medium actually decreased the transduction efficiency of the experiments \- based on the percentages seen in the cell sorter.

Due to time limitations, the GP5d transduced cells could not be analysed/sorted. There is a back up culture of this for expansion, repeated transduction and sorting.

**2\. Purify 1st ligation reactions for lig147 and set up secondary ligation reaction**

Use the Qiagen HMW kit for purification of 20 uL each of the 1st ligation products.

- Pipet 20 µl Proteinase K into the bottom of a 2 ml sample tube.   
- Make up 30 uL sample to 200 uL with TE buffer and add this to the proteinase K.  
- Add 150 µl Buffer AL to the sample. Mix carefully by gentle pipetting.  
- Incubate at room temperature for 30 min.   
- Briefly centrifuge the 2 ml microcentrifuge tube to remove drops of liquid from inside the lid.   
- Add 15 µl MagAttract Suspension G to the sample.   
- Add 280 µl Buffer MB to sample. place microcentrifuge tube with sample into tube holder.   
- Place tube holder onto mixer. Incubate at room temperature for 3 min at 1400 rpm. Place the tube holder on the magnetic base, wait until bead separation has been completed (\~1 min), and remove the supernatant.   
- Add 700 µl Buffer MW1 to the sample and place the tube holder onto the mixer. Incubate at room temperature for 1 min at 1400 rpm.  Place the tube holder on the magnetic base, wait until bead separation has been completed (\~1 min), and remove the supernatant.  Repeat the wash again.  
- Add 700 µl Buffer PE to the sample and place the tube holder onto the mixer. Incubate at room temperature for 1 min at 1400 rpm. Place the tube holder on the magnetic base, wait until bead separation has been completed (\~1 min), and remove the supernatant.  Repeat the wash again.  
- Rinse the particles with 700 µl distilled water while the beads are fixed to the walls of the microcentrifuge tube. Incubate for 1 min and remove the supernatant.   
- Remove the tube holder from the magnetic base and add an appropriate volume of Buffer AE (100–200 µl). Incubate at room temperature for 3 min at 1400 rpm.  Place tube holder onto magnetic base, wait until bead separation is completed (\~1 min), and transfer supernatant with high-molecular-weight DNA to a new microcentrifuge tube.   
- Run the samples on a SpeedVac for about 45 mins with no heating.

Ligate around 400-500 ng of this purified DNA O/N with: 

1. Blunt T/A ligase \- reaction volume 25 uL  
2. T4 DNA ligase \- reaction volume 25 uL

**5\. Prepare new 200-bp ligands with PCR and set up ligation trials**

Take 1 uL of the original oligo per PCR reaction.

Amplification PCR (CAPAMP1):

| lig200noRE\_F (10 uM) | 2.25 uL |
| :---- | :---- |
| lig200noRE\_R (10 uM) | 2.25 uL |
| 2X KAPA HiFi | 12.5 uL |
| ssDNA (1 uL of 100 uM oligo) | 1 uL |
| NF H2O | 7 uL |

 

| 95 degrees C | 3 min |
| :---- | :---- |
| **98 C** | **20 s** |
| **56 C** | **15 s                                                           6X** |
| **72 C** | **30 s** |
| 72 C | 40 min |
| 4 C | HOLD |

Amplification PCR repeat (CAPAMP2):

| lig200noRE\_F (10 uM) | 2.25 uL |
| :---- | :---- |
| lig200noRE\_R (10 uM) | 2.25 uL |
| 2X KAPA HiFi | 12.5 uL |
| lig200noRE dsDNA (from 1st PCR reaction) | 2.5 uL |
| NF H2O | 5.5 uL |

 

| 95 degrees C | 3 min |
| :---- | :---- |
| **98 C** | **20 s** |
| **54 C** | **15 s                                                           2X** |
| **72 C** | **30 s** |
| 72 C | 40 min |
| 4 C | HOLD |

Amplification PCR (CAPAMP1):

| lig200HindIII\_F (10 uM) | 2.25 uL |
| :---- | :---- |
| lig200HindIII\_R (10 uM) | 2.25 uL |
| 2X KAPA HiFi | 12.5 uL |
| ssDNA (1 uL of 100 uM oligo) | 1 uL |
| NF H2O | 7 uL |

 

| 95 degrees C | 3 min |
| :---- | :---- |
| **98 C** | **20 s** |
| **56 C** | **15 s                                                           6X** |
| **72 C** | **30 s** |
| 72 C | 40 min |
| 4 C | HOLD |

Amplification PCR repeat (CAPAMP2):

| lig200HindIII\_F (10 uM) | 2.25 uL |
| :---- | :---- |
| lig200HindIII\_R (10 uM) | 2.25 uL |
| 2X KAPA HiFi | 12.5 uL |
| lig200HindIII dsDNA (from 1st PCR reaction) | 2.5 uL |
| NF H2O | 5.5 uL |

 

| 95 degrees C | 3 min |
| :---- | :---- |
| **98 C** | **20 s** |
| **54 C** | **15 s                                                           2X** |
| **72 C** | **30 s** |
| 72 C | 40 min |
| 4 C | HOLD |

**Steps**

1. Set up reaction as follows:

| COMPONENT | 50 µl REACTION |
| :---- | :---- |
| DNA | 1 µg |
| 10X rCutSmart Buffer | 5 µl (1X) |
| HindIII-HF | 1.0 µl (20 units)† |
| Nuclease-free Water | to 50 µl |

2. Incubate at 37°C for 5–15 minutes as HindIII-HF is Time-Saver qualified.

**4X each**

| DNA | up to 300 pmol of 5´ termini (Use 2 ug of DNA per reaction) |
| :---- | :---- |
| T4 PNK Reaction Buffer (10X) | 5 µl |
| ATP (10 mM) | 5 µl |
| [T4 PNK](https://www.neb.com/en-gb/products/m0201-t4-polynucleotide-kinase) | 1 µl (10 units) |
| Nuclease-free Water | up to 50 µl |

2\. Incubate at 37°C for 30 minutes.  
3\. Heat inactivate by incubating at 75°C for 10 minutes.  
T4 DNA ligase treatment for lig147-PNK

Reaction 1:

500-1000 ng of DNA  
1 uL T4 DNA ligase buffer  
3 uL 50% PEG  
1 uL T4 DNA ligase  
Total volume \= 10 uL

Reaction 2:

500-1000 ng of DNA  
1.5 uL T4 DNA ligase buffer  
4.5 uL 50% PEG  
1.5 uL T4 DNA ligase  
Total volume \= 15 uL

Incubate both reactions at 16 degrees O/N.

**22 September 2025**

1. **Contact GenScript about new protein expression clones**  
2. **Check lig147 T4 DNA ligation (with PEG) product sizes**  
3. **Set up secondary ligation for T4 DNA ligation products**  
4. **Change media for GP5d, HAP1 & 293T cells in culture**  
5. **Develop plan for nucleosome reconstitution at larger scale for FIBER-SEQ trials**

**23 September 2025**

1. **Check secondary ligation products on agarose gel**  
2. **Sorting for GP5d lines transduced with MYC335 virus and treated with PB**  
3. **Change media for HAP1 cells**  
4. **Treat HAP1 sorted cells with Ad-Cre virus**  
5. **Develop plan for nucleosome reconstitution at larger scale for FIBER-SEQ trials**  
6. **Passage and seed 293TX cells at very low density**

**1\. Check secondary ligation products on agarose gel**

Ligation reactions set up were:

L1-1: \~160 ng DNA in 20 uL with 2 uL ligase  
L1-2: \<100 ng DNA in 20 uL with 2 uL ligase  
L2-1: \~210 ng DNA in 20 uL with 2 uL ligase  
L2-2: \~100 ng DNA in 20 uL with 2 uL ligase

**3\. Treat HAP1 sorted cells with Ad-Cre virus**

PFU/mL of Ad-CRE is 10^7 PFU/uL

	For \~200K cells at MOI=5, volume of virus needed \= 1 uL

	For \~200K cells at MOI=10, volume of virus needed \= 2 uL

	For \~200K cells at MOI=50, volume of virus needed \= 5 uL

For each MOI condition prepare 1 tube (for 4 wells):

MOI5 ⇒ 4 uL polybrene \+ 4 uL virus \+ 3992 uL HAP1 medium

MOI10 ⇒ 4 uL polybrene \+ 8 uL virus \+ 3988 uL HAP1 medium

MOI50 ⇒ 4 uL polybrene \+ 20 uL virus \+ 3980 uL HAP1 medium

Add 1 mL to each well.

**25 September 2025**

1. **Set up large scale PCR for lig147**  
2. **Harvest and freeze HAP1, GP5d cells**  
3. **Image sorted GP5del MYC355 cells**

**1\. Set up large scale PCR for lig147**

Take lig147 ROOT or lig147 ROOT/MASTER copy ⇒ 500 ng total ⇒ Dilute to 5 ng/uL (100 uL)

100X

| NCAP\_F (10 uM) | 100 uL |
| :---- | :---- |
| NCAP\_R (10 uM) | 100 uL |
| 2X KAPA HiFi | 2500 uL |
| diluted lig147 | 100 uL |
| NF H2O | 2200 uL |

Split 50 uL per well of a 96-well PCR plate.

PCR4, SELEX\_AMP

| 95°C | 3 min |
| :---- | :---- |
| 98°C | 20 s |
| 55°C | 15 s       **10X\*** |
| 72°C | 30 s |
| 72°C | 40 min |
| 4°C | HOLD |

Run 5 uL from one reaction on an agarose gel to check the purity of the product. Pool all reactions together and purify the product to final pure lig147.

**30 September 2025**

1. **Transduce 293TX cells with Gcla virus with polybrene/Transdux**  
2. **Prepare 1X more plates with 2X Phusion polymerase mix for lig147 from newly prepared lig147 MAIN**  
3. **Test Hia5 activity with Hia5 test ligand in Nucleosome Exchange Buffer**  
4. **Prepare a plan for samples to be prepared with Nucleosome recon for long-read footprinting**  
5. **Thaw new HAP1 and GP5d WT cells for extracting gDNA for nucleosome reconstitution**  
     
     
1. **Transduce 293TX cells with Gcla virus with polybrene/Transdux**

	

| MOI | Polybrene | Transdux | Virus | Media |
| :---: | :---: | :---: | :---: | :---: |
| 5 | 2 uL |  | 100 uL | 1898 uL |
| 10 | 2 uL |  | 200 uL | 1798 uL |
| 50 | 2 uL |  | 1 mL | 998 uL |
| 100 | 2 uL |  | 2 mL | \- |
| 5 |  | 10 uL | 100 uL | 1890 uL |
| 10 |  | 10 uL | 200 uL | 1790 uL |
| 50 |  | 10 uL | 1 mL | 990 uL |
| 100 |  | 10 uL | 2 mL | \- |

2. **Prepare 1X more plates with 2X Phusion polymerase mix for lig147 from newly prepared lig147 MAIN**

	Run the new lig147 MAIN ligand on a gel to check quality. Concentrate this   ligand by running in SpeedVac for about an hour.

For PCR:

100X

| NCAP\_F (10 uM) | 100 uL |
| :---- | :---- |
| NCAP\_R (10 uM) | 100 uL |
| 2X Phusion | 2500 uL |
| lig147 MAIN | 41.5 uL (diluted to 100 uL) |
| NF H2O | 2200 uL |

Split 50 uL per well of a 96-well PCR plate.

PCR4, SELEX\_AMP

| 95°C | 3 min |
| :---- | :---- |
| 98°C | 20 s |
| 55°C | 15 s       **10X\*** |
| 72°C | 30 s |
| 72°C | 40 min |
| 4°C | HOLD |

Run 5 uL from one reaction on an agarose gel to check the purity of the product. Pool all reactions together and purify the product to final pure lig147. Also measure concentration of sample.

**3\. Test Hia5 activity with Hia5 test ligand in Nucleosome Exchange Buffer**

Amplification PCR: (CAPAMP1) 2X

| NCAP\_F (10 uM) | 2.25 uL |
| :---- | :---- |
| NCAP\_R (10 uM) | 2.25 uL |
| 2X KAPA HiFi HS | 12.5 uL |
| Hia5testlig 100 uM | 2 uL |
| NF water | 6 uL |

![][image111]

Using this PCR product, set up the second PCR:

Amplification PCR: (CAPAMP2) 6X

| NCAP\_F (10 uM) | 2.25 uL |
| :---- | :---- |
| NCAP\_R (10 uM) | 2.25 uL |
| 2X KAPA HiFi HS | 12.5 uL |
| CAPAMP1 product | 2.5 uL |
| NF water | 5.5 uL |

Products were pooled and column purified, quantified and then run on a 2% agarose gel to confirm the size.

Dilute psf-Hia5 (1 uL in total of 15 uL with water) **\[dil psf-Hia5 \- dpH\]**

*Titration of Hia5 for the Nucleosome Exchange Buffer (NE)+FIBER-Seq (500 ng DNA per trial). Total 20 uL reactions.*

- Hia5 ligand \+ NE buffer \+ 1 uL dpH \+ 0.5 uL SAM \+ 1 uL 20X Spermidine  
- Hia5 ligand \+ NE buffer \+ 2 uL dpH \+ 0.5 uL SAM \+ 1 uL 20X Spermidine  
- Hia5 ligand \+ NE buffer \+ 3 uL dpH \+ 0.5 uL SAM \+ 1 uL 20X Spermidine  
- Hia5 ligand \+ NE buffer \+ 4 uL dpH \+ 0.5 uL SAM \+ 1 uL 20X Spermidine  
- Hia5 ligand \+ NE buffer \+ 5 uL dpH \+ 0.5 uL SAM \+ 1 uL 20X Spermidine

Incubate 37 degrees \- 1 hour and 80 degrees, 10 mins. Then add 1 uL DpnI and 2 uL CutSmart and incubate again at 37 degrees \- 1 hour and 80 degrees, 10 mins. Run these reactions on a 2% agarose gel to check the activity of the enzyme.

**1 October 2025**

**1\. Prepare 1X more plates with 2X Phusion polymerase mix for lig147 from newly prepared lig147 MAIN**  
**2\. Test Hia5 activity with Hia5 test ligand in Nucleosome Exchange Buffer**  
**3\. Prepare a plan for samples to be prepared with Nucleosome recon for long-read footprinting**  
**4\. Set up O/N T4 DNA ligase test for lig147 and lig200noRE with 1 mM Hexammine Cobalt (III) Chloride**

**1\. Prepare 1X more plates with 2X Phusion polymerase mix for lig147 from newly prepared lig147 MAIN**

Some of the lig147 MAIN was run

100X

| NCAP\_F (10 uM) | 100 uL |
| :---- | :---- |
| NCAP\_R (10 uM) | 100 uL |
| 2X Phusion | 2500 uL |
| lig147 MAIN | 41.5 uL (diluted to 100 uL) |
| NF H2O | 2200 uL |

Split 50 uL per well of a 96-well PCR plate.

PCR4, SELEX\_AMP

| 95°C | 3 min |
| :---- | :---- |
| 98°C | 20 s |
| 55°C | 15 s       **10X\*** |
| 72°C | 30 s |
| 72°C | 40 min |
| 4°C | HOLD |

**2\. Test Hia5 activity with Hia5 test ligand in Nucleosome Exchange Buffer**

Before running this test, run some of the purified Hia5testlig on an agarose gel to confirm quality and purity.

Dilute psf-Hia5 (1 uL in total of 15 uL with water) **\[dil psf-Hia5 \- dpH1\].** Also similarly dilute the new batch of Hia5 (dpH2)

*Titration of Hia5 for the Nucleosome Exchange Buffer (NE)\*+FIBER-Seq (300 ng DNA per trial). Total 20 uL reactions.*

- Hia5 ligand \+ NE buffer \+ 1 uL dpH1 \+ 0.5 uL SAM \+ 1 uL 20X Spermidine  
- Hia5 ligand \+ NE buffer \+ 2 uL dpH1 \+ 0.5 uL SAM \+ 1 uL 20X Spermidine  
- Hia5 ligand \+ NE buffer \+ 3 uL dpH1 \+ 0.5 uL SAM \+ 1 uL 20X Spermidine  
- Hia5 ligand \+ NE buffer \+ 4 uL dpH1 \+ 0.5 uL SAM \+ 1 uL 20X Spermidine  
- Hia5 ligand \+ NE buffer \+ 5 uL dpH1 \+ 0.5 uL SAM \+ 1 uL 20X Spermidine  
- Hia5 ligand \+ NE buffer \+ 1 uL dpH2 \+ 0.5 uL SAM \+ 1 uL 20X Spermidine  
- Hia5 ligand \+ NE buffer \+ 2 uL dpH2 \+ 0.5 uL SAM \+ 1 uL 20X Spermidine  
- Hia5 ligand \+ NE buffer \+ 3 uL dpH2 \+ 0.5 uL SAM \+ 1 uL 20X Spermidine  
- Hia5 ligand \+ NE buffer \+ 4 uL dpH2 \+ 0.5 uL SAM \+ 1 uL 20X Spermidine  
- Hia5 ligand \+ NE buffer \+ 5 uL dpH2 \+ 0.5 uL SAM \+ 1 uL 20X Spermidine

Incubate 37 degrees \- 1 hour and 80 degrees, 10 mins. Then add 1 uL DpnI and 2 uL CutSmart and incubate again at 37 degrees \- 1 hour and 80 degrees, 10 mins. Run these reactions on a 2% agarose gel to check the activity of the enzyme.

\*The buffer being referred to here is the Nucleosome Exchange Buffer B with a salt concentration of 0.26 M.

**3\. Prepare a plan for samples to be prepared with Nucleosome recon for long-read footprinting**

**4\. Set up O/N T4 DNA ligase test for lig147 and lig200noRE with 1 mM Hexammine Cobalt (III) Chloride (HCCl)**

Prepare 100 mL solution of 10 mM HCCl in water ⇒ 0.27 g of HCCl salt in 100 mL water. Store this solution for long-term at 4 degrees.

**3 October 2025**

**T4 PNK treatment for lig147 for repeat of ligation trials**

| DNA | up to 300 pmol of 5´ termini (Use 2 ug of DNA per reaction) |
| :---- | :---- |
| T4 PNK Reaction Buffer (10X) | 5 µl |
| ATP (10 mM) | 5 µl |
| [T4 PNK](https://www.neb.com/en-gb/products/m0201-t4-polynucleotide-kinase) | 1 µl (10 units) |
| Nuclease-free Water | up to 50 µl |

**4 October 2025**

**Transfection of 293TX cells with pHRS-Gclav1, pHRS-Hclav1 & pHRS-GCDv1 for virus packaging**

1\. pHRS-Gclav1:

5 plates (10-cm dish) with 5 ug of transfer plasmids and 6 ug each of the packaging and envelope vectors.

7.5 mL Opti-MEM \+ 39.5 uL pHRS-Gclav1 \+ 20.2 uL pMD2.G \+ 29 uL pCMV-dR8.2

Incubate for 5 mins.

Add 165 uL Turbofectin & incubate for 15 mins.

Split the solution dropwise across two plates. Label these plates as pHRS-Gclav1.

2\. pHRS-Hclav1:

5 plates (10-cm dish) with 5 ug of transfer plasmids and 6 ug each of the packaging and envelope vectors.

7.5 mL Opti-MEM \+ 39.5 uL pHRS-Hclav1 \+ 20.2 uL pMD2.G \+ 29 uL pCMV-dR8.2

Incubate for 5 mins.

Add 165 uL Turbofectin & incubate for 15 mins.

Split the solution dropwise across two plates. Label these plates as pHRS-Hclav1.

3\. pHRS-GCDv1:

5 plates (10-cm dish) with 5 ug of transfer plasmids and 6 ug each of the packaging and envelope vectors.

7.5 mL Opti-MEM \+ 39.5 uL pHRS-Hclav1 \+ 20.2 uL pMD2.G \+ 29 uL pCMV-dR8.2

Incubate for 5 mins.

Add 165 uL Turbofectin & incubate for 15 mins.

Split the solution dropwise across two plates. Label these plates as pHRS-GCDv1.  
**10 October 2025**

Hia5 buffer:

1 mL

| 1 M Tris pH 8 | 15 uL |
| :---- | :---- |
| EDTA (0.5 M) | 2 uL |
| EGTA (0.5 M) | 1 uL |
| NaCl (100 mM) | 150 uL |
| KCl (100 mM) | 600 uL |
| Spermidine (100X) | (1X) 10 uL |

Prepare stocks of 100 mM for KCl, NaCl

KCl \- 0.37 g in 50 mL water

NaCl \- 0.29 g in 50 mL water

For spermidine also prepare a 20X stock \= 20 uL \+ 80 uL NF H2O

Resuspend 1 ug DNA in this buffer.

Dilute psf-Hia5 (1 uL in total of 15 uL with water) **\[dil psf-Hia5 \- dpH\]**

*Titration of Hia5 for the SELEX+FIBER-Seq (500 ng DNA per trial)*

* Hia5 ligand \+ Hia5 buffer \+ 0.5 uL SAM (No enzyme)  
* Hia5 ligand \+ Hia5 buffer \+ 5 uL dpH \+ 0.5 uL SAM  
* Hia5 ligand \+ Nuc buffer 1 \+ 5 uL dpH \+ 0.5 uL SAM  
* Hia5 ligand \+ Nuc buffer 2 \+ 5 uL dpH \+ 0.5 uL SAM  
* Hia5 ligand \+ Nuc buffer 3 \+ 5 uL dpH \+ 0.5 uL SAM  
* Hia5 ligand \+ Nuc buffer 4 \+ 5 uL dpH \+ 0.5 uL SAM  
* Hia5 ligand \+ Nuc buffer 5 \+ 5 uL dpH \+ 0.5 uL SAM  
* Hia5 ligand \+ Nuc buffer 6 \+ 5 uL dpH \+ 0.5 uL SAM  
* Hia5 ligand \+ Nuc buffer 7 \+ 5 uL dpH \+ 0.5 uL SAM

Nuc buffer 1 \= Original Nucleosome Exchange Buffer B with 0.26 M salt

Nuc buffer 2 \= Original Nucleosome Exchange Buffer B with 0.20 M salt \[153.85 uL NE Buffer B \+  46.15 uL water\]

Nuc buffer 3 \= Original Nucleosome Exchange Buffer B with 0.175 M salt \[134.62 uL NE Buffer B \+ 65.38 uL water\]

Nuc buffer 4 \= Original Nucleosome Exchange Buffer B with 0.150 M salt \[115.39 uL NE Buffer B \+ 84.61 uL water\]

Nuc buffer 5 \= Original Nucleosome Exchange Buffer B with 0.120 M salt \[92.31 uL NE Buffer B \+ 107.69 uL water\]

Nuc buffer 6 \= Original Nucleosome Exchange Buffer B with 0.100 M salt \[76.92 uL NE Buffer B \+  uL water\]

Nuc buffer 7 \= Original Nucleosome Exchange Buffer B with 0.08 M salt \[61.54 uL NE Buffer B \+ 138.46 uL water\]

**Nucleosome Exchange Buffer B \[10 mL\]**

650 uL 4 M KCl

TCEP 100 uL

1 tablet EDTA free PI

20 uL MgCl2

0.5 mL glycerol

**T4 PNK treatment for lig147 for repeat of ligation trials**

**5X**

| DNA | up to 300 pmol of 5´ termini (Use 2 ug of DNA per reaction) |
| :---- | :---- |
| T4 PNK Reaction Buffer (10X) | 5 µl |
| ATP (10 mM) | 5 µl |
| [T4 PNK](https://www.neb.com/en-gb/products/m0201-t4-polynucleotide-kinase) | 1 µl (10 units) |
| Nuclease-free Water | up to 50 µl |

**DpnI testing of pHRS libraries (v1)**

**7X \- 1 reaction for each plasmid library**

| COMPONENTS |  50 µl REACTION  | FINAL CONC. OR AMOUNT  |
| ----- | ----- | ----- |
| **Plasmid Library** | **1 µg** |   |
| **10X NEBuffer\*\*** | **5 µl** | **1X**  |
| **Restriction Enzyme** | **1 µl** |   |
| **Nuclease-free Water** | **to 50 µl** | **Varies\***  |

**Ligation Trials for Duration Optimization**

**L5: (30 mins, RT)**

| DNA | 1000 ng |
| :---- | :---- |
| PEG8000 | 4.5 uL |
| 1 mM CoHex | 1 uL |
| T4 DNA ligase | 1 uL |

**L6: (60 mins, RT)**

| DNA | 1000 ng |
| :---- | :---- |
| PEG8000 | 4.5 uL |
| 1 mM CoHex | 1 uL |
| T4 DNA ligase | 1 uL |

**L7: (90 mins, RT)**

| DNA | 1000 ng |
| :---- | :---- |
| PEG8000 | 4.5 uL |
| 1 mM CoHex | 1 uL |
| T4 DNA ligase | 1 uL |

Purify the reactions and run on a 0.5% agarose gel.

**Ligation Trials for Duration Optimization**

**L8: (180 mins, RT)**

| DNA | 1000 ng |
| :---- | :---- |
| PEG8000 | 3 uL |
| 1 mM CoHex | 1 uL |
| Ligase Buffer (10X) | 1 uL |
| T4 DNA ligase | 1 uL |

**L9: (300 mins, RT)**

| DNA | 1000 ng |
| :---- | :---- |
| PEG8000 | 3 uL |
| 1 mM CoHex | 1 uL |
| Ligase Buffer (10X) | 1 uL |
| T4 DNA ligase | 1 uL |

Purify the reactions and run on a 0.5% agarose gel.

Trying Hia5 with new Nucleosome Buffer C:  
1 mL

| 1 M Tris pH 8 | 15 uL |
| :---- | :---- |
| EDTA (0.5 M) | 2 uL |
| EGTA (0.5 M) | 1 uL |
| KCl (4 M) | 20 uL |
| TCEP | 10 uL |
| Glycerol | 50 uL |

* Hia5 ligand (150 ng) \+ Nuc buffer C \+ 5 uL dpH \+ 0.5 uL SAM \+ 1 uL 20X Spermidine

**15 October 2025**

**Hia5testlig re-amplification:**

8X

| NCAP\_F (10 uM) | 16 uL |
| :---- | :---- |
| NCAP\_R (10 uM) | 16 uL |
| 2X KAPA HiFi HS | 100 uL |
| Hia5testlig dil. | 8 uL |
| NF water | 60 uL |

| 95°C | 3 min |
| :---- | :---- |
| 98°C | 20 s |
| 55°C | 15 s       **20X\*** |
| 72°C | 30 s |
| 72°C | 40 min |
| 4°C | HOLD |

* Hia5 ligand (150 ng) \+ Nuc buffer C \+ 5 uL dpH \+ 0.5 uL SAM \+ 1 uL 20X Spermidine

**16 October 2025**

1. *Run DpnI digested test for Hia5testlig on agarose gel to check activity in Nucleosome Buffer C*  
2. *Perform transfection of 293TX cells with GCDv1, HCDv1 viruses*  
3. *Dissolve HMW HAP1 gDNA and fragment to 20-kb*

*3\. Dissolve HMW HAP1 gDNA and fragment to 20-kb*

Add 5 mM NaCl to the gDNA. \~0.01% of Tween20 was also added to the mix. The sample was then incubated at 37 degrees, 30 mins. This is to ensure that the rest of the solution goes into solution.

*2\. Perform transfection of 293TX cells with GCDv1, HCDv1 viruses*

1\. pHRS-GCDv1:

5 plates (10-cm dish) with 5 ug of transfer plasmids and 6 ug each of the packaging and envelope vectors.

7.5 mL Opti-MEM \+ 39.5 uL pHRS-GCDv1 \+ 20.2 uL pMD2.G \+ 29 uL pCMV-dR8.2

Incubate for 5 mins.

Add 165 uL Turbofectin & incubate for 15 mins.

Split the solution dropwise across two plates. Label these plates as pHRS-GCDv1.

2\. pHRS-HCDv1:

5 plates (10-cm dish) with 5 ug of transfer plasmids and 6 ug each of the packaging and envelope vectors.

7.5 mL Opti-MEM \+ 39.5 uL pHRS-HCDv1 \+ 20.2 uL pMD2.G \+ 29 uL pCMV-dR8.2

Incubate for 5 mins.

Add 165 uL Turbofectin & incubate for 15 mins.

Split the solution dropwise across two plates. Label these plates as pHRS-HCDv1.  
**17 October 2025**

1. *Needle shearing for HMW HAP1 DNA*  
2. *Change media for virus packaging cells with Viralboost*  
3. *Set up reconstitution for HAP1 20K gDNA & long DNA sent by de Boer lab*

*1\. Needle shearing for HMW HAP1 DNA*

**![][image112]**

Take 87.95 uL of original sample \+ 62.05 uL TE buffer.

Load the gTubes into the centrifuge and spin for 60 sec at 7200 rpm. Then invert the tube and spin again at 7200 rpm for 60 sec.

Place the gTube on the UNLOAD position and collect the sheared sample from the screw cap.

Run some of the sample on a 0.8% agarose gel to check for the integrity and shear size of the sample.

**Large scale reconstitution of lig20K & lig50K**

*lig20K*

Use 3.89 ug of DNA

lig20K (D1) ⇒ 15 uL ⇒ 15 nM \[at 2 M salt concentration\]

Octamer molarity acc. to 60:1 ratio ⇒ 0.9 uM ⇒ 1.96 ug in 5 uL ⇒ Prepare 12 uL of stock with 500 ng/uL with refolding buffer \[1.11 uL stock \+ 8.89 uL refolding buffer\] \[O500\] ⇒ Prepare 5 uL octamer stock \[3.92 uL \+ 1.08 uL refolding buffer \+ glycerol\] \[1.78 M\] ⇒ Final concentration of mix \[1.95 M\]

*lig50K*

D2

Use 3.25 ug of DNA

lig50K (D2) ⇒ 15 uL ⇒ 5 nM \[at 2 M salt concentration\]

Octamer molarity acc. to 150:1 ratio ⇒ 0.75 uM ⇒ 1.63 ug in 5 uL ⇒ 3.26 uL \+ 1.74 uL refolding buffer+glycerol; 1.65 M\] ⇒ Final salt concentration of mix \[1.91 M\]

D3

Use 3.25 ug of DNA

lig50K (D2) ⇒ 15 uL ⇒ 5 nM \[at 2 M salt concentration\]

Octamer molarity acc. to 200:1 ratio ⇒ 1 uM ⇒ 2.18 ug in 5 uL ⇒ 4.36 uL \+ 1.74 uL refolding buffer+glycerol; 1.65 M\] ⇒ Final salt concentration of mix \[1.91 M\]

*High salt RB (2 L)*  
298.2 g KCl  
20 mL 1 M Tris-HCl, pH 7.5  
4 mL 0.5 M EDTA  
2 mL DTT

*Low salt RB (2 L)*  
37.28 g KCl  
20 mL 1 M Tris-HCl, pH 7.5  
4 mL 0.5 M EDTA  
2 mL DTT

Resuspend 1.54 g of DTT in 10 mL of water to prepare a 1 M stock if needed.

This trial is being run at 1.5 mL/min (pump 1\) & 1.3 mL/min (pump 2\)

Nucleosome samples to be concentrated and tested for Hia5 treatment:

B1recon  
B2recon  
B3recon  
B4recon

**18 October 2025**

50 mL

| 1 M Tris pH 8 | 0.75 mL |
| :---- | :---- |
| EDTA (0.5 M) | 100 uL |
| EGTA (0.5 M) | 50 uL |
| KCl (4 M) | 1 mL |
| TCEP | 500 uL |
| Glycerol | 2.5 mL |

Let the solution mix for a short while. Filter using 0.22 um filter and then add \~5 mL to each 15 mL falcon tube. Take 3 mini-dialysis columns labeled D1, D2 and D3 and then place them on top of the buffer solution for equilibration.

After equilibration, transfer the original reconstituted samples in D1, D2, D3 to each of the new mini dialysis columns. During the transfer, rinse the original columns with a little of the Buffer C and add this to the transferred samples undergoing buffer exchange.

**19 October 2025**

After overnight dialysis of samples D1, D2 & D3 with Nucleosome Buffer C \- the samples were collected and concentration of DNA was measured. Concentration values seen are in the following range:

D1: \~9 ng/uL

D2: \~19 ng/uL

D3: \~3-4 ng/uL

***NOTE: The Nanodrop values underestimate the actual amounts of DNA by a fair bit due to the skewed absorbance values measured at 260 nm.***

**20 October 2025**

1. **Testing nucleosome reconstitution samples for FIBER-Seq**

Testing these samples:

*Test 1 \- Hia5 \+ DpnI* 

Take 5 uL of each sample:

D1 \- 5 uL sample \+ 0.5 uL SAM \+ 1 uL 20X Spermidine \+ 13 uL Nucleosome Buffer C \+ 0.5 uL Hia5

D2 \- 5 uL sample \+ 0.5 uL SAM \+ 1 uL 20X Spermidine \+ 13 uL Nucleosome Buffer C \+ 0.5 uL Hia5

D3 \- 5 uL sample \+ 0.5 uL SAM \+ 1 uL 20X Spermidine \+ 13 uL Nucleosome Buffer C \+ 0.5 uL Hia5

| 37 C | 1 hour |
| :---- | :---- |
| 80 C | 10 mins |

Add 2.3 uL Cutsmart buffer \+ 1 uL DpnI to each sample and repeat the incubation.

| 37 C | 1 hour |
| :---- | :---- |
| 80 C | 10 mins |

Run these samples on a 2% agarose gel and stain with SYBR Green.

*Test 2 \- MNase*

Take 5 uL of each sample:

1. D1recon (5 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \+ 1 uL dil-MNase  
2. D2recon (5 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \+ 1 uL dil-MNase  
3. D3recon (5 uL) \+ 5 uL Buffer \+ 0.25 uL rAlbumin \+ 1 uL dil-MNase

Incubate at 37 degrees, 10 mins. Add 1.1 uL EGTA (0.5 M) to stop the reaction.Run these samples on a 0.5 % agarose gel and stain with SYBR Green.

**2\. Virus packaging for GCDv1 & HCDv1**

Spin the tubes of virus incubating O/N at max RCF for 30 mins.

Resuspend the total virus of each type with 5 mL DMEM high glucose and aliquot into 1 mL each per tube (5 tubes per virus).
