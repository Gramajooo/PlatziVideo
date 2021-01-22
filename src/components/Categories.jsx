import React from 'react';
import '../assets/style/components/Categories.scss';

const Categories = ({ children }) => (
  <div>
    <h2 className="categories__title">Mi lista</h2>
    {children}
  </div>
);

export default Categories;
