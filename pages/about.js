import { aboutSections, personalLinks, workPhilosophy } from "../data/site";

export default function About() {
  return (
    <div className="space-y-12">
      <section className="border-b border-zinc-200 pb-10">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
          About
        </p>
        <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-zinc-950 md:text-6xl">
          The work is not the whole&nbsp;story.
        </h1>
        <p className="mt-6 max-w-2xl text-[15px] leading-7 text-zinc-700">
          I am a software engineer, but I am not only a software engineer. I am
          a Christian, a Barcelona fan, a gospel music person, a DJ, a teacher
          for pre-teens in church, and someone who thinks a lot about work,
          clarity, and service.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-[220px_1fr]">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Life
          </h2>
        </div>
        <div className="divide-y divide-zinc-200 border-y border-zinc-200">
          {aboutSections.map((section) => (
            <div key={section.label} className="py-6">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
                {section.label}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-zinc-950">
                {section.title}
              </h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-7 text-zinc-700">
                {section.body}
              </p>
              {section.links ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {section.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="rounded-full border border-zinc-300 px-3 py-1.5 text-sm text-zinc-700 transition hover:border-zinc-950 hover:text-zinc-950"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-[220px_1fr]">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Philosophy
          </h2>
        </div>
        <div className="grid gap-2">
          {workPhilosophy.map((line) => (
            <div key={line} className="border border-zinc-200 bg-white px-4 py-3">
              {line}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-[220px_1fr]">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Links
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {personalLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border border-zinc-200 bg-white px-4 py-4 transition hover:border-zinc-950"
            >
              <div className="flex items-baseline justify-between gap-4">
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
