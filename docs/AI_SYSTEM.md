# AI System Design

## Model usage

Use OpenAI models through a provider adapter so the product can change model IDs without rewriting business logic. Keep prompts and response schemas versioned.

## Tutor contract

The tutor must:

- Use retrieved sources for paper, mark scheme, report, and syllabus claims.
- Cite paper title, page, and chunk ID.
- Say when sources are insufficient.
- Explain step-by-step in student language.
- Refuse leaked or live exam requests.

## Marking flow

```text
Student answer
  -> retrieve question and mark scheme
  -> parse mark points
  -> semantic comparison
  -> structured mark allocation
  -> feedback and improved answer
  -> mastery update
```

## Prediction flow

Predictions are revision guidance, not claims about future papers. The scoring model should combine:

- Topic frequency.
- Topic recency gaps.
- Examiner report emphasis.
- Syllabus weighting.
- Historical co-occurrence.
- Weakness data from the student.
- Manual curriculum expert overrides.

## Hallucination controls

| Risk | Control |
| --- | --- |
| Fake citations | Only allow citation IDs from retrieved chunks |
| Unsupported claim | Model must return `insufficient_context` |
| Prompt injection | Strip PDF instructions that target the AI/system |
| Overconfident predictions | Confidence bands and methodology visible |
| Bad OCR | OCR confidence gates and admin review |
