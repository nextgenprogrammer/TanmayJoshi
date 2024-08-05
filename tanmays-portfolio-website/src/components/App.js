import React from "react";
import './App.css';
import Header from './Header';
import backgroundImage from '../images/background.jpeg';
import HomePageContactCard from './HomePageContactCard';
import PageIndicator from './PageIndicator'
import Navbar from './Navbar'

function App() {
  return (
      // <div className="main-container bg-cover v-screen h-screen bg-cyan-50 grid grid-cols-4 auto-rows-[300px] gap-4" style={{backgroundImage: `url(${backgroundImage})`}}>
      //   <div class="relative h-100 w-screen flex flex-col">
      //     <div class="border-4 border-zinc-100	"><Header/></div>
      //     <div class="border-4 border-zinc-100	"><HomePageContactCard/></div>
      //     <div class="align-bottom border-4 border-zinc-100	"><PageIndicator/></div>
      //     <div class="items-end right-0 border-4 border-zinc-100	"><Navbar/></div>
      //   </div>  
      // </div>
      // <div class="flex items-stretch ...">
      //   <div class="h-screen border-5"><PageIndicator/></div>
      //   <div class="py-12 border-5">02</div>
      //   <div class="h-screen border-5">03</div>
      // </div>
      <div className="main-container bg-cover v-screen h-screen bg-cyan-50" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="grid grid-cols-3 grid-rows-1 grid-cols-[15%_85%] h-screen w-screen ...">
          <div className="border-2 border-white-100 align-text-bottom"><PageIndicator/></div>
          <div className="grid grid-rows-3 grid-cols-1 grid-rows-[65%_10%]">
            <div className="w-full aspect-video justify-items-center"><Header/></div>
            <div className="w-full aspect-video justify-items-center"><HomePageContactCard/></div>
            <div className="mr-10 mb-5"><Navbar/></div>
          </div>
      </div>
    </div>
  );
}

export default App;
