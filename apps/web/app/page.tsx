import Link from "next/link";
import { papers } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <section className="mx-auto grid min-h-screen max-w-7xl content-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-4 inline-flex rounded-md bg-sky px-3 py-1 text-sm font-medium text-ink">
            Cambridge, Edexcel, OxfordAQA
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl">
            Exam AI
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
            Search past papers, understand mark schemes, practise weak topics, and get grounded AI tutoring built for international exam students.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/dashboard" className="focus-ring rounded-md bg-coral px-5 py-3 text-center font-semibold text-white shadow-soft">
              Start revising
            </Link>
            <Link href="/search" className="focus-ring rounded-md border border-ink/15 bg-white px-5 py-3 text-center font-semibold">
              Search papers
            </Link>
          </div>
        </div>
        <div className="rounded-lg border border-ink/10 bg-white p-4 shadow-soft">
          <div className="rounded-md bg-ink p-4 text-paper">
            <p className="text-sm text-paper/70">Ask AI Tutor</p>
            <p className="mt-3 text-xl font-semibold">Explain Biology 0610 Paper 42 Q3 mark scheme</p>
          </div>
          <div className="mt-4 space-y-3">
            {papers.map((paper) => (
              <div key={paper.id} className="rounded-md border border-ink/10 p-3">
                <p className="text-sm font-semibold">{paper.title}</p>
                <p className="mt-1 text-xs text-ink/60">{paper.type} &middot; {paper.topics.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
