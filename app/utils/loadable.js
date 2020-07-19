import React, { lazy, Suspense } from 'react';
import Loader from '../components/Loader';
import ErrorBoundary from '../components/ErrorBoundary';

const loadable = (importFunc, { fallback = null } = { fallback: null }) => {
  const LazyComponent = lazy(importFunc);

  return props => (
    <ErrorBoundary>
      <Suspense fallback={fallback || <Loader />}>
        <LazyComponent {...props} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default loadable;
