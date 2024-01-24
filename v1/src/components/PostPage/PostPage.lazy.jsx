import { lazy, Suspense } from 'react';

const LazyPostPage = lazy(() => import('./PostPage'));

const PostPage = props => (
  <Suspense fallback={null}>
    <LazyPostPage {...props} />
  </Suspense>
);

export default PostPage;
