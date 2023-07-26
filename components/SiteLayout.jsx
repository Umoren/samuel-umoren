import Image from "next/image";
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <main className="text-white bg-black min-h-screen w-screen">
        <div className="flex flex-col md:flex-row m-auto">
          <div className="w-full md:w-1/2 px-8 pt-8 md:py-12 md:pl-20 md:fixed overflow-scroll">

            <h1 className=" text-3xl md:text-5xl lg:text-6xl mt-4 md:mt-0 text-letter font-bold tracking-tight leading-none">
              Samuel Umoren
            </h1>
            <h3 className="text-lg md:text-2xl font-bold my-4 text-letter">Software Developer - Frontend</h3>

            <p className="my-4 text-normal text-letter/80 md:w-4/5">

              <span className="text-bold text-normal text-letter">I'm a Front End Engineer</span> with four years of experience and strong fundamentals in Front End technologies.
            </p>

            <p className="my-4 text-normal text-letter/80 md:w-4/5">
              I've built products for startups like
              <Link href={"https://www.linkedin.com/company/jiggleng/"} target="_blank"> <u className="text-blue-300"><i> Jiggle</i></u></Link>,
              <Link href={"https://mezovest.com"} target="_blank"> <u className="text-green-300"><i>Mezovest</i></u></Link>, and
              <Link href={"https://fress.app"} target="_blank"><u className="text-red-300"><i> Fress</i></u> </Link>
              for the past <strong className="text-white">four</strong> years.
            </p>
            <p className="my-4 text-normal text-letter/80 md:w-4/5">
              In my spare time, I share about my experiences and learnings on my <Link href="https://beyondcode.hashnode.dev"> <u className="text-letter px-1 bg-projects">blog</u></Link>.
              I also write for other blogs as a <Link className="underline underline-offset-4" href={"https://samuelumoren.notion.site/samuelumoren/About-me-e8ca08bc4425495e8ec82ec20ad2f373"}>guest author.</Link>
            </p>

            <p className="my-4 text-normal text-letter/80 md:w-4/5">
              I'm currently open to new opportunities (also technical writing).
              If you'd like to work with me, <Link className="underline underline-offset-4" href="https://calendly.com/d/4h8-zss-yc4/one-off-meeting">schedule a chat with me </Link>.
              Or shoot me an <Link className="underline underline-offset-4" href="mailto:samuelumoren365@gmail.com"> email. </Link>
            </p>

            {/* Desktop Screen - Links */}
            <div className="hidden my-8 mx-auto text-sm uppercase md:block">
              <ul>
                <Link href="/#work"
                  className="border-white"
                >
                  <li className="flex items-center gap-4 my-6 hover:animate-pulse cursor-pointer">
                    <span>01</span>
                    <hr className="w-[2rem] bg-gray-300" />
                    <span> Work</span>
                  </li>
                </Link>

                <Link href="https://beyondcode.hashnode.dev">

                  <li className="flex items-center gap-4 my-6 hover:animate-pulse cursor-pointer">
                    <span>02</span>
                    <hr className="w-[3rem] bg-white" />
                    <span> Articles</span>
                  </li>
                </Link>
              </ul>
            </div>

            {/* Mobile Screen - Links */}
            <div className="mt-12 mx-auto text-sm uppercase md:hidden text-letter">
              <ul>
                <Link href="https://docs.google.com/document/d/137ZQlLzTkgx0IwvZ_oWWVOv9W0higk1OjKBV5jo4Kgk/edit?usp=sharing"
                  className="border-white"
                >
                  <li className="flex items-center gap-4 my-6 hover:animate-pulse cursor-pointer">
                    <span>01</span>
                    <hr className="w-[2rem] bg-gray-300" />
                    <span> Resume </span>
                  </li>
                </Link>

                <Link href="https://beyondcode.hashnode.dev">

                  <li className="flex items-center gap-4 my-6 hover:animate-pulse cursor-pointer">
                    <span>02</span>
                    <hr className="w-[2rem] bg-white" />
                    <span> Articles</span>
                  </li>
                </Link>

                <Link href="https://www.notion.so/samuelumoren/About-me-e8ca08bc4425495e8ec82ec20ad2f373">

                  <li className="flex items-center gap-4 my-6 hover:animate-pulse cursor-pointer">
                    <span>03</span>
                    <hr className="w-[2rem] bg-white" />
                    <span> Writing Portfolio</span>
                  </li>
                </Link>

                <Link href="https://tr.ee/-YK46uFjRM">

                  <li className="flex items-center gap-4 my-6 hover:animate-pulse cursor-pointer">
                    <span>04</span>
                    <hr className="w-[2rem] bg-white" />
                    <span> SoundCloud</span>
                  </li>
                </Link>
              </ul>
            </div>

            {/* Desktop Screen - Social Media */}
            <div className="mt-8 hidden md:block">
              <div className="flex gap-6 text-letter">


                <div className="flex mt-2 gap-6">
                  <a
                    href="https://github.com/Umoren"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} /> Github
                  </a>

                  <a
                    href="hhttps://twitter.com/lamoureSparus"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} /> Twitter
                  </a>

                  <a
                    href="https://twitter.com/saameeey"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} /> Linkedin
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop Screen - Footer */}
            <footer>
              <div className="hidden md:block mt-20 text-letter">
                <p className="text-letter/50"> Design inspired by <Link className="text-letter/90" href="https://www.sarahdayan.dev/" >Sarah Dayan </Link> and
                  <Link href="https://kadet.dev/" className="text-letter/90"> Collins Enebeli</Link>.

                </p>
              </div>
            </footer>
          </div>

          {/* Desktop Screen only - Work */}
          <div className="w-full md:w-1/2 px-8 md:p-20 md:ml-auto hidden sm:block">{children}</div>

          {/* Mobile Screen - Social Media */}
          <div className="mt-16 flex gap-6 md:hidden pl-8  text-letter">

            <div className="flex mt-2 gap-6">
              <a
                href="https://github.com/lamouresparus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} /> Github
              </a>

              <a
                href="hhttps://twitter.com/lamoureSparus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </a>

              <a
                href="https://ng.linkedin.com/in/loveotudor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} /> Linkedin
              </a>
            </div>
          </div>


        </div>
      </main>
    </>
  );
}
