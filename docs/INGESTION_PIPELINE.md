# Past Paper Ingestion Pipeline

```text
Admin upload
  -> virus scan
  -> store original PDF
  -> create Paper row
  -> OCR/text extraction
  -> metadata extraction
  -> page and question segmentation
  -> mark scheme linkage
  -> topic tagging
  -> chunking
  -> embedding generation
  -> keyword index update
  -> human review
  -> publish
```

## Processing jobs

| Job | Input | Output |
| --- | --- | --- |
| `extract-metadata` | PDF filename and first pages | board, syllabus, year, session, paper, variant |
| `extract-text` | PDF | page text and OCR confidence |
| `segment-questions` | page text | question records with page ranges |
| `tag-topics` | question text + taxonomy | topic labels and confidence |
| `embed-chunks` | normalized chunks | vector records |
| `quality-review` | all artifacts | admin review state |

## Topic tagging strategy

Use a two-step approach:

1. Deterministic candidate shortlist from subject taxonomy and keyword map.
2. AI classifier returns topic IDs, confidence, and rationale.

Low-confidence tags are sent to admin review instead of being published automatically.
