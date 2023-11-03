import React, { lazy, Suspense } from 'react';
import { makeLocalStorageAdapter } from '../cache/make-cache-factory';

const OrderPage = lazy(() => import('@/presentation/pages/OrderConfirm'));

const makeOrder = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderPage cache={makeLocalStorageAdapter()}/>
    </Suspense>
  );
};

export default makeOrder;