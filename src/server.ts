import express from "express";
import { getRepository } from "typeorm";
import User from "./models/User";
import './database/connection'; // conexao com o banco
import routes from "./routes"; // importa a classe rout do src usada para direcionar onde fica o conteudo

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333);
