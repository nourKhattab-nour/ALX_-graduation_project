import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MoviePlayer from "./pages/MoviePlayer";
import SearchPlayer from "./pages/SearchPlayer";
import SignUpPage from "./pages/SignUpPage";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Movies */}
        <Route path="/movie/:id" element={<MoviePlayer />} />
        <Route path="/search" element={<SearchPlayer />} />

      </Routes>
    </Router>
  );
}

export default App
