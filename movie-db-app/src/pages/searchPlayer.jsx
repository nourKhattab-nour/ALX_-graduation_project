import React from 'react'
import Header from "../components/HomePage/Header"
import Footer from "../components/Footer/Footer";
import SearchHeader from "../components/SearchPage/searchSection";
import Main from "../components/SearchPage/main";

const searchPlayer = () => {
  return (
    <div>
      <Header />
      {/* <SearchHeader /> */}
      <Main/>
      <Footer />
    </div>
  );
}

export default searchPlayer
