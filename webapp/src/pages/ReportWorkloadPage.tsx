import React, {useState} from 'react';
import {Button, Layout, theme} from 'antd';
import Title from "antd/lib/typography/Title";
import TableViewer from "../components/TableViewer/TableViewer";
import {useGetTableQuery} from "../api/tableApi";
import {useDispatch} from "react-redux";
import SelectYear from "../components/SelectYear/SelectYear";
import {fetchIndPlanReport} from "../api/IndPlanReportApi";
import {fetchWorkloadReport} from "../api/WorkloadReportApi";

const {Header, Content} = Layout;

const ReportWorkloadPage = () =>{
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    const {data: years} = useGetTableQuery('study-year');
    const [valueYear, setValueYear] = useState<number | null>(null);
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
                    Экспорт отчёта по нагрузке
                </Title>
            </Header>
            <Content style={{margin: '24px 16px 0', overflow: 'initial', minHeight: '80%', display: 'flex', flexDirection: 'column'}}>
                <SelectYear years={years} changeValue={setValueYear}/>
                <Button
                    type="primary"
                    onClick={() => {
                        dispatch(fetchWorkloadReport({year: valueYear}))
                    }}
                    style={{margin: '27px 0 5px 0', width: '300px'}}
                    disabled={!valueYear}
                >
                    Экспортировать отчёт
                </Button>
            </Content>
        </>
    );
};
export default ReportWorkloadPage;