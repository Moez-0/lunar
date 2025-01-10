import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import DocumentationPage from './components/Docs'
import DownloadsPage from './components/Downloands'


import Footer from './components/Header'
import ContactPage from './components/Contact'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <DocumentationPage />
      <DownloadsPage />
      <ContactPage />
      <Footer />
    </>
  )
}

export default App
