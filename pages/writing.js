import { writingGroups } from "../data/site";

export default function Writing() {
  return (
    <div className="space-y-12">
      <section className="border-b border-zinc-200 pb-10">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
          Writing
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 md:text-6xl">
          Technical writing, documentation work, and research notes.
        </h1>
        <p className="mt-6 max-w-2xl text-[15px] leading-7 text-zinc-700">
          Current essays live on Bearblog. This page keeps the broader archive
          readable: documentation systems, DevOps, platform engineering,
          JavaScript, AI, and research workflows.
        </p>
      </section>

      <div className="space-y-10">
        {writingGroups.map((group) => (
          <section key={group.name} className="grid gap-6 md:grid-cols-[220px_1fr]">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                {group.name}
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {group.description}
              </p>
            </div>
            <div className="divide-y divide-zinc-200 border-y border-zinc-200">
              {group.items.map((item) => (
                <a
                  key={`${group.name}-${item.title}`}
                  href={item.href}
                  className="block py-5 transition hover:bg-white"
                >
                  <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="font-semibold text-zinc-950">{item.title}</h3>
                    <p className="text-sm text-zinc-500">{item.source}</p>
                  </div>
                  <p className="mt-2 text-[15px] leading-6 text-zinc-700">
                    {item.note}
                  </p>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
