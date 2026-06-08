import Link from "next/link";
import {
  focusAreas,
  personalLinks,
  profileLinks,
  projectHighlights,
  proofLinks,
  workHighlights,
} from "../data/site";

export default function Home() {
  return (
    <div className="space-y-14">
      <section className="grid gap-8 border-b border-zinc-200 pb-12 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Software Engineer
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-zinc-950 md:text-6xl">
            I build AI systems, documentation systems, and developer-facing products.
          </h1>
        </div>
        <div className="space-y-5 text-[15px] leading-7 text-zinc-700">
          <p>
            Recent work spans Sift&apos;s AI platform, Klysera&apos;s R&D
            systems, Ory documentation, and 200+ published technical articles
            for developer audiences.
          </p>
          <div className="flex flex-wrap gap-2">
            {profileLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-zinc-300 px-3 py-1.5 text-sm text-zinc-700 transition hover:border-zinc-950 hover:text-zinc-950"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-[220px_1fr]">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Projects
          </h2>
        </div>
        <div className="grid gap-3">
          {projectHighlights.map((item) => (
            <article
              key={item.title}
              className="border border-zinc-200 bg-white px-4 py-4"
            >
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="font-semibold text-zinc-950">{item.title}</h3>
                <p className="text-sm text-zinc-500">{item.meta}</p>
              </div>
              <p className="mt-2 text-[15px] leading-6 text-zinc-700">
                {item.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-zinc-300 px-3 py-1.5 text-sm text-zinc-700 transition hover:border-zinc-950 hover:text-zinc-950"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-[220px_1fr]">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Work
          </h2>
        </div>
        <div className="divide-y divide-zinc-200 border-y border-zinc-200">
          {workHighlights.map((item) => (
            <a
              key={item.company}
              href={item.href}
              className="grid gap-3 py-5 transition hover:bg-white md:grid-cols-[180px_1fr]"
            >
              <div>
                <p className="font-semibold text-zinc-950">{item.company}</p>
                <p className="text-sm text-zinc-500">{item.period}</p>
              </div>
              <div>
                <p className="font-medium text-zinc-900">{item.role}</p>
                <p className="mt-1 text-[15px] leading-7 text-zinc-700">
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-[220px_1fr]">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Public proof
          </h2>
        </div>
        <div className="grid gap-3">
          {proofLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group border border-zinc-200 bg-white px-4 py-4 transition hover:border-zinc-950"
            >
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="font-semibold text-zinc-950 group-hover:underline">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500">{item.meta}</p>
              </div>
              <p className="mt-2 text-[15px] leading-6 text-zinc-700">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-[220px_1fr]">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Focus
          </h2>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {focusAreas.map((area) => (
            <div key={area} className="border border-zinc-200 bg-white px-4 py-3">
              {area}
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-200 pt-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-[15px] leading-7 text-zinc-700">
            I write at the intersection of engineering, research, and practical
            explanation. Bearblog is the active blog; this site keeps the public
            work index.
          </p>
          <Link
            href="/writing"
            className="w-fit border border-zinc-950 px-4 py-2 text-sm font-medium transition hover:bg-zinc-950 hover:text-white"
          >
            View writing archive
          </Link>
        </div>
      </section>

      <section className="grid gap-8 border-t border-zinc-200 pt-8 md:grid-cols-[220px_1fr]">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Also
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {personalLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border border-zinc-200 bg-white px-4 py-4 transition hover:border-zinc-950"
            >
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="font-semibold text-zinc-950">{item.title}</h3>
                <p className="text-sm text-zinc-500">{item.meta}</p>
              </div>
              <p className="mt-2 text-[15px] leading-6 text-zinc-700">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
