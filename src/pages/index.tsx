import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

const Scene3D = dynamic(() => import('@/components/Scene3D'), { ssr: false });
const ParticleField = dynamic(() => import('@/components/ParticleField'), { ssr: false });

export default function Home() {
  const { scrollYProgress } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  useEffect(() => {
    // Initialize window size
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Only render motion effects when window size is available
  const heroRotateX = useTransform(mouseY, [0, windowSize.height], [5, -5]);
  const heroRotateY = useTransform(mouseX, [0, windowSize.width], [-5, 5]);

  return (
    <div className={styles.container}>
      <ParticleField mousePosition={{ x: mouseX.get(), y: mouseY.get() }} />
      <div className={styles.cursor} style={{ 
        left: mouseX.get(), 
        top: mouseY.get() 
      }} />
      
      <motion.div className={styles.backgroundEffect} style={{ y: backgroundY }}>
        <Scene3D />
      </motion.div>

      <motion.div 
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.section 
          className={styles.profileSection}
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.profileContent}>
            <motion.div 
              className={styles.profileImage}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/hugo-jimenez.png" // Updated path to use public directory
                alt="Hugo Jimenez"
                width={200}
                height={200}
                className={styles.avatar}
                priority // Add priority for above-the-fold image
                onError={(e) => {
                  // Fallback to a default image if main image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/default-avatar.png';
                }}
              />
            </motion.div>
            
            <motion.div 
              className={styles.profileText}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className={styles.title}>
                Hi, I&apos;m Hugo Jimenez
              </h1>
              <p className={styles.bio}>
                I&apos;m a Machine Learning Engineer passionate about transforming complex 
                data into intelligent solutions. Specializing in AI and deep learning, 
                I build systems that make a difference.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          className={styles.heroSection}
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          <motion.div 
            className={styles.heroContent}
            style={{
              rotateX: heroRotateX,
              rotateY: heroRotateY,
            }}
          >
            <h1 className={styles.title}>
              Transforming Ideas into
              <span className={styles.highlight}>
                Intelligent Solutions
              </span>
            </h1>
            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Building the future with AI & Machine Learning
            </motion.p>

            <motion.div
              className={styles.actionButtons}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="/about"
                className={`${styles.button} ${styles.primary}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Experience
              </motion.a>
              <motion.a
                href="/projects"
                className={`${styles.button} ${styles.secondary}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Projects
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section className={styles.techSection}>
          <div className={styles.techSphere}>
            <Scene3D />
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
