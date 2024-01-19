import { Router } from "express";
import userRouter from "./users/user.routes";

const appRouter = Router();

appRouter.use("/", userRouter);

export default appRouter;