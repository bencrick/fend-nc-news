import React from 'react';
import './Articleblock.css';
import Vote from '../Vote/Vote';
import { Link } from '@reach/router';

const Articleblock = ({ id, heading, body, votes, user }) => {
  return (
    <main className="articleblock">
      <Link to={`/articles/${id}`}>
        <h4 className="articleblock-head flex-center">{heading}</h4>
      </Link>
      <div className="articleblock-vote">
        <Vote start={votes} user={user} article_id={id} />
      </div>
      <div className="articleblock-body text-block">{body}</div>
    </main>
  );
};

export default Articleblock;
