import { motion, useTransform, useMotionValue } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import MeshBackground from '@/components/MeshBackground';

const Scene3D = dynamic(() => import('@/components/Scene3D'), { ssr: false });
const ParticleField = dynamic(() => import('@/components/ParticleField'), { ssr: false });

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      window.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

const useMousePosition = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return { mouseX, mouseY };
};

const ProfileSection = () => (
  <motion.section 
    className={styles.ProfileSection}
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
          src="/images/hugo-jimenez.png"
          alt="Hugo Jimenez"
          width={200}
          height={200}
          className={styles.avatar}
          priority
          onError={(e) => {
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
);

const HeroSection = ({ heroRotateX, heroRotateY }: { heroRotateX: any, heroRotateY: any }) => (
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
);

export default function Home() {
  const { mouseX, mouseY } = useMousePosition();
  const windowSize = useWindowSize();
  
  const heroRotateX = useTransform(mouseY, [0, windowSize.height], [5, -5]);
  const heroRotateY = useTransform(mouseX, [0, windowSize.width], [-5, 5]);

  return (
    <div className={styles.container}>
      <ParticleField mousePosition={{ x: mouseX.get(), y: mouseY.get() }} />
      <Scene3D />
      <MeshBackground />

      
      {/* <motion.div className={styles.backgroundEffect} style={{ y: backgroundY }}>
        <Scene3D />
      </motion.div> */}

      <motion.div 
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ProfileSection />
        <HeroSection heroRotateX={heroRotateX} heroRotateY={heroRotateY} />
        {/* <motion.section className={styles.techSection}>
          <div className={styles.techSphere}>
            <Scene3D />
          </div>
        </motion.section> */}
      </motion.div>
    </div>
  );
}
