import { Model } from 'mongoose';

export type IMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type ISemesterTitle = 'Spring' | 'Summer' | 'Fall';
export type ISemesterCode = '01' | '02' | '03';

export type IAcademicSemester = {
  title: ISemesterTitle;
  year: number;
  code: ISemesterCode;
  startMonth: IMonth;
  endMonth: IMonth;
};

export type AcademicSemesterModel = Model<IAcademicSemester>;
