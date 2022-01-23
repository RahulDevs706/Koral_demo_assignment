import React from 'react'
import Header from './Components/Layout/Header/Header'
import Banner from './Components/Banner/Banner'
import PowerUp from './Components/Banner/PowerUp'
import TabComp from "./Components/TabComponent/TabComponent"
import Qualities from "./Components/Qualities/Qualities"
import Para1 from "./Components/BoxContainer/Para1"
import BoxContainer from "./Components/BoxContainer/BoxContainer"
import ClientFeedback from "./Components/ClientFeedback/ClientFeedback"
import Testimonials from "./Components/ClientFeedback/Testimonials"
import ReqACall from "./Components/ReqACall/ReqACall"
import CTA from "./Components/CTA/CTA"
import ContactUs from "./Components/Layout/Footer/ContactUs/Contact"
import Footer from "./Components/Layout/Footer/Footer.jsx"
import webFont from "webfontloader";
import './App.css'
import Aos from 'aos';
import '/node_modules/aos/dist/aos.css'

const App = () => {



  React.useEffect(()=>{

    Aos.init({duration:1000, easing:'ease-in-out', once:true})


    webFont.load({
      google:{
        families:["Ubuntu", "Droid Sans", "Chilanka" ]
      }
    });
  }, [])

  return (
    <div>
        <Header />
        <Banner />
        <PowerUp />
        <TabComp />
        <Qualities />
        <Para1 />
        <BoxContainer />
        <ClientFeedback />
        <Testimonials />
        <ReqACall />
        <CTA />
        <ContactUs />
        <Footer />
    </div>
  )
}

export default App
