import { RequestHandler } from 'express';
import { UserService } from './user.service';

const createUser: RequestHandler = async (req, res) => {
  const { user } = req.body;
  const result = await UserService.createUser(user);
  res.status(200).json({
    success: true,
    message: 'User created successfully',
    data: result,
  });
};
export const UserController = {
  createUser,
};
