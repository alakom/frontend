import React, {useState} from 'react';
import {
    TableOutlined,
    FundOutlined,
    PlusSquareOutlined,
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Layout, Menu, theme, Typography} from 'antd';
import TableViewer from "../../components/TableViewer/TableViewer";
import Title from "antd/lib/typography/Title";

const {Header, Content, Footer, Sider} = Layout;
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import TablePage from "../../pages/TablePage";
import ReportPlanPage from "../../pages/ReportPlanPage";
import ReportSemesterPage from "../../pages/ReportSemesterPage";
import ReportWorkloadPage from "../../pages/ReportWorkloadPage";
import ManagePage from "../../pages/ManagePage";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[] | null,
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Таблицы', '/table', <TableOutlined/>, null, ""),
    getItem('Отчёты', 'sub1', <FundOutlined/>, [
        getItem('Индивидуальный план', '/report/plan'),
        getItem('Нагрузка', "/report/workload"),
        getItem('Семестр', '/report/semester'),
    ], "/report"),
    getItem('Управление БД', '/database', <PlusSquareOutlined/>),
];

const MainContainer: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Layout hasSider>
            <Sider theme="light"
                   style={{
                       overflow: 'hidden',
                       height: '200vh',
                       position: 'fixed',
                       left: 0,
                       top: 0,
                       bottom: 0,
                       zIndex: 2
                   }}
            >
                <div className="demo-logo-vertical"/>
                <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} items={items} onClick={(item) => navigate(item.key)}/>
            </Sider>
            <Layout style={{marginLeft: 200, background: '#F5F5F5', minHeight: '100%'}}>
                <Routes>
                    <Route path="/table" element={<TablePage/>}/>
                    <Route path="/report/plan" element={<ReportPlanPage/>}/>
                    <Route path="/report/semester" element={<ReportSemesterPage/>}/>
                    <Route path="/report/workload" element={<ReportWorkloadPage/>}/>
                    <Route path="/database" element={<ManagePage/>}/>
                </Routes>
                <Footer style={{textAlign: 'center'}}/>
            </Layout>
        </Layout>
    );
};

export default MainContainer;