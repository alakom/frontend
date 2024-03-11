export interface IOptionTable {
    value: string;
    label: string;
}

const OptionTable: IOptionTable[] = [
    {
        value: 'academic-degree',
        label: 'Ученая степень',
    },
    {
        value: 'academic-rank',
        label: 'Ученое звание',
    },
    {
        value: 'department',
        label: 'Кафедра',
    },
    {
        value: 'discipline',
        label: 'Дисциплина',
    },
    {
        value: 'discipline-parameter',
        label: 'Параметры дисциплины',
    },
    {
        value: 'discipline-type',
        label: 'Тип дисциплины',
    },
    {
        value: 'employee',
        label: 'Преподаватели',
    },
    {
        value: 'faculty',
        label: 'Факультет',
    },
    {
        value: 'normas',
        label: 'Нормы',
    },
    {
        value: 'qualification',
        label: 'Квалификация',
    },
    {
        value: 'semester',
        label: 'Семестр',
    },
    {
        value: 'speciality',
        label: 'Направление',
    },
    {
        value: 'student',
        label: 'Студенты',
    },
    {
        value: 'students-group',
        label: 'Учебные группы',
    },
    {
        value: 'study-form',
        label: 'Форма обучения',
    },
    {
        value: 'study-year',
        label: 'Учебный год',
    },
    {
        value: 'working_position',
        label: 'Должности',
    },
    {
        value: 'workload',
        label: 'Нагрузка',
    },
    {
        value: 'workload_assign',
        label: 'Распределение рабочей нагрузки',
    },
]
export default OptionTable;