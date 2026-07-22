import Head from "next/head";
import { careerSignals, selectedWork, writingHighlights } from "../data/site";

export default function Home() {
  return (
    <>
      <Head>
        <title>Samuel Umoren — Machine Learning Engineer</title>
        <meta
          name="description"
          content="Samuel Umoren is a machine learning engineer working on model observability, evaluation, retrieval, data systems, and reliable LLM products."
        />
      </Head>

      <div>
        <section className="grid gap-12 border-b border-ink/15 pb-16 md:grid-cols-[minmax(0,1.25fr)_minmax(260px,0.55fr)] md:gap-16 md:pb-24">
          <div>
            <p className="eyebrow">Machine learning engineer</p>
            <h1 className="font-editorial mt-6 max-w-4xl text-[clamp(3.2rem,8vw,7.25rem)] leading-[0.92] tracking-[-0.055em] text-ink">
              I build the systems that make models observable, traceable, and useful.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              My work spans semantic classification, retrieval, evaluation,
              data pipelines, research systems, and developer documentation. I
              own the path from an ambiguous problem to the system and evidence
              that resolves it.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold">
              <a className="text-link" href="#work">
                See selected work <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href="/samuel-umoren-cv-2026.pdf">
                Read my CV <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="mailto:samuelumoren365@gmail.com">
                Email me <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <aside className="self-end border-t border-ink/15 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <p className="eyebrow">At a glance</p>
            <dl className="mt-5 divide-y divide-ink/10 border-y border-ink/10">
              {careerSignals.map((signal) => (
                <div key={signal.value} className="py-5">
                  <dt className="font-editorial text-2xl tracking-[-0.025em] text-ink">
                    {signal.value}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-muted">
                    {signal.label}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </section>

        <section id="work" className="scroll-mt-24 py-16 md:py-24">
          <div className="grid gap-6 pb-10 md:grid-cols-[220px_1fr] md:pb-14">
            <p className="eyebrow">Selected work</p>
            <div>
              <h2 className="font-editorial max-w-3xl text-4xl leading-tight tracking-[-0.035em] text-ink md:text-5xl">
                Systems I led from definition through delivery.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
                Each project started with a different question. The common work
                was deciding what needed to exist, building it, and leaving a
                result another person could inspect or use.
              </p>
            </div>
          </div>

          <div className="border-b border-ink/15">
            {selectedWork.map((item) => (
              <article
                key={item.number}
                className="grid gap-6 border-t border-ink/15 py-9 md:grid-cols-[56px_minmax(0,1.05fr)_minmax(280px,0.8fr)] md:gap-8 md:py-12"
              >
                <p className="font-mono text-xs text-faint">{item.number}</p>

                <div>
                  <div className="flex flex-col gap-1 text-sm md:flex-row md:items-baseline md:gap-3">
                    <p className="font-semibold text-ink">{item.company}</p>
                    <p className="text-faint">
                      {item.role} · {item.period}
                    </p>
                  </div>
                  <h3 className="font-editorial mt-4 max-w-2xl text-3xl leading-[1.08] tracking-[-0.03em] text-ink md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
                    {item.summary}
                  </p>

                  {item.links.length ? (
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
                      {item.links.map((link) => (
                        <a key={link.href} className="text-link" href={link.href}>
                          {link.label} <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="md:border-l md:border-ink/10 md:pl-7">
                  <p className="eyebrow">What I owned</p>
                  <ul className="mt-4 space-y-4">
                    {item.proof.map((point) => (
                      <li
                        key={point}
                        className="relative pl-4 text-sm leading-6 text-muted before:absolute before:left-0 before:top-[0.62rem] before:h-1 before:w-1 before:bg-accent"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-t border-ink/15 py-16 md:grid-cols-[220px_1fr] md:py-20">
          <div>
            <p className="eyebrow">Writing</p>
            <p className="mt-4 max-w-[18rem] text-sm leading-6 text-muted">
              More than 200 technical articles across software engineering,
              infrastructure, developer tools, and applied AI.
            </p>
          </div>
          <div className="border-b border-ink/15">
            {writingHighlights.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group grid gap-2 border-t border-ink/15 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline"
              >
                <span className="font-editorial text-xl text-ink decoration-1 underline-offset-4 group-hover:underline">
                  {item.title}
                </span>
                <span className="text-sm text-faint">
                  {item.source} <span aria-hidden="true">↗</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="border-t border-ink/15 py-16 md:py-24">
          <p className="eyebrow">Contact</p>
          <div className="mt-6 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <h2 className="font-editorial max-w-4xl text-4xl leading-tight tracking-[-0.035em] text-ink md:text-6xl">
              Building an ML or AI product that needs strong systems ownership?
            </h2>
            <a
              href="mailto:samuelumoren365@gmail.com"
              className="text-link w-fit text-base font-semibold"
            >
              samuelumoren365@gmail.com <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
