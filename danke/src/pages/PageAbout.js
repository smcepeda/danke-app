import React from "react";
import { Row, Col } from "antd";

const items = [
  {
    key: "1",
    icon: <i className="fas fa-chart-pie"></i>,
    title: "Test",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    key: "2",
    icon: <i className="fas fa-desktop"></i>,
    title: "Test",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    key: "3",
    icon: <i className="fas fa-database"></i>,
    title: "Test",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
];

function PageAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
          <p>dolor sit amet, constusdc sdfs</p>
        </div>
        <div className="contentHolder">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>

        <Row gutter={[16, 16]}>
          {items.map((item) => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">{item.icon}</div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default PageAbout;
