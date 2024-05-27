import React, {useState} from "react";
import SelectTable from "../SelectTable/SelectTable";
import OptionTable from "./OptionTable";
import CustomTable from "../CustomTable/CustomTable";
import {
    ColumnsAcademicDegree,
    ColumnsAcademicRank,
    ColumnsDepartment,
    ColumnsDiscipline,
    ColumnsDisciplineParameter,
    ColumnsDisciplineType,
    ColumnsEmployee,
    ColumnsFaculty,
    ColumnsNormas,
    ColumnsQualification,
    ColumnsSemester,
    ColumnsSpeciality,
    ColumnsStudent,
    ColumnsStudentsGroup,
    ColumnsStudyForm,
    ColumnsStudyYear, ColumnsWorkingPosition, ColumnsWorkload, ColumnsWorkloadAssign
} from "./ColumnsTable";
import {useLazyGetTableQuery} from "../../api/tableApi";
import {message} from "antd";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const TableViewer = () => {
    const [currentTable, setCurrentTable] = useState('');
    const [currentColumn, setCurrentColumn] = useState(null);
    const [tableData, setTableData] = useState([]);
    const [fetchTable] = useLazyGetTableQuery();
    const [messageApi, contextHolder] = message.useMessage();

    const changeColumn = (newValue: string) => {
        switch (newValue) {
            case 'academic-degree':
                setCurrentColumn(ColumnsAcademicDegree);
                break;
            case 'academic-rank':
                setCurrentColumn(ColumnsAcademicRank);
                break;
            case 'department':
                setCurrentColumn(ColumnsDepartment);
                break;
            case 'discipline':
                setCurrentColumn(ColumnsDiscipline);
                break;
            case 'discipline-parameter':
                setCurrentColumn(ColumnsDisciplineParameter);
                break;
            case 'discipline-type':
                setCurrentColumn(ColumnsDisciplineType);
                break;
            case 'employee':
                setCurrentColumn(ColumnsEmployee);
                break;
            case 'faculty':
                setCurrentColumn(ColumnsFaculty);
                break;
            case 'normas':
                setCurrentColumn(ColumnsNormas);
                break;
            case 'qualification':
                setCurrentColumn(ColumnsQualification);
                break;
            case 'semester':
                setCurrentColumn(ColumnsSemester);
                break;
            case 'speciality':
                setCurrentColumn(ColumnsSpeciality);
                break;
            case 'student':
                setCurrentColumn(ColumnsStudent);
                break;
            case 'students-group':
                setCurrentColumn(ColumnsStudentsGroup);
                break;
            case 'study-form':
                setCurrentColumn(ColumnsStudyForm);
                break;
            case 'study-year':
                setCurrentColumn(ColumnsStudyYear);
                break;
            case 'working_position':
                setCurrentColumn(ColumnsWorkingPosition);
                break;
            case 'workload-assign':
                setCurrentColumn(ColumnsWorkloadAssign);
                break;
            case 'workload':
                setCurrentColumn(ColumnsWorkload);
                break;
        }
    };

    const changeTable = (value: string) => {
        if (value !== currentTable) {
            setCurrentTable(value);
            changeColumn(value);
            fetchTable(value).then((result) => {
                if(result.error){
                    messageApi.open({
                        key: 'updatable',
                        type: 'error',
                        content: 'Произошла ошибка при получении данных',
                        duration: 2,
                    });
                }
                setTableData(result.data);
            })
        }
    };

    return (
        <>
            {contextHolder}
            <SelectTable optionsTable={OptionTable} changeValue={changeTable}/>
            <CustomTable columns={currentColumn} data={tableData}/>
        </>
    );
}
export default TableViewer;