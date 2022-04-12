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
      <div className='tc bg-black dib br3 mw6 ma2 grow bw2 shadow-5 pa5-ns'>
       <Profile />
        <About />
        <Interests  />
        <Footer />

      </div>
      </div>
  );
}

export default App;
