import React from 'react';
import {Table} from 'antd';

const CustomTable = (columns: any, data: any) => {
    console.log(1, columns)
    if (columns?.data) {
        return (
            <Table columns={columns.columns} dataSource={columns.data}/>);
    }
};

export default CustomTable;