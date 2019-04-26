import React from 'react';
import './Articleblock.css';
import Vote from '../../../Vote/Vote';
import { Link } from '@reach/router';

const Articleblock = ({ id, heading, body, votes }) => {
  return (
    <main className="articleblock">
      <Link to={`articles/${id}`}>
        <h4 className="articleblock-head">{heading}</h4>
      </Link>
      <div className="articleblock-vote">
        <Vote start={votes} />
      </div>
      <div className="articleblock-body">{body}</div>
    </main>
  );
};

export default Articleblock;
