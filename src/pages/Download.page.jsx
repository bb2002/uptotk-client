import React, {useEffect} from 'react';
import useReadPost from "../hooks/useReadPost";
import {useParams} from "react-router-dom";
import "../styles/pages/DownloadPage.css"
import DownloadComp from "../components/download/Download.comp";
import {LoadingOutlined} from "@ant-design/icons";
import HttpExceptionComp from "../components/common/HttpException.comp";

const DownloadPage = () => {
  const { easyUUID } = useParams()
  const { post, readPost } = useReadPost();

  useEffect(() => {
    readPost(easyUUID)
  }, [easyUUID]);

  return (
    <div className="download-page">
      {
        // 로딩 중인 경우
        post.loading && (
          <div style={{ height: 150 }}>
            <LoadingOutlined style={{ fontSize: '2rem' }}/>
          </div>
        )
      }
      {
        // 포스트 데이터를 성공적으로 받은 경우
        (!post.loading && post.data) && (
        <DownloadComp
          isLocked={post.data.authMethod !== 'open'}
          currentDownloadCount={post.data.currentDownloadCount}
          files={post.data.files}
          expiredAt={post.data.expiredAt} />
        )
      }
      {
        // HTTP 오류가 발생한 경우
        (post.error && post.code !== 0) && (
          <div style={{ height: 150 }}>
            <HttpExceptionComp code={post.code} />
          </div>
        )
      }

    </div>
  );
};

export default DownloadPage;