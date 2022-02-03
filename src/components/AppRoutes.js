import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Layout from './Layout';
import Login from './Login';

import StockIndex from '../stocks/components/StockIndex';
import StockDetails from '../stocks/components/StockDetails';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StockIndex />} />
          <Route path="login" element={<Login />} />
          <Route path="stocks" element={<Outlet />}>
            <Route path=":ticker" element={<StockDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
