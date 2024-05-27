import React, {useEffect, useRef, useState} from 'react';
import {Button, Layout, message, theme, DatePicker} from 'antd';
import Title from "antd/lib/typography/Title";
import {useDispatch} from "react-redux";
import {fetchExampleReport} from "../api/ExampleReportApi";
import {useLazyGetTableQuery} from "../api/tableApi";
import {IStudyYear} from "../components/TableViewer/interfacesTable";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import {fetchAddDataDB} from "../api/AddDataDBApi";

dayjs.extend(customParseFormat);


const {Header, Content} = Layout;


const AddYear = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    const [fetchYear] = useLazyGetTableQuery();
    const [years, setYears] = useState<IStudyYear[] | null>(null);
    const [year, setYear] = useState<dayjs | null>(null);
    const fileInputRef = useRef(null);
    const [messageApi, contextHolder] = message.useMessage();
    const dispatch = useDispatch();

    useEffect(() => {
        getYears();
    }, []);

    useEffect(() => {
        if (!year) {
            getYears();
        }
    }, [year])

    const getYears = () => {
        fetchYear('study-year').then((result) => {
            if (result.error) {
                messageApi.open({
                    key: 'updatable',
                    type: 'error',
                    content: 'Произошла ошибка при получении данных',
                    duration: 2,
                });
            }
            setYears(result.data);
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        messageApi.open({
            key: 'updatable',
            type: 'loading',
            content: 'Загружаем файл',
        });
        const data = {
            year: year?.$y,
            file: formData,
            messageApi: messageApi,
            setYear: setYear,
        }
        dispatch(fetchAddDataDB(data));
        fileInputRef.current.value = '';
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const getMinValue = (years: IStudyYear[]) => {
        if (years) {
            const studyYears = years?.map(item => item.studyYear);
            const maxYear = Math.max(...studyYears) + 1;
            return dayjs(maxYear.toString(), 'YYYY')
        }
    }

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
                    Добавление нового учебного года
                </Title>
            </Header>

            <Content style={{margin: '24px 16px 0', overflow: 'initial', minHeight: '80%'}}>
                <Title level={5} style={{margin: '0 0 20px 5px', flex: 1}}>
                    Выберите учебный год для заполнения
                    <DatePicker
                        picker={"year"}
                        placeholder={"Выберите год"}
                        size={"middle"}
                        format={'YYYY'}
                        minDate={getMinValue(years)}
                        style={{margin: '10px'}}
                        onChange={(date: dayjs, dateString: string) => setYear(date)}
                        value={year}
                    />
                </Title>

                <Title level={5} style={{margin: '0 0 20px 5px', flex: 1}}>
                    Выберите файл для заполнения базы данных (
                    <Button type="link"
                            onClick={() => {
                                messageApi.open({
                                    key: 'updatable',
                                    type: 'loading',
                                    content: 'Загружаем файл',
                                });
                                dispatch(fetchExampleReport(messageApi))
                            }}
                            style={{margin: '0px', padding: '0px', flex: 1}}
                    >файл-образец для заполнения учебного года</Button>)
                </Title>
                <input
                    type="file"
                    style={{display: 'none'}}
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    accept=".xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                />
                {contextHolder}
                <Button
                    style={{margin: '0 0 0 5px', flex: 1}}
                    disabled={!year}
                    onClick={handleButtonClick}>
                    Выберите файл и начните заполнение базы данных
                </Button>
            </Content>
        </>
    );
};
export default AddYear;