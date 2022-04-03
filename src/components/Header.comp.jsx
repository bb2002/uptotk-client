import React from 'react';
import "../styles/components/Header.css"
import {Button} from "antd";
import {Link} from "react-router-dom";

const HeaderComp = () => {
  return (
    <header>
      <div className="container">
        <div className="header-container">
          <Link to="/">
            <img src={require('../assets/icons/uptotk-logo.png')} alt="uptotk" />
            <p>Upto.tk</p>
          </Link>

          <div style={{ width: 64 }} />
          <Button type="link" className="developers">Developers</Button>
        </div>
      </div>
    </header>
  );
};

export default HeaderComp;