# API Contract

## Core endpoints

| Method | Route | Purpose |
| --- | --- | --- |
| GET | `/api/subjects` | List boards, levels, subjects, and syllabus codes |
| GET | `/api/papers/search` | Filtered paper search |
| GET | `/api/papers/:id` | Paper metadata and viewer links |
| POST | `/api/search/hybrid` | Keyword + semantic search |
| POST | `/api/ai/tutor/message` | RAG tutor answer |
| POST | `/api/ai/mark` | Provisional answer marking |
| POST | `/api/admin/ingestion/jobs` | Queue paper ingestion |
| GET | `/api/analytics/me` | Student analytics |
| POST | `/api/payments/stripe/webhook` | Stripe webhook |
| POST | `/api/payments/mpesa/callback` | M-Pesa callback |

## Tutor response

```json
{
  "answer": "The mark scheme awards one mark for naming diffusion and one for explaining movement down a concentration gradient.",
  "citations": [
    {
      "chunkId": "chunk_123",
      "sourceTitle": "Cambridge IGCSE Biology 0610/42/M/J/2024 Mark Scheme",
      "page": 4,
      "questionNumber": "3"
    }
  ],
  "suggestedPractice": [
    {
      "questionId": "question_456",
      "reason": "Same gas exchange skill"
    }
  ],
  "insufficientContext": false
}
```

## Marking response

```json
{
  "totalMarks": 3,
  "awardedMarks": 2,
  "markBreakdown": [
    {
      "markPoint": "Identifies diffusion",
      "awarded": true,
      "evidenceFromAnswer": "diffuses",
      "feedback": "Correct process."
    }
  ],
  "improvedAnswer": "Oxygen diffuses from a higher concentration in the alveoli to a lower concentration in the blood.",
  "weakTopics": ["Gas exchange"]
}
```
