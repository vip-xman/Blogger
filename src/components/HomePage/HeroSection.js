import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = ({ onScrollDown }) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to my Blog</h1>
          <p className={styles.subtitle}>
            Thoughts, stories & inspiration
          </p>
          <button className={styles.scrollButton} onClick={onScrollDown}>
            <span>Explore Articles</span>
            <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none">
              <path
                d="M12 16L8 12H16L12 16Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </main>
      </div>
    </section>
  );
};

export default HeroSection;