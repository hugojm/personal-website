import { motion } from 'framer-motion';
import { TechnologyIcon } from '@/components/ui/TechnologyIcon';
import styles from '@/styles/sections/TechStack.module.css';

import { FC } from 'react';

interface TechStackProps {
  technologies: Array<{ name: string; icon: JSX.Element }>;
}

const TechStack: FC<TechStackProps> = ({ technologies }) => {
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  return (
    <section className={styles.techSection}>
      <motion.div 
        initial="initial"
        animate="animate"
        className="max-w-4xl mx-auto text-center">
        <motion.h2 
          variants={fadeInUp}
          className={styles.sectionTitle}>
          Tech Stack
        </motion.h2>
        
        <motion.div 
          variants={fadeInUp}
          className={styles.techGrid}>
          {technologies.map((tech, index) => (
            <TechnologyIcon key={index} tech={tech} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechStack;