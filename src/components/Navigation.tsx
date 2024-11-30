import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import styles from '@/styles/components/Navigation.module.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <motion.nav 
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.container}>
          <motion.div
            className={styles.logoContainer}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link className={styles.logo} href="/">
              <motion.span
                initial={{ backgroundPosition: '0%' }}
                whileHover={{ backgroundPosition: '100%' }}
                transition={{ duration: 0.8 }}
              >
                hugo-jimenez
              </motion.span>
            </Link>
          </motion.div>

          <motion.div 
            className={styles.menuIcon} 
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {[1, 2, 3].map((bar) => (
              <motion.div
                key={bar}
                className={`${styles[`bar${bar}`]} ${isOpen ? styles[`bar${bar}Open`] : ''}`}
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
              />
            ))}
          </motion.div>

          <ul className={`${styles.navMenu} ${isOpen ? styles.navMenuOpen : ''}`}>
            {navItems.map((item) => (
              <motion.li 
                key={item.href}
                className={styles.navItem}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  className={`${styles.navLink} ${
                    router.pathname === item.href ? styles.active : ''
                  }`}
                  href={item.href}
                >
                  {item.label}
                  {router.pathname === item.href && (
                    <motion.div 
                      className={styles.activeIndicator}
                      layoutId="activeIndicator"
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;