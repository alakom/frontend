import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Layout,
  message,
  theme,
  DatePicker,
  ConfigProvider,
} from "antd";
import Title from "antd/lib/typography/Title";
import { useDispatch } from "react-redux";
import { fetchExampleReport } from "../api/ExampleReportApi";
import { useLazyGetTableQuery } from "../api/tableApi";
import { IStudyYear } from "../components/TableViewer/interfacesTable";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { fetchAddDataDB } from "../api/AddDataDBApi";
import {
  buttonChooseFileStyle,
  chooseFileTitleStyle,
  chooseYearStyle,
  container,
  containerLinkStyle,
  datePickerStyle,
  headerStyle,
  linkStyle,
  selectTitle,
  titleStyle,
} from "./pages.style";
import { isMobile } from "react-device-detect";

dayjs.extend(customParseFormat);

const { Header, Content } = Layout;

const AddYear = () => {
  const [fetchYear] = useLazyGetTableQuery();
  const [years, setYears] = useState<IStudyYear[] | null>(null);
  const [year, setYear] = useState<dayjs | null>(null);
  const fileInputRef = useRef(null);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();

  useEffect(() => {
    getYears();
  }, []);

  useEffect(() => {
    if (!year) {
      getYears();
    }
  }, [year]);

  const getYears = () => {
    fetchYear("study-year").then((result) => {
      if (result.error) {
        messageApi.open({
          key: "updatable",
          type: "error",
          content: "Произошла ошибка при получении данных",
          duration: 2,
        });
      }
      setYears(result.data);
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    messageApi.open({
      key: "updatable",
      type: "loading",
      content: "Загружаем файл",
    });
    const data = {
      year: year?.$y,
      file: formData,
      messageApi: messageApi,
      setYear: setYear,
    };
    dispatch(fetchAddDataDB(data));
    fileInputRef.current.value = "";
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const getMinValue = (years: IStudyYear[]) => {
    if (years) {
      const studyYears = years?.map((item) => item.studyYear);
      const maxYear = Math.max(...studyYears) + 1;
      return dayjs(maxYear.toString(), "YYYY");
    }
  };

  return (
    <>
      <Header style={headerStyle}>
        <Title level={isMobile ? 4 : 3} style={titleStyle}>
          Добавление нового учебного года
        </Title>
      </Header>
      <Content style={container}>
        <div style={chooseYearStyle}>
          <Title level={5} style={selectTitle}>
            Выберите учебный год для заполнения:
          </Title>
          <DatePicker
            picker={"year"}
            placeholder={"Выберите год"}
            size={"middle"}
            format={"YYYY"}
            style={datePickerStyle}
            minDate={getMinValue(years)}
            onChange={(date: dayjs, dateString: string) => setYear(date)}
            value={year}
          />
        </div>
        <div style={chooseYearStyle}>
          <Title level={5} style={chooseFileTitleStyle}>
            Выберите файл для заполнения базы данных
          </Title>
          <div style={containerLinkStyle}>
            (
            <Button
              type="link"
              onClick={() => {
                messageApi.open({
                  key: "updatable",
                  type: "loading",
                  content: "Загружаем файл",
                  duration: 1000,
                });
                dispatch(fetchExampleReport(messageApi));
              }}
              style={linkStyle}
            >
              файл-образец для заполнения учебного года
            </Button>
            ):
          </div>
        </div>
        <div style={container}>
          <input
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
            ref={fileInputRef}
            accept=".xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          />
          {contextHolder}
          <ConfigProvider>
            <Button
              styles={buttonChooseFileStyle}
              disabled={!year}
              onClick={handleButtonClick}
            >
              Выберите файл и начните заполнение{" "}
              {isMobile ? "БД" : "базы данных"}
            </Button>
          </ConfigProvider>
        </div>
      </Content>
    </>
  );
};
export default AddYear;
