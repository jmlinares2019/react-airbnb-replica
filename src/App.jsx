import React from 'react'

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

function App() {
  return(
    <React.Fragment>
      <Navbar />
      <div className="container">
        <Hero/>
        <div className="row experiences-wrapper">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        
      </div>
    </React.Fragment>
  )  
}

export default App
