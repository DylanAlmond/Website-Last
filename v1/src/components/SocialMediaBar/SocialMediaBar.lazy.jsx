import { lazy, Suspense } from 'react';

const LazySocialMediaBar = lazy(() => import('./SocialMediaBar'));

const SocialMediaBar = props => (
  <Suspense fallback={null}>
    <LazySocialMediaBar {...props} />
  </Suspense>
);

export default SocialMediaBar;
