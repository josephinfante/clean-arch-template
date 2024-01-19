import { Router } from 'express';
import { UserRepositoryImpl } from './user.repository.impl';
import { UserController } from './user.controller';

const userRouter = Router();
const userRepository = new UserRepositoryImpl();
const userController = new UserController(userRepository);

userRouter.post("/user", userController.create.bind(userController));
userRouter.put("/user", userController.update.bind(userController));
userRouter.delete("/user/:id", userController.delete.bind(userController));
userRouter.get("/user/:id", userController.findById.bind(userController));
userRouter.get("/users", userController.findAll.bind(userController));

export default userRouter;
