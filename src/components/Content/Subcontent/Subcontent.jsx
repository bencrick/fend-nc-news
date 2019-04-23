import React from 'react';
import './Subcontent.css';
import Subitem from './Subitem/Subitem';

const Subcontent = () => {
  return (
    <main className="subcontent">
      <h2 className="subcont-head">Subcontent Header</h2>
      <Subitem />
      <Subitem />
      <Subitem />
    </main>
  );
};

export default Subcontent;
