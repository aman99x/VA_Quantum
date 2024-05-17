import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Component imports
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Contact from "./components/Contact/Contact";
import Testimonial from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Banner2 from "./components/Banner2/Banner2";
import Topper from "./components/Topper/Topper";
import AdminPanel from "./components/AdminPanel";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
        <Routes>
          <Route path="/admin" element={<AdminPanel />} />
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Contact />
                <Topper />
                <About />
                <Banner2 />
                <Services />
                <Testimonial />
                <AppStoreBanner />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
