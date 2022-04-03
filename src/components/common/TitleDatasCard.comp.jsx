import React from 'react';
import {Card} from "antd";
import "../../styles/components/common/TitleDatasCard.css"

const TitleDatasCardComp = ({ datas }) => {
  return (
    <Card>
      <div className="title-data-container">
        {
          datas.map(value => (
            <div className="title-data-item">
              <p>{value.title}</p>
              <h3>{value.data}</h3>
            </div>
          ))
        }
      </div>

    </Card>
  );
};

export default TitleDatasCardComp;