import React, {useState} from 'react';
import "../../styles/components/main/UploadSettings.css"
import {Input, Card, Select} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone, GlobalOutlined, LockOutlined} from "@ant-design/icons";

const UploadSettingsComp = ({ onFormChanged, style }) => {
  const { Option } = Select;
  const [form, setForm] = useState({
    authMethod: 'open',
    password: '',
    expiredDate: 7,
  })

  const onAuthModeChangeHandler = (value) => {
    setForm({
      ...form,
      authMethod: value
    })
  }

  const onPasswordChangeHandler = (e) => {
    setForm({
      ...form,
      password: e.target.value
    })
  }

  const onExpiredDateChangeHandler = (value) => {
    setForm({
      ...form,
      expiredDate: Number(value)
    })
  }

  const onDownloadLimitChangeHandler = (value) => {
    setForm({
      ...form,
      downloadLimit: Number(value)
    })
  }

  if (onFormChanged) onFormChanged(form);

  return (
    <Card style={style}>
      <div className="upload-settings-container">
        <div className="upload-settings-item" style={{ flex: 2 }}>
          <p>파일 잠금</p>
          <div>
            <Select defaultValue="open" style={{ width: 160, marginRight: 16 }} onChange={onAuthModeChangeHandler}>
              <Option value="open"><GlobalOutlined /> 공개</Option>
              <Option value="password"><LockOutlined /> 비밀번호</Option>
            </Select>
            <Input.Password
              disabled={form.authMethod === 'open'}
              onChange={onPasswordChangeHandler}
              style={{ width: 320 }}
              placeholder="비밀번호 입력"
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </div>
        </div>

        <div className="upload-settings-item">
          <p>만료 기간</p>
          <Select defaultValue="7" style={{ width: 160 }} onChange={onExpiredDateChangeHandler}>
            <Option value="1">1일</Option>
            <Option value="7">7일</Option>
            <Option value="14">14일</Option>
            <Option value="30">30일</Option>
            <Option value="61">61일</Option>
            <Option value="90">90일</Option>
          </Select>
        </div>

        <div className="upload-settings-item">
          <p>다운로드 횟수 제한</p>
          <Select defaultValue="100" style={{ width: 160 }} onChange={onDownloadLimitChangeHandler}>
            <Option value="5">5회</Option>
            <Option value="20">20회</Option>
            <Option value="50">50회</Option>
            <Option value="100">100회</Option>
            <Option value="1000">1,000회</Option>
            <Option value="5000">5,000회</Option>
            <Option value="10000">10,000회</Option>
            <Option value="0">무제한</Option>
          </Select>
        </div>
      </div>
    </Card>

  );
};

export default UploadSettingsComp;