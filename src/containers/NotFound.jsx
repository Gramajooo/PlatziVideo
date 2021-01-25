import React from 'react';
import '../assets/style/components/NotFound.scss';

const NotFound = () => (
  <section class="error">
    <div class="error__container">
      <h2 class="error__container--title text animated hinge">404</h2>
      <p class="error__container--subtitle">Page not found</p>
    </div>
  </section>
);

export default NotFound;
