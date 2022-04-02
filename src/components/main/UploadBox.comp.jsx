import React, {useState} from 'react';
import {Card, Progress, Upload} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import "../../styles/components/main/UploadBox.css"
import {makeIconFromExt} from "../../libs/utils/MakeIconFromExt";

const UploadBoxComp = ({ maxUploadCount, onUploadFileListChanged, style }) => {
  const { Dragger } = Upload;

  const [fileList, setFileList] = useState([])
  const [fileSize, setFileSize] = useState(0)

  const props = {
    multiple: true,
    onChange: ({ fileList }) => {
      fileList = fileList.slice(-maxUploadCount)
      setFileList(fileList)

      let fs = 0;
      for (const file of fileList) {
        fs += file.size;
      }
      setFileSize(fs)


      if (onUploadFileListChanged) {
        onUploadFileListChanged(fileList)
      }
    },
    beforeUpload: () => false,
    listType: 'picture',
    iconRender: (file) => {
      const data = file.name.split('.')
      return makeIconFromExt(data[data.length - 1])
    }
  }

  return (
    <div style={style}>
      <Dragger {...props} fileList={fileList} style={{ height: 280 }}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">클릭하거나 Drag & Drop 하여 파일을 업로드 하세요.</p>
        <p className="ant-upload-hint">최대 업로드 용량 100MB, 최대 파일 개수 {maxUploadCount}개</p>
      </Dragger>
      <Card style={{ marginTop: 8 }}>
        <div className="upload-progress-container">
          <div>
            <p>업로드 용량</p>
            <Progress
              style={{ width: 300 }}
              percent={(fileSize / 1048576)}
              size='small'
              format={(percent) => `${Math.round(fileSize / 1048576)} / 100MB`}
            />
          </div>
          <div>
            <p>파일 개수</p>
            <Progress
              style={{ width: 300 }}
              percent={(fileList.length / maxUploadCount * 100.0)}
              size='small'
              format={(percent, successPercent) => `${fileList.length} / ${maxUploadCount}개`}
            />
          </div>

        </div>
      </Card>

    </div>
  );
};

export default UploadBoxComp;