import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my Blog</h1>
        <p className={styles.subtitle}>
          Thoughts, stories & inspiration
        </p>
      </main>
    </div>
  );
};

export default HomePage;