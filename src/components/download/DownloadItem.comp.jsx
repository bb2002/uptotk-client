import React from 'react';
import {Card} from "antd";
import {makeIconFromExt} from "../../libs/utils/MakeIconFromExt";
import "../../styles/components/download/DownloadItem.css"
import {DownloadOutlined} from "@ant-design/icons";
import {UPTOTK_SERVER} from "../../libs/const";

const DownloadItemComp = ({ file, password }) => {
  return (
    <Card style={{ marginBottom: 8 }}>
      <div className="download-item-container">
        <div className="download-item-icon">
          {
            makeIconFromExt(file.mimeType.split('/')[1], {
              fontSize: '2.5rem',
              color: '#666666'
            })
          }
        </div>
        <a
          href={`${UPTOTK_SERVER}/download/file/${file.savedFilename}${password ? `?password=${password}` : ''}`}
          style={{ flex: 1 }}>{file.originalFilename}</a>
        <DownloadOutlined style={{ color: '#b9b9b9' }} />
      </div>
    </Card>
  );
};

export default DownloadItemComp;