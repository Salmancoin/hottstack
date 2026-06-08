# Product Requirements

## Vision

Build the AI study operating system for international exam students: fast past-paper access, grounded AI tutoring, AI marking, topic predictions, and personalized revision analytics.

## Primary users

| User | Jobs to be done |
| --- | --- |
| Student | Find papers, understand mark schemes, practise weak topics, revise daily |
| Parent | See progress and justify subscription |
| Teacher | Assign topic practice and spot class weaknesses |
| Admin | Upload papers, moderate AI output, manage subscriptions |
| School | Bulk licensing, reporting, curriculum-aligned analytics |

## MVP scope

1. Auth-ready user model.
2. Subject and exam-board catalog.
3. Past paper search and viewer.
4. Mark scheme and examiner report storage.
5. RAG AI tutor with citations.
6. Basic AI mark scheme explainer.
7. Student dashboard with streak, weak topics, recent activity, and exam countdown.
8. Admin upload queue and ingestion status.
9. Stripe-ready subscription model.
10. M-Pesa-ready payment records.

## User stories

| Priority | Story |
| --- | --- |
| P0 | As a student, I can filter papers by board, subject, year, session, and paper type. |
| P0 | As a student, I can ask the AI tutor to explain a mark scheme with citations. |
| P0 | As an admin, I can upload a PDF and track OCR, tagging, and embedding status. |
| P1 | As a student, I can submit an answer and receive mark-by-mark feedback. |
| P1 | As a student, I can see weak topics and a daily revision plan. |
| P2 | As a school, I can view class-level mastery and usage reports. |

## Monetization

| Plan | Suggested price | Included |
| --- | ---: | --- |
| Free | $0 | Search, limited papers, limited AI messages |
| Pro | $7.99/mo | Unlimited papers, tutor, saved papers, analytics |
| AI Max | $14.99/mo | AI marking, predictions, generated quizzes, planner |
| School | Custom | Bulk seats, class analytics, teacher dashboard |

## Growth loops

- SEO pages for every board, subject, year, and topic combination.
- Shareable AI flashcards and quiz links.
- Referral credits for AI marking.
- WhatsApp-friendly revision summaries.
- Teacher free pilots that convert to school licenses.

## Roadmap

| Phase | Timeline | Outcome |
| --- | --- | --- |
| 1 | 8-12 weeks | Searchable licensed paper library, tutor, admin upload |
| 2 | 8-10 weeks | AI marking, weak-topic engine, flashcards, revision planner |
| 3 | 8-12 weeks | Hybrid search, school dashboards, mobile PWA, scale hardening |
| 4 | Ongoing | Partnerships, referrals, advanced predictions, local payments |
