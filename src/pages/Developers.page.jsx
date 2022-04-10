import React from 'react';
import Title from "antd/es/typography/Title";
import TitleDatasCardComp from "../components/common/TitleDatasCard.comp";
import "../styles/pages/DevelopersPage.css"
import {Card} from "antd";

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

      <Title level={2}>업로드 정책</Title>
      <Card>
        <ul>
          <li>업로드 된 파일은 만료되거나 다운로드 횟수를 초과하면 일괄 삭제 됩니다.</li>
          <li>업로드 어뷰징을 방지하기 위한 IP 주소 수집이 있습니다.</li>
          <li>업로드 된 파일은 개인 서버에 저장되며, 암호화 되지 않습니다. 민감한 파일은 업로드 하지 마십시오.</li>
        </ul>
      </Card>
      <br />

      <p className="delete-content-alarm">파일 삭제 요청 또는 저작권 위반 파일 신고는 이메일로 요청 주시기 바랍니다.</p>
    </div>
  );
};

export default DevelopersPage;