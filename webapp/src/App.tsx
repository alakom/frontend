import React, {useEffect, useState} from 'react';
import {useGetTableQuery, useLazyGetTableQuery} from "./api/tableApi.ts";
import CustomTable from "./components/CustomTable/CustomTable.tsx";
import {ColumnsAcademicDegree} from "./components/TableViewer/ColumnsTable.tsx";
import {IAcademicDegree} from "./components/TableViewer/interfacesTable.ts";
import SelectTable from "./components/SelectTable/SelectTable";
import TableViewer from "./components/TableViewer/TableViewer";
import MainContainer from "./containers/MainContainer/MainContainer";
import { Navigate, Route, Routes } from 'react-router-dom';
import {message} from "antd";

const App = () => {
    return (
        <>
            <MainContainer/>
        </>
    );
};
export default App;