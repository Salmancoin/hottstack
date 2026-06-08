import { AppShell } from "@/components/app-shell";
import { papers } from "@/lib/mock-data";

const filters = ["Cambridge", "Edexcel", "IGCSE", "AS-Level", "A-Level", "Mark scheme", "Examiner report"];

export default function SearchPage() {
  return (
    <AppShell>
      <section className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="rounded-lg border border-ink/10 bg-white p-4 shadow-soft">
          <h1 className="text-xl font-semibold">Search papers</h1>
          <input
            className="mt-4 w-full rounded-md border border-ink/15 px-3 py-3 text-sm focus-ring"
            placeholder="Try Biology 0610 gas exchange"
          />
          <div className="mt-5 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button key={filter} className="rounded-md border border-ink/10 px-3 py-2 text-sm text-ink/75">
                {filter}
              </button>
            ))}
          </div>
        </aside>

        <div className="space-y-4">
          {papers.map((paper) => (
            <article key={paper.id} className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <p className="text-sm text-ink/60">{paper.board} · {paper.year} · {paper.type}</p>
                  <h2 className="mt-1 text-xl font-semibold">{paper.title}</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {paper.topics.map((topic) => (
                      <span key={topic} className="rounded-md bg-sky px-2 py-1 text-xs font-medium">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="focus-ring rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper">
                  Open viewer
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
