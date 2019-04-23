import React from 'react';
import './Nav.css'
import { Link } from '@reach/router';

const Nav = () => {
  return (
    <main className="nav">
      <nav>
        <Link to="/path1">
          <button>path 1</button>
        </Link>
        <Link to="/path2">
          <button>path 2</button>
        </Link>
      </nav>
    </main>
  );
};

export default Nav;
