/* COMPONENTE CREADO SOLO PARA TEST */
import React from 'react';

const vib = () => navigator.vibrate([200,10,200,10,500])

const Vibrate = () => {

   return (
      <button className="vibutton" type="button" onClick={vib}>Vibrar</button>
   )
}

export default Vibrate;