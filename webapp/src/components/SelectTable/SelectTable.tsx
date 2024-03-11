import React from 'react';
import {Select} from 'antd';
import {IOptionTable} from "../TableViewer/OptionTable";

interface ISelectTable {
    optionsTable: IOptionTable[];
    changeValue: (value: string) => void;
}

const SelectTable: React.FC = (props: ISelectTable) => {
    const {optionsTable, changeValue} = props;
    return (
        <Select
            showSearch
            style={{width: 300}}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={optionsTable}
            onChange={changeValue}
        />
    );
}

export default SelectTable;