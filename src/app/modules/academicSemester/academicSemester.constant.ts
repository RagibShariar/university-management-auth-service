import {
  IMonth,
  ISemesterCode,
  ISemesterTitle,
} from './academicSemester.interface';

export const academicSemesterMonth: IMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemesterTitle: ISemesterTitle[] = [
  'Spring',
  'Summer',
  'Fall',
];

export const academicSemesterCode: ISemesterCode[] = ['01', '02', '03'];

export const AcademicSemesterTitleCodeMapper: {
  [key: string]: string;
} = {
  Spring: '01',
  Summer: '02',
  Fall: '03',
};
