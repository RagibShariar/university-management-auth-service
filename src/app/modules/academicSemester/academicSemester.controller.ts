import { RequestHandler } from 'express';
import { paginationFields } from '../../../constants/pagination';
import pick from '../../../shared/pick';
import { AcademicSemesterService } from './academicSemester.service';

// create a new semester
const createSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );

    res.status(200).json({
      success: true,
      message: 'Semester is created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// get all semester by paginations
const getAllSemesters: RequestHandler = async (req, res) => {
  const paginationOptions = pick(req.query, paginationFields);
  // console.log(paginationOptions);

  const result = await AcademicSemesterService.getAllSemesters(
    paginationOptions
  );
  res.status(200).json({
    success: true,
    message: 'Semesters are retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
};

export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
};
