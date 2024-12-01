import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import styles from '../styles/Projects.module.css';

const ParticleField = dynamic(() => import('@/components/ParticleField'), { ssr: false });
const MeshBackground = dynamic(() => import('@/components/MeshBackground'), { ssr: false });
const Scene3D = dynamic(() => import('@/components/Scene3D'), { ssr: false });

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className={styles.container}>
      <ParticleField mousePosition={{ x: 0, y: 0 }} />
      <MeshBackground />

      <motion.div
        className={styles.backgroundEffect}
        style={{ y: backgroundY }}
      >
        <Scene3D />
      </motion.div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={styles.header}
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.subtitle}>
            Here are some of my recent works and contributions
          </p>
        </motion.div>

        <motion.div
          className={styles.projectsWrapper}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className={styles.projectsGrid}>
            <ProjectCard
              title="Organizer of PyData Malaga"
              description="As an organizer of PyData Malaga, I coordinate weekly conferences where we discuss various Python and data topics, fostering a community of data enthusiasts."
              technologies={['Python', 'Data Science', 'Community Engagement']}
              link=" https://www.meetup.com/es-ES/pydata-malaga/"
              image="/images/pydata.png"
            />
            {/* <ProjectCard
              title="AI Chatbot Development"
              description="Developed an AI chatbot for customer service using NLP techniques, improving customer satisfaction by 40%."
              technologies={['Python', 'NLP', 'Machine Learning']}
              link="https://github.com/yourusername/ai-chatbot"
              image="/images/ai-chatbot.jpg"
            /> */}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

const ProjectCard = ({ title, description, technologies, link, image }: ProjectCardProps) => (
  <div className={styles.projectCard}>
    {image && (
      <img src={image} alt={title} className={styles.projectImage} />
    )}
    <h3 className={styles.projectTitle}>{title}</h3>
    <p className={styles.projectDescription}>{description}</p>
    <div className={styles.technologies}>
      {technologies.map((tech, index) => (
        <span key={index} className={styles.techBadge}>
          {tech}
        </span>
      ))}
    </div>
    {link && (
      <a href={link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
        Learn More
      </a>
    )}
  </div>
);

export default Projects;