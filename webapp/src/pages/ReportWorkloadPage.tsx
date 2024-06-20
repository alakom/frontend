import React, { useState } from "react";
import { Button, Layout, message, theme } from "antd";
import Title from "antd/lib/typography/Title";
import { useGetTableQuery } from "../api/tableApi";
import { useDispatch } from "react-redux";
import SelectYear from "../components/SelectYear/SelectYear";
import { fetchWorkloadReport } from "../api/WorkloadReportApi";
import {
  buttonReportStyle,
  container,
  contentSelectStyle,
  headerStyle,
  titleStyle,
} from "./pages.style";
import { isMobile } from "react-device-detect";

const { Header, Content } = Layout;

const ReportWorkloadPage = () => {
  const { data: years } = useGetTableQuery("study-year");
  const [valueYear, setValueYear] = useState<number | null>(null);
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const getFile = () => {
    messageApi.open({
      key: "updatable",
      type: "loading",
      content: "Генерируем отчёт",
      duration: 1000,
    });
    const data = {
      year: valueYear,
      messageApi: messageApi,
    };
    dispatch(fetchWorkloadReport(data));
  };
  return (
    <>
      <Header style={headerStyle}>
        <Title level={isMobile ? 4 : 3} style={titleStyle}>
          Экспорт отчёта по нагрузке
        </Title>
      </Header>
      <Content style={contentSelectStyle}>
        <SelectYear years={years} changeValue={setValueYear} />
        <div style={container}>
          <Button
            type="primary"
            onClick={getFile}
            style={buttonReportStyle}
            disabled={!valueYear}
          >
            Экспортировать отчёт
          </Button>
        </div>
        {contextHolder}
      </Content>
    </>
  );
};
export default ReportWorkloadPage;
