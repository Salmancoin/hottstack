# System Architecture

## High-level architecture

```text
Next.js Web/PWA
  -> API Gateway / NestJS
    -> PostgreSQL + pgvector
    -> Redis + BullMQ
    -> S3-compatible storage
    -> Hybrid search index
    -> OpenAI-powered AI services
    -> Stripe + M-Pesa payment adapters
```

## Service boundaries

| Module | Responsibility |
| --- | --- |
| Auth | JWT/OAuth integration, RBAC, session user |
| Subjects | Boards, qualifications, subjects, topic taxonomy |
| Papers | PDF metadata, paper records, mark schemes, reports |
| Ingestion | OCR, segmentation, metadata extraction, embeddings |
| Search | Keyword, semantic, filters, reranking |
| AI Tutor | RAG answers with citations |
| AI Marking | Rubric-aware provisional marking |
| Predictions | Trend analysis and likely topic recommendations |
| Analytics | Mastery, attempts, streaks, readiness |
| Payments | Stripe and M-Pesa subscriptions/payments |
| Admin | Upload review, AI monitoring, revenue, user management |

## RAG architecture

```text
Question
  -> intent classification
  -> metadata filters
  -> keyword retrieval
  -> vector retrieval
  -> reranking
  -> context assembly
  -> structured model response
  -> citation validation
  -> conversation and trace logging
```

## Scaling path

Start as a modular monolith. Split workers when throughput requires it:

1. `api`: request/response endpoints.
2. `worker-ingestion`: OCR, segmentation, embeddings.
3. `worker-ai`: marking, predictions, async generation.
4. `search`: Typesense/Meilisearch/OpenSearch when Postgres FTS becomes limiting.

## Security baseline

- Signed URLs for private PDFs.
- RBAC for admin and school users.
- Redis rate limits per user and IP.
- Payment webhook signature verification.
- AI prompt injection checks.
- Citation-only answers for exam-board-specific claims.
- Audit logs for admin actions.
