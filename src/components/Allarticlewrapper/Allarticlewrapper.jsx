import React from 'react';
import './Allarticlewrapper.css';
import Itemlist from '../Itemlist/Itemlist';

// select article-specific comments
const Allarticlewrapper = props => {
  const { articles, user } = props;
  return (
    <main className="allarticlewrapper">
      <Itemlist items={articles} user={user} />
    </main>
  );
};

export default Allarticlewrapper;
