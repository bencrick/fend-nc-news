import React from 'react';
import './Topiccontent.css';
import Subitem from './Subitem/Subitem';

// select article-specific comments
const Topiccontent = ({ articles }) => {
  const topic = this.props.params.topic
  const heading = `${topic} Articles`;
  const subItems = articles.filter(a => a.topic === topic)
  const subElements = subItems.map(subItem => {
    return (
      <Subitem
        id={subItem.article_id}
        heading={subItem.title}
        body={subItem.body}
        votes={subItem.votes}
      />
    );
  });
  return (
    <main className="topiccontent">
      <h3 className="topiccont-head flex-center">{heading}</h3>
      <div className="topiccont-list">{subElements}</div>
    </main>
  );
};

export default Topiccontent;
