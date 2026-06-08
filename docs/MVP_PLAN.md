# Complete MVP Plan

## Launch feature set

1. Cambridge IGCSE and Cambridge AS/A-Level first.
2. Math, Biology, Chemistry, Physics, Economics, Business.
3. Searchable licensed paper library.
4. PDF viewer with paper, mark scheme, and AI explanation tabs.
5. RAG AI tutor with citations.
6. Admin upload and ingestion queue.
7. Student dashboard with weak topics and streak.
8. Stripe checkout and subscription gating.
9. M-Pesa payment records and callback endpoint scaffold.

## Cheapest scalable infrastructure

| Component | MVP service |
| --- | --- |
| Frontend | Vercel |
| API | Railway/Fly.io |
| Database | Neon/Supabase Postgres with pgvector |
| Redis | Upstash |
| Storage | S3 or Supabase Storage |
| AI | OpenAI API |
| Monitoring | Sentry + structured logs |

## Team

| Role | Phase |
| --- | --- |
| Full-stack lead | Day 1 |
| AI engineer | Day 1 |
| Content/curriculum lead | Day 1 |
| Product designer | Part-time MVP |
| Growth marketer | Pre-launch |
| Legal advisor | Before hosting copyrighted content |

## Metrics

- Search to paper-open conversion.
- AI answer helpfulness.
- Weekly active learners.
- Questions attempted per user.
- Weak-topic improvement.
- Free-to-paid conversion.
- AI cost per active user.
- Churn and renewal rate.
