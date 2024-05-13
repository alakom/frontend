import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {apiUrl, BASE_API_REPORT_URL} from "./api-url/api-urls";
import {createAsyncThunk} from "@reduxjs/toolkit";

interface IWorkload{
    year: number;
}
// Создание API
export const fetchWorkloadReport = createAsyncThunk(
    'report/fetchWorkloadReport',
    async ({ year }: IWorkload, thunkAPI) => {
        try {
            const response = await fetch(apiUrl.getWorkload(year), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const blob = await response.blob();
            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = `Нагрузка${year}.xlsx`;
            document.body.appendChild(a);
            a.click();

            URL.revokeObjectURL(url);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
