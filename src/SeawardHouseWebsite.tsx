const heroYouTubeEmbedUrl =
  "https://www.youtube.com/embed/sbefhNHI0jE?autoplay=1&mute=1&loop=1&playlist=sbefhNHI0jE&controls=0&modestbranding=1";

/**
 * Selected Work — unique Cloudinary URLs only.
 * Visually duplicate frames removed (one kept per subject): Oreo cup, Shottys bottle,
 * diamond splash, van scene — weaker / earlier burst picks dropped manually.
 */
const images = [
  "https://res.cloudinary.com/dqbuu6xee/image/upload/v1776992601/Screenshot_2026-04-23_at_4.14.51_PM_etcakn.png",
  "https://res.cloudinary.com/dqbuu6xee/image/upload/v1776992599/Screenshot_2026-04-23_at_4.15.28_PM_g9hftg.png",
  "https://res.cloudinary.com/dqbuu6xee/image/upload/v1776992601/Screenshot_2026-04-23_at_4.15.00_PM_vvnape.png",
  "https://res.cloudinary.com/dqbuu6xee/image/upload/v1776992585/Screenshot_2026-04-23_at_4.16.26_PM_e7ideo.png",
  "https://res.cloudinary.com/dqbuu6xee/image/upload/v1776992498/Screenshot_2026-04-23_at_4.15.55_PM_w7ejbd.png",
  "https://res.cloudinary.com/dqbuu6xee/image/upload/v1776992505/Screenshot_2026-04-23_at_4.15.08_PM_i18ddl.png",
  "https://res.cloudinary.com/dqbuu6xee/image/upload/v1776992577/Screenshot_2026-04-23_at_4.19.58_PM_wr7ooy.png",
  "https://res.cloudinary.com/dqbuu6xee/image/upload/v1777934300/Screenshot_2026-05-04_at_3.37.56_PM_vsxnq4.png",
  "https://res.cloudinary.com/dqbuu6xee/image/upload/v1777934312/Screenshot_2026-05-04_at_3.35.32_PM_gxotsu.png",
  "https://res.cloudinary.com/dqbuu6xee/image/upload/v1777934308/Screenshot_2026-05-04_at_3.33.31_PM_yie2yx.png",
  "https://res.cloudinary.com/dqbuu6xee/image/upload/v1777934314/Screenshot_2026-05-04_at_3.33.10_PM_ixkscn.png",
  "https://res.cloudinary.com/dqbuu6xee/image/upload/v1777934313/Screenshot_2026-05-04_at_3.36.15_PM_avbe5g.png",
] as const;

function shuffleSelectedWork<T>(items: readonly T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const selectedWorkImages = shuffleSelectedWork(images);

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
            <a href="#what-we-do" className="transition hover:opacity-60">
              Services
            </a>
            <a href="#work" className="transition hover:opacity-60">
              Work
            </a>
            <a href="#about" className="transition hover:opacity-60">
              About
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

        <div className="mx-auto grid max-w-[84rem] gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 xl:gap-14 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6">
              <div className="inline-flex items-center rounded-full border border-black/15 px-4 py-2 text-xs uppercase tracking-[0.26em] text-black/65">
                Ventura based production company
              </div>
              <p className="mt-3 max-w-2xl text-[11px] uppercase leading-relaxed tracking-[0.28em] text-black/45">
                Serving Ventura, Ojai, Santa Barbara, and Los Angeles
              </p>
            </div>
            <h1 className="text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-8xl">
              Cinematic content for brands that want to look expensive.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
              Seaward House is a Ventura-based video production company creating commercial, social, and branded content that actually feels cinematic. We help brands stand out with high-end visuals, fast execution, and content built to perform across web, social, and ads.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-black px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5"
              >
                Start a Project
              </a>
              <a
                href="#work"
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

          <div className="flex w-full justify-center self-center lg:justify-end">
            <div className="w-full max-w-[720px] transition-transform duration-300 ease-out hover:scale-[1.02]">
              <iframe
                src={heroYouTubeEmbedUrl}
                title="Seaward House Reel"
                frameBorder={0}
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{
                  width: "100%",
                  aspectRatio: "16 / 9",
                  borderRadius: "16px",
                  boxShadow: "0 20px 70px rgba(0,0,0,0.10)",
                }}
              />
            </div>
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
        id="about"
        className="mx-auto max-w-7xl border-b border-black/10 px-6 py-20 lg:px-10"
        aria-labelledby="about-heading"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-black/45">About</div>
            <h2
              id="about-heading"
              className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-4xl"
            >
              Small crew. Big look.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-black/70">
            <p>
              Seaward House is a Ventura based production company focused on commercial and branded visual work. We keep the process lean, the taste level high, and the final product premium.
            </p>
            <p>
              We&apos;re built for brands that want a cinematic feel without agency overhead. Restaurants, hotels, consumer products, interiors, lifestyle brands, and local businesses that are ready to level up.
            </p>
          </div>
        </div>
      </section>

      <section id="work"
        className="border-b border-black/10 bg-[#f3f3f3] px-6 py-20 lg:px-10 lg:py-28"
        aria-labelledby="selected-work-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl lg:mb-14">
            <div className="text-[11px] uppercase tracking-[0.28em] text-black/45">
              Portfolio
            </div>
            <h2
              id="selected-work-heading"
              className="mt-2 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl"
            >
              Selected work
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-black/60 sm:text-[15px]">
              Selected work from recent commercial and brand projects.
            </p>
          </div>

          <ul className="mx-auto grid w-full max-w-7xl list-none grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {selectedWorkImages.map((src, i) => (
              <li
                key={`work-tile-${i}`}
                className={`min-w-0${i === 0 ? " md:col-span-2" : ""}`}
              >
                <div className="group overflow-hidden rounded-[16px] border border-black/10 shadow-[0_8px_28px_rgba(0,0,0,0.05)]">
                  <img
                    src={src}
                    alt={`Selected work placeholder ${i + 1}`}
                    className={`w-full object-cover transition-transform duration-[300ms] ease-[ease] group-hover:scale-[1.03] ${
                      i === 0
                        ? "h-[300px] md:h-[420px]"
                        : "h-[260px]"
                    }`}
                    loading="lazy"
                  />
                </div>
              </li>
            ))}
          </ul>
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

      <section id="contact"
        className="bg-black px-6 py-24 text-white lg:px-10 lg:py-28"
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <h2
              id="contact-heading"
              className="text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl"
            >
              Start a Project
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
              Tell us about your project and we&apos;ll get back to you.
            </p>
            <form
              className="mt-10 space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-white/55"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="w-full rounded-2xl bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-1 focus:ring-white/30"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-white/55"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-2xl bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-1 focus:ring-white/30"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-white/55"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  className="w-full resize-y rounded-2xl bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-1 focus:ring-white/30"
                />
              </div>
              <button
                type="submit"
                className="inline-flex rounded-2xl border border-white/30 bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/90"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[#f8f8f8] px-6 py-12 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-black/55 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <a
            href="#contact"
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
