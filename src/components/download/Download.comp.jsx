import React, {useEffect, useState} from 'react';
import DownloadItemComp from "./DownloadItem.comp";
import "../../styles/components/download/Download.css"
import TitleDatasCardComp from "../common/TitleDatasCard.comp";
import moment from "moment";

const DownloadComp = ({ isLocked, currentDownloadCount, expiredAt, files, password }) => {
  const [totalCapacity, setTotalCapacity] = useState(0)

  useEffect(() => {
    let capacity = 0;
    files?.forEach(file => capacity += file.fileCapacity);
    console.log(capacity);
    setTotalCapacity(capacity)
  }, [files])

  return (
    <div className="download-container">
      <div className="files-container">
        {
          files.map(value => <DownloadItemComp file={value} password={password} />)
        }
      </div>

      <TitleDatasCardComp datas={[
        { title: '업로드 파일 수', data: `${files.length}개` },
        { title: '업로드 용량', data: `${(totalCapacity / 1024).toFixed(1)}MB` },
        { title: '잠금 여부', data: `${isLocked ? '예' : '아니오'}` },
        { title: '다운로드 횟수', data: `${currentDownloadCount}회` },
        { title: '만료 날짜', data: `${moment(expiredAt).format('YYYY년 MM월 DD일')}` },
      ]}/>
    </div>
  );
};

export default DownloadComp;