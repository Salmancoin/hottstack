import { AppShell } from "@/components/app-shell";
import { predictions } from "@/lib/mock-data";

export default function PredictionsPage() {
  return (
    <AppShell>
      <section className="rounded-lg bg-ink p-6 text-paper shadow-soft">
        <p className="text-sm text-paper/70">Revision guidance, not leaked content</p>
        <h1 className="mt-2 text-3xl font-semibold">Predicted high-value topics</h1>
        <p className="mt-2 max-w-2xl text-paper/70">
          Predictions combine historical frequency, examiner-report emphasis, syllabus weighting, and your personal weak topics.
        </p>
      </section>
      <section className="mt-6 grid gap-4 md:grid-cols-3">
        {predictions.map((prediction) => (
          <article key={prediction.topic} className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
            <p className="text-sm text-ink/60">{prediction.subject}</p>
            <h2 className="mt-2 text-xl font-semibold">{prediction.topic}</h2>
            <div className="mt-4 h-2 rounded-full bg-ink/10">
              <div className="h-2 rounded-full bg-coral" style={{ width: `${prediction.confidence}%` }} />
            </div>
            <p className="mt-2 text-sm font-medium">{prediction.confidence}% confidence</p>
            <p className="mt-3 text-sm leading-6 text-ink/65">{prediction.evidence}</p>
            <button className="mt-4 w-full rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper">
              Practise topic
            </button>
          </article>
        ))}
      </section>
    </AppShell>
  );
}
