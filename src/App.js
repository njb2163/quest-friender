import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import './QuestDetails'
import Header from './Header';
import Footer from './Footer';
import Personality from './Personality';
import QuestDetails from './QuestDetails';

function App() {
  return (
    <Router>
    <html>
      <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="App.css" />
      </head>
      <body>
        <div className="iphone-pro">
          <div className="div">
            <Header />
              <Routes>
                <Route path="/" element={<Personality />} />
                <Route path="/questDetails" element={<QuestDetails />} />
              </Routes>
            <Footer />
          </div>
        </div>
      </body>
    </html>
    </Router>

  );
}

export default App;
