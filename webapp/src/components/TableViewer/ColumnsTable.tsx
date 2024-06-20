import {
  IAcademicDegree,
  IAcademicRank,
  IDepartment,
  IDiscipline,
  IDisciplineParameter,
  IDisciplineType,
  IEmployee,
  IFaculty,
  INormas,
  IQualification,
  ISemester,
  ISpeciality,
  IStudent,
  IStudentsGroup,
  IStudyForm,
  IStudyYear,
  IWorkingPosition,
  IWorkload,
  IWorkloadAssign,
} from "./interfacesTable";
import { Space, TableProps } from "antd";
import React from "react";
import { CheckOutlined, CloseOutlined, MinusOutlined } from "@ant-design/icons";

export const ColumnsAcademicDegree: TableProps<IAcademicDegree>["columns"] = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Наименование",
    dataIndex: "descr",
    key: "descr",
  },
  // {
  //     title: 'Действие',
  //     key: 'action',
  //     render: (_, record) => (
  //         <Space size="middle">
  //             <a>Изменить</a>
  //             <a>Удалить</a>
  //         </Space>
  //     ),
  // },
];

export const ColumnsAcademicRank: TableProps<IAcademicRank>["columns"] = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Наименование",
    dataIndex: "descr",
    key: "descr",
  },
  // {
  //     title: 'Действие',
  //     key: 'action',
  //     render: (_, record) => (
  //         <Space size="middle">
  //             <a>Изменить</a>
  //             <a>Удалить</a>
  //         </Space>
  //     ),
  // },
];

export const ColumnsDepartment: TableProps<IDepartment>["columns"] = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Код",
    dataIndex: "codeNumber",
    key: "codeNumber",
  },
  {
    title: "Наименование",
    dataIndex: "descr",
    key: "descr",
  },
  // {
  //     title: 'Действие',
  //     key: 'action',
  //     render: (_, record) => (
  //         <Space size="middle">
  //             <a>Изменить</a>
  //             <a>Удалить</a>
  //         </Space>
  //     ),
  // },
];

export const ColumnsDiscipline: TableProps<IDiscipline>["columns"] = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Наименование",
    dataIndex: "descr",
    key: "descr",
  },
  {
    title: "department",
    dataIndex: "department",
    key: "department",
  },
  {
    title: "disciplineType",
    dataIndex: "disciplineType",
    key: "disciplineType",
  },
  {
    title: "lectureCount",
    dataIndex: "lectureCount",
    key: "lectureCount",
  },
  {
    title: "practiceCount",
    dataIndex: "practiceCount",
    key: "practiceCount",
  },
  {
    title: "labCount",
    dataIndex: "labCount",
    key: "labCount",
  },
  {
    title: "kr",
    dataIndex: "kr",
    key: "kr",
    render: (kr) => (
      <span style={{ display: "flex" }}>
        {kr ? <CheckOutlined /> : <CloseOutlined />}
      </span>
    ),
  },
  {
    title: "kp",
    dataIndex: "kp",
    key: "kp",
    render: (kp) => <span>{kp ? <CheckOutlined /> : <CloseOutlined />}</span>,
  },
  {
    title: "rgr",
    dataIndex: "rgr",
    key: "rgr",
    render: (rgr) => <span>{rgr ? <CheckOutlined /> : <CloseOutlined />}</span>,
  },
  {
    title: "zach",
    dataIndex: "zach",
    key: "zach",
    render: (zach) => (
      <span>{zach ? <CheckOutlined /> : <CloseOutlined />}</span>
    ),
  },
  {
    title: "ekz",
    dataIndex: "ekz",
    key: "ekz",
    render: (ekz) => <span>{ekz ? <CheckOutlined /> : <CloseOutlined />}</span>,
  },
  {
    title: "kons",
    dataIndex: "kons",
    key: "kons",
    render: (kons) => (
      <span>{kons ? <CheckOutlined /> : <CloseOutlined />}</span>
    ),
  },
  {
    title: "uchPr",
    dataIndex: "uchPr",
    key: "uchPr",
  },
  {
    title: "prPr",
    dataIndex: "prPr",
    key: "prPr",
  },
  {
    title: "predDipPr",
    dataIndex: "predDipPr",
    key: "predDipPr",
  },
  {
    title: "niir",
    dataIndex: "niir",
    key: "niir",
  },
  {
    title: "konsZaoch",
    dataIndex: "konsZaoch",
    key: "konsZaoch",
    render: (isBool) => (
      <span>{isBool ? <CheckOutlined /> : <CloseOutlined />}</span>
    ),
  },
  {
    title: "gek",
    dataIndex: "gek",
    key: "gek",
    render: (gek) => <span>{gek ? <CheckOutlined /> : <CloseOutlined />}</span>,
  },
  {
    title: "gak",
    dataIndex: "gak",
    key: "gak",
    render: (gak) => <span>{gak ? <CheckOutlined /> : <CloseOutlined />}</span>,
  },
  {
    title: "gosEkz",
    dataIndex: "gosEkz",
    key: "gosEkz",
    render: (gosEkz) => (
      <span>{gosEkz ? <CheckOutlined /> : <CloseOutlined />}</span>
    ),
  },
  {
    title: "gakPred",
    dataIndex: "gakPred",
    key: "gakPred",
    render: (gakPred) => (
      <span>{gakPred ? <CheckOutlined /> : <CloseOutlined />}</span>
    ),
  },
  {
    title: "dpRuk",
    dataIndex: "dpRuk",
    key: "dpRuk",
    render: (gakPred) => (
      <span>{gakPred ? <CheckOutlined /> : <CloseOutlined />}</span>
    ),
  },
  {
    title: "dopuskVkr",
    dataIndex: "dopuskVkr",
    key: "dopuskVkr",
    render: (gakPred) => (
      <span>{gakPred ? <CheckOutlined /> : <CloseOutlined />}</span>
    ),
  },
  {
    title: "retzVkr",
    dataIndex: "retzVkr",
    key: "retzVkr",
    render: (gakPred) => (
      <span>{gakPred ? <CheckOutlined /> : <CloseOutlined />}</span>
    ),
  },
  {
    title: "dpRetz",
    dataIndex: "dpRetz",
    key: "dpRetz",
    render: (gakPred) => (
      <span>{gakPred ? <CheckOutlined /> : <CloseOutlined />}</span>
    ),
  },
  {
    title: "aspRuk",
    dataIndex: "aspRuk",
    key: "aspRuk",
    render: (gakPred) => (
      <span>{gakPred ? <CheckOutlined /> : <CloseOutlined />}</span>
    ),
  },
  {
    title: "magRuk",
    dataIndex: "magRuk",
    key: "magRuk",
    render: (gakPred) => (
      <span>{gakPred ? <CheckOutlined /> : <CloseOutlined />}</span>
    ),
  },
  {
    title: "magRetz",
    dataIndex: "magRetz",
    key: "magRetz",
    render: (gakPred) => (
      <span>{gakPred ? <CheckOutlined /> : <CloseOutlined />}</span>
    ),
  },
  {
    title: "rukKaf",
    dataIndex: "rukKaf",
    key: "rukKaf",
    render: (gakPred) => (
      <span>{gakPred ? <CheckOutlined /> : <CloseOutlined />}</span>
    ),
  },
  {
    title: "isSpecial",
    dataIndex: "isSpecial",
    key: "isSpecial",
    render: (gakPred) => (
      <span>{gakPred ? <CheckOutlined /> : <CloseOutlined />}</span>
    ),
  },
  {
    title: "contr",
    dataIndex: "contr",
    key: "contr",
    render: (gakPred) => (
      <span>{gakPred ? <CheckOutlined /> : <CloseOutlined />}</span>
    ),
  },
  // {
  //     title: 'Действие',
  //     key: 'action',
  //     render: (_, record) => (
  //         <Space size="middle">
  //             <a>Изменить</a>
  //             <a>Удалить</a>
  //         </Space>
  //     ),
  // },
];

export const ColumnsDisciplineParameter: TableProps<IDisciplineParameter>["columns"] =
  [
    {
      title: "№",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Наименование",
      dataIndex: "descr",
      key: "descr",
    },
    {
      title: "cost",
      dataIndex: "cost",
      key: "cost",
      render: (cost) => <span>{cost ? { cost } : <MinusOutlined />}</span>,
    },
    // {
    //     title: 'Действие',
    //     key: 'action',
    //     render: (_, record) => (
    //         <Space size="middle">
    //             <a>Изменить</a>
    //             <a>Удалить</a>
    //         </Space>
    //     ),
    // },
  ];

export const ColumnsDisciplineType: TableProps<IDisciplineType>["columns"] = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Наименование",
    dataIndex: "descr",
    key: "descr",
  },
  // {
  //     title: 'Действие',
  //     key: 'action',
  //     render: (_, record) => (
  //         <Space size="middle">
  //             <a>Изменить</a>
  //             <a>Удалить</a>
  //         </Space>
  //     ),
  // },
];

export const ColumnsEmployee: TableProps<IEmployee>["columns"] = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "ФИО",
    dataIndex: "employeeName",
    key: "employeeName",
  },
  {
    title: "№ контракта",
    dataIndex: "contractNumber",
    key: "contractNumber",
  },
  {
    title: "Ставка",
    dataIndex: "rate",
    key: "rate",
  },
  {
    title: "Дата рождения",
    dataIndex: "birthday",
    key: "birthday",
  },
  {
    title: "Должность",
    dataIndex: "workingPosition",
    key: "workingPosition",
  },
  {
    title: "Ученое звание",
    dataIndex: "academicRank",
    key: "academicRank",
  },
  {
    title: "Ученая степень",
    dataIndex: "academicDegree",
    key: "academicDegree",
  },
  // {
  //     title: 'Действие',
  //     key: 'action',
  //     render: (_, record) => (
  //         <Space size="middle">
  //             <a>Изменить</a>
  //             <a>Удалить</a>
  //         </Space>
  //     ),
  // },
];

export const ColumnsFaculty: TableProps<IFaculty>["columns"] = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Наименование",
    dataIndex: "descr",
    key: "descr",
  },
  {
    title: "ФИО",
    dataIndex: "fullName",
    key: "fullName",
  },
  // {
  //     title: 'Действие',
  //     key: 'action',
  //     render: (_, record) => (
  //         <Space size="middle">
  //             <a>Изменить</a>
  //             <a>Удалить</a>
  //         </Space>
  //     ),
  // },
];
export const ColumnsNormas: TableProps<INormas>["columns"] = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Наименование",
    dataIndex: "parameterName",
    key: "parameterName",
  },
  {
    title: "Значение",
    dataIndex: "value",
    key: "value",
  },
  {
    title: "Комментарий",
    dataIndex: "comment",
    key: "comment",
  },
  // {
  //     title: 'Действие',
  //     key: 'action',
  //     render: (_, record) => (
  //         <Space size="middle">
  //             <a>Изменить</a>
  //             <a>Удалить</a>
  //         </Space>
  //     ),
  // },
];
export const ColumnsQualification: TableProps<IQualification>["columns"] = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Наименование",
    dataIndex: "descr",
    key: "descr",
  },
  // {
  //     title: 'Действие',
  //     key: 'action',
  //     render: (_, record) => (
  //         <Space size="middle">
  //             <a>Изменить</a>
  //             <a>Удалить</a>
  //         </Space>
  //     ),
  // },
];
export const ColumnsSemester: TableProps<ISemester>["columns"] = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Наименование",
    dataIndex: "descr",
    key: "descr",
  },
  {
    title: "Кол-во недель",
    dataIndex: "weekCount",
    key: "weekCount",
  },
  // {
  //     title: 'Действие',
  //     key: 'action',
  //     render: (_, record) => (
  //         <Space size="middle">
  //             <a>Изменить</a>
  //             <a>Удалить</a>
  //         </Space>
  //     ),
  // },
];
export const ColumnsSpeciality: TableProps<ISpeciality>["columns"] = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Наименование",
    dataIndex: "descr",
    key: "descr",
  },
  {
    title: "Факультет",
    dataIndex: "faculty",
    key: "faculty",
  },
  // {
  //     title: 'Действие',
  //     key: 'action',
  //     render: (_, record) => (
  //         <Space size="middle">
  //             <a>Изменить</a>
  //             <a>Удалить</a>
  //         </Space>
  //     ),
  // },
];
export const ColumnsStudent: TableProps<IStudent>["columns"] = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Наименование",
    dataIndex: "descr",
    key: "descr",
  },
  // {
  //     title: 'Действие',
  //     key: 'action',
  //     render: (_, record) => (
  //         <Space size="middle">
  //             <a>Изменить</a>
  //             <a>Удалить</a>
  //         </Space>
  //     ),
  // },
];
export const ColumnsStudentsGroup: TableProps<IStudentsGroup>["columns"] = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Наименование",
    dataIndex: "descr",
    key: "descr",
  },
  {
    title: "speciality",
    dataIndex: "speciality",
    key: "speciality",
  },
  {
    title: "qualification",
    dataIndex: "qualification",
    key: "qualification",
  },
  {
    title: "studyForm",
    dataIndex: "studyForm",
    key: "studyForm",
  },
  {
    title: "studentCount",
    dataIndex: "studentCount",
    key: "studentCount",
  },
  {
    title: "entryYear",
    dataIndex: "entryYear",
    key: "entryYear",
  },
  {
    title: "subgroupCount",
    dataIndex: "subgroupCount",
    key: "subgroupCount",
  },
  // {
  //     title: 'Действие',
  //     key: 'action',
  //     render: (_, record) => (
  //         <Space size="middle">
  //             <a>Изменить</a>
  //             <a>Удалить</a>
  //         </Space>
  //     ),
  // },
];
export const ColumnsStudyForm: TableProps<IStudyForm>["columns"] = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Наименование",
    dataIndex: "descr",
    key: "descr",
  },
  {
    title: "descrRus",
    dataIndex: "descrRus",
    key: "descrRus",
  },
  // {
  //     title: 'Действие',
  //     key: 'action',
  //     render: (_, record) => (
  //         <Space size="middle">
  //             <a>Изменить</a>
  //             <a>Удалить</a>
  //         </Space>
  //     ),
  // },
];

export const ColumnsStudyYear: TableProps<IStudyYear>["columns"] = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Учебный год",
    dataIndex: "studyYear",
    key: "studyYear",
  },
  // {
  //     title: 'Действие',
  //     key: 'action',
  //     render: (_, record) => (
  //         <Space size="middle">
  //             <a>Изменить</a>
  //             <a>Удалить</a>
  //         </Space>
  //     ),
  // },
];
export const ColumnsWorkingPosition: TableProps<IWorkingPosition>["columns"] = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Наименование",
    dataIndex: "descr",
    key: "descr",
  },
  // {
  //     title: 'Действие',
  //     key: 'action',
  //     render: (_, record) => (
  //         <Space size="middle">
  //             <a>Изменить</a>
  //             <a>Удалить</a>
  //         </Space>
  //     ),
  // },
];
export const ColumnsWorkload: TableProps<IWorkload>["columns"] = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Дисциплина",
    dataIndex: "discipline",
    key: "discipline",
  },
  {
    title: "Учебный год",
    dataIndex: "studyYear",
    key: "studyYear",
  },
  {
    title: "Семестр",
    dataIndex: "semester",
    key: "semester",
  },
  {
    title: "Учебная группа",
    dataIndex: "idGroup",
    key: "idGroup",
  },
  // {
  //     title: 'Действие',
  //     key: 'action',
  //     render: (_, record) => (
  //         <Space size="middle">
  //             <a>Изменить</a>
  //             <a>Удалить</a>
  //         </Space>
  //     ),
  // },
];

export const ColumnsWorkloadAssign: TableProps<IWorkloadAssign>["columns"] = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Преподаватель",
    dataIndex: "teacher",
    key: "teacher",
  },
  {
    title: "Нагрузка",
    dataIndex: "workload",
    key: "workload",
  },
  {
    title: "Кол-во студентов",
    dataIndex: "studentCount",
    key: "studentCount",
  },
  {
    title: "weeks",
    dataIndex: "weeks",
    key: "weeks",
  },
  {
    title: "contract",
    dataIndex: "contract",
    key: "contract",
    render: (isBool) => (
      <span>{isBool ? <CheckOutlined /> : <CloseOutlined />}</span>
    ),
  },
  // {
  //     title: 'Действие',
  //     key: 'action',
  //     render: (_, record) => (
  //         <Space size="middle">
  //             <a>Изменить</a>
  //             <a>Удалить</a>
  //         </Space>
  //     ),
  // },
];
