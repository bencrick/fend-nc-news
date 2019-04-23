import React from 'react';
import './Nav.css';
import { Link } from '@reach/router';

const Nav = () => {
  return (
    <main className="nav">
      <table align="center" className="nav-menu">
        <thead>
          <tr>
            <th>MENU</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/topics">TOPICS</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/articles">ARTICLES</Link>
            </td>
          </tr>
        </tbody>
      </table>
      <table align="center" className="nav-list">
        <thead>
          <tr>
            <th colSpan="2">TOPICS/ARTICLES</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/topics">topic/article 1</Link>
            </td>
            <td>votes1</td>
          </tr>
          <tr>
            <td>
              <Link to="/articles">topic/article 2</Link>
            </td>
            <td>votes2</td>
          </tr>
          <tr>
            <td>
              <Link to="/articles">topic/article 3</Link>
            </td>
            <td>votes3</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Nav;
