import { AppShell } from "@/components/app-shell";

const messages = [
  {
    role: "student",
    text: "Why does the mark scheme require both diffusion and concentration gradient?"
  },
  {
    role: "assistant",
    text: "Because the first point identifies the process, while the second explains the direction of movement. For full marks, your answer needs both the biological term and the mechanism."
  }
];

export default function TutorPage() {
  return (
    <AppShell>
      <section className="grid min-h-[75vh] gap-6 lg:grid-cols-[1fr_320px]">
        <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
          <div className="flex items-center justify-between border-b border-ink/10 pb-4">
            <div>
              <h1 className="text-2xl font-semibold">AI tutor</h1>
              <p className="text-sm text-ink/60">Grounded in papers, mark schemes, and examiner reports.</p>
            </div>
            <span className="rounded-md bg-moss px-3 py-1 text-sm font-medium text-white">Biology 0610</span>
          </div>
          <div className="mt-6 space-y-4">
            {messages.map((message) => (
              <div
                key={`${message.role}-${message.text}`}
                className={message.role === "student" ? "ml-auto max-w-xl rounded-lg bg-sky p-4" : "max-w-xl rounded-lg bg-paper p-4"}
              >
                <p className="text-sm font-semibold capitalize">{message.role}</p>
                <p className="mt-2 leading-7 text-ink/80">{message.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-2">
            <input className="w-full rounded-md border border-ink/15 px-4 py-3 focus-ring" placeholder="Ask about a question, topic, or mark scheme" />
            <button className="focus-ring rounded-md bg-coral px-5 py-3 font-semibold text-white">Send</button>
          </div>
        </div>

        <aside className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
          <h2 className="font-semibold">Cited sources</h2>
          <div className="mt-4 space-y-3 text-sm">
            <div className="rounded-md bg-paper p-3">
              Cambridge IGCSE Biology 0610/42/M/J/2024 Mark Scheme, page 4
            </div>
            <div className="rounded-md bg-paper p-3">
              Biology 0610 Examiner Report, gas exchange comments
            </div>
          </div>
          <h2 className="mt-6 font-semibold">Next actions</h2>
          <button className="mt-3 w-full rounded-md border border-ink/15 px-3 py-2 text-sm font-medium">Generate similar question</button>
          <button className="mt-2 w-full rounded-md border border-ink/15 px-3 py-2 text-sm font-medium">Mark my answer</button>
        </aside>
      </section>
    </AppShell>
  );
}
