import React, {useState} from 'react';
import "../styles/pages/MainPage.css"
import UploadBoxComp from "../components/main/UploadBox.comp";
import UploadSettingsComp from "../components/main/UploadSettings.comp";
import {Alert, Button, Progress} from "antd";
import {SendOutlined} from "@ant-design/icons";

const MAX_UPLOAD_COUNT = 5

const MainPage = () => {
  const [fileSize, setFileSize] = useState(0)
  const [fileList, setFileList] = useState([])

  const onUploadFileListChanged = (fileList) => {
    let fs = 0;
    for (const file of fileList) {
      fs += file.size;
    }

    // 파일 크기와 개수를 state 에 저장
    setFileSize(fs)
    setFileList(fileList)
  }

  return (
    <div className="main-page-container">
      <div style={{ width: '100%', height: '120px' }}>여기에광고가들어감</div>

      <UploadBoxComp
        maxUploadCount={MAX_UPLOAD_COUNT}
        onUploadFileListChanged={onUploadFileListChanged}/>


      <UploadSettingsComp
        style={{ marginTop: '32px' }}/>

      <div className="upload-and-deploy-button">
        {
          (fileSize >= 104857600) && (
            <Alert message="업로드 제한을 초과했습니다. 최대 100MB 까지 업로드 할 수 있습니다." type="error" showIcon />
          )
        }
        {
          (fileList.length > MAX_UPLOAD_COUNT) && (
            <Alert message="업로드 개수를 초과했습니다. 최대 5개 까지 업로드 할 수 있습니다." type="error" showIcon />
          )
        }
        <div style={{ flex: 1 }} />
        <Button type="primary" icon={<SendOutlined />} disabled={fileSize >= 104857600 || fileList.length > MAX_UPLOAD_COUNT}>Upload & Deploy</Button>
      </div>

      <div style={{ width: '100%', height: '120px' }}>여기에광고가들어감</div>
    </div>
  );
};

export default MainPage;