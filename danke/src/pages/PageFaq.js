import React from "react";
import { Collapse, Button } from "antd";

const { Panel } = Collapse;

function PageFaq() {
  return (
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        {" "}
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipis</p>
        </div>
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="This is panel header 1" key="1">
            <p>Collapse Content</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>Collapse Content</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>Collapse Content</p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>Want quick support?</h3>
          <p>Lorem ipsum dolor sit am. Lorem ipsum dolor.</p>
          <Button type="primary" size="large">
            <i className="fas fa-envelope"></i>
            Email your question
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PageFaq;
