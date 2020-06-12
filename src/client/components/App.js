import React from 'react';
import './App.css';
import '../../style/styling.css';

import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";


const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App;


