import React from "react";
import { Table } from "antd";
import { tableContainer } from "../../pages/pages.style";

const CustomTable = (columns: any, data: any) => {
  if (columns?.data) {
    return (
      <div style={tableContainer}>
        <Table columns={columns.columns} dataSource={columns.data} />
      </div>
    );
  }
};

export default CustomTable;
