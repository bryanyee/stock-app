import { Suspense, lazy } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import Layout from './Layout';
import Login from './Login';

const StockIndex = lazy(() => import('../stocks/components/StockIndex'));
const StockDetails = lazy(() => import('../stocks/components/StockDetails'));

function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StockIndex />} />
          <Route path="login" element={<Login />} />
          <Route path="stocks" element={<Outlet />}>
            <Route path=":ticker" element={<StockDetails />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
