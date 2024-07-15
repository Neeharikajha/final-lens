
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CardsPage from './pages/CardsPage';
import Page2 from './pages/Page2';
import Page1 from './pages/Page1';


const App = () => {
    return (
        <Router>
            <div>
                <nav>
                 <Link to="/cards">Cards</Link>
                </nav>
                <Routes>
                  
                    <Route path="/cards" element={<CardsPage />} />
                    <Route path="/page1" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="/page3" element={<h1>Paid Version</h1>} />
                    <Route path="/page4" element={<h1>Paid Version</h1>} />

                    <Route path="/" element={<h1>Home Page</h1>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

