import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from '../styles/Contact.module.css';

const ParticleField = dynamic(() => import('@/components/ParticleField'), { ssr: false });
const MeshBackground = dynamic(() => import('@/components/MeshBackground'), { ssr: false });

const Contact = () => {
  return (
    <div className={styles.container}>
      <ParticleField mousePosition={{ x: 0, y: 0 }} />
      <MeshBackground />

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className={styles.pageTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Let's Connect
        </motion.h1>

        <motion.div 
          className={styles.contactWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.contactMethods}>
            <motion.a
              href="mailto:hello@hugo-jimenez.com"
              className={styles.contactMethod}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaEnvelope className={styles.icon} />
              <span>hello@hugo-jimenez.com</span>
            </motion.a>
            <motion.a
              href="https://github.com/hugojm"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactMethod}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaGithub className={styles.icon} />
              <span>github.com/hugojm</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/huugojimenez"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.contactMethod} ${styles.linkedinMethod}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaLinkedin className={styles.icon} />
              <span>Hugo Jiménez</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;