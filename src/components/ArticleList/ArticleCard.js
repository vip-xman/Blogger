import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ArticleCard.module.css';

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${article.id}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <article 
      className={styles.card} 
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      tabIndex={0}
      role="button"
      aria-label={`Read article: ${article.title}`}
    >
      {article.coverImage && (
        <div className={styles.imageContainer}>
          <img 
            src={article.coverImage} 
            alt={article.title}
            className={styles.coverImage}
            loading="lazy"
          />
          {article.featured && (
            <div className={styles.featuredBadge}>
              <span>Featured</span>
            </div>
          )}
        </div>
      )}
      
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.date}>{article.publishDate}</span>
          <span className={styles.readTime}>{article.readTime}</span>
        </div>
        
        <h2 className={styles.title}>{article.title}</h2>
        <p className={styles.excerpt}>{article.excerpt}</p>
        
        <div className={styles.footer}>
          <div className={styles.tags}>
            {article.tags.slice(0, 3).map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
            {article.tags.length > 3 && (
              <span className={styles.tagMore}>+{article.tags.length - 3}</span>
            )}
          </div>
          
          <div className={styles.author}>
            <span>by {article.author}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;