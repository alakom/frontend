import React, { useEffect, useState } from "react";
import { Button, Layout, message } from "antd";
import Title from "antd/lib/typography/Title";
import {
  useLazyDeleteYearQuery,
  useLazyGetDeleteYearQuery,
} from "../api/tableApi";
import { IStudyYear } from "../components/TableViewer/interfacesTable";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import {
  buttonDeleteStyle,
  container,
  headerStyle,
  selectTitle,
  titleStyle,
} from "./pages.style";
import { isMobile } from "react-device-detect";

dayjs.extend(customParseFormat);

const { Header, Content } = Layout;

const DeleteYear = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [deleteYear, setDeleteYear] = useState<IStudyYear>(null);
  const [fetchGetDeleteYear] = useLazyGetDeleteYearQuery();
  const [fetchDeleteYear] = useLazyDeleteYearQuery();

  useEffect(() => {
    getYear();
  }, []);

  const getYear = () => {
    fetchGetDeleteYear().then((result) => {
      if (result.error) {
        messageApi.open({
          key: "updatable",
          type: "error",
          content: "Произошла ошибка при получении данных",
          duration: 2,
        });
      }
      setDeleteYear(result.data);
    });
  };

  const handleDeleteYear = () => {
    fetchDeleteYear().then((result) => {
      if (result.isError) {
        messageApi.open({
          key: "updatable",
          type: "error",
          content: "Произошла ошибка при удалении",
          duration: 2,
        });
      } else {
        messageApi.open({
          key: "updatable",
          type: "success",
          content: "Учебный год удалён!",
          duration: 2,
        });
        getYear();
      }
    });
  };
  return (
    <>
      <Header style={headerStyle}>
        <Title level={isMobile ? 4 : 3} style={titleStyle}>
          Удаление учебного года
        </Title>
      </Header>

      <Content style={container}>
        {deleteYear ? (
          <>
            <Title level={5} style={selectTitle}>
              Вы можете удалить только последний учебный год.
              <br />
              Вы действительно хотите удалить {deleteYear.studyYear}/
              {deleteYear.studyYear + 1} учебный год?
            </Title>
            <Button
              type="primary"
              style={buttonDeleteStyle}
              disabled={!deleteYear}
              danger
              onClick={handleDeleteYear}
            >
              Удалить учебный год
            </Button>
          </>
        ) : (
          <Title level={5} style={selectTitle}>
            К сожалению в данный момент удаление учебного года невозможно
            <br />
            :(
          </Title>
        )}
        {contextHolder}
      </Content>
    </>
  );
};
export default DeleteYear;
