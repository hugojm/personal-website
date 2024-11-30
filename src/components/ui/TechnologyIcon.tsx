import { motion } from 'framer-motion';
import styles from '@/styles/components/TechnologyIcon.module.css';


interface Technology {
  name: string;
  icon: JSX.Element;
}

const technologies: Technology[] = [
  { name: 'React', icon: <i className="devicon-react-original"></i> },
  { name: 'TypeScript', icon: <i className="devicon-typescript-plain"></i> },
  // Add more technologies as needed
];

export default technologies;
interface TechnologyIconProps {
  tech: Technology;
  index: number;
}

export function TechnologyIcon({ tech, index }: TechnologyIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={styles.techIcon}>
      <div className={styles.iconWrapper}>
        {tech.icon}
      </div>
      <p className={styles.techName}>{tech.name}</p>
    </motion.div>
  );
}