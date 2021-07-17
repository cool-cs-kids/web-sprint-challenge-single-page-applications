import React, { useState, useEffect } from 'react';

// 👉 STEP 2 - React Router imports (Route, Link and Switch)
import { Route, Link, Switch } from 'react-router-dom';
// Components used for the different routes

// import App.css
import './App.css';

const App = () => {
  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Lambda Eats</h1>
        <div className="nav-links">
          {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`/items-list`) */}

          <Link to="/">Home</Link>
          <Link to="/help">Help</Link>
        </div>
      </nav>
    </div>
  );
};
export default App;
