import './styles/App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/Main.page";
import HeaderComp from "./components/Header.comp";
import FooterComp from "./components/Footer.comp";
import AnalysisComp from "./components/Analysis.comp";
import DownloadPage from "./pages/Download.page";
import React, {useEffect, useState} from "react";
import DevelopersPage from "./pages/Developers.page";
import { Alert } from 'antd';

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
        <Alert
          message="서비스 점검 안내"
          description="2023년 9월 14일 오전 9시 30분 부터 오후 4시 30분 까지 (약 7시간) 전기 공사로 인해 일시적으로 서비스가 중단될 예정입니다. 이용에 참고 바랍니다."
          type="warning"
        />
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
