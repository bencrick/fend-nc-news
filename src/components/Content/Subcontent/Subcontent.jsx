import React from 'react';
import './Subcontent.css';
import Subitem from './Subitem/Subitem';

const Subcontent = () => {
  return (
    <main className="subcontent">
      <h2 className="subcont-head flex-center">Subcontent Header</h2>
      <div className="subcont=list">
        <Subitem />
        <Subitem />
        <Subitem />
      </div>
    </main>
  );
};

export default Subcontent;
