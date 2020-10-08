import React, {useState, useEffect, useLayoutEffect} from 'react';
import '../assets/styles/App.scss';

import Header from '../components/Header';
import Search from '../components/Search';
import HelloWorld from '../components/HelloWorld';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';



const App = () => {
   const EN_CARTELERA = 'https://api.themoviedb.org/3/movie/now_playing?api_key=b89fc45c2067cbd33560270639722eae&language=en-US&page=2';
   const UPCOMIN_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=b89fc45c2067cbd33560270639722eae&language=en-US&page=6';
   const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=30&api_key=b89fc45c2067cbd33560270639722eae';
   let pages = []
   
   const [ videos, setVideos ] = useState([]);

   function fetchD() {
      let promiseList = []
      for (let i = 1; i <= 10; i++) {
         let JSONpromise = fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${i}&api_key=b89fc45c2067cbd33560270639722eae`)
         .then(response => response.json());
         promiseList.push(JSONpromise)
      }
      Promise.all(promiseList).then(prom => setVideos(prom))
   }
   useEffect(fetchD,[])


   return (

      <div className="App">
         <Header />
         <Search />
         
         {console.log(videos)}
         {videos.length > 0 &&
            videos.map(data => (
               <Categories key={data.page} title={"pagina" + data.page}>
                  <Carousel>
                     {data.results?.map(item => 
                        <CarouselItem key={item.id} {...item}/>
                     )}
                  </Carousel>
               </Categories>
            ))
         }

         <Footer />
      </div>
   )
}


export default App;