import React from 'react';
import { Link } from 'react-router-dom';
import { useFadeInUp } from '../../hooks/useGSAPScrollAnimation';
import styles from './Services.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link, index }) => {
  // Stagger animation based on index
  const cardRef = useFadeInUp(index * 100);
  
  return (
    <div ref={cardRef.ref} className={styles.serviceCard}>
      <div className={styles.iconContainer}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p className={styles.serviceDescription}>{description}</p>
      <Link to={link} className={styles.learnMore}>
        Learn More →
      </Link>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'AI & ML Services',
      description: 'Transform your business with our cutting-edge AI and machine learning solutions.',
      icon: '🤖',
      link: '/services/ai-ml',
    },
    {
      title: 'Cloud Consulting',
      description: 'Expert guidance for your cloud migration and optimization strategies.',
      icon: '☁️',
      link: '/services/cloud-consulting',
    },
    {
      title: 'Data Engineering',
      description: 'Build robust data pipelines and infrastructure for your business needs.',
      icon: '📊',
      link: '/services/data-engineering',
    },
    {
      title: 'Web & Mobile Development',
      description: 'Custom web and mobile applications built with the latest technologies.',
      icon: '📱',
      link: '/services/web-mobile',
    },
  ];

  // Animate section header
  const headerRef = useFadeInUp(0);
  const subtitleRef = useFadeInUp(100);
  const ctaRef = useFadeInUp(500);

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 ref={headerRef.ref} className={styles.sectionTitle}>Our Services</h2>
          <p ref={subtitleRef.ref} className={styles.sectionSubtitle}>
            We offer end-to-end technology solutions tailored to your business needs.
          </p>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              index={index}
            />
          ))}
        </div>
        
        <div ref={ctaRef.ref} className={styles.ctaContainer}>
          <Link to="/services" className={styles.viewAllButton}>
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
