# Experimentalist: interactive lab notebook

A static, searchable lab notebook built from Tushar's three Google Docs (31 Oct 2024 → today). It runs on GitHub Pages. There is no build step and no server: you can add or edit entries in the browser, and each save is committed straight to this repo.

## Using it
- **Timeline** (home): every dated entry in order. Toggle newest/oldest first.
- **Search** (`/` to focus): full-text search across all entries, experiment titles and tags. It uses prefix and fuzzy matching (MiniSearch, bundled in `vendor/`).
- **Filters** (sidebar): date range, source notebook, techniques, samples/ligands (filterable), reagents, and "has images/tables". Filters combine with AND.
- **Calendar**: a year grid. Click any highlighted day to open that entry.
- **Entry view**: tables, an experiments table of contents, an image lightbox (click an image, use ←/→ and Esc), prev/next, a 🔗 permalink (`#/entry/YYYY-MM-DD`) and a link back to the original Google Doc.
- **Dark/light**: the ◐ button.

## Adding / editing entries
1. Open **⚙ Settings** and enter a GitHub token. The best choice is a *fine-grained* token for `double2strand/experimentalist` with **Contents: read & write**. The token is stored only in this browser's `localStorage` and is never committed. Owner, repo and branch can be changed there (defaults: `double2strand / experimentalist / main`).
2. Click **+ New entry** (or **✎ Edit** on an entry). Write in Markdown and watch the live preview. The toolbar has buttons for an experiment heading (`### 1. Title`), a table, a PCR program, lists and images. You can paste or drag images in.
3. **Save** (or Ctrl/⌘+S) makes these commits through the GitHub contents API:
   - images → `assets/img/uploads/…`
   - the entry → `data/entries/<id>.json`
   - the search index → `data/index.json`

   The entry shows up immediately in your browser. The public site picks it up after Pages redeploys, which takes about 1 minute.

An entry's id is its date. A second entry on the same day becomes `YYYY-MM-DD-2`. Tags for techniques, reagents and samples are applied automatically using `data/tag_rules.json`, and you can add your own as extra tags.

## Data layout
```
data/index.json            # metadata + plain text of all entries (search index source)
data/entries/YYYY-MM-DD.json  # {id,date,heading,title,body(markdown),experiments,tags,images,tables,source}
data/tag_rules.json        # auto-tag regexes (shared by importer and editor)
assets/img/                # images extracted from the Google Docs (docN-imageK.png) + uploads/
source/*.md                # raw Google Docs Markdown exports (text only) kept for provenance
scripts/build_from_docs.py # importer that produced data/ from source/
```

## Enabling GitHub Pages
Repo **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)`**. The site is served at `https://double2strand.github.io/experimentalist/`. `.nojekyll` is included so files are served as-is.

## Running locally
```
python3 -m http.server 8000   # then open http://localhost:8000
```

## Import notes
- Text is copied verbatim from the Docs' Markdown export. The only changes are presentational: numbered bold sub-headings became `###` headings, and image references became file paths. The character counts of the source and the output match for all three docs (see `source/import_report.json`).
- Six images in the May–Oct 2025 doc (doc2 images 5, 6, 25, 26, 103, 107) were too large for the export API. Only their top portion was recovered, and they are labelled "partial". Replace them by uploading the originals via Edit.
- The heading "9 February 2025" in the current doc sits between Feb 2026 entries. It is filed as 2026-02-09, with a note on the entry.
