import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import { MainContent } from './components/MainContent'
import { Partners } from './components/Partners'
import { RelatedProducts } from './components/RelatedProducts'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <MainContent />
      <Partners />
      <RelatedProducts />
      <Footer />
    </div>
  )
}

export default App
