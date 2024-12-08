import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import styles from '../styles/Contact.module.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi'; // Import send icon

const ParticleField = dynamic(() => import('@/components/ParticleField'), { ssr: false });
const MeshBackground = dynamic(() => import('@/components/MeshBackground'), { ssr: false });

const Contact = () => {

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
          Get in Touch
        </motion.h1>

        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <div className={styles.contactMethods}>
              <a href="mailto:hello@hugo-jimenez.com" className={styles.contactMethod}>
                <FaEnvelope className={styles.icon} />
                <span>hello@hugo-jimenez.com</span>
              </a>
              <a href="https://github.com/hugojm" target="_blank" rel="noopener noreferrer" className={styles.contactMethod}>
                <FaGithub className={styles.icon} />
                <span>github.com/hugojm</span>
              </a>
              <a href="https://www.linkedin.com/in/huugojimenez" target="_blank" rel="noopener noreferrer" className={styles.contactMethod}>
                <FaLinkedin className={styles.icon} />
                <span>linkedin.com/in/huugojimenez</span>
              </a>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
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
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <FiSend className={styles.sendIcon} />
            </button>
            {isSubmitted && (
              <motion.p 
                className={styles.successMessage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Message sent successfully!
              </motion.p>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;