import React, { lazy, Suspense } from 'react';
import { makeLocalStorageAdapter } from '../cache/make-cache-factory';
import { makeToast } from '../toast/make-toast-factory';

const HomePage = lazy(() => import('@/presentation/pages/Home'));

const makeHome = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage 
        cache={makeLocalStorageAdapter()} 
        toast={makeToast()} 
      />
    </Suspense>
  );
};

export default makeHome;