import React from 'react';
import Articleblock from '../Articleblock/Articleblock';
import Commentblock from '../Commentblock/Commentblock';
import './Itemlist.css';

const Itemlist = ({ items }) => {
  let headingProp, idProp, Block, listHeading;
  if (items[0].hasOwnProperty('title')) {
    listHeading = 'Articles';
    headingProp = 'title';
    idProp = 'article_id'
    Block = Articleblock;
  } else if (items[0].hasOwnProperty('author')) {
    listHeading = 'Comments';
    headingProp = 'author';
    idProp = 'comment_id'
    Block = Commentblock;
  }

  const blocks = items.map(item => {
    return (
      <Block heading={item[headingProp]} id={item[idProp]} body={item.body} votes={item.votes} />
    );
  });

  return (
    <main class="item-list">
      <h3 className="list-heading">{listHeading}</h3>
      <div className="scroll-list">{blocks}</div>
    </main>
  );
};

export default Itemlist;
