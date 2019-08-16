import React from 'react';
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import KingKongArea from './components/KingKongArea/KingKongArea'
import FunInfo from './components/FunInfo/FunInfo'
import Footer from './components/Footer/Footer'

import './App.css';


function App() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <KingKongArea />
        <FunInfo />
        <Footer />
      </div>
    );
}

export default App;
