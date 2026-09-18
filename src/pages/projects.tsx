import Link from 'next/link';
import Section from '@/components/Section';

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
    year: '2026 —',
    description:
      'Founded the local AWS User Group in Malaga to bring together cloud practitioners, builders, and AWS enthusiasts. Hosting talks and hands-on sessions on AWS services, architecture, and best practices.',
    technologies: ['Community', 'AWS', 'Cloud', 'DevOps'],
    link: 'https://www.meetup.com/aws-user-group-malaga/',
  },
  {
    title: 'PyData Malaga',
    role: 'Organizer',
    year: '2024 —',
    description:
      'Local chapter of the global PyData community. Organizing talks, workshops, and meetups for data and ML practitioners in Malaga.',
    technologies: ['Community', 'Python', 'Data Science', 'Machine Learning'],
    link: 'https://www.meetup.com/es-ES/pydata-malaga/',
  },
];

const Projects = () => {
  return (
    <main>
      <Section rule={false}>
        <h1 className="text-2xl md:text-3xl">work</h1>
        <p className="mt-8 max-w-measure text-muted">
          A short index of projects and initiatives I&apos;ve built or
          contributed to. Writing about these lives on the{' '}
          <Link href="/blog" className="link text-ink">
            journal
          </Link>
          .
        </p>
      </Section>

      <Section label="selected" meta={`${projects.length} entries`}>
        <ol className="-my-5">
          {projects.map((project) => {
            const inner = (
              <div className="sm:flex sm:gap-8">
                <p className="label shrink-0 sm:w-28 sm:pt-1">{project.year}</p>

                <div className="mt-2 min-w-0 flex-1 sm:mt-0">
                  <h2 className="text-base text-ink">
                    {project.title}
                    {project.link && (
                      <span
                        aria-hidden
                        className="ml-2 text-faint transition-colors duration-150 group-hover:text-ink"
                      >
                        ↗
                      </span>
                    )}
                  </h2>
                  <p className="label mt-1">{project.role}</p>
                  <p className="mt-4 max-w-measure text-sm text-muted">
                    {project.description}
                  </p>
                  <p className="mt-3 text-sm text-faint">
                    {project.technologies.join(' · ')}
                  </p>
                </div>
              </div>
            );

            return (
              <li key={project.title} className="py-5">
                {project.link ? (
                  <a
                    href={project.link}
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
    </main>
  );
};

export default Projects;
