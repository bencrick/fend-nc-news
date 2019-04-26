import React from 'react';
import './Subitem.css';
import Vote from '../../../../Vote/Vote';

const Subitem = ({ id, heading, body, votes }) => {
  return (
    <main className="subitem">
      <h4 className="subitem-head flex-center">{heading}</h4>
      <div className="subitem-vote flex-center">
        <Vote start={votes} />
      </div>
      <div className="subitem-body text-block">{body}</div>
    </main>
  );
};

export default Subitem;
