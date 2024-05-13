import React, {useEffect, useState} from 'react';
import {Select} from 'antd';
import {IOptionSemester} from "./OptionSemester";
import Title from "antd/lib/typography/Title";

interface ISelectYear {
    changeValue: (value: boolean) => void;
}

const SelectSemester: React.FC = (props: ISelectYear) => {
    const {changeValue} = props;
    const [listSemester, setListSemester] = useState<IOptionSemester[]>([]);
    const renderList = () => {
        const list = [];
        list.push({
            value: true,
            label: "Осенний"
        });
        list.push({
            value: false,
            label: "Весенний"
        });
        setListSemester(list);
    };

    useEffect(() => {
        renderList();
    }, []);
    return (
        <>
            <Title level={5}>Выберите семестр:</Title>
            <Select
                showSearch
                style={{width: 300}}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? 0).toLowerCase().localeCompare((optionB?.label ?? 0).toLowerCase())
                }
                options={listSemester}
                onChange={changeValue}
            /></>
    );

};
export default SelectSemester;