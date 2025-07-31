import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getArticleById } from '../../data/articles';
import LoadingSpinner from '../common/LoadingSpinner';
import styles from './ArticleDetail.module.css';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟异步加载
    const timer = setTimeout(() => {
      const foundArticle = getArticleById(id);
      setArticle(foundArticle);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    // 设置页面标题
    if (article) {
      document.title = `${article.title} | My Blog`;
    }
    
    return () => {
      document.title = 'My Blog';
    };
  }, [article]);

  const handleBackClick = () => {
    navigate('/');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleBackClick();
    }
  };

  if (loading) {
    return <LoadingSpinner message="Loading article..." />;
  }

  if (!article) {
    return (
      <div className={styles.notFound}>
        <h1>Article Not Found</h1>
        <p>The article you're looking for doesn't exist.</p>
        <button className={styles.backButton} onClick={handleBackClick}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className={styles.articleDetail}>
      {/* Navigation Header */}
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <button 
            className={styles.backButton}
            onClick={handleBackClick}
            onKeyPress={handleKeyPress}
            aria-label="Back to home"
          >
            <svg className={styles.backIcon} viewBox="0 0 24 24" fill="none">
              <path
                d="M19 12H5M12 19L5 12L12 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Blog
          </button>
        </nav>
      </header>

      {/* Article Content */}
      <article className={styles.article}>
        {/* Article Header */}
        <div className={styles.articleHeader}>
          {article.coverImage && (
            <div className={styles.coverImageContainer}>
              <img
                src={article.coverImage}
                alt={article.title}
                className={styles.coverImage}
              />
            </div>
          )}
          
          <div className={styles.articleMeta}>
            <div className={styles.tags}>
              {article.tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            
            <h1 className={styles.title}>{article.title}</h1>
            
            <div className={styles.metadata}>
              <span className={styles.author}>by {article.author}</span>
              <span className={styles.separator}>•</span>
              <span className={styles.date}>{article.publishDate}</span>
              <span className={styles.separator}>•</span>
              <span className={styles.readTime}>{article.readTime}</span>
            </div>
            
            {article.excerpt && (
              <p className={styles.excerpt}>{article.excerpt}</p>
            )}
          </div>
        </div>

        {/* Article Body */}
        <div className={styles.articleBody}>
          <div className={styles.content}>
            {article.content.split('\n').map((paragraph, index) => {
              if (paragraph.trim() === '') return null;
              
              // 处理标题
              if (paragraph.startsWith('# ')) {
                return (
                  <h1 key={index} className={styles.contentH1}>
                    {paragraph.replace('# ', '')}
                  </h1>
                );
              }
              
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className={styles.contentH2}>
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className={styles.contentH3}>
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              
              // 处理代码块
              if (paragraph.startsWith('```')) {
                return (
                  <pre key={index} className={styles.codeBlock}>
                    <code>{paragraph.replace(/```\w*\n?/, '').replace(/```$/, '')}</code>
                  </pre>
                );
              }
              
              // 处理行内代码
              const processInlineCode = (text) => {
                return text.split(/(`[^`]+`)/).map((part, i) => {
                  if (part.match(/^`[^`]+`$/)) {
                    return (
                      <code key={i} className={styles.inlineCode}>
                        {part.slice(1, -1)}
                      </code>
                    );
                  }
                  return part;
                });
              };
              
              // 普通段落
              return (
                <p key={index} className={styles.paragraph}>
                  {processInlineCode(paragraph)}
                </p>
              );
            })}
          </div>
        </div>

        {/* Article Footer */}
        <footer className={styles.articleFooter}>
          <div className={styles.footerTags}>
            <h3>Tags:</h3>
            <div className={styles.tagList}>
              {article.tags.map(tag => (
                <span key={tag} className={styles.footerTag}>{tag}</span>
              ))}
            </div>
          </div>
          
          <button 
            className={styles.backToTopButton}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to Top
          </button>
        </footer>
      </article>
    </div>
  );
};

export default ArticleDetail;