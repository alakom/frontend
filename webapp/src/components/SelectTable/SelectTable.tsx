import React from "react";
import { Select } from "antd";
import { IOptionTable } from "../TableViewer/OptionTable";
import Title from "antd/lib/typography/Title";
import {
  selectContainer,
  selectStyle,
  selectTitle,
} from "../../pages/pages.style";

interface ISelectTable {
  optionsTable: IOptionTable[];
  changeValue: (value: string) => void;
}

const SelectTable: React.FC = (props: ISelectTable) => {
  const { optionsTable, changeValue } = props;
  return (
    <div style={selectContainer}>
      <Title level={5} style={selectTitle}>
        Выберите таблицу:
      </Title>
      <Select
        style={selectStyle}
        showSearch
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={optionsTable}
        onChange={changeValue}
      />
    </div>
  );
};

export default SelectTable;
