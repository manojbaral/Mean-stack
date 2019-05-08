import express from 'express';
import clientController from './client.controller';
import passport from "passport/lib";
import invoiceController from "../invoice/invoice.controller";

export const clientRouter = express.Router();
clientRouter.route('/')
  .post(passport.authenticate('jwt',{session:false}),clientController.create)
  .get(passport.authenticate('jwt',{session:false}),clientController.findAll);

clientRouter.route('/:id')
  .delete(passport.authenticate('jwt',{session:false}),clientController.delete)
  .put(passport.authenticate('jwt',{session:false}),clientController.update)
  .get(passport.authenticate('jwt',{session:false}),clientController.findOne);