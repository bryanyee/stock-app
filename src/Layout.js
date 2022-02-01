import { Outlet } from 'react-router-dom';

import './Layout.css'

function Layout() {
  return (
    <div className="wrapper">
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
