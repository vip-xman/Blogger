import React, { useRef } from 'react';
import HeroSection from './HeroSection';
import ArticleListSection from './ArticleListSection';
import ScrollIndicator from '../common/ScrollIndicator';
import styles from './HomePage.module.css';

const HomePage = () => {
  const articleListRef = useRef(null);

  const scrollToArticles = () => {
    articleListRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className={styles.homePage}>
      <HeroSection onScrollDown={scrollToArticles} />
      <ArticleListSection ref={articleListRef} />
      <ScrollIndicator />
    </div>
  );
};

export default HomePage;