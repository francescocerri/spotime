import React, { lazy, Suspense } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorBoundary from '../components/ErrorBoundary';

const loadable = (importFunc, { fallback = null } = { fallback: null }) => {
  const LazyComponent = lazy(importFunc);

  return props => (
    <ErrorBoundary>
      <Suspense fallback={fallback || <CircularProgress />}>
        <LazyComponent {...props} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default loadable;
