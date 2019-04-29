import React from 'react';
import Articleblock from '../Articleblock/Articleblock';
import Commentblock from '../Commentblock/Commentblock';
import './Itemlist.css';
import { Link } from '@reach/router';

const Itemlist = ({ items, user, topic }) => {
  let headingProp, idProp, Block, listHeading, blocks;

  if (items.length > 0) {
    if (items[0].title) {
      listHeading = 'Articles'
      headingProp = 'title';
      idProp = 'article_id';
      Block = Articleblock;
    } else if (items[0].author) {
      listHeading = 'Comments';
      headingProp = 'author';
      idProp = 'comment_id';
      Block = Commentblock;
    }

    blocks = items.map(item => {
      return (
        <Block
          heading={item[headingProp]}
          id={item[idProp]}
          body={item.body}
          votes={item.votes}
          user={user}
        />
      );
    });
  } else {
    blocks = [];
  }

  return (
    <main class="itemlist">
      <h3 className="itemlist-head flex-center">
        <div>
          {listHeading} - <Link to="post">New Article</Link>
        </div>
      </h3>
      <div className="itemlist-list">{blocks}</div>
    </main>
  );
};

export default Itemlist;
