import React from 'react'

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

import data from "./assets/data"

function App() {
  
  const experiences = data.map(experience => {
    return(
      <Card
        key={experience.id}
        img={experience.coverImg}
        rating={experience.stats.rating}
        reviews={experience.stats.reviewCount}
        location={experience.location}
        title={experience.title}
        price={experience.price}
        available={experience.openSpots}
      />
    );
  }); 

  return(
    <React.Fragment>
      <Navbar />
      <div className="container">
        <Hero/>
        <div className="row experiences-wrapper">
          {experiences}
        </div>
      </div>
    </React.Fragment>
  )  
}

export default App
