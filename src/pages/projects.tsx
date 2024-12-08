import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from '../styles/Projects.module.css';

const ParticleField = dynamic(() => import('@/components/ParticleField'), { ssr: false });
const MeshBackground = dynamic(() => import('@/components/MeshBackground'), { ssr: false });

const Projects = () => {

  return (
    <div className={styles.container}>
      <ParticleField mousePosition={{ x: 0, y: 0 }} />
      <MeshBackground />

      <motion.div className={styles.content}>
        <motion.h1
          className={styles.pageTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Featured Projects
        </motion.h1>

        <motion.div 
          className={styles.projectsGrid}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          initial="hidden"
          animate="show"
        >
          <ProjectCard
            title="PyData Malaga Community"
            description="Leading the PyData Malaga community, organizing weekly conferences and workshops to discuss cutting-edge Python and data science topics. Building a vibrant ecosystem of data professionals and enthusiasts."
            technologies={['Community Building', 'Python', 'Data Science', 'Machine Learning']}
            link="https://www.meetup.com/es-ES/pydata-malaga/"
            image="/images/pydata.png"
          />
          {/* Add more ProjectCard components as needed */}
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
  <motion.div 
    className={styles.projectCard}
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 }
    }}
    whileHover={{ y: -5 }}
  >
    {image && (
      <motion.div 
        className={styles.imageContainer}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className={styles.projectImage}
          quality={90}
          priority
          style={{ objectFit: 'cover' }}
        />
      </motion.div>
    )}
    <h3 className={styles.projectTitle}>{title}</h3>
    <p className={styles.projectDescription}>{description}</p>
    <div className={styles.technologies}>
      {technologies.map((tech) => (
        <span key={tech} className={styles.techBadge}>{tech}</span>
      ))}
    </div>
    {link && (
      <motion.a
        href={link}
        className={styles.projectLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        View Project
      </motion.a>
    )}
  </motion.div>
);

export default Projects;