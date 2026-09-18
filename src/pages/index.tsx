import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/Section';

const facts = [
  { key: 'role', value: 'ml engineer' },
  { key: 'domain', value: 'nlp · rag' },
  { key: 'based', value: 'marbella, es' },
  { key: 'now', value: 'ravenpack' },
];

const indexLinks = [
  { href: '/about', label: 'about', meta: 'bio, focus, communities' },
  { href: '/projects', label: 'work', meta: 'selected projects' },
  { href: '/about#speaking', label: 'speaking', meta: 'berlin buzzwords · aws summit' },
  { href: '/blog', label: 'journal', meta: 'writing on ml & nlp' },
  { href: '/contact', label: 'contact', meta: 'email, github, linkedin' },
];

export default function Home() {
  return (
    <main>
      <Section rule={false}>
        <div className="flex items-start justify-between gap-10">
          <div className="min-w-0">
            <h1 className="text-2xl md:text-3xl">hugo jiménez</h1>
            <p className="label mt-2">machine learning engineer</p>

            <div className="mt-8 max-w-measure space-y-2 text-muted">
              <p>
                <span aria-hidden className="mr-3 text-faint">
                  &gt;
                </span>
                I build production NLP and retrieval-augmented systems —
                transformer fine-tuning, evaluation, and the infrastructure to
                ship models that work on real data.
              </p>
              <p>
                <span aria-hidden className="mr-3 text-faint">
                  &gt;
                </span>
                Currently at RavenPack. I organize two developer communities in
                Malaga and speak at conferences across Europe.
              </p>
            </div>
          </div>

          {/* Small, desaturated — a fact about the page, not a hero image. */}
          <Image
            src="/images/portrait.jpg"
            alt="Hugo Jiménez"
            width={96}
            height={96}
            priority
            className="hidden h-24 w-24 shrink-0 border border-rule object-cover grayscale sm:block"
          />
        </div>

        <dl className="mt-10 grid grid-cols-1 gap-x-10 gap-y-1 sm:grid-cols-2">
          {facts.map((fact) => (
            <div key={fact.key} className="flex items-baseline gap-4 text-sm">
              <dt className="label w-20 shrink-0">{fact.key}</dt>
              <dd className="text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section label="sections">
        <ul className="-my-3">
          {indexLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex items-baseline gap-4 py-3 text-sm"
              >
                <span className="w-28 shrink-0 text-ink">{item.label}</span>
                <span className="min-w-0 flex-1 truncate text-muted">
                  {item.meta}
                </span>
                <span
                  aria-hidden
                  className="text-faint transition-colors duration-150 group-hover:text-ink"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="now">
        <div className="max-w-measure space-y-4 text-muted">
          <p>
            Leading NLP work at{' '}
            <a
              href="https://www.ravenpack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link text-ink"
            >
              RavenPack
            </a>{' '}
            — fine-tuning small language models for query intent, building RAG
            systems for financial document understanding, and operating models
            in production.
          </p>
          <p>
            Speaking at <span className="text-ink">Berlin Buzzwords 2026</span>{' '}
            and <span className="text-ink">AWS Summit Madrid 2026</span>.
            Organizing{' '}
            <a
              href="https://www.meetup.com/es-ES/pydata-malaga/"
              target="_blank"
              rel="noopener noreferrer"
              className="link text-ink"
            >
              PyData Malaga
            </a>{' '}
            and{' '}
            <a
              href="https://www.meetup.com/aws-user-group-malaga/"
              target="_blank"
              rel="noopener noreferrer"
              className="link text-ink"
            >
              AWS User Group Malaga
            </a>
            .
          </p>
        </div>
      </Section>
    </main>
  );
}
