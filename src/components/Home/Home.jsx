import React from 'react';
import './Home.css';
import { Link } from '@reach/router';

const Home = props => {
  return (
    <main className="home">
      <Link to="/">
        <img
          src="https://freeiconshop.com/wp-content/uploads/edd/home-outline.png"
          alt="Home logo"
        />
      </Link>
    </main>
  );
};

export default Home;
