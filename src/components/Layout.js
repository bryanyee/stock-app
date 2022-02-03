import { Outlet } from 'react-router-dom';

import styles from './Layout.module.css'

function Layout() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
