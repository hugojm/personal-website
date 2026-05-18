import Image from 'next/image';
import Link from 'next/link';
import SectionLabel from '@/components/swiss/SectionLabel';

/**
 * Editorial portrait panel — a bordered 4:5 frame, the photo cropped
 * via object-cover so the face anchors the top third. Two small marks
 * (the red square caption-marker and the corner rule) keep the
 * Bauhaus geometric vocabulary present without competing with the photo.
 */
const Portrait = () => (
  <figure className="relative">
    <div className="relative w-full aspect-[4/5] border-2 border-swiss-fg overflow-hidden bg-swiss-muted">
      <Image
        src="/images/portrait.jpg"
        alt="Hugo Jiménez"
        fill
        priority
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover object-[center_15%]"
      />
      <div
        aria-hidden
        className="absolute right-0 top-0 w-10 h-10 md:w-12 md:h-12 border-b-2 border-l-2 border-swiss-fg bg-swiss-bg"
      />
    </div>
    <figcaption className="mt-3 flex items-baseline gap-2 text-[10px] font-bold tracking-widest uppercase">
      <span aria-hidden className="inline-block w-2 h-2 bg-swiss-accent" />
      Plate 01 · Hugo Jiménez · Marbella
    </figcaption>
  </figure>
);

const indexLinks = [
  { href: '/about', label: 'About', meta: 'Bio, focus, communities' },
  { href: '/projects', label: 'Work', meta: 'Selected projects' },
  { href: '/about#speaking', label: 'Speaking', meta: 'Berlin Buzzwords · AWS Summit Madrid' },
  { href: '/blog', label: 'Journal', meta: 'Writing on ML & NLP' },
  { href: '/contact', label: 'Contact', meta: 'Email, GitHub, LinkedIn' },
];

export default function Home() {
  return (
    <main>
      {/* ───────── Hero ───────── */}
      <section className="border-b-4 border-swiss-fg">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-8">
            <SectionLabel number="00" name="Index — 2026" />
            <h1 className="font-black uppercase tracking-tightest leading-[0.85] text-7xl sm:text-8xl md:text-9xl lg:text-[11rem]">
              Hugo
              <br />
              Jiménez
            </h1>
            <p className="mt-8 md:mt-12 max-w-2xl text-lg md:text-xl leading-snug">
              Machine learning engineer. I build production NLP and
              retrieval-augmented systems — transformer fine-tuning, evaluation,
              and the infrastructure to ship models that work in the real world.
            </p>
            <p className="mt-4 text-sm font-bold tracking-widest uppercase">
              <span className="inline-block w-3 h-3 mr-3 bg-swiss-accent align-[2px]" />
              Currently · RavenPack · Marbella
            </p>
          </div>

          <div className="lg:col-span-4 lg:pl-8 lg:border-l-2 lg:border-swiss-fg">
            <Portrait />
            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 text-xs font-bold tracking-widest uppercase">
              <div>
                <dt className="text-swiss-accent">Role</dt>
                <dd className="mt-1">ML Engineer</dd>
              </div>
              <div>
                <dt className="text-swiss-accent">Domain</dt>
                <dd className="mt-1">NLP · RAG</dd>
              </div>
              <div>
                <dt className="text-swiss-accent">Based</dt>
                <dd className="mt-1">Marbella, ES</dd>
              </div>
              <div>
                <dt className="text-swiss-accent">Speaking</dt>
                <dd className="mt-1">2026</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ───────── Index of pages ───────── */}
      <section className="border-b-4 border-swiss-fg">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-12 md:py-16">
          <SectionLabel number="01" name="Sections" />
          <ul>
            {indexLinks.map((item, i) => (
              <li key={item.href} className="border-t-2 border-swiss-fg first:border-t-0">
                <Link
                  href={item.href}
                  className="group grid grid-cols-12 gap-4 items-baseline py-6 md:py-10 transition-colors duration-150 hover:bg-swiss-fg hover:text-swiss-bg"
                >
                  <span className="col-span-2 md:col-span-1 text-xs font-bold tracking-widest text-swiss-accent">
                    {String(i + 1).padStart(2, '0')}.
                  </span>
                  <span className="col-span-7 md:col-span-7 font-black uppercase tracking-tight text-4xl md:text-6xl lg:text-7xl leading-none">
                    {item.label}
                  </span>
                  <span className="col-span-3 md:col-span-3 text-xs font-bold tracking-widest uppercase opacity-70 hidden md:block">
                    {item.meta}
                  </span>
                  <span className="col-span-1 text-right font-black text-2xl md:text-3xl transition-transform duration-150 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── Now ───────── */}
      <section className="bg-swiss-muted swiss-diagonal border-b-4 border-swiss-fg">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <SectionLabel number="02" name="Now" />
          </div>
          <div className="md:col-span-8 space-y-6">
            <p className="text-2xl md:text-3xl leading-tight font-medium">
              Leading NLP work at{' '}
              <a
                href="https://www.ravenpack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-2 border-swiss-fg hover:text-swiss-accent hover:border-swiss-accent transition-colors duration-150"
              >
                RavenPack
              </a>{' '}
              — fine-tuning small language models for query intent, building RAG
              systems for financial document understanding, and operating models
              in production.
            </p>
            <p className="text-2xl md:text-3xl leading-tight font-medium">
              Speaking at <span className="font-black">Berlin Buzzwords 2026</span>{' '}
              and <span className="font-black">AWS Summit Madrid 2026</span>.
              Organizing{' '}
              <a
                href="https://www.meetup.com/es-ES/pydata-malaga/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-2 border-swiss-fg hover:text-swiss-accent hover:border-swiss-accent transition-colors duration-150"
              >
                PyData Malaga
              </a>{' '}
              and{' '}
              <a
                href="https://www.meetup.com/aws-user-group-malaga/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-2 border-swiss-fg hover:text-swiss-accent hover:border-swiss-accent transition-colors duration-150"
              >
                AWS User Group Malaga
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ───────── Footer rule ───────── */}
      <footer className="border-t-0">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-8 flex flex-wrap items-center justify-between gap-4 text-xs font-bold tracking-widest uppercase">
          <span>Hugo Jiménez — 2026</span>
          <span className="text-swiss-accent">●</span>
          <span>Marbella · Spain</span>
        </div>
      </footer>
    </main>
  );
}
