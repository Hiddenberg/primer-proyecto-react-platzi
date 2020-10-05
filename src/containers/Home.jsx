import React, {useState, useEffect} from 'react';
import '../assets/styles/App.scss';

import Header from '../components/Header';
import Search from '../components/Search';
import HelloWorld from '../components/HelloWorld';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState'

const API = 'http://localhost:3000/initalState'

const Home = () => {

   const initialState = useInitialState(API)

   return (
   <React.Fragment> {/* aqui como ya estamos usando la clase app desde un nivel mas arriba, convertiremos esta parte en un fragmento */}
      <Search />

      {initialState.mylist?.length > 0 &&
         <Categories title="Mi lista">
            <Carousel>
               {initialState.mylist?.map(item => 
                  <CarouselItem key={item.id} {...item}/>
               )}
            </Carousel>
         </Categories>
      }
      
      
      <Categories title="Tendencias">
         <Carousel>
            {initialState.trends?.map(item => 
               <CarouselItem key={item.id} {...item}/>
            )}
         </Carousel>
      </Categories>

      <Categories title="Originales de Platzi video">
         <Carousel>
         {initialState.originals?.map(item => 
               <CarouselItem key={item.id} {...item}/>
         )}
         </Carousel>
      </Categories>
   </React.Fragment>
   )
}


export default Home;