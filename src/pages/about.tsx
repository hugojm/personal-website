import SectionLabel from '@/components/swiss/SectionLabel';

const jobExperiences = [
  {
    company: 'RavenPack',
    role: 'Machine Learning Engineer',
    period: 'Dec 2023 — Present',
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
    period: 'Oct 2022 — Dec 2023',
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
    date: 'Jun 09 2026',
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
      {/* ───────── 01. About ───────── */}
      <section className="border-b-4 border-swiss-fg">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <SectionLabel number="01" name="About" />
          </div>
          <div className="lg:col-span-9">
            <h1 className="font-black uppercase tracking-tightest leading-[0.88] text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
              An engineer
              <br />
              shipping
              <br />
              <span className="text-swiss-accent">production ML</span>.
            </h1>
            <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 text-lg md:text-xl leading-snug max-w-4xl">
              <p>
                I work on production NLP — transformer fine-tuning,
                retrieval-augmented generation, and the infrastructure around
                shipping models that survive contact with real users and real
                data.
              </p>
              <p>
                I'm based in Marbella, currently at RavenPack. Outside of work I
                organize two local communities and speak at conferences across
                Europe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 02. Focus ───────── */}
      <section className="bg-swiss-muted swiss-dots border-b-4 border-swiss-fg">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <SectionLabel number="02" name="Focus" />
          </div>
          <div className="lg:col-span-9">
            <ul className="flex flex-wrap gap-x-2 gap-y-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="border-2 border-swiss-fg bg-swiss-bg px-4 py-2 text-xs md:text-sm font-bold tracking-widest uppercase transition-colors duration-150 hover:bg-swiss-fg hover:text-swiss-bg"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── 03. Experience ───────── */}
      <section className="border-b-4 border-swiss-fg">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <SectionLabel number="03" name="Experience" />
          </div>
          <div className="lg:col-span-9">
            <ol className="space-y-12 md:space-y-16">
              {jobExperiences.map((job, i) => (
                <li
                  key={job.company}
                  className="grid grid-cols-12 gap-4 md:gap-6 border-t-2 border-swiss-fg pt-6"
                >
                  <span className="col-span-2 md:col-span-1 text-xs font-bold tracking-widest text-swiss-accent">
                    {String(i + 1).padStart(2, '0')}.
                  </span>
                  <div className="col-span-10 md:col-span-11 space-y-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                      <h3 className="font-black uppercase tracking-tight text-2xl md:text-4xl leading-tight">
                        {job.role} · {job.company}
                      </h3>
                      <span className="text-xs font-bold tracking-widest uppercase whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-xs font-bold tracking-widest uppercase text-swiss-accent">
                      {job.location}
                    </p>
                    <p className="text-base md:text-lg leading-snug max-w-3xl">
                      {job.description}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 max-w-3xl">
                      {job.work.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm md:text-base leading-snug"
                        >
                          <span aria-hidden className="text-swiss-accent font-black">
                            +
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <ul className="flex flex-wrap gap-x-2 gap-y-2 pt-2">
                      {job.tech.map((t) => (
                        <li
                          key={t}
                          className="border-2 border-swiss-fg px-3 py-1 text-[10px] md:text-xs font-bold tracking-widest uppercase"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ───────── 04. Speaking ───────── */}
      <section id="speaking" className="border-b-4 border-swiss-fg">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <SectionLabel number="04" name="Speaking" />
          </div>
          <div className="lg:col-span-9">
            <ol>
              {talks.map((talk, i) => {
                const Inner = (
                  <div className="grid grid-cols-12 gap-4 items-baseline py-8 md:py-10">
                    <span className="col-span-2 md:col-span-1 text-xs font-bold tracking-widest text-swiss-accent">
                      {String(i + 1).padStart(2, '0')}.
                    </span>
                    <div className="col-span-10 md:col-span-8 space-y-2">
                      <h3 className="font-black uppercase tracking-tight text-2xl md:text-4xl leading-tight">
                        {talk.title}
                      </h3>
                      <p className="text-sm font-bold tracking-widest uppercase">
                        {talk.venue}
                      </p>
                      <p className="text-sm opacity-80">{talk.detail}</p>
                    </div>
                    <div className="col-span-12 md:col-span-3 flex md:justify-end items-baseline gap-3">
                      <span className="text-xs font-bold tracking-widest uppercase whitespace-nowrap">
                        {talk.date}
                      </span>
                      {talk.href && (
                        <span aria-hidden className="text-swiss-accent font-black">
                          ↗
                        </span>
                      )}
                    </div>
                  </div>
                );

                return (
                  <li
                    key={talk.title}
                    className="border-t-2 border-swiss-fg last:border-b-2"
                  >
                    {talk.href ? (
                      <a
                        href={talk.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block transition-colors duration-150 hover:bg-swiss-fg hover:text-swiss-bg"
                      >
                        {Inner}
                      </a>
                    ) : (
                      Inner
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ───────── 05. Communities ───────── */}
      <section className="bg-swiss-muted swiss-grid-pattern border-b-4 border-swiss-fg">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <SectionLabel number="05" name="Communities" />
          </div>
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0 border-2 border-swiss-fg bg-swiss-bg">
            {communities.map((c, i) => (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-8 md:p-12 transition-colors duration-150 hover:bg-swiss-accent hover:text-swiss-bg ${
                  i === 0 ? 'md:border-r-2' : ''
                } md:border-swiss-fg border-b-2 md:border-b-0 last:border-b-0`}
              >
                <p className="text-xs font-bold tracking-widest uppercase text-swiss-accent group-hover:text-swiss-bg">
                  {c.role}
                </p>
                <h3 className="mt-3 font-black uppercase tracking-tight text-2xl md:text-3xl leading-tight">
                  {c.name}
                </h3>
                <p className="mt-4 text-sm md:text-base leading-snug">{c.detail}</p>
                <span
                  aria-hidden
                  className="mt-6 inline-block text-2xl font-black transition-transform duration-150 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
