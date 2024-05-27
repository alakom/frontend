import {apiUrl} from "./api-url/api-urls";
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

interface INewYear {
    year: number;
    file: any;
    messageApi: any;
    setYear: (t: number | null) => void;
}

// Создание API
export const fetchAddDataDB = createAsyncThunk(
    'dataBase/newYear',
    async (data: INewYear, thunkAPI) => {
        try {
            await axios.post(apiUrl.addData(data.year), data.file).then((result) => {
                data.messageApi.open({
                    key: 'updatable',
                    type: 'success',
                    content: 'Новый учебный год добавлен',
                    duration: 2,
                });
                data.setYear(null);
            });
        } catch (error) {
            data.messageApi.open({
                key: 'updatable',
                type: 'error',
                content: error.response.data ? error.response.data : "Произошла ошибка при добавлении нового учебного года!",
                duration: 2,
            });
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
