import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { IEmployee } from "../TableViewer/interfacesTable";
import { IOptionTeacher } from "./OptionTeacher";
import Title from "antd/lib/typography/Title";
import {
  container,
  selectReportStyle,
  selectTitle,
} from "../../pages/pages.style";

interface ISelectTeacher {
  employee: IEmployee[];
  changeValue: (value: number) => void;
}

const SelectTeacher: React.FC = (props: ISelectTeacher) => {
  const { employee, changeValue } = props;
  const [listEmployee, setListEmployee] = useState<IOptionTeacher[]>([]);
  const renderList = () => {
    const list = [];
    employee.map((emp) => {
      list.push({ value: emp.id, label: emp.employeeName });
    });
    setListEmployee(list);
  };
  useEffect(() => {
    if (employee) {
      renderList();
    }
  }, [employee]);
  return (
    <div style={container}>
      <Title level={5} style={selectTitle}>
        Выберите преподавателя:
      </Title>
      <Select
        style={selectReportStyle}
        showSearch
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={listEmployee}
        onChange={changeValue}
      />
    </div>
  );
};
export default SelectTeacher;
