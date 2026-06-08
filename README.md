# Exam AI Platform

Startup-grade MVP foundation for an AI-powered exam preparation platform serving Cambridge IGCSE, Cambridge International AS & A-Level, Pearson Edexcel, and OxfordAQA students.

## What is included

- Next.js web app shell with dashboard, search, AI tutor, predictions, and admin screens.
- NestJS-style API scaffold with modules for papers, search, AI tutor, marking, ingestion, analytics, and payments.
- Prisma/PostgreSQL schema with exam content, subscriptions, conversations, embeddings, and analytics models.
- Shared AI prompt and contract package for RAG, marking, predictions, and topic tagging.
- Docker Compose for Postgres, pgvector, Redis, and local S3-compatible storage.
- Product, architecture, ingestion, AI, security, and MVP roadmap docs.

## Quick start

```bash
npm install
cp .env.example .env
npm run db:generate
npm run dev
```

Run the API in a second terminal:

```bash
npm run dev:api
```

## Repo map

```text
apps/web       Next.js student/admin interface
apps/api       NestJS backend API and Prisma schema
packages/ai    Shared AI prompts, schemas, and retrieval contracts
packages/types Shared TypeScript domain types
docs           Product and system design docs
infra/docker   Local development infrastructure
```

## Legal note

Exam papers, mark schemes, examiner reports, and syllabus material may be copyrighted. Production launch should use licensed content, official links where required, and strict access controls for school-provided uploads.
