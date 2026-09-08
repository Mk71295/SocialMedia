import {signup} from "./auth.controller";
import express from "express";
const userRouter = express.Router();
userRouter.post("/add", signup);
export default userRouter;