export const careerSignals = [
  {
    value: "7 years",
    label: "software, data systems, and applied AI",
  },
  {
    value: "200+",
    label: "published technical articles",
  },
  {
    value: "4 programs",
    label: "research tracks led at Klysera",
  },
];

export const selectedWork = [
  {
    number: "01",
    company: "Sift",
    role: "AI Engineer",
    period: "Jun 2025 – Jun 2026",
    title: "Making AI answers measurable, traceable, and permission-aware.",
    summary:
      "I owned systems around model behaviour: evaluation, semantic classification, retrieval quality, evidence traces, access controls, and the ingestion pipelines feeding them.",
    proof: [
      "Led an observability layer for queries, feedback, retrieved context, confidence, embedding activity, and end-to-end latency.",
      "Architected an organisation-specific semantic classifier with sentence-transformer embeddings, confidence thresholds, and deterministic fallbacks.",
      "Connected AI answers to exact Slack and GitHub evidence through hybrid retrieval, decision traces, sufficiency gates, and private-channel controls.",
    ],
    links: [],
  },
  {
    number: "02",
    company: "Klysera",
    role: "Research & Development Lead (Contract)",
    period: "Sep 2025 – May 2026",
    title: "Turning a company thesis into research, product direction, and tooling.",
    summary:
      "I defined the core intellectual property behind the “Ideal Klysera Engineer” and built the research function that made the claim useful across curriculum, positioning, and engineering career frameworks.",
    proof: [
      "Led four research programs with explicit evidence gates and reusable workflows.",
      "Compared 200 current engineering roles from 36 companies with a 50-role historical baseline using reproducible pandas pipelines.",
      "Built a Next.js and Supabase analytics product for skill gaps, role coverage, taxonomy views, and curriculum decisions.",
    ],
    links: [],
  },
  {
    number: "03",
    company: "Cortex MIPs Working Group",
    role: "Protocol Researcher",
    period: "Jun 2026 – Present",
    title: "Reproducible experiments for Monad Improvement Proposals.",
    summary:
      "I turn protocol claims into explicit hypotheses, Testnet evidence, automated harnesses, and regression fixtures that another engineer can inspect and rerun.",
    proof: [
      "Established a reusable research lab across MIPs rather than a one-off experiment.",
      "Isolated an environment-dependent Foundry compatibility boundary and converted it into a regression fixture.",
    ],
    links: [
      {
        label: "View the MIP research lab",
        href: "https://github.com/Cortex-XYZ/monad-mip-lab",
      },
    ],
  },
  {
    number: "04",
    company: "Mono Connect.js",
    role: "Independent documentation project",
    period: "2024",
    title: "Rebuilding an SDK README around the developer's integration path.",
    summary:
      "I turned a long package README into a searchable documentation site with a working quickstart, framework guides, API references, reauthorisation, direct debit, and clear client/server boundaries.",
    proof: [
      "Mapped the documentation to account linking, framework setup, events, methods, and advanced flows.",
      "Built dedicated React, Angular, and Next.js integration guides instead of making developers translate one generic example.",
    ],
    links: [
      {
        label: "Read the Mono Connect.js docs",
        href: "https://sammydocs.mintlify.app/content/index",
      },
      {
        label: "View the source",
        href: "https://github.com/Umoren/mono-connectjs-docs",
      },
    ],
  },
];

export const writingHighlights = [
  {
    title: "Current notes on AI systems and engineering",
    source: "sammai.bearblog.dev",
    href: "https://sammai.bearblog.dev/",
  },
  {
    title: "Using Docker Init in Node.js",
    source: "Earthly",
    href: "https://earthly.dev/blog/docker-init-nodejs/",
  },
  {
    title: "Why Fastify is a better Node.js framework than Express",
    source: "Soshace",
    href: "https://soshace.com/2021/01/25/why-fastify-is-a-better-nodejs-framework-for-your-next-project-compared-to-express/",
  },
];

export const provenancePrinciples = [
  {
    title: "Source context",
    body:
      "The system records which source messages, documents, tickets, or transcripts fed the AI workflow.",
  },
  {
    title: "Permission boundary",
    body:
      "The system carries access rules forward when raw source data becomes a summary, decision, answer, or tool argument.",
  },
  {
    title: "Runtime path",
    body:
      "The system records which tools were visible, which tool was called, what arguments were sent, and what result came back.",
  },
  {
    title: "Audit record",
    body:
      "The system leaves a readable trail that an engineer, operator, or security reviewer can inspect after the run.",
  },
];

export const provenanceWork = [
  {
    title: "Sift decision traces",
    meta: "Private platform work",
    href: "https://getsift.co/",
    body:
      "At Sift, I worked on systems that traced derived decisions back to the source context that produced them. The trace model carried source IDs, source types, timestamps, authors, channels, and roles such as Proposal, Context, Objection, Validation, Pivot, and Resolution.",
    points: [
      "Replaced flat underlying-discussion data with chronological decision traces.",
      "Connected decisions to source messages, conversations, and meeting transcripts through graph relationships.",
      "Scoped decision access by organization, user, and private-channel membership.",
      "Treated provenance as part of permissioning, because private source content can leak through derived AI knowledge.",
    ],
  },
  {
    title: "Agent Runtime Inspector",
    meta: "Public OSS project",
    href: "https://github.com/Umoren/agent-runtime-inspector",
    body:
      "ARI applies the same provenance idea to AI coding agents. It sits between an MCP-capable agent client and Merge Agent Handler, forwards tool calls, and records what happened in a local dashboard.",
    points: [
      "Records the tool inventory exposed to the agent.",
      "Records the selected tool, arguments, result, latency, and errors.",
      "Separates the run into context path, action path, and model path.",
      "Supports mock traces, scripted Merge examples, and an MCP proxy path for local agent clients.",
    ],
  },
];

export const provenanceApplications = [
  "AI coding agents that call GitHub, Linear, Slack, Jira, or internal tools",
  "Enterprise agents that need per-user tool access and audit trails",
  "Knowledge assistants where answers must preserve source permissions",
  "Developer tools that need to explain what an agent changed and why",
  "AI infrastructure teams building observability, governance, or integration layers",
];

export const personalLinks = [
  {
    title: "Nevertheless Press",
    meta: "Christian essays and reflections",
    href: "https://neverthelesspress.vercel.app/",
    description:
      "Christian essays and reflections. This is the main home for that writing.",
  },
  {
    title: "Children's Day playlist",
    meta: "Spotify",
    href: "https://open.spotify.com/playlist/56uJqdKuWcBbx8P91nXYKj?si=0e435ca7c85547ca",
    description:
      "A recent gospel playlist from a Children's Day party.",
  },
  {
    title: "Medium essays",
    meta: "Faith writing archive",
    href: "https://medium.com/@umorensamuel",
    description:
      "Older Christian essays, including reflections like 'What Is In Your Hands?' and 'Jesus Calls You Friend.'",
  },
  {
    title: "Documentation portfolio",
    meta: "Developer experience work",
    href: "https://samuel-umoren-documentation-engineer.vercel.app/",
    description:
      "A focused portfolio for documentation systems, API guides, and developer-facing case studies.",
  },
];

export const aboutSections = [
  {
    label: "Faith",
    title: "I am a Christian.",
    body:
      "Some of my writing is technical. Some of it is Christian. Both are part of my life. I write about faith because it is how I make sense of people, service, discipline, and hope.",
    links: [
      {
        label: "Nevertheless Press",
        href: "https://neverthelesspress.vercel.app/",
      },
      {
        label: "What Is In Your Hands?",
        href: "https://medium.com/@umorensamuel/what-is-in-your-hands-346374d3930d",
      },
      {
        label: "Jesus Calls You Friend",
        href: "https://medium.com/@umorensamuel/jesus-calls-you-friend-5762f8db39de",
      },
    ],
  },
  {
    label: "Teaching",
    title: "I teach pre-teens in church.",
    body:
      "I enjoy teaching that age group because they are still open to new things. A lot can take root there. I remember myself at that age, so I take the work seriously.",
  },
  {
    label: "Music",
    title: "I love gospel music, and I DJ.",
    body:
      "Music is one of the ways I serve and connect with people. I care about songs that carry joy, memory, and meaning.",
    links: [
      {
        label: "Children's Day playlist",
        href: "https://open.spotify.com/playlist/56uJqdKuWcBbx8P91nXYKj?si=0e435ca7c85547ca",
      },
    ],
  },
  {
    label: "Football",
    title: "I support FC Barcelona.",
    body:
      "That has stayed with me for years: the football, the history, the idea that style and substance can belong together. I still want to live in Barcelona someday.",
  },
];

export const workPhilosophy = [
  "Do real work first. Let the work carry the story.",
  "Explain things clearly. People should not have to fight your words.",
  "Use evidence. Do not dress guesses up.",
  "Build with the tools you have. Better tools help, but they are not the work.",
  "Documentation is part of the product. If people cannot use it, it is not done.",
  "Research should survive a skeptical read.",
  "AI is useful when it gives people leverage.",
];

export const writingGroups = [
  {
    name: "Active blog",
    description:
      "Current notes and essays live on Bear. umoren.dev keeps the index and professional archive.",
    items: [
      {
        title: "sammai.bearblog.dev",
        source: "Bearblog",
        href: "https://sammai.bearblog.dev/",
        note: "Primary blog for current writing.",
      },
      {
        title: "Beyond Code",
        source: "Hashnode",
        href: "https://beyondcode.hashnode.dev/",
        note: "Older technical blog covering JavaScript, DevOps, and infrastructure.",
      },
      {
        title: "DEV profile",
        source: "DEV Community",
        href: "https://dev.to/umoren",
        note: "Developer-community publishing archive.",
      },
      {
        title: "Medium profile",
        source: "Medium",
        href: "https://medium.com/@umorensamuel",
        note: "Older essays, including Christian reflections and early public writing.",
      },
    ],
  },
  {
    name: "Documentation and platform engineering",
    description: "Long-form guides and documentation systems for developer tools.",
    items: [
      {
        title: "Ory documentation",
        source: "Ory",
        href: "https://www.ory.com/docs/welcome",
        note: "Welcome and quickstart documentation for identity, OAuth2, and permissions.",
      },
      {
        title: "Implementing Backstage: Core Components",
        source: "Kosli",
        href: "https://www.kosli.com/blog/implementing-backstage-2-using-the-core-features/",
        note: "Backstage implementation guide with demo context for platform teams.",
      },
      {
        title: "MonoConnect SDK docs",
        source: "Mintlify",
        href: "https://sammydocs.mintlify.app/content/index",
        note: "Structured SDK documentation with framework-specific guides.",
      },
      {
        title: "Documentation portfolio",
        source: "Portfolio",
        href: "https://samuel-umoren-documentation-engineer.vercel.app/",
        note: "Selected documentation case studies and documentation philosophy.",
      },
    ],
  },
  {
    name: "Faith and personal essays",
    description:
      "Christian writing and reflections that sit outside the technical archive.",
    items: [
      {
        title: "Nevertheless Press",
        source: "Primary faith writing",
        href: "https://neverthelesspress.vercel.app/",
        note: "Christian essays and reflections.",
      },
      {
        title: "What Is In Your Hands?",
        source: "Medium",
        href: "https://medium.com/@umorensamuel/what-is-in-your-hands-346374d3930d",
        note: "A Christian essay from my older Medium archive.",
      },
      {
        title: "Jesus Calls You Friend",
        source: "Medium",
        href: "https://medium.com/@umorensamuel/jesus-calls-you-friend-5762f8db39de",
        note: "A Christian essay from my older Medium archive.",
      },
    ],
  },
  {
    name: "DevOps and infrastructure",
    description: "Practical guides for Docker, testing, APIs, and infrastructure workflows.",
    items: [
      {
        title: "Using Docker Init in Node.js",
        source: "Earthly",
        href: "https://earthly.dev/blog/docker-init-nodejs/",
        note: "Container setup guide for Node.js developers.",
      },
      {
        title: "Speedscale vs WireMock",
        source: "Speedscale",
        href: "https://speedscale.com/blog/wiremock-alternative/",
        note: "API mocking and traffic replay comparison.",
      },
      {
        title: "Socket Firewall supply-chain setup",
        source: "Local draft",
        href: "https://sammai.bearblog.dev/",
        note: "Supply-chain security notes and terminal walkthroughs.",
      },
    ],
  },
  {
    name: "JavaScript and frontend",
    description: "Earlier writing on JavaScript, Node.js, frontend frameworks, and web development.",
    items: [
      {
        title: "Why Fastify is Better Than Express",
        source: "Soshace",
        href: "https://soshace.com/2021/01/25/why-fastify-is-a-better-nodejs-framework-for-your-next-project-compared-to-express/",
        note: "Early framework comparison with 100K+ reads.",
      },
      {
        title: "Host and Deploy a React Static Website on AWS",
        source: "Writing archive",
        href: "https://beyondcode.hashnode.dev/",
        note: "Frontend deployment and AWS static hosting material.",
      },
      {
        title: "JavaScript, DevOps, and infrastructure notes",
        source: "Beyond Code",
        href: "https://beyondcode.hashnode.dev/",
        note: "Older public writing surface.",
      },
    ],
  },
  {
    name: "AI and research notes",
    description: "Current direction: applied AI engineering, research systems, and agentic software.",
    items: [
      {
        title: "You do not need a MacBook to do applied AI engineering",
        source: "Bearblog",
        href: "https://sammai.bearblog.dev/",
        note: "Applied AI engineering essay from current writing direction.",
      },
      {
        title: "The AI integration layer is becoming the new backend",
        source: "X Article",
        href: "https://x.com/saameeey/status/2062229308878581772?s=20",
        note:
          "Category piece on context sync, permission-aware retrieval, tool execution, model routing, observability, governance, and auditability.",
      },
      {
        title: "Research OS with depth",
        source: "Draft",
        href: "https://sammai.bearblog.dev/",
        note: "Notes on evidence systems and research workflows.",
      },
    ],
  },
];
