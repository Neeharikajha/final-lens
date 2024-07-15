import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import GroupComponent from './components/GroupComponent';
import Categories from './components/Categories';
import Bottomnav from './components/Bottomnav';
import Game from './components/Game';
import Main from './components/Main';
import HomeCloth from './components/HomeCloth';
import Trendingnow from './components/Trendingnow';
// import TinderCard from './components/TinderCard'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Main/>
              <GroupComponent />
              <Categories />
              <Trendingnow/>
              <HomeCloth/>
              <Bottomnav />
            </>
          } />
          <Route path="/game" element={<Game />} />
          {/* <Route path="/tindercard" element={<TinderCard />} /> Add route for TinderCard */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;




