import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {apiUrl, BASE_API_TABLE_URL} from "./api-url/api-urls";

// Создание API
export const tableApi = createApi({
    reducerPath: 'tableApi',
    baseQuery: fetchBaseQuery(
        { baseUrl: BASE_API_TABLE_URL }),
    endpoints: builder => ({
        getTable: builder.query({
            query: (tableName:string) => apiUrl.getTable(tableName)
        }),
    })

});

// Экспортируем результаты запросов
export const { useGetTableQuery, useLazyGetTableQuery } = tableApi;
