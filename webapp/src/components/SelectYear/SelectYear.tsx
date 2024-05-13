import React, {useEffect, useState} from 'react';
import {Select} from 'antd';
import {IStudyYear} from "../TableViewer/interfacesTable";
import {IOptionYear} from "./OptionYear";
import Title from "antd/lib/typography/Title";

interface ISelectYear {
    years: IStudyYear[];
    changeValue: (value: number) => void;
}

const SelectYear: React.FC = (props: ISelectYear) => {
    const {years, changeValue} = props;
    const [listYears, setListYears] = useState<IOptionYear[]>([]);
    const renderList = () => {
        const list = [];
        if (years && Array.isArray(years)) { // Проверка, что years определено и является массивом
            years.map(year => {
                if (year && year.studyYear) { // Проверка, что объект year и его свойство studyYear существуют
                    list.push({ value: year.studyYear, label: year.studyYear.toString() });
                }
            });
        }
        setListYears(list);
    };

    useEffect(() => {
        if (years && Array.isArray(years)) { // Проверка, что years определено и является массивом
            renderList();
        }
    }, [years]);
    return (
        <>
            <Title level={5}>Выберите учебный год:</Title>
            <Select
                showSearch
                style={{width: 300}}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? 0).toLowerCase().localeCompare((optionB?.label ?? 0).toLowerCase())
                }
                options={listYears}
                onChange={changeValue}
            /></>
    );

};
export default SelectYear;