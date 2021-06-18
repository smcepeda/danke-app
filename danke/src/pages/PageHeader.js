import { Menu } from "antd";
import React from "react";

function PageHeader() {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i class="fas fa-bolt"></i>
          <a>Dankeschön</a>
        </div>
        <Menu mode="horizontal" defaultSelectedKeys={["Home"]}>
          <Menu.Item key="Home">Home</Menu.Item>
          <Menu.Item key="About">About</Menu.Item>
          <Menu.Item key="Features">Features</Menu.Item>
        </Menu>
      </div>
    </div>
  );
}

export default PageHeader;
