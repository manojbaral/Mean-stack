import { invoiceRouter } from "./resources/invoice";
import  express from "express";
import { clientRouter } from "./resources/client";
import { userRouter } from "./resources/user/user.router";
import { authRouter } from "./resources/auth";

export const restRouter=express.Router();

//Invoice Router
restRouter.use('/invoices',invoiceRouter);

//Client Router
restRouter.use('/clients',clientRouter);

//uSER rOUTER
restRouter.use('/users',userRouter);

//Auth Router
restRouter.use('/auth',authRouter);