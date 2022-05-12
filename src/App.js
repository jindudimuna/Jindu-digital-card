import React from 'react';
import './App.css';
import Profile from './Profile';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';
import 'tachyons';

function App() {
  return (
    <div className='tc'>
      <div className='card'>
       <Profile />
        <About />
        <Interests  />
        <Footer />

      </div>
      </div>
  );
}

export default App;
