import React, {useEffect} from 'react';
import "../styles/components/Analysis.css";
import useReadStatus from "../hooks/useReadStatus";

const AnalysisComp = () => {
  const { status, readStatus } = useReadStatus();

  useEffect(() => {
    readStatus();
  }, [])

  const mbToMBorGB = (size) => {
    if (size >= 1024) {
      return `${Math.round(size/1024)} GB`
    } else {
      return `${Math.round(size)} MB`;
    }
  }

  return (
    <div className="analysis-container">
      <div className="container">
        <h2>Upto.tk 에서 공유된<br />자료 통계</h2>
        <div className="analysis-group">
          <div>
            <h3>{status.data?.sharedFileCount ?? '-'} 개</h3>
            <p>공유된 파일 수</p>
          </div>
          <div>
            <h3>{status.data?.totalDownloadCount ?? '-'} 회</h3>
            <p>누적 다운로드 수</p>
          </div>
          <div>
            <h3>{mbToMBorGB(status.data?.downloadTraffic ?? 0)}</h3>
            <p>다운로드 트래픽</p>
          </div>
          <div>
            <h3>{mbToMBorGB(status.data?.uploadTraffic ?? 0)}</h3>
            <p>업로드 트래픽</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisComp;