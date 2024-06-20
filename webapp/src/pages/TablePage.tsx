import React from "react";
import { Layout, theme } from "antd";
import Title from "antd/lib/typography/Title";
import { isMobile } from "react-device-detect";
import TableViewer from "../components/TableViewer/TableViewer";
import { headerStyle, titleStyle } from "./pages.style";

const { Header, Content } = Layout;

const TablePage = () => {
  return (
    <>
      <Header style={headerStyle}>
        <Title level={isMobile ? 4 : 3} style={titleStyle}>
          Таблицы
        </Title>
      </Header>
      <Content>
        <TableViewer />
      </Content>
    </>
  );
};
export default TablePage;
