import React, { lazy, Suspense } from 'react';

const LazyWpPage = lazy(() => import('./WpPage'));

const WpPage = props => (
  <Suspense fallback={null}>
    <LazyWpPage {...props} />
  </Suspense>
);

export default WpPage;
