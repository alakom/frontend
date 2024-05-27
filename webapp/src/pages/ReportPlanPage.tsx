import React, {useState} from 'react';
import {Layout, theme, Button, message} from 'antd';
import Title from "antd/lib/typography/Title";
import SelectTeacher from "../components/SelectTeacher/SelectTeacher";
import {useGetTableQuery} from "../api/tableApi";
import SelectYear from "../components/SelectYear/SelectYear";
import {fetchIndPlanReport} from "../api/IndPlanReportApi";
import {useDispatch} from "react-redux";

const {Header, Content} = Layout;

const ReportPlanPage = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    const {data: employee} = useGetTableQuery('employee');
    const {data: years} = useGetTableQuery('study-year');
    const [idTeacher, setIdTeacher] = useState<number | null>(null);
    const [valueYear, setValueYear] = useState<number | null>(null);
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
            id: idTeacher,
            name: employee.find(emp => emp.id === idTeacher).employeeName,
            messageApi: messageApi
        }
        dispatch(fetchIndPlanReport(data))
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
                    Экспорт индивидуального плана
                </Title>
            </Header>
            <Content style={{
                margin: '24px 16px 0',
                overflow: 'initial',
                minHeight: '80%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <SelectTeacher employee={employee} changeValue={setIdTeacher}/>
                <SelectYear years={years} changeValue={setValueYear}/>
                <Button
                    type="primary"
                    onClick={getFile}
                    style={{margin: '27px 0 5px 0', width: '300px'}}
                    disabled={!idTeacher || !valueYear}
                >
                    Экспортировать отчёт
                </Button>
                {contextHolder}
            </Content>
        </>
    );
};
export default ReportPlanPage;