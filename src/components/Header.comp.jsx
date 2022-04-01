import React from 'react';
import "../styles/components/Header.css"
import {Button} from "antd";

const HeaderComp = () => {
  return (
    <header>
      <div className="container">
        <div className="header-container">
          <img src={require('../assets/icons/uptotk-logo.png')} alt="uptotk" />
          <p>Upto.tk</p>
          <div style={{ width: 64 }} />
          <Button type="link" className="developers">Developers</Button>
        </div>
      </div>
    </header>
  );
};

export default HeaderComp;