import React, { useState, useEffect } from 'react';

// 👉 STEP 2 - React Router imports (Route, Link and Switch)
import { Route, Link, Switch } from 'react-router-dom';
// Components used for the different routes

// import App.css
import './App.css';

// import the form
import Form from './Form.js';
// import the home component
import Home from './Home.js';

const App = () => {
  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Lambda Eats</h1>
        <div className="nav-links">
          {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Help (`/help`) */}

          <Link to="/">Home</Link>
          <Link id="order-pizza" to="/pizza">
            Order
          </Link>
        </div>
      </nav>

      {/* we need to show the form down here */}
      {/* 👉 STEP 4 - Build a Switch with a Route for each of the components imported at the top */}
      <Switch>
        <Route path="/pizza">
          <Form></Form>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
