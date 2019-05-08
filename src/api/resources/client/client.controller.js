import { BAD_REQUEST, INTERNAL_SERVER_ERROR, NOT_FOUND } from "http-status-codes";
import clientService from "./client.service";
import Client from './client.model';

export default {
//create Client
  async create(req, res) {
    try {
    const { value, error } = clientService.validateCreateSchema(req.body);
    if (error && error.details) {
      return res.status(BAD_REQUEST).json(error);
    }
    const client = await Client.create(value);
    return res.json(value);
     } catch (err) {
     return res.status(INTERNAL_SERVER_ERROR).json(err);
    }
    },

  //Find all clients
  async findAll(req, res) {
    try {
      const client = await Client.find();
      return res.json(client);
    } catch (err) {
      return res.status(INTERNAL_SERVER_ERROR).json(err);
    }
  },

  //Find Single Client
  async findOne(req, res) {
    try {
      const client = await Client.findById(req.params.id);
      if (!client) {
        return res.status(NOT_FOUND).json({ err: 'client not found' });
      }
      return res.json(client);
    } catch (err) {
      return res.status(INTERNAL_SERVER_ERROR).json(err);
    }
  },

//   //Delete Client
  async delete(req, res) {
  try {
    const client = await Client.findOneAndRemove({ _id: req.params.id });
    if (!client) {
      return res.status(NOT_FOUND).json({ err: "could not delete client" });
    }
    return res.json(client);
  } catch (err) {
    return res.status(INTERNAL_SERVER_ERROR).json(err);
  }
},
 //Update Client
  async update(req, res) {
    try {
      const { value, error } = clientService.validateUpdateSchema(req.body);
      if (error && error.details) {
        return res.status(BAD_REQUEST).json(error);
      }
      const client = await Client.findOneAndUpdate(
        { _id: req.params.id },
        value,
        { new: true }
      );
      return res.json(client);
    } catch (err) {
      return res.status(INTERNAL_SERVER_ERROR).json(err);
    }
  }
};
