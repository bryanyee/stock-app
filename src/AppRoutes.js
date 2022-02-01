import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Home from './Home';
import Layout from './Layout';
import Login from './Login';
import StockList from './StockList';
import StockDetails from './StockDetails';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="stocks" element={<Outlet />}>
            <Route index element={<StockList />} />
            <Route path=":ticker" element={<StockDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
