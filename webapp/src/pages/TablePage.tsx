import React from 'react';
import {Layout, theme} from 'antd';
import Title from "antd/lib/typography/Title";
import TableViewer from "../components/TableViewer/TableViewer";

const {Header, Content} = Layout;

const TablePage = () => {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
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
                    Таблицы
                </Title>
            </Header>

            <Content style={{margin: '24px 16px 0', overflow: 'initial', minHeight: '80%'}}>
                <TableViewer/>
            </Content>
        </>
    );
};
export default TablePage;