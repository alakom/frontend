import React, { useEffect, useState } from "react";

import {
  TableOutlined,
  FundOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";

const { Footer, Sider } = Layout;
import { Route, Routes, useNavigate } from "react-router-dom";
import TablePage from "../../pages/TablePage";
import ReportPlanPage from "../../pages/ReportPlanPage";
import ReportSemesterPage from "../../pages/ReportSemesterPage";
import ReportWorkloadPage from "../../pages/ReportWorkloadPage";
import AddYear from "../../pages/AddYear";
import DeleteYear from "../../pages/DeleteYear";
import { layoutStyle, sideStyle } from "./MainContainer.style";
import { isMobile } from "react-device-detect";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[] | null,
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Таблицы", "/table", <TableOutlined />, null, ""),
  getItem("Отчёты", "sub1", <FundOutlined />, [
    getItem("План", "/report/plan"),
    getItem("Нагрузка", "/report/workload"),
    getItem("Семестр", "/report/semester"),
  ]),
  getItem("Управление БД", "sub2", <PlusSquareOutlined />, [
    getItem("Добавление года", "/database/add-year"),
    getItem("Удаление года", "/database/delete-year"),
  ]),
];

const MainContainer: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    navigate(JSON.parse(window.sessionStorage.getItem("lastRoute") || "{}"));
    window.onbeforeunload = () => {
      window.sessionStorage.setItem(
        "lastRoute",
        JSON.stringify(window.location.pathname),
      );
    };
    if (!!JSON.parse(window.sessionStorage.getItem("lastRoute"))) {
      navigate("/");
      window.sessionStorage.setItem("lastRoute", null);
    }
  }, []);

  return (
    <Layout>
      <Sider
        theme="light"
        style={sideStyle}
        collapsible={isMobile ? false : true}
        collapsed={isMobile ? true : collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
          onClick={(item) => navigate(item.key)}
        />
      </Sider>
      <Layout
        style={{
          marginLeft: `${isMobile ? "80px" : collapsed ? "80px" : "200px"}`,
          layoutStyle,
        }}
      >
        <Routes>
          <Route path="/table" element={<TablePage />} />
          <Route path="/report/plan" element={<ReportPlanPage />} />
          <Route path="/report/semester" element={<ReportSemesterPage />} />
          <Route path="/report/workload" element={<ReportWorkloadPage />} />
          <Route path="/database/add-year" element={<AddYear />} />
          <Route path="/database/delete-year" element={<DeleteYear />} />
          <Route path="/" element={<></>} />
        </Routes>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default MainContainer;
