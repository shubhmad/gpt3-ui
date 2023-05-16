import React from 'react'
import {Navbar,Brand,CTA} from './components'
import {Footer,Blog,Possibility,Features,whatGPT3,Header} from './containers'
import WhatGPT3 from './containers/whatGPT3/WhatGPT3'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar  />
        <Header  />
      </div>
      <Brand  />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
        </div>
  )
}

export default App