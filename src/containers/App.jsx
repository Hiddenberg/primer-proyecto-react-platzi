import React, {useState, useEffect} from 'react';
import '../assets/styles/App.scss';

import Header from '../components/Header';
import Search from '../components/Search';
import HelloWorld from '../components/HelloWorld';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';



const App = () => {
   const [ videos, setVideos ] = useState([]);
   useEffect(() => {
      fetch('http://localhost:3000/initalState')
         .then(response => response.json())
         .then(data => setVideos(data));
   },[])

   console.log(videos);

   return (<div className="App">
      <Header />
      <Search />

      {videos.mylist?.length > 0 &&
         <Categories title="Mi lista">
            <Carousel>
               <CarouselItem />
            </Carousel>
         </Categories>
      }
      
      
      <Categories title="Tendencias">
         <Carousel>
            {videos.trends?.map(item => 
               <CarouselItem key={item.id} {...item}/>
            )}
         </Carousel>
      </Categories>

      <Categories title="Originales de Platzi video">
         <Carousel>
         {videos.originals?.map(item => 
               <CarouselItem key={item.id} {...item}/>
            )}
         </Carousel>
      </Categories>

      <Footer />
   </div>
   )
}


export default App;