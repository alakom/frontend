import React, {useState} from 'react';
import {Button, Layout, theme} from 'antd';
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
    const dispatch = useDispatch();
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
                    onClick={() => {
                        dispatch(fetchSemesterReport({year: valueYear, isAutumn: isAutumn}))
                    }}
                    style={{margin: '27px 0 5px 0', width: '300px'}}
                    disabled={isAutumn === null || !valueYear}
                >
                    Экспортировать отчёт
                </Button>
            </Content>
        </>
    );
};
export default ReportSemesterPage;