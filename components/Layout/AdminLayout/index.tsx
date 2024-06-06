import { ReactNode, useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Image from "next/image";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    // <div className="admin__layout">
    //   <Sidebar />
    //   <div className="flex flex-col justify-between overflow-y-auto">
    //     <div className="px-4">{children}</div>
    //     <Footer />
    //   </div>
    // </div>
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <h1 style={{fontSize: 32, marginLeft: 20}}>
            <strong>Quizizz</strong> <span style={{fontStyle: "italic"}}>Community</span>
          </h1>
        </Header>
        <Content style={{ margin: "1rem 8rem" }}>
         
          <div
            
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          &copy; {new Date().getFullYear()} by Quizizz. All right reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
