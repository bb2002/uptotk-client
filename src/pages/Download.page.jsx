import React, {useEffect, useState} from 'react';
import useReadPost from "../hooks/useReadPost";
import {useParams} from "react-router-dom";
import "../styles/pages/DownloadPage.css"
import DownloadComp from "../components/download/Download.comp";
import {LoadingOutlined} from "@ant-design/icons";
import HttpExceptionComp from "../components/common/HttpException.comp";
import moment from "moment";
import PasswordComp from "../components/download/Password.comp";
import {Alert} from "antd";

const DownloadPage = () => {
  const { easyUUID } = useParams()
  const { post, readPost } = useReadPost();
  const [submitPasswd, setSubmitPasswd] = useState(false)
  const [passwd, setPasswd] = useState(null);

  useEffect(() => {
    readPost(easyUUID)
  }, [easyUUID]);

  const isValidFile = (post) => !(
    post.currentDownloadCount >= post.maxDownloadCount || // 다운로드 가능 횟수를 초과했거나
    moment(post.expiredAt).valueOf() <= moment() // 만료 기간을 넘어선 경우
  )

  const onUnlockClickHandler = (passwd) => {
    readPost(easyUUID, passwd);
    setSubmitPasswd(true);
    setPasswd(passwd);    // 추후 다운로드를 위해 저장
  }

  return (
    <div className="download-page">
      {
        // 로딩 중인 경우
        post.loading && (
          <div style={{ height: 300 }}>
            <LoadingOutlined style={{ fontSize: '2rem' }}/>
          </div>
        )
      }
      {
        // 포스트 데이터를 성공적으로 받은 경우
        function() {
          if (!post.loading && post.data && isValidFile(post.data)) {
            if (post.data.authMethod === 'open') {
              // 열린 파일 임
              return (
                <DownloadComp
                  isLocked={post.data.authMethod !== 'open'}
                  currentDownloadCount={post.data.currentDownloadCount}
                  maxDownloadCount={post.data.maxDownloadCount}
                  files={post.data.files}
                  expiredAt={post.data.expiredAt} />
              )
            }

            if (post.data.authMethod === 'password') {
              if (post.data.files && post.data.files.length !== 0) {
                return (<DownloadComp
                  isLocked={post.data.authMethod !== 'open'}
                  currentDownloadCount={post.data.currentDownloadCount}
                  maxDownloadCount={post.data.maxDownloadCount}
                  files={post.data.files}
                  expiredAt={post.data.expiredAt}
                  password={passwd}/>)
              } else {
                return (
                  <div style={{ height: 300 }}>
                    <PasswordComp onUnlockClickHandler={onUnlockClickHandler} />
                    {
                      submitPasswd && (
                        <Alert
                          message="비밀번호가 잘못되었습니다."
                          type="error"
                          showIcon
                          style={{ marginTop: 16, width: 300 }}/>
                      )
                    }
                  </div>
                )
              }
            }
          }
        }()
      }
      {
        // HTTP 오류가 발생한 경우
        function () {
          if (post.error && post.code !== 0) {
            // 다운로드 횟수 초과 오류인지 확인
            if (post.error?.response?.data?.response?.code === 600) {
              return (
                <div style={{ height: 300 }}>
                  <HttpExceptionComp
                    customTitle="다운로드 횟수 초과"
                    customSubTitle="이 파일에 설정된 다운로드 횟수를 초과했습니다. 이 파일을 더 이상 다운로드 할 수 없습니다." />
                </div>
              )
            }

            // 파일 만료 기간 도달
            if (post.error?.response?.data?.response?.code === 601) {
              return (
                <div style={{ height: 300 }}>
                  <HttpExceptionComp
                    customTitle="파일이 만료 됨"
                    customSubTitle="이 파일에 설정된 만료기간을 초과했습니다. 이 파일을 더 이상 다운로드 할 수 없습니다." />
                </div>
              )
            }

            console.dir(post.error);
          }
          return null;
        }()
      }
    </div>
  );
};

export default DownloadPage;