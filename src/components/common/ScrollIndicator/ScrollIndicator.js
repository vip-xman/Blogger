import React, { useState, useEffect } from 'react';
import styles from './ScrollIndicator.module.css';

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // 简单的分段逻辑：第一页0-50%，第二页50%-100%
      if (scrollPosition < windowHeight * 0.5) {
        setActiveSection(0);
      } else {
        setActiveSection(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionIndex) => {
    const targetY = sectionIndex === 0 ? 0 : window.innerHeight;
    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.scrollIndicator}>
      <button
        className={`${styles.dot} ${activeSection === 0 ? styles.active : ''}`}
        onClick={() => scrollToSection(0)}
        aria-label="Go to hero section"
      />
      <button
        className={`${styles.dot} ${activeSection === 1 ? styles.active : ''}`}
        onClick={() => scrollToSection(1)}
        aria-label="Go to articles section"
      />
    </div>
  );
};

export default ScrollIndicator;