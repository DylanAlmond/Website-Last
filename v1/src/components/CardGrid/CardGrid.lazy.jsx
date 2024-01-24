import React, { lazy, Suspense } from 'react';

const LazyCardGrid = lazy(() => import('./CardGrid'));

const CardGrid = props => (
  <Suspense fallback={null}>
    <LazyCardGrid {...props} />
  </Suspense>
);

export default CardGrid;
