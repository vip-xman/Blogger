import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoadingSpinner from './components/common/LoadingSpinner';
import NotFound from './components/common/NotFound';

// 懒加载文章详情页以优化性能
const ArticleDetail = lazy(() => import('./components/ArticleDetail'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<LoadingSpinner message="Loading page..." />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
