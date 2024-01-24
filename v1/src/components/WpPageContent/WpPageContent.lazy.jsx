import React, { lazy, Suspense } from 'react';

const LazyWpPageContent = lazy(() => import('./WpPageContent'));

const WpPageContent = props => (
  <Suspense fallback={null}>
    <LazyWpPageContent {...props} />
  </Suspense>
);

export default WpPageContent;
