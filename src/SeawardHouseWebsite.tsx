const featuredProjects = [
  {
    title: "Project One",
    type: "Brand Film",
    description:
      "Placeholder project description for a cinematic campaign piece.",
  },
  {
    title: "Project Two",
    type: "Social Content",
    description:
      "Placeholder project description for a short form visual campaign.",
  },
  {
    title: "Project Three",
    type: "Photography",
    description:
      "Placeholder project description for a premium lifestyle stills project.",
  },
];

const whatWeDoColumns = [
  {
    label: "Commercial",
    body: "Brand films, product spots, and campaign visuals built to feel premium.",
  },
  {
    label: "Social content",
    body: "Short form creative, launch assets, and ad content that still feels elevated.",
  },
  {
    label: "Photography",
    body: "Product, food, and lifestyle stills designed to support campaigns and brands.",
  },
];

const whyBlocks = [
  {
    title: "Small crew",
    body: "Lean production without unnecessary layers.",
  },
  {
    title: "Fast turnaround",
    body: "Efficient execution without losing polish.",
  },
  {
    title: "Premium look",
    body: "Cinematic visuals designed to elevate the brand.",
  },
];

const whoCategories = [
  "Outdoor and lifestyle brands",
  "Food and hospitality",
  "Local and growing businesses",
];

export default function SeawardHouseWebsite() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] text-black">
      <header className="border-b border-black/10 bg-[#f8f8f8]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <div>
            <div className="text-2xl font-black tracking-[0.22em] uppercase">
              Seaward House
            </div>
            <div className="text-[11px] uppercase tracking-[0.34em] text-black/55">
              Commercial / Film
            </div>
          </div>
          <nav className="hidden gap-8 text-sm uppercase tracking-[0.18em] md:flex">
            <a href="#featured-work" className="transition hover:opacity-60">
              Work
            </a>
            <a href="#what-we-do" className="transition hover:opacity-60">
              What we do
            </a>
            <a href="#who-we-work-with" className="transition hover:opacity-60">
              Who we work with
            </a>
            <a href="#why-seaward-house" className="transition hover:opacity-60">
              Why us
            </a>
            <a href="#contact" className="transition hover:opacity-60">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="relative overflow-hidden border-b border-black/10"
        aria-label="Home"
      >
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute -right-16 top-10 h-64 w-64 rounded-full border border-black" />
          <div className="absolute bottom-[-40px] left-[-60px] h-72 w-72 rounded-full border border-black" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6">
              <div className="inline-flex items-center rounded-full border border-black/15 px-4 py-2 text-xs uppercase tracking-[0.26em] text-black/65">
                Ventura based production company
              </div>
              <p className="mt-3 max-w-2xl text-[11px] uppercase leading-relaxed tracking-[0.28em] text-black/45">
                Serving Ventura, Ojai, Santa Barbara, and Los Angeles
              </p>
            </div>
            <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              Cinematic content for brands that want to look expensive.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Seaward House centers Ventura video production on every engagement. A commercial videographer in Ventura leads the frame, brand photography in Ventura matches your motion, and social media content for businesses still reads considered, not templated. That is the backbone of content creation Ventura teams can treat as infrastructure, not an add on.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-black px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5"
              >
                Start a Project
              </a>
              <a
                href="#featured-work"
                className="rounded-2xl border border-black/15 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition hover:bg-black hover:text-white"
              >
                View Work
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-black/70">
              <div>One shoot day</div>
              <div>Photo and video</div>
              <div>Ready for web, social, and ads</div>
            </div>
          </div>

          <div className="w-full">
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-black shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
              <video
                src="/Videos/hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-[340px] w-full object-cover lg:h-[min(520px,52vh)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="featured-work"
        className="border-b border-black/10 bg-[#f0efec] px-6 py-20 lg:px-10 lg:py-28"
        aria-labelledby="featured-work-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl lg:mb-16">
            <div className="text-[11px] uppercase tracking-[0.28em] text-black/45">
              Portfolio
            </div>
            <h2
              id="featured-work-heading"
              className="mt-2 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl"
            >
              Featured work
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 md:gap-8 lg:grid-cols-3 lg:gap-10">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col border border-black/10 bg-white/70 shadow-[0_16px_50px_rgba(0,0,0,0.06)]"
              >
                <div className="relative aspect-[4/5] w-full bg-[#e4e3df]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[10px] uppercase tracking-[0.35em] text-black/35">
                      Media placeholder
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/45">
                    {project.type}
                  </div>
                  <h3 className="mt-3 text-xl font-bold uppercase tracking-tight text-black sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-black/65">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="what-we-do"
        className="mx-auto max-w-7xl border-b border-black/10 px-6 py-20 lg:px-10 lg:py-28"
        aria-labelledby="what-we-do-heading"
      >
        <div className="mb-12 max-w-2xl lg:mb-16">
          <div className="text-[11px] uppercase tracking-[0.28em] text-black/45">
            Services
          </div>
          <h2
            id="what-we-do-heading"
            className="mt-2 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl"
          >
            What we do
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-0 lg:gap-0">
          {whatWeDoColumns.map((col, i) => (
            <div
              key={col.label}
              className={`md:px-8 lg:px-12 ${i > 0 ? "border-t border-black/10 pt-10 md:border-t-0 md:border-s md:pt-0" : ""}`}
            >
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-black">
                {col.label}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-black/65 sm:text-[15px]">
                {col.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="why-seaward-house"
        className="border-b border-black/10 bg-[#ecebe8] px-6 py-20 lg:px-10 lg:py-28"
        aria-labelledby="why-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl lg:mb-16">
            <div className="text-[11px] uppercase tracking-[0.28em] text-black/45">
              Approach
            </div>
            <h2
              id="why-heading"
              className="mt-2 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl"
            >
              Why Seaward House
            </h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8 lg:gap-12">
            {whyBlocks.map((block) => (
              <div key={block.title}>
                <h3 className="text-lg font-black uppercase tracking-tight text-black sm:text-xl">
                  {block.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-black/65 sm:text-[15px]">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="who-we-work-with"
        className="mx-auto max-w-7xl border-b border-black/10 px-6 py-20 lg:px-10 lg:py-28"
        aria-labelledby="who-we-work-with-heading"
      >
        <div className="mb-12 max-w-2xl lg:mb-14">
          <div className="text-[11px] uppercase tracking-[0.28em] text-black/45">
            Clients
          </div>
          <h2
            id="who-we-work-with-heading"
            className="mt-2 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl"
          >
            Who we work with
          </h2>
        </div>

        <div className="grid grid-cols-1 divide-y divide-black/10 border border-black/10 bg-white/80 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {whoCategories.map((line) => (
            <div key={line} className="px-6 py-12 text-center sm:py-16">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-black/80 sm:text-[15px] sm:leading-snug">
                {line}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="bg-black px-6 py-24 text-white lg:px-10 lg:py-28"
        aria-labelledby="cta-heading"
      >
        <div className="mx-auto max-w-7xl">
          <h2
            id="cta-heading"
            className="max-w-3xl text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl"
          >
            Ready to build something?
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Tell us what you need and we&apos;ll put together the right creative approach.
          </p>
          <a
            href="mailto:hello@seawardhouse.com"
            className="mt-10 inline-flex rounded-2xl border border-white/30 bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/90"
          >
            Contact
          </a>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[#f8f8f8] px-6 py-12 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-black/55 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <a
            href="mailto:hello@seawardhouse.com"
            className="transition hover:text-black"
          >
            hello@seawardhouse.com
          </a>
          <span>Ventura, California</span>
          <a
            href="https://instagram.com/seawardhouse"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-black"
          >
            Instagram: @seawardhouse
          </a>
        </div>
      </footer>
    </div>
  );
}
