import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { StatusCodes } from "http-status-codes";
import User from "../models/User";

export default {
  async create(request: Request, response: Response) {
    //desestruturar o corpo da requisição (JSON)
    console.log(request.body);

    const { nome, salario } = request.body;

    const userRepository = getRepository(User);

    const user = userRepository.create({
      nome,
      salario,
    });

    await userRepository.save(user);

    return response.status(StatusCodes.ACCEPTED).json(user);
  },
  async index(request: Request, response: Response) {
    const userRepository = getRepository(User);

    const users = await userRepository.find();

    response.json(users);
},
async show(request: Request, response: Response) {
  const { id } = request.params;
  const userRepository = getRepository(User);

  const user = await userRepository.findOneOrFail(id);

  response.json(user);
},
};