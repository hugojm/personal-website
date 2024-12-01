import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import styles from '../styles/Contact.module.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi'; // Import send icon

const ParticleField = dynamic(() => import('@/components/ParticleField'), { ssr: false });
const MeshBackground = dynamic(() => import('@/components/MeshBackground'), { ssr: false });
const Scene3D = dynamic(() => import('@/components/Scene3D'), { ssr: false });

const Contact = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // New state for submission
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for success message

  const sendMessage = async (formData: { name: string; email: string; message: string }) => {
    // Replace with your actual form submission logic, e.g., API call

    // Simulate a delay for the form submission
    console.log('Sending message:', formData);
    return new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async operation
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your actual form submission logic, e.g., API call
      await sendMessage(formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); // Clear form fields
    } catch (error) {
      console.error('Form submission error:', error);
      // Optionally, set an error state here to display an error message
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
          <h1 className={styles.title}>Get in Touch</h1>
          <p className={styles.subtitle}>
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </motion.div>

        <motion.div
          className={styles.contactWrapper}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className={styles.contactInfo}>
            <p className={styles.contactHeading}>You can reach me at:</p>
            <div className={styles.contactMethods}>
              <a href="mailto:hello@hugo-jimenez.com" className={styles.contactMethod}>
                <FaEnvelope className={styles.icon} aria-hidden="true" />
                <span>Email</span>
              </a>
              <a href="https://github.com/hugojm" target="_blank" rel="noopener noreferrer" className={styles.contactMethod}>
                <FaGithub className={styles.icon} aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/huugojimenez" target="_blank" rel="noopener noreferrer" className={styles.contactMethod}>
                <FaLinkedin className={styles.icon} aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit} aria-label="Contact Form">
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
              ></textarea>
            </div>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
            >
              <FiSend className={styles.sendIcon} aria-hidden="true" /> Send Message
            </button>
            {isSubmitted && (
              <p className={styles.successMessage} role="status">
                Thank you! Your message has been sent successfully.
              </p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};




export default Contact;