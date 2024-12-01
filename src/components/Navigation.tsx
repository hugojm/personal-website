import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import styles from '@/styles/components/Navigation.module.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the menu

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const navMenuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navMenuRef.current &&
        !navMenuRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' }
  ];

  const handleNavItemClick = () => {
    setIsOpen(false);
  };

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

          <div className={styles.desktopMenu}>
            {navItems.map((item) => (
              <Link 
                key={item.href}
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
            ))}
          </div>

          <motion.div 
            className={styles.menuIcon} 
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <FaTimes className={styles.icon} />
            ) : (
              <FaBars className={styles.icon} />
            )}
          </motion.div>

          <AnimatePresence>
            {isOpen && (
              <motion.ul 
                ref={navMenuRef} // Add ref to the navigation menu
                className={`${styles.navMenu} ${styles.navMenuOpen}`}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3 }}
              >
                {navItems.map((item) => (
                  <motion.li 
                    key={item.href}
                    className={styles.navItem}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNavItemClick}
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
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;