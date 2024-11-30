import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import TimelineSection from '@/components/TimelineSection';
import MeshBackground from '@/components/MeshBackground';
import styles from '../styles/About.module.css';

const ParticleField = dynamic(() => import('@/components/ParticleField'), { ssr: false });
const Scene3D = dynamic(() => import('@/components/Scene3D'), { ssr: false });

const About = () => {
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
          <h1 className={styles.title}>My Journey</h1>
          <p className={styles.subtitle}>
            Exploring the intersection of AI and Software Engineering
          </p>
        </motion.div>

        <motion.div 
          className={styles.timelineWrapper}
          initial={{ y: 30, opacity: 0 }} // Reduced y offset from 50
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }} // Reduced delay from 0.4
        >
          <TimelineSection />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;