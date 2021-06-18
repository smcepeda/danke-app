import React from "react";
import "./App.css";
import "antd/dist/antd.css";

import PageHeader from "./pages/PageHeader";
import PageFooter from "./pages/PageFooter";
import PageHome from "./pages/PageHome";

import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <PageHeader />
      </Header>
      <Content>
        <PageHome />
      </Content>
      <Footer>
        <PageFooter />
      </Footer>
    </Layout>
  );
}

export default App;
