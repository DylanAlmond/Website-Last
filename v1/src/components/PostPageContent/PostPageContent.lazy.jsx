import { lazy, Suspense } from 'react';

const LazyPostPageContent = lazy(() => import('./PostPageContent'));

const PostPageContent = props => (
  <Suspense fallback={null}>
    <LazyPostPageContent {...props} />
  </Suspense>
);

export default PostPageContent;
