import React from "react";
import './App.css';
import Header from './Header';
import backgroundImage from '../images/background.jpeg';
import HomePageContactCard from './HomePageContactCard';
import Navbar from './Navbar'
import PageIndicator from './PageIndicator'

function App() {
  return (
    <div className="main-container bg-cover v-screen h-screen bg-cyan-50" style={{backgroundImage: `url(${backgroundImage})`}}>
    {/* // <div className="main-container bg-cover v-screen bg-cyan-950"> */}
      <Header/>
      <HomePageContactCard/>
    </div>
  );
}

// bg-cyan-950
export default App;
