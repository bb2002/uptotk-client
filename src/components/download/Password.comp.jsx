import React, {useState} from 'react';
import Title from "antd/es/typography/Title";
import {Button, Input} from "antd";
import {UnlockOutlined} from "@ant-design/icons";

const PasswordComp = ({ onUnlockClickHandler }) => {
  const [passwd, setPasswd] = useState();

  const onPasswdChangeHandler = (e) => {
    setPasswd(e.target.value);
  }

  return (
    <div>
      <Title level={2}>이 파일은 잠겨있습니다.</Title>
      <p style={{ color: '#606060', marginBottom: 4 }}>비밀번호 입력</p>

      <Input.Group compact>
        <Input
          style={{ width: 300 }}
          type="password"
          placeholder="비밀번호 입력"
          onChange={onPasswdChangeHandler}
          onPressEnter={() => onUnlockClickHandler(passwd)} />
        <Button type="primary" onClick={() => onUnlockClickHandler(passwd)}><UnlockOutlined /> 파일 열기</Button>
      </Input.Group>
    </div>
  );
};

export default PasswordComp;