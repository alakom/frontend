import React, { useState } from "react";
import { Layout, Button, message } from "antd";
import Title from "antd/lib/typography/Title";
import SelectTeacher from "../components/SelectTeacher/SelectTeacher";
import { useGetTableQuery } from "../api/tableApi";
import SelectYear from "../components/SelectYear/SelectYear";
import { fetchIndPlanReport } from "../api/IndPlanReportApi";
import { useDispatch } from "react-redux";
import {
  buttonReportStyle,
  container,
  contentSelectStyle,
  headerStyle,
  titleStyle,
} from "./pages.style";
import { isMobile } from "react-device-detect";
const { Header, Content } = Layout;

const ReportPlanPage = () => {
  const { data: employee } = useGetTableQuery("employee");
  const { data: years } = useGetTableQuery("study-year");
  const [idTeacher, setIdTeacher] = useState<number | null>(null);
  const [valueYear, setValueYear] = useState<number | null>(null);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();

  const getFile = () => {
    messageApi.open({
      key: "updatable",
      type: "loading",
      content: "Генерируем отчёт",
      duration: 1000,
    });
    const data = {
      year: valueYear,
      id: idTeacher,
      name: employee.find((emp) => emp.id === idTeacher).employeeName,
      messageApi: messageApi,
    };
    dispatch(fetchIndPlanReport(data));
  };

  return (
    <>
      <Header style={headerStyle}>
        <Title level={isMobile ? 4 : 3} style={titleStyle}>
          Экспорт индивидуального плана
        </Title>
      </Header>
      <Content style={contentSelectStyle}>
        <SelectTeacher employee={employee} changeValue={setIdTeacher} />
        <SelectYear years={years} changeValue={setValueYear} />
        <div style={container}>
          <Button
            type="primary"
            onClick={getFile}
            style={buttonReportStyle}
            disabled={!idTeacher || !valueYear}
          >
            Экспортировать отчёт
          </Button>
        </div>
        {contextHolder}
      </Content>
    </>
  );
};
export default ReportPlanPage;
