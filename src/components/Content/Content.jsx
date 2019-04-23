import React from 'react';
import './Content.css';
import Subcontent from './Subcontent/Subcontent';

const Content = () => {
  return (
    <main className="content">
      <h2 className="cont-head">Content Header</h2>
      <div className="cont-vote">Content Vote</div>
      <div className="cont-body">Content Body</div>
      <div className="cont-add">Content Add</div>
      <Subcontent />
    </main>
  );
};

export default Content;
