import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {apiUrl, BASE_API_TABLE_URL} from "./api-url/api-urls";

// Создание API
export const tableApi = createApi({
    reducerPath: 'tableApi',
    baseQuery: fetchBaseQuery(
        {baseUrl: BASE_API_TABLE_URL}),
    endpoints: builder => ({
        getTable: builder.query({
            query: (tableName: string) => apiUrl.getTable(tableName)
        }),
        getDeleteYear: builder.query({
            query: () => apiUrl.getDeleteYear()
        }),
        deleteYear: builder.query({
            query: () => apiUrl.deleteYear()
        }),
    })

});

// Экспортируем результаты запросов
export const {
    useGetTableQuery,
    useLazyGetTableQuery,
    useGetDeleteYearQuery,
    useLazyGetDeleteYearQuery,
    useDeleteYearQuery,
    useLazyDeleteYearQuery,
} = tableApi;
