import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import PageHome from "./pages/PageHome";
import PageHeader from "./pages/PageHeader";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <PageHeader />
      </Header>

      <Content>
        <PageHome />
      </Content>
    </Layout>
  );
}

export default App;
