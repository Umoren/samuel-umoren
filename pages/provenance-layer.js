import Head from "next/head";
import {
  provenanceApplications,
  provenancePrinciples,
  provenanceWork,
} from "../data/site";

export default function ProvenanceLayer() {
  return (
    <>
      <Head>
        <title>Provenance Layer - Samuel Umoren</title>
        <meta
          name="description"
          content="Samuel Umoren works on provenance layers for AI agents: source context, permission boundaries, tool calls, model paths, and audit records."
        />
      </Head>

      <div className="space-y-14">
        <section className="border-b border-zinc-200 pb-12">
          <p className="mb-4 text-sm font-medium text-zinc-500">
            Provenance Layer
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.12] text-zinc-950 md:text-6xl md:leading-[1.08]">
            I build systems that show where AI outputs and agent actions came from.
          </h1>
          <p className="mt-7 max-w-2xl text-[15px] leading-8 text-zinc-700">
            My recent work sits around one system boundary: source context becomes
            generated knowledge, tool calls, product decisions, and audit logs.
            That path needs provenance.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            <a
              href="https://github.com/Umoren/agent-runtime-inspector"
              className="border border-zinc-950 px-4 py-2 text-sm font-medium transition hover:bg-zinc-950 hover:text-white"
            >
              Agent Runtime Inspector
            </a>
            <a
              href="https://x.com/saameeey/status/2062229308878581772?s=20"
              className="border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-zinc-950 hover:text-zinc-950"
            >
              AI integration layer article
            </a>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-[220px_1fr]">
          <div>
            <h2 className="text-sm font-semibold text-zinc-500">
              What I Mean
            </h2>
          </div>
          <div className="divide-y divide-zinc-200 border-y border-zinc-200">
            {provenancePrinciples.map((item) => (
              <div key={item.title} className="grid gap-3 py-5 md:grid-cols-[180px_1fr]">
                <h3 className="font-semibold text-zinc-950">{item.title}</h3>
                <p className="text-[15px] leading-7 text-zinc-700">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-[220px_1fr]">
          <div>
            <h2 className="text-sm font-semibold text-zinc-500">
              Work
            </h2>
          </div>
          <div className="space-y-4">
            {provenanceWork.map((item) => (
              <article key={item.title} className="border border-zinc-200 bg-white p-5">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500">{item.meta}</p>
                </div>
                <p className="mt-3 max-w-3xl text-[15px] leading-7 text-zinc-700">
                  {item.body}
                </p>
                <div className="mt-5 divide-y divide-zinc-200 border-y border-zinc-200">
                  {item.points.map((point) => (
                    <p key={point} className="py-3 text-[15px] leading-6 text-zinc-700">
                      {point}
                    </p>
                  ))}
                </div>
                <a
                  href={item.href}
                  className="mt-5 inline-flex border border-zinc-950 px-4 py-2 text-sm font-medium transition hover:bg-zinc-950 hover:text-white"
                >
                  View reference
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-[220px_1fr]">
          <div>
            <h2 className="text-sm font-semibold text-zinc-500">
              Where This Fits
            </h2>
          </div>
          <div className="grid gap-2">
            {provenanceApplications.map((item) => (
              <div key={item} className="border border-zinc-200 bg-white px-4 py-3">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-200 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-[15px] leading-7 text-zinc-700">
              If your team is building agents that touch customer systems, I can
              help with provenance, permission-aware retrieval, tool execution,
              integration architecture, and developer-facing explanation.
            </p>
            <a
              href="mailto:samuelumoren365@gmail.com"
              className="w-fit border border-zinc-950 px-4 py-2 text-sm font-medium transition hover:bg-zinc-950 hover:text-white"
            >
              Start a conversation
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
