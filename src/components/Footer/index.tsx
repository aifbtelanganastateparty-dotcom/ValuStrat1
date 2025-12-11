import React from 'react';
import { Link } from 'react-router-dom';
import { useFadeInUp, useSlideIn, useStaggeredGSAP } from '../../hooks/useGSAPScrollAnimation';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  // Banner content slides in from left
  const bannerContentRef = useSlideIn('left', 0);
  
  // Banner button slides in from right
  const bannerButtonRef = useSlideIn('right', 200);
  
  // Logo fades in
  const logoRef = useFadeInUp(100);
  
  // Footer grid columns animate with stagger
  const footerGridRef = useStaggeredGSAP({}, 0.1);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Banner Section */}
        <div className={styles.banner}>
          <div className={styles.bannerAbstract}></div>
          <div className={styles.bannerContent}>
            <div className={styles.bannerRow}>
              <div className={styles.bannerCol}>
                <div ref={bannerContentRef.ref} className={styles.bannerContentInner}>
                  <h2 className={styles.bannerTitle}>
                    Book a Free Consultation to Unleash the Full Potential of Digital Transformation
                  </h2>
                </div>
              </div>
              <div className={styles.bannerColRight}>
                <div ref={bannerButtonRef.ref}>
                  <Link
                    to="/contact"
                    className={styles.bannerButton}
                  >
                    Book a Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Grid */}
        <div ref={footerGridRef.ref} className={styles.footerGrid}>
          {/* Company Info */}
          <div className={styles.footerColumn}>
            <Link to="/" className={styles.logoLink}>
              <div ref={logoRef.ref} className={styles.logoPlaceholder}></div>
            </Link>
            <h2 className={styles.companyTitle}>
              Innovation<br />
              <span className={styles.textOrange}>Accelerator</span>
            </h2>
          </div>

          {/* Company Links */}
          <div className={styles.footerColumn}>
            <div className={styles.footerHeading}>Company</div>
            <div className={styles.footerLinks}>
              <Link to="/about" className={styles.footerLink}>About Us</Link>
              <Link to="/how-we-work" className={styles.footerLink}>How We Work</Link>
              <Link to="/public-relations-csr" className={styles.footerLink}>Public Relations & CSR</Link>
              <Link to="/careers" className={styles.footerLink}>Careers</Link>
              <Link to="/privacy-policy" className={styles.footerLink}>Privacy Policy</Link>
              <Link to="/contact" className={styles.footerLink}>Contact Us</Link>
            </div>
          </div>

          {/* Services Links */}
          <div className={styles.footerColumn}>
            <div className={styles.footerHeading}>Services</div>
            <div className={styles.footerLinks}>
              <Link to="/services/web-mobile" className={styles.footerLink}>Web & Mobile App Development</Link>
              <Link to="/services/data-engineering" className={styles.footerLink}>Data Engineering Services</Link>
              <Link to="/services/cloud-consulting" className={styles.footerLink}>Cloud Consulting Services</Link>
              <Link to="/services/ai-ml" className={styles.footerLink}>AI & ML Services</Link>
              <Link to="/services/quality-assurance" className={styles.footerLink}>Quality Assurance Services</Link>
              <Link to="/services/salesforce" className={styles.footerLink}>Salesforce Consulting Services</Link>
              <Link to="/services/healthtech" className={styles.footerLink}>HealthTech & MedTech Solutions</Link>
              <Link to="/services/servicenow" className={styles.footerLink}>ServiceNow Solutions</Link>
              <Link to="/services/gen-ai" className={styles.footerLink} target="_blank">Gen AI Services</Link>
            </div>
          </div>

          {/* Resources Links */}
          <div className={styles.footerColumn}>
            <div className={styles.footerHeading}>Resources</div>
            <div className={styles.footerLinks}>
              <Link to="/blog" className={styles.footerLink}>Blogs</Link>
              <Link to="/case-studies" className={styles.footerLink}>Case Studies</Link>
              <Link to="/e-book-whitepapers" className={styles.footerLink}>E-Books & Whitepapers</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className={styles.footerColumn}>
            <div className={styles.footerHeading}>Contact Us</div>
            <div className={styles.footerLinks}>
              <Link to="/contact" className={styles.contactFormLink}>
                <span className={styles.iconLeft}>📧</span>
                <span>Enquiry Form</span>
              </Link>
              <a href="mailto:info@valuestrat.com" className={styles.contactFormLink}>
                <span className={styles.iconLeft}>✉️</span>
                <span>info@valuestrat.com</span>
              </a>
            </div>
            <div className={styles.footerCertificates}>
              <div className={styles.certificatePlaceholder}></div>
              <div className={styles.certificatePlaceholder}></div>
              <div className={styles.certificatePlaceholder}></div>
              <div className={styles.certificatePlaceholder}></div>
              <div className={styles.certificatePlaceholder}></div>
              <div className={styles.certificatePlaceholder}></div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <div>© 2025 ValuStrat - All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

