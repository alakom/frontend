export const BASE_API_URL = `${window.location.origin}/api/table`;

export const apiUrl = {
    BASE_API_URL,
    getTable(nameTable: string) {
        return BASE_API_URL+`/${nameTable}`
    },
};

