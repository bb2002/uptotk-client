import React from 'react';
import Title from "antd/es/typography/Title";
import TitleDatasCardComp from "../components/common/TitleDatasCard.comp";
import "../styles/pages/DevelopersPage.css"

const DevelopersPage = () => {
  const skillStacks = [
    {
      title: '서버 기술',
      data: 'NestJS',
    },
    {
      title: '프론트 기술',
      data: 'React, Ant Design',
    },
    {
      title: '운영 기술',
      data: 'on-premises'
    },
    {
      title: 'CDN 네트워크',
      data: 'CloudFlare'
    }
  ]

  return (
    <div>
      <Title level={2}>소프트웨어 개발 정보</Title>
      <TitleDatasCardComp
        datas={skillStacks} />
      <br /><br />
      <Title level={2}>개발자 정보</Title>
      <TitleDatasCardComp
        datas={[
          {
            title: '이메일',
            data: '5252bb@hanmail.net'
          },
          {
            title: '소프트웨어 저작권',
            data: '(c) 2015-2022 Saint software All rights reserved.'
          }
        ]}/>
      <br /><br />
      <p className="delete-content-alarm">파일 삭제 요청 또는 저작권 위반 파일 신고는 이메일로 요청 주시기 바랍니다.</p>
    </div>
  );
};

export default DevelopersPage;