import React from 'react';
import {Table} from 'antd';

const CustomTable = (columns: any, data: any) => {
    if (columns?.data) {
        return (
            <Table columns={columns.columns} dataSource={columns.data}/>);
    }
};

export default CustomTable;