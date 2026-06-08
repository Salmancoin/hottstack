import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { StatCard } from "@/components/stat-card";
import { subjects, weakTopics } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="grid gap-6">
        <section className="rounded-lg bg-ink p-6 text-paper shadow-soft">
          <p className="text-sm text-paper/70">May/June exam countdown</p>
          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="text-3xl font-semibold">Today&apos;s revision plan is ready</h1>
              <p className="mt-2 max-w-2xl text-paper/70">
                Focus on 3 weak topics, complete 12 past-paper marks, and review one examiner report trend.
              </p>
            </div>
            <Link href="/tutor" className="focus-ring rounded-md bg-gold px-5 py-3 text-center font-semibold text-ink">
              Begin session
            </Link>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <StatCard label="Exam readiness" value="68%" detail="Up 9% over the last 14 days" />
          <StatCard label="Study streak" value="11 days" detail="Keep it alive with one quiz today" />
          <StatCard label="AI feedback" value="27 marks" detail="Reviewed across 6 answers this week" />
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
            <h2 className="text-xl font-semibold">Subject readiness</h2>
            <div className="mt-4 space-y-4">
              {subjects.map((subject) => (
                <div key={subject.code}>
                  <div className="flex justify-between text-sm">
                    <span>{subject.board} {subject.level} {subject.name}</span>
                    <span>{subject.readiness}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-ink/10">
                    <div className="h-2 rounded-full bg-moss" style={{ width: `${subject.readiness}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
            <h2 className="text-xl font-semibold">Weak topics</h2>
            <div className="mt-4 space-y-3">
              {weakTopics.map((topic) => (
                <div key={topic.name} className="rounded-md bg-paper p-3">
                  <div className="flex justify-between gap-3">
                    <p className="font-medium">{topic.name}</p>
                    <p className="text-sm text-coral">{topic.mastery}%</p>
                  </div>
                  <p className="mt-1 text-sm text-ink/60">{topic.subject}</p>
                  <p className="mt-2 text-sm font-medium text-moss">{topic.action}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
