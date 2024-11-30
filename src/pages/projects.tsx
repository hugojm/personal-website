import Hero from '@/components/Hero';

const Projects = () => {
  return (
    <>
      <Hero 
        title="Projects" 
        subtitle="Here are some of my recent works and contributions" 
      />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Project 1"
              description="Description of project 1"
              technologies={['React', 'TypeScript', 'Tailwind']}
            />
            <ProjectCard
              title="Project 2"
              description="Description of project 2"
              technologies={['Next.js', 'Node.js', 'MongoDB']}
            />
            <ProjectCard
              title="Project 3"
              description="Description of project 3"
              technologies={['Python', 'Django', 'PostgreSQL']}
            />
          </div>
        </div>
      </section>
    </>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
}

const ProjectCard = ({ title, description, technologies }: ProjectCardProps) => (
  <><div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"></div><h3 className="text-xl font-semibold mb-3">{title}</h3><p className="text-gray-600 mb-4">{description}</p><div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
            <span
                key={index}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
            >
                {tech}
            </span>
        ))}
    </div></>
);

export default Projects;