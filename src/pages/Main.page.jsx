import React, {useEffect, useState} from 'react';
import "../styles/pages/MainPage.css"
import UploadBoxComp from "../components/main/UploadBox.comp";
import UploadSettingsComp from "../components/main/UploadSettings.comp";
import {Alert, Button, message, Modal} from "antd";
import {LoadingOutlined, SendOutlined} from "@ant-design/icons";
import UploadPostSchema from "../libs/schemas/UploadPost.schema";
import useUploadPost from "../hooks/useUploadPost";
import { useNavigate } from 'react-router-dom';

const MAX_UPLOAD_COUNT = 5

const MainPage = () => {
  const [fileSize, setFileSize] = useState(0)
  const [fileList, setFileList] = useState([])
  const [form, setForm] = useState(null);
  const [uploadButtonEnabled, setUploadButtonEnabled] = useState(true)
  const navigate = useNavigate()
  const { uploadNewPost, uploadPost, reset } = useUploadPost()

  const onUploadFileListChanged = (fileList) => {
    let fs = 0;
    for (const file of fileList) {
      fs += file.size;
    }

    // 파일 크기와 개수를 state 에 저장
    setFileSize(fs)
    setFileList(fileList)
  }

  const onUploadAndDeployClicked = () => {
    // 파일이 전혀 선택되지 않은 경우
    if (fileList.length === 0) {
      message.error('등록된 파일이 없습니다.')
      return
    }

    // 입력 폼이 제대로 구성되지 않은 경우
    const result = UploadPostSchema.validate(form);
    if (result.error) {
      message.error(result.error.message)
      return
    }

    // 업로드 시작
    setUploadButtonEnabled(false);
    uploadNewPost(result.value, fileList);
  }

  useEffect(() => {
    if (uploadPost.code === 200) {
      navigate(`/${uploadPost.easyUUID}`);
      message.success('등록되었습니다.')
      reset();
    } else {
      if (uploadPost.code !== 0) {
        message.error(`오류가 발생했습니다. ${uploadPost.error?.message}`)
        setUploadButtonEnabled(true);
        reset();
      }
    }


  }, [uploadPost])

  return (
    <div className="main-page-container">
      <Modal
        visible={uploadPost.loading}
        okButtonProps={{ style: { display: 'none' }}}
        cancelButtonProps={{ style: { display: 'none' } }}
        closable={false}
        centered={true}>
        <p className="loading-modal-p">
          <LoadingOutlined style={{ fontSize: '1rem' }}/>
          <span style={{ paddingLeft: 8 }}>파일을 등록하고 있습니다. 잠시만 기다려주십시오.</span>
        </p>
        <p
          className="loading-modal-p"
          style={{
            color: '#666666',
            fontSize: '0.75rem',
            margin: 0,
        }}>네트워크 속도와 파일 용량에 따라 시간이 더 걸릴 수 있습니다.</p>

      </Modal>

      <UploadBoxComp
        maxUploadCount={MAX_UPLOAD_COUNT}
        onUploadFileListChanged={onUploadFileListChanged}/>

      <UploadSettingsComp
        style={{ marginTop: '32px' }}
        onFormChanged={form => setForm(form)}/>

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
        <Button type="primary" icon={<SendOutlined />}
                disabled={fileSize >= 104857600 || fileList.length > MAX_UPLOAD_COUNT}
                loading={!uploadButtonEnabled}
                onClick={onUploadAndDeployClicked}>Upload & Deploy</Button>
      </div>
    </div>
  );
};

export default MainPage;