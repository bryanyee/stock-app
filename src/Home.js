import { Link } from "react-router-dom";

import styles from './Home.module.css';

function Home() {
  return (
    <div>
      <h2>Welcome to the Stock App!</h2>
      <Link to="login" className={styles.link}>Login</Link>
      <Link to="stocks" className={styles.link}>Stocks</Link>
    </div>
  )
}

export default Home;
