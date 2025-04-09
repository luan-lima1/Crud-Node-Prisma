import { Router } from 'express';
import UserController from '../app/modules/user/controller/user-controller';
import UserService from '../app/modules/user/services/user-service';
import UserRepository from '../app/modules/user/repository/user-repository';

const userRouter = Router();

const instanceController = new UserController(
  new UserService(new UserRepository()),
);

userRouter.post('/users', instanceController.handle);

export default userRouter;
