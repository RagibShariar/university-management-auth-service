import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { UserRoutes } from '../modules/user/user.route';

const router = express.Router();

router.use('/users/', UserRoutes);
router.use('/academic-semesters', AcademicSemesterRoutes);

export default router;
