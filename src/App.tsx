import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home";
import OurCoaches from "./components/OurCoaches/OurCoaches";
import WhyUs from "./components/WhyUs/WhyUs";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {

  // make navbar persistent - check if user scrolled to change abckground color of navbar
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true)
      }else{
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  })

  return (
    <div className="app">
      <Navbar isTopOfPage={isTopOfPage} />
      <Home />
      <OurCoaches />
      <WhyUs />
      <ContactUs />
    </div>
  )
}

export default App
