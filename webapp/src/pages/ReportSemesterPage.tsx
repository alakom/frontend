import React, {useState} from 'react';
import {Button, Layout, message, theme} from 'antd';
import Title from "antd/lib/typography/Title";
import SelectYear from "../components/SelectYear/SelectYear";
import {useGetTableQuery} from "../api/tableApi";
import SelectSemester from "../components/SelectSemester/SelectSemester";
import {fetchIndPlanReport} from "../api/IndPlanReportApi";
import {useDispatch} from "react-redux";
import {fetchSemesterReport} from "../api/SemesterReportApi";

const {Header, Content} = Layout;

const ReportSemesterPage = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    const {data: years} = useGetTableQuery('study-year');
    const [valueYear, setValueYear] = useState<number | null>(null);
    const [isAutumn, setIsAutumn] = useState<boolean | null>(null);
    const [messageApi, contextHolder] = message.useMessage();
    const dispatch = useDispatch();

    const getFile = () => {
        messageApi.open({
            key: 'updatable',
            type: 'loading',
            content: 'Генерируем отчёт',
        });
        const data = {
            year: valueYear,
            isAutumn: isAutumn,
            messageApi: messageApi
        }
        dispatch(fetchSemesterReport(data));
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
                    Экспорт отчёта по семестру
                </Title>
            </Header>

            <Content style={{
                margin: '24px 16px 0',
                overflow: 'initial',
                minHeight: '80%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <SelectYear years={years} changeValue={setValueYear}/>
                <SelectSemester changeValue={setIsAutumn}/>
                <Button
                    type="primary"
                    onClick={getFile}
                    style={{margin: '27px 0 5px 0', width: '300px'}}
                    disabled={isAutumn === null || !valueYear}
                >
                    Экспортировать отчёт
                </Button>
                {contextHolder}
            </Content>
        </>
    );
};
export default ReportSemesterPage;