/* eslint-disable no-unused-vars */
import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route';
import { UserRoutes } from './app/modules/user/user.route';

const app: Application = express();
// const port = 5000

// cors middleware
app.use(cors());

// parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Routes
app.use('/api/v1/users/', UserRoutes);
app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);

// testing server
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   Promise.reject(new Error('Unhandled Promise Rejection'));
// });

// Global Error Handler
app.use(globalErrorHandler);

export default app;
