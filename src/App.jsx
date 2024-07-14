import React from 'react'

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

import data from "./assets/data"

function App() {

  return(
    <React.Fragment>
      <Navbar />
      <div className="container">
        <Hero/>
        <div className="row experiences-wrapper">
          {data.map(experience => 
            <Card
              key={experience.id} 
              experience={experience} 
            />
          )}
        </div>
      </div>
    </React.Fragment>
  )  
}

export default App
