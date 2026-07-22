import Head from "next/head";

const problems = [
  "Docs that grew organically without a clear structure.",
  "Quickstarts that stop before a developer reaches a working integration.",
  "Concepts, guides, API references, and examples mixed into the same flow.",
  "Product decisions hidden across scattered pages, old examples, and support answers.",
  "Developers needing support because the docs do not explain the real workflow.",
  "AI and devtool docs that do not clearly explain context, tools, permissions, SDKs, or integration patterns.",
];

const work = [
  "Documentation audits",
  "Information architecture cleanup",
  "Quickstart redesign",
  "Tutorial and guide restructuring",
  "Developer journey mapping",
  "Content gap analysis",
  "API and docs flow improvements",
  "Examples and demo repo alignment",
  "Migration or onboarding path cleanup",
];

const process = [
  "Inspect the current docs and product surface.",
  "Identify the developer's first useful outcome.",
  "Map the existing docs against that journey.",
  "Separate concepts, guides, references, examples, and troubleshooting.",
  "Rewrite or restructure the highest-friction pages.",
  "Validate the new flow by walking through it like a developer.",
];

const deliverables = [
  "Docs audit report",
  "Restructured docs outline",
  "Improved quickstart flow",
  "Rewritten or revised key pages",
  "Tutorial and demo recommendations",
  "Developer onboarding map",
  "Content backlog with priorities",
];

const audiences = [
  "Devtool startups",
  "API companies",
  "AI infrastructure teams",
  "SDK and platform teams",
  "Technical founders whose docs no longer match the product",
  "Teams where engineers answer the same documentation questions repeatedly",
];

const proof = [
  "I combine software engineering, developer education, and technical writing.",
  "I have written 200+ developer-facing technical articles and documentation projects.",
  "I understand APIs, SDKs, AI tools, frontend/product engineering, and docs systems.",
  "I care about clarity, structure, examples, and developer trust.",
];

export default function DocumentationSiteRestructuring() {
  return (
    <>
      <Head>
        <title>Documentation Site Restructuring - Samuel Umoren</title>
        <meta
          name="description"
          content="Documentation site restructuring service for developer-tool, API, AI, and infrastructure teams."
        />
      </Head>

      <div className="space-y-14">
        <section className="border-b border-zinc-200 pb-12">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Consulting service
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.12] tracking-tight text-zinc-950 md:text-6xl md:leading-[1.08]">
            Documentation Site Restructuring
          </h1>
          <p className="mt-7 max-w-2xl text-[15px] leading-8 text-zinc-700">
            I help developer-facing teams turn scattered docs into clear paths
            developers can actually follow.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            <a
              href="mailto:samuelumoren365@gmail.com?subject=Documentation%20site%20restructuring"
              className="border border-zinc-950 px-4 py-2 text-sm font-medium transition hover:bg-zinc-950 hover:text-white"
            >
              Ask about a docs restructuring sprint
            </a>
            <a
              href="https://www.ory.com/docs/welcome"
              className="border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-zinc-950 hover:text-zinc-950"
            >
              See Ory docs work
            </a>
          </div>
        </section>

        <ServiceSection title="The problem">
          <p className="max-w-3xl text-[15px] leading-7 text-zinc-700">
            Documentation breaks when the product changes faster than the docs
            structure. Developers arrive with a specific job, but the site gives
            them scattered concepts, old examples, missing setup steps, or API
            references with no path into a working integration.
          </p>
          <ListGrid items={problems} />
        </ServiceSection>

        <ServiceSection title="What I do">
          <p className="max-w-3xl text-[15px] leading-7 text-zinc-700">
            Documentation restructuring makes the docs match the product model,
            the developer journey, and the integration path a real user has to
            complete.
          </p>
          <ListGrid items={work} columns />
        </ServiceSection>

        <ServiceSection title="Process">
          <div className="divide-y divide-zinc-200 border-y border-zinc-200">
            {process.map((item, index) => (
              <div key={item} className="grid gap-3 py-5 md:grid-cols-[80px_1fr]">
                <p className="font-mono text-sm text-zinc-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="text-[15px] leading-7 text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
        </ServiceSection>

        <ServiceSection title="Deliverables">
          <ListGrid items={deliverables} columns />
        </ServiceSection>

        <ServiceSection title="Who this is for">
          <ListGrid items={audiences} />
        </ServiceSection>

        <ServiceSection title="Why me">
          <div className="space-y-5">
            <p className="max-w-3xl text-[15px] leading-7 text-zinc-700">
              I sit at the overlap of engineering, developer education, and
              technical writing. I can read the product surface, test the
              workflow, find the missing conceptual pieces, and turn that into a
              documentation system a developer can use.
            </p>
            <ListGrid items={proof} />
          </div>
        </ServiceSection>

        <section className="border-t border-zinc-200 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-[15px] leading-7 text-zinc-700">
              If your docs no longer explain how the product works, I can help
              with a docs restructuring sprint, docs audit, or developer
              onboarding cleanup.
            </p>
            <a
              href="mailto:samuelumoren365@gmail.com?subject=Documentation%20site%20restructuring"
              className="w-fit border border-zinc-950 px-4 py-2 text-sm font-medium transition hover:bg-zinc-950 hover:text-white"
            >
              Start a docs conversation
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

function ServiceSection({ title, children }) {
  return (
    <section className="grid gap-6 md:grid-cols-[220px_1fr]">
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
          {title}
        </h2>
      </div>
      <div className="space-y-5">{children}</div>
    </section>
  );
}

function ListGrid({ items, columns = false }) {
  return (
    <div className={`grid gap-2 ${columns ? "sm:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <div
          key={item}
          className="border border-zinc-200 bg-white px-4 py-3 text-[15px] leading-6 text-zinc-700"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
