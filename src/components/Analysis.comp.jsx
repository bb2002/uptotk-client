import React from 'react';
import "../styles/components/Analysis.css";

const AnalysisComp = () => {
  return (
    <div className="analysis-container">
      <div className="container">
        <h2>Upto.tk 에서 공유된<br />자료 통계</h2>
        <div className="analysis-group">
          <div>
            <h3>123,456,678 개</h3>
            <p>공유된 파일 수</p>
          </div>
          <div>
            <h3>123,456,678 회</h3>
            <p>누적 다운로드 수</p>
          </div>
          <div>
            <h3>123,456,678 GB</h3>
            <p>다운로드 트래픽</p>
          </div>
          <div>
            <h3>123,456,678 GB</h3>
            <p>업로드 트래픽</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisComp;