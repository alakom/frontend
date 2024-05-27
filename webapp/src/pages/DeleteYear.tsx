import React, {useEffect, useState} from 'react';
import {Button, Layout, message, theme} from 'antd';
import Title from "antd/lib/typography/Title";
import {useDispatch} from "react-redux";
import {useLazyDeleteYearQuery, useLazyGetDeleteYearQuery, useLazyGetTableQuery} from "../api/tableApi";
import {IStudyYear} from "../components/TableViewer/interfacesTable";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import SelectYear from "../components/SelectYear/SelectYear";

dayjs.extend(customParseFormat);

const {Header, Content} = Layout;

const DeleteYear = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [deleteYear, setDeleteYear] = useState<IStudyYear>(null);
    const [fetchGetDeleteYear] = useLazyGetDeleteYearQuery();
    const [fetchDeleteYear] = useLazyDeleteYearQuery();
    const dispatch = useDispatch();

    useEffect(() => {
        getYear();
    }, []);

    const getYear = () => {
        fetchGetDeleteYear().then((result) => {
            if (result.error) {
                messageApi.open({
                    key: 'updatable',
                    type: 'error',
                    content: 'Произошла ошибка при получении данных',
                    duration: 2,
                });
            }
            setDeleteYear(result.data)
        })
    };

    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const handleDeleteYear = () => {
        fetchDeleteYear().then((result) => {
            if (result.isError) {
                messageApi.open({
                    key: 'updatable',
                    type: 'error',
                    content: 'Произошла ошибка при удалении',
                    duration: 2,
                });
            } else {
                messageApi.open({
                    key: 'updatable',
                    type: 'success',
                    content: 'Учебный год удалён!',
                    duration: 2,
                });
                getYear();
            }
        })
    };
    return (
        <>
            <Header style={{
                padding: 0,
                background: colorBgContainer,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Title level={3} style={{margin: '0 0 0 5px', flex: 1}}>
                    Удаление учебного года
                </Title>
            </Header>

            <Content style={{
                margin: '5px 16px 0',
                overflow: 'initial',
                minHeight: '80%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                {deleteYear ?
                    <>
                        <Title level={5}>Вы можете удалить только последний учебный год.
                            <br/>
                            Вы действительно хотите удалить {deleteYear.studyYear}/{deleteYear.studyYear + 1} учебный
                            год?</Title>
                        <Button
                            type="primary"
                            style={{margin: '10px 0 5px 0', width: '300px'}}
                            disabled={!deleteYear}
                            danger
                            onClick={handleDeleteYear}
                        >
                            Удалить учебный год
                        </Button>
                    </>
                    :
                    <Title level={5}>К сожалению в данный момент удаление учебного года невозможно :(</Title>
                }
                {contextHolder}

            </Content>
        </>
    );
};
export default DeleteYear;