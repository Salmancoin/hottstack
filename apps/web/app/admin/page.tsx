import { AppShell } from "@/components/app-shell";

const jobs = [
  { name: "0610_s24_qp_42.pdf", status: "Embedding", confidence: "94%" },
  { name: "9701_w23_ms_43.pdf", status: "Topic review", confidence: "71%" },
  { name: "wma12_jan24_er.pdf", status: "Published", confidence: "98%" }
];

export default function AdminPage() {
  return (
    <AppShell>
      <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
          <h1 className="text-2xl font-semibold">Upload management</h1>
          <div className="mt-5 rounded-lg border border-dashed border-ink/20 bg-paper p-8 text-center">
            <p className="font-semibold">Drop exam PDFs here</p>
            <p className="mt-2 text-sm text-ink/60">OCR, metadata extraction, topic tagging, embeddings, and review will run as queued jobs.</p>
            <button className="mt-4 rounded-md bg-coral px-4 py-2 text-sm font-semibold text-white">Choose files</button>
          </div>
          <div className="mt-6 space-y-3">
            {jobs.map((job) => (
              <div key={job.name} className="grid gap-2 rounded-md border border-ink/10 p-3 md:grid-cols-[1fr_140px_100px]">
                <p className="font-medium">{job.name}</p>
                <p className="text-sm text-ink/60">{job.status}</p>
                <p className="text-sm font-semibold text-moss">{job.confidence}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
          <h2 className="font-semibold">Admin signals</h2>
          <div className="mt-4 space-y-3">
            <div className="rounded-md bg-paper p-3">
              <p className="text-sm text-ink/60">AI hallucination reports</p>
              <p className="text-2xl font-semibold">2</p>
            </div>
            <div className="rounded-md bg-paper p-3">
              <p className="text-sm text-ink/60">MRR</p>
              <p className="text-2xl font-semibold">$4,280</p>
            </div>
            <div className="rounded-md bg-paper p-3">
              <p className="text-sm text-ink/60">Pending content reviews</p>
              <p className="text-2xl font-semibold">18</p>
            </div>
          </div>
        </aside>
      </section>
    </AppShell>
  );
}
