import React from "react";
import Header from "../components/HomePage/Header.jsx";
import Hero from "../components/HomePage/HeroSection.jsx";
import Main from "../components/HomePage/MainSection.jsx";
import Footer from "../components/Footer/Footer.jsx";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Main/>
      <Footer/>
    </div>
  );
};

export default HomePage;
