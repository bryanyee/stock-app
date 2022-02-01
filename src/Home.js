import { Link } from "react-router-dom";

import './Home.css';

function Home() {
  return (
    <div>
      <h2>Welcome to the Stock App!</h2>
      <Link to="login" className="link">Login</Link>
      <Link to="stocks" className="link">Stocks</Link>
    </div>
  )
}

export default Home;
