import React from 'react';
import '../assets/styles/components/NotFound.scss'

const NotFound = () => (
   <React.Fragment> {/* Usamos fragments para poder encviar varios nodos html sin tener que crearles un div padre */}
      <section class="not-found--container">
         <h1 class="not-found animated infinite pulse delay-2s">404</h1>
         <h2>Page not Found</h2>
      </section>
   </React.Fragment>
);

export default NotFound;