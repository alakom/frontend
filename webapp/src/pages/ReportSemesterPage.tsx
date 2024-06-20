import React, { useState } from "react";
import { Button, Layout, message, theme } from "antd";
import Title from "antd/lib/typography/Title";
import SelectYear from "../components/SelectYear/SelectYear";
import { useGetTableQuery } from "../api/tableApi";
import SelectSemester from "../components/SelectSemester/SelectSemester";
import { fetchIndPlanReport } from "../api/IndPlanReportApi";
import { useDispatch } from "react-redux";
import { fetchSemesterReport } from "../api/SemesterReportApi";
import {
  buttonReportStyle,
  container,
  contentSelectStyle,
  headerStyle,
  titleStyle,
} from "./pages.style";
import { isMobile } from "react-device-detect";

const { Header, Content } = Layout;

const ReportSemesterPage = () => {
  const { data: years } = useGetTableQuery("study-year");
  const [valueYear, setValueYear] = useState<number | null>(null);
  const [isAutumn, setIsAutumn] = useState<boolean | null>(null);
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
      isAutumn: isAutumn,
      messageApi: messageApi,
    };
    dispatch(fetchSemesterReport(data));
  };

  return (
    <>
      <Header style={headerStyle}>
        <Title level={isMobile ? 4 : 3} style={titleStyle}>
          Экспорт отчёта по семестру
        </Title>
      </Header>

      <Content stylestyle={contentSelectStyle}>
        <SelectYear years={years} changeValue={setValueYear} />
        <SelectSemester changeValue={setIsAutumn} />
        <div style={container}>
          <Button
            type="primary"
            onClick={getFile}
            style={buttonReportStyle}
            disabled={isAutumn === null || !valueYear}
          >
            Экспортировать отчёт
          </Button>
        </div>
        {contextHolder}
      </Content>
    </>
  );
};
export default ReportSemesterPage;
