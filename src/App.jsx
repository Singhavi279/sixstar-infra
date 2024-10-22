import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import Home from './components/Home'
import AOS from 'aos'
import { AboutUs } from './components/AboutUs'
import { OurClients } from './components/OurClients'
import { FeatureCard } from './components/FeatureCard'
import { ContactUs } from './components/ContactUs'
import FancyContent from './components/FancyContent'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useEffect(() => {
    AOS.init({

    });
  }, []);
  return (
    <>
      <ToastContainer
      />
      <Home id="home" />
      <FancyContent id="fancyContent" />
      <AboutUs id="aboutUs" />
      {/* <FeatureCard id="featureCard" /> */}
      <OurClients id="ourClients" />
      <ContactUs id="contactus" />
    </>
  )
}

export default App
