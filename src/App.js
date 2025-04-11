

import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom"; // ✅ Removed BrowserRouter
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import PortfoliosPage from "./pages/PortfoliosPage";
import BlogPage from "./pages/BlogPage";
// import { MdBrightness4 } from "react-icons/md";

import { IoMenu } from "react-icons/io5";
import { useState } from "react";


function App() {
  const[navToggle, setNavTogggle] =useState(false);
  return (
    // <Router> {/* Ensure Router wraps everything */}
    <div className="App">
      <Sidebar navToggle={navToggle} />
      <div className="ham-burger-menu">
        <IconButton onClick={() => setNavTogggle(!navToggle)}>
          < IoMenu />
        </IconButton>
      </div>



      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
        <div className="light-dark-mode">
          <div className="left-content"></div>
          <div className="right-content"></div>

        </div>

        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/portfolio" element={<PortfoliosPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MainContentStyled>
    </div>


  );
}
const IconButton = styled.div``;
const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  
@media screen and (max-width:1200px) {
  margin-left: 0;
    
}
  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .line-1, .line-2, .line-3, .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;