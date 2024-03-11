import {b} from "vite/dist/node/types.d-jgA8ss1A";

export interface IAcademicDegree {
    id?: number;
    descr?: string;
}

export interface IAcademicRank {
    id?: number;
    descr?: string;
}

export interface IDepartment {
    id?: number;
    codeNumber?: number;
    descr?: string;
}

export interface IDiscipline {
    id?: number;
    descr?: string;
    department?: number;
    disciplineType?: number;
    lectureCount?: number;
    practiceCount?: number;
    labCount?: number;
    kr?: boolean;
    kp?: boolean;
    rgr?: boolean;
    zach?: boolean;
    ekz?: boolean;
    kons?: boolean;
    uchPr?: number;
    prPr?: number;
    predDipPr?: number;
    niir?: number;
    konsZaoch?: boolean;
    gek?: boolean;
    gak?: boolean;
    gosEkz?: boolean;
    gakPred?: boolean;
    dpRuk?: boolean;
    dopuskVkr?: boolean;
    retzVkr?: boolean;
    dpRetz?: boolean;
    aspRuk?: boolean;
    magRuk?: boolean;
    magRetz?: boolean;
    rukKaf?: boolean;
    isSpecial?: boolean;
    contr?: boolean;
}

export interface IDisciplineParameter {
    id?: number;
    descr?: string;
    cost?: number;
}

export interface IDisciplineType {
    id?: number;
    descr?: string;
}

export interface IEmployee {
    id?: number;
    employeeName?: string;
    contractNumber?: number;
    rate?: number;
    working_positionbirthday?: string;
    workingPosition?: number;
    academicRank?: number;
    academicDegree?: number;
}

export interface IFaculty {
    id?: number;
    descr?: string;
    fullName?: string;
}

export interface INormas {
    id?: number;
    parameterName?: string;
    value?: number;
    comment?: string;
}

export interface IQualification {
    id?: number;
    descr?: string;
}

export interface ISemester {
    id?: number;
    descr?: string;
    weekCount?: number;
}

export interface ISpeciality {
    id?: number;
    descr?: string;
    faculty?: number;
}

export interface IStudent {
    id?: number;
    descr?: string;
}

export interface IStudentsGroup {
    id?: number;
    descr?: string;
    speciality?: number;
    qualification?: number;
    studyForm?: number;
    studentCount?: number;
    entryYear?: number;
    subgroupCount?: number;
}

export interface IStudyForm {
    id?: number;
    descr?: string;
    descrRus?: string;
}

export interface IStudyYear {
    id?: number;
    studyYear?: number;
}

export interface IWorkingPosition {
    id?: number;
    descr?: string;
}
export interface IWorkload{
    id?: number;
    discipline?: number;
    studyYear?: number;
    semester?: number;
    group?: number;
}
export interface IWorkloadAssign{
    id?: number;
    teacher?: number;
    workload?: number;
    studentCount?: String;
    weeks?: String;
    isContract?: boolean;
}
export interface ITables {
    academicDegree?: IAcademicDegree;
    academicRank?: IAcademicRank;
    department?: IDepartment;
    discipline?: IDiscipline;
    disciplineParameter?: IDisciplineParameter;
    disciplineType?: IDisciplineType;
    employee?: IEmployee;
    faculty?: IFaculty;
    normas?: INormas;
    qualification?: IQualification;
    semester?: ISemester;
    speciality?: ISpeciality;
    student?: IStudent;
    studentsGroup?: IStudentsGroup;
    studyForm?: IStudyForm;
    studyYear?: IStudyYear;
    workingPosition?: IWorkingPosition;
    workload?: IWorkload;
    workloadAssign?: IWorkloadAssign;
}
