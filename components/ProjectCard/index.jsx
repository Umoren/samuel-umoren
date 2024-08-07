import Link from "next/link";

export default function ProjectCard() {
    const githubProjects = [

        {
            tech: "Typescript + AWS Amplify + Amazon Bedrock + LLM",
            title: "MetaEenfo",
            description: "AI-Powered Meta Information Generator built with AWS Amplify Gen2, amazon bedrock and anthropic claude",
            repoLink: "https://metaeenfo.live"
        },
        {
            tech: "Nodejs + Whatsapp-web.js + Fly",
            title: "Whatsapp Scheduler bot",
            description: "This bot sends automated reminders to a specified WhatsApp group at scheduled times.",
            repoLink: "https://github.com/Umoren/whatsapp-group-reminder-bot"
        },
        {
            tech: "Typescript + React + Yaml",
            title: "Koslog Backstage",
            description: "A demo backstage instance for Koslog. With software templates and Techdocs features.",
            repoLink: "https://github.com/Umoren/koslog"
        },
        {
            tech: "React + JavaScript",
            title: "Serenity Scribe",
            description: "This is a utility note taking and quote capturing web app. The users can write notes or quotes, save them as screenshots, and each note is timestamped.",
            repoLink: "https://github.com/Umoren/desert-notes"
        },
        {
            tech: "JavaScript",
            title: "Speech2Action",
            description: "A demonstration of a Voice User Interface (VUI) using Speech Recognition technology.",
            repoLink: "https://github.com/Umoren/basic-vui-demo"
        },
        {
            tech: "JavaScript",
            title: "JSProxiesExamples",
            description: "This repository contains four practical use cases of JavaScript Proxies, demonstrating their flexibility and usefulness in various scenarios",
            repoLink: "https://github.com/Umoren/JSProxiesExamples"
        },

    ]
    return (
        <>
            <div className="sm:pt-32 sm:pb-40 -my-8 group md:py-0" data-href="">
                {githubProjects && githubProjects.map((project, i) => (
                    <article className="my-4 bg-projects/70 md:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" itemScope itemType="http://schema.org/CreativeWork" key={i}>
                        <Link href={project.repoLink} target="_blank" rel="noopener noreferrer" className="block p-40">
                            <p className="text-xs font-bold tracking-widest uppercase text-letter" itemProp="tech"> {project.tech} </p>
                            <h3 className="my-3 text-lg font-semibold leading-tight text-letter" itemProp="title"> {project.title} </h3>
                            <p className="my-3 text-opacity-70" itemProp="description"> {project.description}</p>
                        </Link>
                    </article>
                ))}


            </div>
        </>
    )
}