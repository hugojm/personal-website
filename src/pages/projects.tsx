import Link from 'next/link';
import SectionLabel from '@/components/swiss/SectionLabel';

interface Project {
  title: string;
  year: string;
  role: string;
  description: string;
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: 'AWS User Group Malaga',
    role: 'Founder · Organizer',
    year: '2026 — Present',
    description:
      'Founded the local AWS User Group in Malaga to bring together cloud practitioners, builders, and AWS enthusiasts. Hosting talks and hands-on sessions on AWS services, architecture, and best practices.',
    technologies: ['Community', 'AWS', 'Cloud', 'DevOps'],
    link: 'https://www.meetup.com/aws-user-group-malaga/',
  },
  {
    title: 'PyData Malaga',
    role: 'Organizer',
    year: '2024 — Present',
    description:
      'Local chapter of the global PyData community. Organizing talks, workshops, and meetups for data and ML practitioners in Malaga.',
    technologies: ['Community', 'Python', 'Data Science', 'Machine Learning'],
    link: 'https://www.meetup.com/es-ES/pydata-malaga/',
  },
];

const Projects = () => {
  return (
    <main>
      {/* ───────── 01. Work ───────── */}
      <section className="border-b-4 border-swiss-fg">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <SectionLabel number="01" name="Work" />
          </div>
          <div className="lg:col-span-9">
            <h1 className="font-black uppercase tracking-tightest leading-[0.88] text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
              Selected
              <br />
              <span className="text-swiss-accent">work</span>.
            </h1>
            <p className="mt-8 md:mt-12 max-w-2xl text-lg md:text-xl leading-snug">
              A short index of projects and initiatives I've built or contributed
              to. Writing about these lives on the{' '}
              <Link
                href="/blog"
                className="border-b-2 border-swiss-fg hover:text-swiss-accent hover:border-swiss-accent transition-colors duration-150"
              >
                Journal
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ───────── Project list ───────── */}
      <section className="border-b-4 border-swiss-fg">
        <ol className="mx-auto max-w-[1400px]">
          {projects.map((project, i) => {
            const Inner = (
              <div className="grid grid-cols-12 gap-4 md:gap-8 px-6 md:px-12 py-10 md:py-16 items-start">
                <span className="col-span-12 md:col-span-1 font-black text-swiss-accent text-5xl md:text-7xl leading-none tracking-tightest">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="col-span-12 md:col-span-7 space-y-4">
                  <h2 className="font-black uppercase tracking-tight text-3xl md:text-5xl lg:text-6xl leading-[0.95]">
                    {project.title}
                  </h2>
                  <p className="text-xs font-bold tracking-widest uppercase">
                    {project.role}
                  </p>
                  <p className="text-base md:text-lg leading-snug max-w-2xl">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-x-2 gap-y-2 pt-2">
                    {project.technologies.map((t) => (
                      <li
                        key={t}
                        className="border-2 border-swiss-fg px-3 py-1 text-[10px] md:text-xs font-bold tracking-widest uppercase group-hover:border-swiss-bg"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-12 md:col-span-4 flex flex-col md:items-end gap-3">
                  <span className="text-xs font-bold tracking-widest uppercase">
                    {project.year}
                  </span>
                  {project.link && (
                    <span
                      aria-hidden
                      className="text-3xl md:text-4xl font-black transition-transform duration-150 group-hover:translate-x-2"
                    >
                      ↗
                    </span>
                  )}
                </div>
              </div>
            );

            return (
              <li
                key={project.title}
                className="border-t-2 border-swiss-fg last:border-b-0 first:border-t-0"
              >
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block transition-colors duration-150 hover:bg-swiss-fg hover:text-swiss-bg"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div className="group">{Inner}</div>
                )}
              </li>
            );
          })}
        </ol>
      </section>
    </main>
  );
};

export default Projects;
