import React from 'react'
import Header from '../components/Header/Header';
import Allplants from '../components/allPlants/Allplants';

import Footer from '../components/footer/Footer';
import Navbar from "../components/Navbar/Navbar"

const Main = () => {
  return (
    <div className='main'>
        <Navbar/>
        <Header/>
        <Allplants/>
        
        <Footer/>
    </div> 
  )
}

export default Main;