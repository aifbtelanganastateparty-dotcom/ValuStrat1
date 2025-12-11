import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavbarScroll } from '../../hooks/useGSAPScrollAnimation';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref: navbarRef, isScrolled } = useNavbarScroll(50);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav ref={navbarRef} className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span>ValuStrat</span>
        </Link>
        
        <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <Link to="/services" className={styles.navLink} onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/industries" className={styles.navLink} onClick={() => setIsOpen(false)}>Industries</Link>
          <Link to="/case-studies" className={styles.navLink} onClick={() => setIsOpen(false)}>Case Studies</Link>
          <Link to="/about" className={styles.navLink} onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/blog" className={styles.navLink} onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/careers" className={styles.navLink} onClick={() => setIsOpen(false)}>Careers</Link>
          <Link to="/contact" className={`${styles.contactButton} ${styles.navLink}`} onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
        </div>

        <button 
          className={`${styles.hamburger} ${isOpen ? styles.active : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
