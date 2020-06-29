import React, { Fragment } from 'react'

import Landing from './Landing'


import './styles.css'
import Navbar from './Navbar'
import About from './About'
import Tech from './Tech'

const App = () => {
  return (
    <Fragment>
      <Navbar />

      <div className="content-container">
        <Landing />
        <div id="section2">
          Section 2
        </div>
        <div id="section3">
          Section 2
        </div>
        <About />
        <Tech />
      </div>
      
      

      
    </Fragment>
  )
}

export default App
