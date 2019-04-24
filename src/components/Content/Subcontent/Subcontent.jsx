import React from 'react';
import './Subcontent.css';
import Subitem from './Subitem/Subitem';
import capitalise from '../../../utils/capitalise';

// select article-specific comments
const Subcontent = ({ subItems, path }) => {
  let subHeading, headProp;
  let item = true;
  if (path.includes('articles/?topic=')) {
    subHeading = 'Articles';
    headProp = 'title';
  } else if (/^articles\/\d+$/.test(path)) {
    subHeading = 'Comments';
    headProp = 'author';
  } else {
    item = false;
  }
  const subElements = subItems.map(subItem => {
    return (
      <Subitem
        heading={item ? subItem[headProp] : ''}
        body={item ? subItem.body : ''}
        votes={item ? subItem.votes : ''}
      />
    );
  });
  return (
    <main className="subcontent">
      <h3 className="subcont-head flex-center">{subHeading}</h3>
      <div className="subcont-list">{subElements}</div>
    </main>
  );
};

export default Subcontent;
