import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {apiUrl} from "./api-url/api-urls";
import {createAsyncThunk} from "@reduxjs/toolkit";

// Создание API
export const fetchExampleReport = createAsyncThunk(
    'report/fetchExampleReport',
    async (messageApi,thunkAPI) => {
        try {
            const response = await fetch(apiUrl.getExample(), {
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
            a.download = `ПримерВходногоФайла.xlsx`;
            document.body.appendChild(a);
            a.click();
            URL.revokeObjectURL(url);
            messageApi.open({
                key: 'updatable',
                type: 'success',
                content: 'Файл получен',
                duration: 2,
            });

        } catch (error) {
            messageApi.open({
                key: 'updatable',
                type: 'error',
                content: 'Произошла ошибка при получении файла',
                duration: 2,
            });
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
