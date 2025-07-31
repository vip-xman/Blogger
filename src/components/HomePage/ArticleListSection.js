import React, { forwardRef } from 'react';
import ArticleCard from '../ArticleList/ArticleCard';
import { articles } from '../../data/articles';
import styles from './ArticleListSection.module.css';

const ArticleListSection = forwardRef((props, ref) => {
  return (
    <section className={styles.articleSection} ref={ref}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Latest Articles</h2>
          <p className={styles.sectionDescription}>
            Discover insights, tutorials, and thoughts on modern web development
          </p>
        </div>
        
        <div className={styles.articlesGrid}>
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        
        {articles.length === 0 && (
          <div className={styles.emptyState}>
            <p>No articles available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
});

ArticleListSection.displayName = 'ArticleListSection';

export default ArticleListSection;