import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Samuel Umoren - Software Engineer</title>
        <meta
          name="description"
          content="Samuel Umoren is a software engineer working across AI systems, documentation systems, developer tooling, and technical writing."
        />
      </Head>
      <div className="min-h-screen bg-stone-50 text-zinc-950">
        <header className="border-b border-zinc-200 bg-stone-50/95">
          <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-sm md:px-8">
            <Link href="/" className="font-semibold tracking-tight">
              Samuel Umoren
            </Link>
            <div className="flex flex-wrap items-center gap-4 text-zinc-600">
              <Link href="/writing" className="hover:text-zinc-950">
                Writing
              </Link>
              <Link href="/about" className="hover:text-zinc-950">
                About
              </Link>
              <a href="/samuel-umoren-cv-2026.pdf" className="hover:text-zinc-950">
                CV
              </a>
              <a
                href="mailto:samuelumoren365@gmail.com"
                className="hover:text-zinc-950"
              >
                Email
              </a>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl px-5 py-10 md:px-8 md:py-14">
          {children}
        </main>
      </div>
    </>
  );
}
