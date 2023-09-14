import './styles/App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/Main.page";
import HeaderComp from "./components/Header.comp";
import FooterComp from "./components/Footer.comp";
import AnalysisComp from "./components/Analysis.comp";
import DownloadPage from "./pages/Download.page";
import React, {useEffect, useState} from "react";
import DevelopersPage from "./pages/Developers.page";


function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    })
  }, [])

  return (
    <div className="app-container">
      <HeaderComp />
      <AnalysisComp />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/:easyUUID" element={<DownloadPage />} />
        </Routes>
      </div>
      <FooterComp />
    </div>
  );
}

export default App;
