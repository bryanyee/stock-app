import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Layout from './Layout';
import Login from './Login';

const StockIndex = lazy(() => import('../stocks/components/StockIndex'));
const StockDetails = lazy(() => import('../stocks/components/StockDetails'));

function AppRoutes() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default AppRoutes;
