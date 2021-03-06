import React from 'react';
import './Commentblock.css';
import Vote from '../Vote/Vote';

const Commentblock = ({ id, heading, body, votes, user }) => {
  return (
    <main className="commentblock">
      <h4 className="commentblock-head flex-center">{heading}</h4>
      <div className="commentblock-vote">
        <Vote start={votes} user={user} comment_id={id} />
      </div>
      <div className="commentblock-body text-block">{body}</div>
    </main>
  );
};

export default Commentblock;
