import './styles/App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/Main.page";
import HeaderComp from "./components/Header.comp";
import FooterComp from "./components/Footer.comp";
import AnalysisComp from "./components/Analysis.comp";
import DownloadPage from "./pages/Download.page";
import React from "react";

function App() {
  return (
    <div className="app-container">
      <HeaderComp />
      <AnalysisComp />
      <div className="container">
        <div style={{ width: '100%', height: '120px' }}>여기에광고가들어감</div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:easyUUID" element={<DownloadPage />} />
        </Routes>
        <div style={{ width: '100%', height: '120px' }}>여기에광고가들어감</div>
      </div>
      <FooterComp />
    </div>
  );
}

export default App;
