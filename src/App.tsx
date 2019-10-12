import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import './App.css';

function App() {
  const Map = ReactMapboxGl({accessToken: "pk.eyJ1Ijoiam9zaGciLCJhIjoiY2sxbjJpNjcxMDY3aTNjczE5dW12bThrcCJ9.xxHzhOA7f1yO9pGkKscvmA"});
  return (
    <div className="App">
    <div className="BackgroundMapContainer">
      <Map style="mapbox://styles/mapbox/outdoors-v11" className="BackgroundMap">
      </Map>
    </div>
    <div style={{width: '100%', height: '100%'}}>
      <img src='./profile_resized_small.jpg' alt="profile" style={{borderRadius: "50%", width: "200px", maxWidth: "100%", margin: "10px"}}/>
      <h1>Joshua Gore</h1>
      <p>Digital Cartographer</p>
      <p><a href="https://www.linkedin.com/in/joshgore/">LinkedIn</a></p>
    </div>
    </div>
  );
}

export default App;
