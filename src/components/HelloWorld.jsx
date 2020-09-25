import React from 'react';
import '../assets/styles/App.scss';

const nums = [3,1,2223,345,57544,5,4556,74545,7,8,54];
const numsListed = nums.map(number => <li key={number.toString()}>{number}</li>);

const imgUrl = 'https://www.hopestandard.com/wp-content/uploads/2020/04/21333414_web1_200420-CRM-earth-day-EARTHDAY_1.jpg'
const HelloWorld = () => (
   <div className="main-container">
      <h1>Hello World 2</h1>

      <div className="img-container">
         <img src={imgUrl} alt=""/>
      </div>


      <ul>
         <li>{nums}</li>
      </ul>

      {numsListed}
   </div>
) /* NOTA IMPORTANTE: estos parentesis retornan codigo html y son una implementacion directametne de react */

export default HelloWorld;