import Head from "next/head";

const problems = [
  "The quickstart stops before the first working integration.",
  "Examples no longer match the product or SDK.",
  "Concepts, guides, references, and examples are mixed together.",
  "Important setup details are scattered across old pages and support answers.",
  "Engineers keep answering questions the docs should already cover.",
];

const work = [
  "Audit the docs against the current product.",
  "Map the path to a developer's first working integration.",
  "Redesign quickstarts, guides, and API navigation.",
  "Rewrite the pages causing the most friction.",
  "Align examples and demo code with the documented flow.",
];

const process = [
  "Inspect the docs, product, SDK, and existing examples.",
  "Choose the first useful outcome a developer should reach.",
  "Map the current docs against that path and mark the gaps.",
  "Rewrite and restructure the pages blocking the path.",
  "Test the new flow from a clean setup.",
];

const deliverables = [
  "A short audit with the main sources of friction",
  "A revised information architecture",
  "A tested quickstart and onboarding path",
  "Rewritten high-priority pages",
  "A ranked backlog for the remaining work",
];

const audiences = [
  "Developer tool and API companies",
  "AI infrastructure teams",
  "SDK and platform teams",
  "Technical founders whose docs no longer match the product",
  "Teams whose engineers keep answering the same setup questions",
];

const proof = [
  "Built Mono Connect.js docs for React, Angular, and Next.js, with API references and advanced integration flows.",
  "Redesigned Ory welcome and quickstart documentation for identity, OAuth2, and permissions.",
  "Published more than 200 technical articles for software developers.",
  "Write and test the code paths I document.",
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
            I turn scattered developer docs into a clear path from setup to a
            working integration.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            <a
              href="mailto:samuelumoren365@gmail.com?subject=Documentation%20site%20restructuring"
              className="border border-zinc-950 px-4 py-2 text-sm font-medium transition hover:bg-zinc-950 hover:text-white"
            >
              Ask about a docs restructuring sprint
            </a>
            <a
              href="https://sammydocs.mintlify.app/content/index"
              className="border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-zinc-950 hover:text-zinc-950"
            >
              See the Mono Connect.js docs
            </a>
          </div>
        </section>

        <ServiceSection title="The problem">
          <p className="max-w-3xl text-[15px] leading-7 text-zinc-700">
            Documentation breaks when the product changes and the structure does
            not. A developer arrives with one job to do, then has to piece the
            workflow together from old examples and missing setup steps.
          </p>
          <ListGrid items={problems} />
        </ServiceSection>

        <ServiceSection title="What I do">
          <p className="max-w-3xl text-[15px] leading-7 text-zinc-700">
            I rebuild the docs around the path a developer has to complete in
            the product.
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
              I approach documentation as an engineer. I inspect the product,
              run the integration, find where the explanation breaks, and write
              the missing path.
            </p>
            <ListGrid items={proof} />
          </div>
        </ServiceSection>

        <section className="border-t border-zinc-200 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-[15px] leading-7 text-zinc-700">
              If your docs no longer match the product, I can audit the gaps and
              rebuild the path to a working integration.
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
