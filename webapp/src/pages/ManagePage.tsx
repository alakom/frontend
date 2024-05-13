import React from 'react';
import {Button, Flex, Layout, message, theme, UploadProps} from 'antd';
import Title from "antd/lib/typography/Title";
import TableViewer from "../components/TableViewer/TableViewer";
import Upload from "antd/lib/upload/Upload";
import {useDispatch} from "react-redux";
import {fetchExampleReport} from "../api/ExampleReportApi";

const {Header, Content} = Layout;


const ManagePage = () => {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    const props: UploadProps = {
        name: 'file',
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        headers: {
            authorization: 'authorization-text',
        },
        accept: ".xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        onChange(info) {
        },
    };
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
                    Управление базой данных
                </Title>
            </Header>

            <Content style={{margin: '24px 16px 0', overflow: 'initial', minHeight: '80%'}}>

                <Title level={5} style={{margin: '0 0 20px 5px', flex: 1}}>
                    Выберите файл для заполнения базы данных (
                    <Button type="link"
                            onClick={() => {
                                dispatch(fetchExampleReport())
                            }}
                            style={{margin: '0px', padding: '0px', flex: 1}}
                    >файл-образец для заполнения учебного года</Button>)
                </Title>
                <Upload {...props}>
                    <Button style={{margin: '0 0 0 5px', flex: 1}}>Нажмите, чтобы выбрать файл для загрузки</Button>
                </Upload>
            </Content>
        </>
    );
};
export default ManagePage;