import React from 'react';

// import this from your local area
import Pizza from './Pizza.jpg';

export default function Home() {
  return (
    <div className="home-wrapper">
      <img className="home-image" src={Pizza} alt="" />
      <button className="md-button shop-button">Order Pizza!</button>
    </div>
  );
}
