import './styles/App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/Main.page";
import HeaderComp from "./components/Header.comp";
import FooterComp from "./components/Footer.comp";
import AnalysisComp from "./components/Analysis.comp";

function App() {
  return (
    <div className="app-container">
      <HeaderComp />
      <AnalysisComp />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
      <FooterComp />
    </div>
  );
}

export default App;
