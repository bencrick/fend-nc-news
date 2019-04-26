import React from 'react';
import './Allarticlewrapper.css';
import Itemlist from '../Itemlist/Itemlist';

// select article-specific comments
const Allarticlewrapper = props => {
  const { articles } = props;
  return (
    <main className="allarticlewrapper">
        <Itemlist items={articles} />
    </main>
  );
};

export default Allarticlewrapper;
