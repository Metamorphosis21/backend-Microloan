import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./components/Login";
import ProfileDashBoard from "./components/ProfileDashBoard";
//componentes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Feed from "./components/feed";
import ActiveLoans from "./components/ActiveLoans";
import Feedback from './components/Feedback';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/active-loans" element={<ActiveLoans />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfileDashBoard />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
