import React from 'react';
import '../assets/style/components/NotFound.scss';

const NotFound = () => (
  <section className="error">
    <div className="error__container">
      <h2 className="error__container--title text animated hinge">404</h2>
      <p className="error__container--subtitle">Page not found</p>
    </div>
  </section>
);

export default NotFound;
