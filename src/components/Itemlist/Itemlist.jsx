import React from 'react';
import Articleblock from '../Articleblock/Articleblock';
import Commentblock from '../Commentblock/Commentblock';
import './Itemlist.css';
import { Link } from '@reach/router';

const Itemlist = ({ items, user, topic }) => {
  let headingProp, idProp, Block, listHeading, postLink, blocks, fullHeader;

  if (items.length > 0) {
    if (items[0].title) {
      listHeading = 'Articles';
      headingProp = 'title';
      idProp = 'article_id';
      Block = Articleblock;
      postLink = <Link to="post">New Article</Link>;
    } else if (items[0].author) {
      listHeading = 'Comments';
      headingProp = 'author';
      idProp = 'comment_id';
      Block = Commentblock;
      postLink = <Link to="post">New Comment</Link>;
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

  if (topic) {
    fullHeader = (
      <h3>
        {listHeading} - {postLink}
      </h3>
    );
  } else {
    fullHeader = <h3>{listHeading}</h3>;
  }

  return (
    <main class="itemlist">
      <h3 className="itemlist-head flex-center">
        <div>{fullHeader}</div>
      </h3>
      <div className="itemlist-list">{blocks}</div>
    </main>
  );
};

export default Itemlist;
