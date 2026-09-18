import Section from '@/components/Section';

const jobExperiences = [
  {
    company: 'RavenPack',
    role: 'Machine Learning Engineer',
    period: '2023 —',
    location: 'Marbella, Spain',
    description:
      'Leading NLP initiatives for financial document analysis using transformer models. Designing and operating RAG systems for enterprise information retrieval.',
    work: [
      'Transformer-based NLP models for financial language',
      'Production deployment on AWS SageMaker',
      'RAG system design, evaluation, and optimization',
      'Cross-team collaboration on ML infrastructure',
    ],
    tech: ['PyTorch', 'AWS SageMaker', 'Transformers', 'RAG', 'Docker'],
  },
  {
    company: 'Factor Energia',
    role: 'Data Scientist',
    period: '2022 — 23',
    location: 'Barcelona, Spain',
    description:
      'Built ML and LLM-driven systems for customer engagement and process automation, including WhatsApp chatbots and automated reporting pipelines.',
    work: [
      'WhatsApp chatbots powered by LangChain',
      'ML models for customer segmentation and engagement',
      'Automated reporting with Python and Jenkins',
      'Data pipelines and SQL optimization',
    ],
    tech: ['Python', 'LangChain', 'SQL', 'Jenkins', 'Machine Learning'],
  },
];

const skills = [
  'NLP',
  'Machine Learning',
  'Data Science',
  'Python',
  'AWS',
  'Docker',
  'RAG',
  'PyTorch',
  'Transformers',
];

const talks = [
  {
    title: 'Text-to-Struct: Fine-tuning SLMs for Query Intent',
    venue: 'Berlin Buzzwords 2026',
    detail: 'Kulturbrauerei, Berlin — with Sandra Bullón',
    date: '2026-06-09',
    href: 'https://2026.berlinbuzzwords.de/session/text-to-struct-fine-tuning-slms-for-query-intent/',
  },
  {
    title: 'AWS Summit Madrid',
    venue: 'AWS Summit 2026',
    detail: 'Madrid, Spain',
    date: '2026',
    href: undefined,
  },
];

const communities = [
  {
    name: 'PyData Malaga',
    role: 'Organizer',
    detail:
      'Local chapter of the global PyData community. Talks and workshops for data and ML practitioners.',
    href: 'https://www.meetup.com/es-ES/pydata-malaga/',
  },
  {
    name: 'AWS User Group Malaga',
    role: 'Founder · Organizer',
    detail:
      'Founded the local AWS User Group to bring together cloud practitioners and builders in Malaga.',
    href: 'https://www.meetup.com/aws-user-group-malaga/',
  },
];

const About = () => {
  return (
    <main>
      <Section rule={false}>
        <h1 className="text-2xl md:text-3xl">about</h1>
        <div className="mt-8 max-w-measure space-y-4 text-muted">
          <p>
            I work on production NLP — transformer fine-tuning,
            retrieval-augmented generation, and the infrastructure around
            shipping models that survive contact with real users and real data.
          </p>
          <p>
            I&apos;m based in Marbella, currently at RavenPack. Outside of work I
            organize two local communities and speak at conferences across
            Europe.
          </p>
        </div>
      </Section>

      <Section label="focus">
        <ul className="flex max-w-measure flex-wrap gap-x-2 gap-y-1 text-sm text-muted">
          {skills.map((skill, i) => (
            <li key={skill}>
              {skill.toLowerCase()}
              {i < skills.length - 1 && (
                <span aria-hidden className="ml-2 text-faint">
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
      </Section>

      <Section label="experience">
        <ol className="space-y-12">
          {jobExperiences.map((job) => (
            <li key={job.company} className="sm:flex sm:gap-8">
              <p className="label shrink-0 sm:w-28 sm:pt-1">{job.period}</p>

              <div className="mt-2 min-w-0 flex-1 sm:mt-0">
                <h3 className="text-base text-ink">
                  {job.role}, {job.company}
                </h3>
                <p className="label mt-1">{job.location}</p>

                <p className="mt-4 max-w-measure text-sm text-muted">
                  {job.description}
                </p>

                <ul className="mt-4 space-y-1 text-sm text-muted">
                  {job.work.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="shrink-0 text-faint">
                        &gt;
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-sm text-faint">{job.tech.join(' · ')}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="speaking" label="speaking">
        <ol className="-my-4">
          {talks.map((talk) => {
            const inner = (
              <div className="sm:flex sm:gap-8">
                <p className="label shrink-0 sm:w-28 sm:pt-1">{talk.date}</p>
                <div className="mt-2 min-w-0 flex-1 sm:mt-0">
                  <h3 className="text-base text-ink">
                    {talk.title}
                    {talk.href && (
                      <span
                        aria-hidden
                        className="ml-2 text-faint transition-colors duration-150 group-hover:text-ink"
                      >
                        ↗
                      </span>
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{talk.venue}</p>
                  <p className="text-sm text-faint">{talk.detail}</p>
                </div>
              </div>
            );

            return (
              <li key={talk.title} className="py-4">
                {talk.href ? (
                  <a
                    href={talk.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </li>
            );
          })}
        </ol>
      </Section>

      <Section label="communities">
        <ul className="-my-4">
          {communities.map((c) => (
            <li key={c.name} className="py-4">
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block sm:flex sm:gap-8"
              >
                <p className="label shrink-0 sm:w-28 sm:pt-1">
                  {c.role.toLowerCase()}
                </p>
                <div className="mt-2 min-w-0 flex-1 sm:mt-0">
                  <h3 className="text-base text-ink">
                    {c.name}
                    <span
                      aria-hidden
                      className="ml-2 text-faint transition-colors duration-150 group-hover:text-ink"
                    >
                      ↗
                    </span>
                  </h3>
                  <p className="mt-1 max-w-measure text-sm text-muted">
                    {c.detail}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
};

export default About;
