import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, User, Wrench, Mail } from "lucide-react";
import portrait from "../assets/portrait.jpg";
import projBoardoverse from "../assets/project-boardoverse.jpg";
import projEdubuddy from "../assets/project-edubuddy.jpg";
import projEtds from "../assets/project-etds.jpg";
import projEcom from "../assets/project-ecommerce.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Amazingmercy — Backend Developer" },
      {
        name: "description",
        content:
          "Backend developer crafting scalable APIs, payment integrations, and resilient databases. Portfolio of Mercy Amaefule.",
      },
    ],
  }),
});

const CV_URL =
  "https://amazingmercy-dev.onrender.com/images/Mercy_Amaefule_Resume(backend).pdf";
const EMAIL = "amaefulmercy499@gmail.com";

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-foreground/10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-4 flex items-center justify-between">
        <a href="#top" className="font-serif text-2xl tracking-tight">
          Amazingmercy<span className="align-super text-xs">®</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em]">
          <a href="#work" className="hover:opacity-60 transition">Work</a>
          <a href="#about" className="hover:opacity-60 transition">About</a>
          <a href="#skills" className="hover:opacity-60 transition">Skills</a>
          <a href="#contact" className="hover:opacity-60 transition">Contact</a>
        </nav>
        <a
          href={`mailto:${EMAIL}`}
          className="hidden md:inline-flex group items-center gap-2 text-xs uppercase tracking-[0.2em] border border-foreground rounded-full px-4 py-2 hover:bg-foreground hover:text-background transition"
        >
          Let's talk
          <span className="inline-block transition-transform group-hover:translate-x-1">↗</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-10 md:pt-16 pb-20 md:pb-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Portfolio — 2026 ©
            </p>
            <h1 className="font-serif leading-[0.85] text-foreground text-[18vw] md:text-[12vw] lg:text-[10.5vw]">
              Amazing<span className="italic text-accent">mercy</span>
            </h1>
            <div className="mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-3 font-serif text-2xl md:text-4xl">
              <span>Backend Architecture</span>
              <span className="italic text-accent">API Design</span>
              <span>Database Engineering</span>
              <span className="italic text-accent">Payments</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:justify-end">
            <div className="relative w-full max-w-md">
              <img
                src={portrait}
                alt="Portrait of Amazingmercy"
                width={1024}
                height={1024}
                className="w-full h-auto grayscale"
              />
              <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-foreground text-background flex items-center justify-center animate-spin-slow ring-2 ring-accent">
                <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                  <defs>
                    <path
                      id="circle"
                      d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                    />
                  </defs>
                  <text className="text-[10.5px] uppercase tracking-[0.2em] fill-background font-sans">
                    <textPath href="#circle">
                      Available for hire · Backend · API · 
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-12 gap-6 items-end border-t border-foreground/15 pt-8">
          <div className="col-span-12 md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
              Based in
            </p>
            <p className="font-serif text-3xl">Nigeria — Remote worldwide</p>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="font-sans text-base md:text-lg text-foreground/80 max-w-xl">
              A backend developer building scalable APIs, payment integrations,
              and resilient data layers — turning messy requirements into clean,
              shippable software.
            </p>
          </div>
          <div className="col-span-12 md:col-span-3 flex md:justify-end gap-3">
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-xs uppercase tracking-[0.2em] hover:opacity-90 transition"
            >
              Download CV ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "REST APIs",
    "Socket.IO",
    "CI / CD",
    "Express",
    "Sequelize",
  ];
  const row = [...items, ...items, ...items];
  return (
    <section className="border-y border-foreground/15 overflow-hidden py-6 bg-background">
      <div className="flex gap-12 whitespace-nowrap animate-marquee font-serif text-4xl md:text-6xl">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className={i % 2 ? "italic text-muted-foreground" : ""}>{t}</span>
            <span aria-hidden className="text-foreground/40">✶</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground sticky top-28">
            (01) About
          </p>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
            Resourceful, solution-driven, and quietly obsessed with{" "}
            <span className="italic text-accent">systems that scale.</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 text-foreground/80">
            <p>
              I build the parts of products people never see — the APIs,
              databases, queues and integrations that quietly make everything
              else feel fast and reliable. My focus is backend engineering with
              Node.js and TypeScript, and I care a lot about clean contracts
              between services.
            </p>
            <p>
              Beyond shipping code, I've led teams, taught juniors, and
              collaborated across time zones. I'm currently open to roles where
              I can grow alongside a serious engineering culture and contribute
              to products that matter.
            </p>
          </div>
          <dl className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 border-t border-foreground/15 pt-8">
            {[
              ["12+", "Projects shipped"],
              ["4+", "Years coding"],
              ["20+", "APIs designed"],
              ["∞", "Bugs squashed"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-serif text-5xl md:text-6xl text-accent">{n}</dt>
                <dd className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const groups = [
    {
      title: "Languages & Frameworks",
      items: ["TypeScript", "JavaScript", "Node.js", "Express.js"],
    },
    {
      title: "Databases",
      items: ["MySQL", "MongoDB", "Sequelize ORM", "Mongoose ODM"],
    },
    {
      title: "Tools & DevOps",
      items: ["Git", "GitHub", "Postman", "Docker", "CI/CD", "REST APIs"],
    },
    {
      title: "Soft Skills",
      items: ["Communication", "Leadership", "Team Collaboration", "Problem Solving"],
    },
  ];
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-foreground/15">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3 mb-10 md:mb-0">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            (02) Capabilities
          </p>
          <h2 className="mt-6 font-serif text-5xl md:text-6xl leading-[0.95]">
            What I bring <span className="italic text-accent">to the table.</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-10">
          {groups.map((g, i) => (
            <div
              key={g.title}
              className={`py-8 border-t border-foreground/15 ${
                i < 2 ? "md:border-t" : ""
              }`}
            >
              <div className="flex items-baseline justify-between gap-6">
                <h3 className="font-serif text-3xl md:text-4xl">{g.title}</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="border border-foreground/30 rounded-full px-4 py-1.5 text-sm"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type Project = {
  index: string;
  title: string;
  year: string;
  role: string;
  stack: string[];
  blurb: string;
  image: string;
  links: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    index: "01",
    title: "Boardoverse",
    year: "2025",
    role: "Backend / Realtime",
    stack: ["Node.js", "Socket.IO", "TypeScript"],
    blurb:
      "A real-time multiplayer board game platform. Built the game logic engine, socket communication layer and state synchronization across rooms.",
    image: projBoardoverse,
    links: [
      { label: "GitHub", href: "https://github.com/Amazingmercy/boardoverse_backend" },
    ],
  },
  {
    index: "02",
    title: "EduBuddy",
    year: "2025",
    role: "AI Agent / Backend",
    stack: ["Node.js", "LLM", "REST"],
    blurb:
      "An AI agent guiding kids through interactive STEM learning. Integrates real-time chat, natural language understanding and study-support flows.",
    image: projEdubuddy,
    links: [
      { label: "GitHub", href: "https://github.com/Amazingmercy/HNG-stage3" },
    ],
  },
  {
    index: "03",
    title: "ETDS",
    year: "2024",
    role: "Full-stack / Workflow",
    stack: ["Node.js", "MySQL", "Multi-role auth"],
    blurb:
      "An electronic thesis and dissertation management platform with multi-role access, scoring workflows, document tracking and approval pipelines.",
    image: projEtds,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Mimieamichy/FULafia-Electronic-Tracking-and-documentation-system",
      },
      {
        label: "Live",
        href: "https://fulafia-electronic-tracking-and-8x35.onrender.com/",
      },
    ],
  },
  {
    index: "04",
    title: "JustVkey",
    year: "2024",
    role: "Full-stack E-Commerce",
    stack: ["EJS", "Node.js", "MongoDB", "Payments"],
    blurb:
      "A modern fashion e-commerce platform with product management, authentication and an integrated payment gateway, now live in production.",
    image: projEcom,
    links: [
      { label: "GitHub", href: "https://github.com/Amazingmercy/justVkey-main-" },
      { label: "Live", href: "https://justvkeyluxuries.com.ng/" },
    ],
  },
];

function Work() {
  return (
    <section id="work" className="py-24 md:py-32 border-t border-foreground/15">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex items-end justify-between mb-12 md:mb-20 gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              (03) Selected Work
            </p>
            <h2 className="mt-6 font-serif text-6xl md:text-8xl leading-[0.9]">
              Things I've <span className="italic">built.</span>
            </h2>
          </div>
          <p className="hidden md:block text-xs uppercase tracking-[0.2em] text-muted-foreground max-w-xs">
            Four selected projects across realtime systems, AI agents, workflow
            tooling and commerce.
          </p>
        </div>

        <ul className="border-t border-foreground/15">
          {projects.map((p) => (
            <li
              key={p.title}
              className="group border-b border-foreground/15 py-8 md:py-12"
            >
              <div className="grid grid-cols-12 gap-6 items-center">
                <div className="col-span-2 md:col-span-1 font-serif text-2xl md:text-3xl text-accent">
                  {p.index}
                </div>
                <div className="col-span-10 md:col-span-4">
                  <h3 className="font-serif text-4xl md:text-6xl leading-none">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {p.role} · {p.year}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-4 text-foreground/80">
                  <p>{p.blurb}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground"
                      >
                        {s} ·
                      </span>
                    ))}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <div className="overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="w-full h-48 md:h-40 object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="mt-3 flex gap-4 text-xs uppercase tracking-[0.2em]">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:no-underline"
                      >
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 border-t border-foreground/15">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          (04) Contact
        </p>
        <h2 className="mt-8 font-serif text-[16vw] md:text-[11vw] leading-[0.85]">
          Let's build <span className="italic text-accent">something.</span>
        </h2>
        <div className="mt-12 grid grid-cols-12 gap-6 border-t border-foreground/15 pt-10">
          <div className="col-span-12 md:col-span-6">
            <a
              href={`mailto:${EMAIL}`}
              className="font-serif text-3xl md:text-5xl underline decoration-foreground/30 underline-offset-8 hover:decoration-foreground transition"
            >
              {EMAIL}
            </a>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Elsewhere
            </p>
            <ul className="space-y-2 font-serif text-2xl">
              <li>
                <a
                  href="https://github.com/Amazingmercy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:italic"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:italic">Email ↗</a>
              </li>
              <li>
                <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="hover:italic">
                  Résumé ↗
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Availability
            </p>
            <p className="font-serif text-2xl">
              Open for full-time & contract roles, starting now.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
function BottomNav() {
  const links = [
    { href: "#work", label: "Work", icon: Briefcase },
    { href: "#about", label: "About", icon: User },
    { href: "#skills", label: "Skills", icon: Wrench },
    { href: "#contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-t border-foreground/10 md:hidden">
      <div className="flex items-center justify-around py-3">
        {links.map((l) => {
          const Icon = l.icon;
          return (
            <a
              key={l.label}
              href={l.href}
              className="flex flex-col items-center gap-1 text-[10px] uppercase tracking-wider text-muted-foreground hover:text-accent transition"
            >
              <Icon className="w-5 h-5" />
              <span>{l.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-foreground/15 py-8">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span>© {new Date().getFullYear()} Mercy Amaefule</span>
        <span>Made with care · Backend Developer</span>
        <a href="#top" className="hover:text-foreground">Back to top ↑</a>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground pb-20 md:pb-0">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
      <BottomNav />
    </main>
  );
}
