import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import '../assets/styles/App.scss';


import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState'


const Home = ({ myList, trends, originals }) => {

   return (
   <React.Fragment> {/* aqui como ya estamos usando la clase app desde un nivel mas arriba, convertiremos esta parte en un fragmento */}
      <Search />

      {myList.length > 0 &&
         <Categories title="Mi lista">
            <Carousel>
               {myList.map(item => 
                  <CarouselItem key={item.id} {...item} isList />
               )}
            </Carousel>
         </Categories>
      }
      
      
      <Categories title="Tendencias">
         <Carousel>
            {trends.map(item => 
               <CarouselItem key={item.id} {...item}/>
            )}
         </Carousel>
      </Categories>

      <Categories title="Originales de Platzi video">
         <Carousel>
         {originals.map(item => 
               <CarouselItem key={item.id} {...item}/>
         )}
         </Carousel>
      </Categories>
   </React.Fragment>
   )
}


const mapStateToProps = state => { /* aqui es importante traer solo los elementos que necesitamos */
   return {
      myList: state.myList,
      trends: state.trends,
      originals: state.originals,
   }
}

export default connect(mapStateToProps, null)(Home);