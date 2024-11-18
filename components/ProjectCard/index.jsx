import Link from "next/link";
import { ExternalLink } from 'lucide-react';

const githubProjects = [
    {
        tech: "Typescript + Nodejs + OpenAPI + DRM + MPEG-DASH",
        title: "CryptShield API",
        description: "Video encryption API that brings Netflix-grade content protection to your applications.",
        repoLink: "https://github.com/Umoren/Cryptguard-API"
    },
    {
        tech: "Typescript + Nextjs + Markdown",
        title: "Draftsnap",
        description: "Upload your image and get it back in markdown format",
        repoLink: "https://www.draftsnap.live/"
    },
    {
        tech: "Typescript + AWS Amplify + Amazon Bedrock + LLM",
        title: "MetaEenfo",
        description: "AI-Powered Meta Information Generator built with AWS Amplify Gen2, amazon bedrock and anthropic claude",
        repoLink: "https://github.com/Umoren/meta-magic"
    },
    {
        tech: "Nodejs + Whatsapp-web.js + Fly",
        title: "Whatsapp Scheduler",
        description: "This app sends scheduled messages to your whatsapp contacts",
        repoLink: "www.whatsflow.live/landing.html"
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
];

export default function ProjectCard() {
    return (
        <div className="grid gap-6 sm:grid-rows-auto lg:grid-cols sm:pt-32 sm:pb-40 -my-8 md:py-0">
            {githubProjects.map((project, i) => (
                <article
                    key={i}
                    className="bg-projects/70  rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
                    itemScope
                    itemType="http://schema.org/CreativeWork"
                >
                    <Link
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-6 h-full flex flex-col"
                    >
                        <p
                            className="text-xs font-bold tracking-widest uppercase text-letter mb-2"
                            itemProp="tech"
                        >
                            {project.tech}
                        </p>
                        <h3
                            className="text-lg font-semibold leading-tight text-letter mb-3"
                            itemProp="name"
                        >
                            {project.title}
                        </h3>
                        <p
                            className="text-letter/70 flex-grow mb-4"
                            itemProp="description"
                        >
                            {project.description}
                        </p>
                        <div className="flex items-center text-letter/80 text-sm">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            View Project
                        </div>
                    </Link>
                </article>
            ))}
        </div>
    );
}