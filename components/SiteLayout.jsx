import Head from "next/head";
import Link from "next/link";

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Writing", href: "/writing" },
  { label: "Services", href: "/services/documentation-site-restructuring" },
  { label: "About", href: "/about" },
  { label: "CV", href: "/samuel-umoren-cv-2026.pdf" },
];

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Samuel Umoren | Machine Learning Engineer</title>
        <meta
          name="description"
          content="Samuel Umoren is a machine learning engineer working on model observability, evaluation, retrieval, data systems, and reliable LLM products."
        />
      </Head>

      <div className="min-h-screen bg-paper text-ink">
        <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur-sm">
          <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 md:px-8">
            <Link
              href="/"
              className="font-editorial text-lg font-semibold tracking-[-0.02em]"
            >
              Samuel Umoren
            </Link>

            <div className="scrollbar-hide flex items-center gap-5 overflow-x-auto whitespace-nowrap text-sm text-muted md:gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-6xl px-5 pb-8 pt-10 md:px-8 md:pt-16">
          {children}
        </main>

        <footer className="border-t border-ink/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-7 text-sm text-faint sm:flex-row sm:items-center sm:justify-between md:px-8">
            <p>Samuel Umoren · Machine learning engineer</p>
            <div className="flex gap-5">
              <a href="https://github.com/Umoren" className="hover:text-ink">
                GitHub
              </a>
              <a href="https://sammai.bearblog.dev" className="hover:text-ink">
                Writing
              </a>
              <a href="mailto:samuelumoren365@gmail.com" className="hover:text-ink">
                Email
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
