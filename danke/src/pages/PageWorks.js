import React, { useState } from "react";
import { Modal, Button } from "antd";

function PageWorks() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="block worksBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>How it works</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
        <div className="contentHolder">
          {" "}
          <Button onClick={showModal}>
            <i className="fas fa-play"></i>
          </Button>
        </div>

        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    </div>
  );
}

export default PageWorks;
