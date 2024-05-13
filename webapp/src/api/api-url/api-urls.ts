export const BASE_API_TABLE_URL = `${window.location.origin}/api/table`;
export const BASE_API_REPORT_URL = `${window.location.origin}/api/report`;
export const BASE_API_DB_URL = `${window.location.origin}/api/database`;

export const apiUrl = {
    BASE_API_TABLE_URL,
    getTable(nameTable: string) {
        return BASE_API_TABLE_URL+`/${nameTable}`
    },
    getPlan(year: number,id: number) {
        return BASE_API_REPORT_URL+`/ind-plan/file?year=${year}&id=${id}`;
    },
    getWorkload(year: number) {
        return BASE_API_REPORT_URL+`/workload/file?year=${year}`;
    },
    getSemester(year: number, isAutumn: boolean) {
        return BASE_API_REPORT_URL+`/semester/file?year=${year}&isAutumn=${isAutumn}`;
    },
    getExample(){
        return BASE_API_DB_URL+'/example';
    }

};

