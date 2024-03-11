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

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Таблицы', '1', <TableOutlined/>),
    getItem('Отчёты', 'sub1', <FundOutlined/>, [
        getItem('Tom', '2'),
        getItem('Bill', '3'),
        getItem('Alex', '4'),
    ]),
    getItem('Управление базой данных', '5', <PlusSquareOutlined/>),
];

const MainContainer: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout hasSider >
            <Sider theme="light"
                style={{ overflow: 'hidden', height: '200vh', position: 'fixed', left: 0, top: 0, bottom: 0, zIndex: 2 }}
            >
                <div className="demo-logo-vertical" />
                <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} items={items} />
            </Sider>
            <Layout style={{ marginLeft: 200, background: '#F5F5F5', minHeight: '100%' }}>
                <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Title level={3} style={{ margin: '0 0 0 5px', flex: 1 }}>
                        Редактирование таблиц
                    </Title>
                </Header>

                <Content style={{ margin: '24px 16px 0', overflow: 'initial', minHeight: '80%' }}>
                    <TableViewer/>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainContainer;