import { Link } from "react-router-dom";

const whatWeDo = [
  "Commercial video",
  "Brand photography",
  "Social media content",
  "Product and lifestyle shoots",
];

const whoFor = [
  "Restaurants",
  "Hotels",
  "Retail brands",
  "Outdoor and surf companies",
  "Wellness and fitness",
  "Local businesses",
];

export default function VenturaVideoProduction() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] text-black">
      <header className="border-b border-black/10 bg-[#f8f8f8]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <Link to="/" className="group">
            <div className="text-xl font-black tracking-[0.22em] uppercase transition group-hover:opacity-60 sm:text-2xl">
              Seaward House
            </div>
            <div className="text-[11px] uppercase tracking-[0.34em] text-black/55">
              Commercial / Film
            </div>
          </Link>
          <a
            href="/#contact"
            className="rounded-2xl bg-black px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 sm:px-6 sm:py-3.5 sm:text-sm"
          >
            Start a Project
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-black/10">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
          <div className="absolute -right-16 top-10 h-64 w-64 rounded-full border border-black" />
          <div className="absolute bottom-[-40px] left-[-60px] h-72 w-72 rounded-full border border-black" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:px-10 lg:py-24">
          <div className="relative max-w-2xl">
            <div className="mb-5 inline-flex rounded-full border border-black/15 px-4 py-2 text-[11px] uppercase tracking-[0.26em] text-black/55 sm:text-xs">
              Ventura video production
            </div>
            <h1 className="text-4xl font-black uppercase leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
              Ventura Video Production for Brands That Want to Stand Out
            </h1>
            <p className="mt-7 text-base leading-relaxed text-black/70 sm:text-lg">
              Cinematic video, photography, and social content for businesses that rely on strong visuals to attract customers.
            </p>
            <div className="mt-10">
              <a
                href="/#contact"
                className="inline-flex rounded-2xl bg-black px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5"
              >
                Start a Project
              </a>
            </div>
          </div>

          <div className="relative w-full">
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-black shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
              <video
                src="/Videos/hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[420px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 px-6 py-14 lg:px-10 lg:py-20" aria-labelledby="what-heading">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <div className="text-[11px] uppercase tracking-[0.28em] text-black/45">Scope</div>
            <h2 id="what-heading" className="mt-2 text-2xl font-black uppercase tracking-tight sm:text-3xl">
              What we do
            </h2>
          </div>
          <ul className="mt-10 grid list-none gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-4">
            {whatWeDo.map((item) => (
              <li key={item}>
                <div className="h-full rounded-2xl border border-black/12 bg-white/90 px-5 py-5 text-sm font-medium leading-snug text-black/80 shadow-[0_8px_28px_rgba(0,0,0,0.04)]">
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="border-b border-black/10 bg-[#ecebe8] px-6 py-14 lg:px-10 lg:py-20"
        aria-labelledby="who-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <div className="text-[11px] uppercase tracking-[0.28em] text-black/45">Fit</div>
            <h2 id="who-heading" className="mt-2 text-2xl font-black uppercase tracking-tight sm:text-3xl">
              Who this is for
            </h2>
          </div>
          <ul className="mt-10 grid list-none grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5 lg:mt-12 lg:grid-cols-3 lg:gap-3">
            {whoFor.map((item) => (
              <li key={item}>
                <div className="rounded-xl border border-black/20 bg-white/90 px-4 py-4 text-sm text-black/75 shadow-[0_4px_18px_rgba(0,0,0,0.04)] sm:rounded-2xl sm:px-5 sm:py-4">
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-black/10 px-6 py-14 lg:px-10 lg:py-20" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.28em] text-black/45">Point of view</div>
            <h2 id="why-heading" className="mt-2 text-2xl font-black uppercase tracking-tight sm:text-3xl">
              Why Seaward House
            </h2>
            <p className="mt-6 text-base leading-relaxed text-black/70 sm:text-lg">
              We create premium visuals that actually help businesses get customers, not just look good.
            </p>
          </div>
        </div>
      </section>

      <section
        className="border-b border-black/10 bg-[#f3f3f3] px-6 py-14 lg:px-10 lg:py-20"
        aria-labelledby="local-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.28em] text-black/45">Coverage</div>
            <h2 id="local-heading" className="mt-2 text-2xl font-black uppercase tracking-tight sm:text-3xl">
              Video Production in Ventura and Southern California
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-black/65 sm:text-[15px]">
              Seaward House is based in Ventura and travels regularly for productions in Ojai, Santa Barbara, and Los Angeles. If your story lives on the coast or in town, we plan crews, gear, and schedules so the work stays efficient and the frames stay cinematic.
            </p>
          </div>
        </div>
      </section>

      <section id="inquiry" className="bg-black px-6 py-20 text-white lg:px-10 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/45">Next step</div>
            <p className="mt-4 text-2xl font-black uppercase leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              Tell us what you need and we&apos;ll build it.
            </p>
            <a
              href="/#contact"
              className="mt-10 inline-flex rounded-2xl border border-white/25 bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-white/90"
            >
              Start a Project
            </a>
          </div>
          <div className="rounded-[2rem] border border-white/15 p-6 text-sm leading-7 text-white/75">
            hello@seawardhouse.com
            <br />
            Ventura, California
            <br />
            <Link to="/" className="mt-4 inline-block uppercase tracking-[0.18em] text-white/90 underline-offset-4 transition hover:text-white">
              Seaward House home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
