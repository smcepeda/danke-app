import React from "react";
import { Row, Col } from "antd";
import { Card } from "antd";

const { Meta } = Card;

function PageFeature() {
  return (
    <div className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipis</p>
        </div>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            {" "}
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="Modern Design" />
            </Card>
          </Col>
          <Col span={8}>
            {" "}
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="Modern Design" />
            </Card>
          </Col>
          <Col span={8}>
            {" "}
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="Modern Design" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default PageFeature;
