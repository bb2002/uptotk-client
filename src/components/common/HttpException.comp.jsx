import React, {useEffect, useState} from 'react';
import Title from "antd/es/typography/Title";

const HttpExceptionComp = ({ code, customTitle, customSubTitle }) => {
  const [title, setTitle] = useState('알 수 없는 오류')
  const [subTitle, setSubTitle] = useState('알 수 없는 오류가 발생했습니다. 개발팀에 문의 하십시오.');

  useEffect(() => {
    if (customTitle || customSubTitle) {
      setTitle(customTitle);
      setSubTitle(customSubTitle)
    } else {
      switch (code) {
        case -1:
          setTitle('서버에 요청 할 수 없음');
          setSubTitle('서버에 요청을 보낼 수 없습니다. 네트워크 상태를 확인하십시오.')
          break;
        case 400:
          setTitle('요청이 잘못 됨');
          setSubTitle('잘못된 요청을 보냈습니다. 메인으로 이동하십시오.')
          break;
        case 403:
          setTitle('접근 거부');
          setSubTitle('접근 권한이 없습니다. 메인으로 이동하십시오.')
          break;
        case 404:
          setTitle('파일을 찾을 수 없음');
          setSubTitle('파일이 존재하지 않습니다. 다운로드 경로를 다시 확인하시기 바랍니다.')
          break;
        case 500:
          setTitle('내부 서버 오류');
          setSubTitle('서버 장애가 발생했습니다. 나중에 다시 시도하거나 오류가 지속되면 개발팀에 문의하십시오.')
          break;
      }
    }

  }, [code, customTitle, customSubTitle])

  return (
    <div>
      <Title level={2}>{title}</Title>
      <p style={{ color: '#606060' }}>{subTitle}</p>
    </div>
  );
};

export default HttpExceptionComp;