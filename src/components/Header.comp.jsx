import React from 'react';
import "../styles/components/Header.css"

const HeaderComp = () => {
  return (
    <header>
      <div className="container">
        <div className="header-container">
          <img src={require('../assets/icons/uptotk-logo.png')} alt="uptotk" />
          <p>Upto.tk</p>
        </div>
      </div>
    </header>
  );
};

export default HeaderComp;