import React, {useEffect} from 'react';
import useReadPost from "../hooks/useReadPost";
import {useParams} from "react-router-dom";
import "../styles/pages/DownloadPage.css"
import DownloadComp from "../components/download/Download.comp";
import {LoadingOutlined} from "@ant-design/icons";

const DownloadPage = () => {
  const { easyUUID } = useParams()
  const { post, readPost } = useReadPost();

  useEffect(() => {
    readPost(easyUUID)
  }, [easyUUID]);

  return (
    <div className="download-page">
      {
        post.loading && (
          <div style={{ height: 150 }}>
            <LoadingOutlined style={{ fontSize: '2rem' }}/>
          </div>
        )
      }
      {
        (!post.loading && post.data) && (
        <DownloadComp
          isLocked={post.data.authMethod !== 'open'}
          currentDownloadCount={post.data.currentDownloadCount}
          files={post.data.files}
          expiredAt={post.data.expiredAt} />
        )
      }

    </div>
  );
};

export default DownloadPage;