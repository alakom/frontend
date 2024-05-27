import React from 'react';
import {Select} from 'antd';
import {IOptionTable} from "../TableViewer/OptionTable";
import Title from "antd/lib/typography/Title";

interface ISelectTable {
    optionsTable: IOptionTable[];
    changeValue: (value: string) => void;
}

const SelectTable: React.FC = (props: ISelectTable) => {
    const {optionsTable, changeValue} = props;
    return (
        <>
            <Title level={5} style={{margin: '10px'}}>Выберите таблицу:
                <Select
                    showSearch
                    style={{width: 300,marginLeft: '10px'}}
                    placeholder="Search to Select"
                    optionFilterProp="children"
                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                    filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                    }
                    options={optionsTable}
                    onChange={changeValue}
                />
            </Title>
        </>
    );
}

export default SelectTable;