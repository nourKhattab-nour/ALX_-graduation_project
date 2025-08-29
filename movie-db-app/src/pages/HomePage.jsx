import React from "react";
import Header from "../components/HomePage/Header";
import Hero from "../components/HomePage/HeroSection";
import Main from "../components/HomePage/mainSection";
import Footer from "../components/Footer/Footer";

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
