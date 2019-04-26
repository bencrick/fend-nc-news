import React from 'react';
import './Commentblock.css';
import Vote from '../../../Vote/Vote';

const Commentblock = ({ heading, body, votes }) => {
  return (
    <main className="commentblock">
      <h4 className="commentblock-head">{heading}</h4>
      <div className="commentblock-vote">
        <Vote start={votes} />
      </div>
      <div className="commentblock-body">{body}</div>
    </main>
  );
};

export default Commentblock;
