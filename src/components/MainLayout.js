import { Layout, Typography } from "antd";
import StepsForm from "./StepsForm";

const MainLayout = () => {
  const { Header, Content } = Layout;   

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ backgroundColor: "#e91e63", textAlign: "center" }}>
        <Typography.Title level={3} style={{ color: "white", margin: 0 }}>
            Resume Generator
        </Typography.Title>

      </Header>
      <Content style={{ padding: "20px" }}>
        <StepsForm />
      </Content>
    </Layout>
  );
};

export default MainLayout;
