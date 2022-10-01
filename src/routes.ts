import { Router } from "express";
import Userscontrollers from "./controllers/UsersControllers";


const routes = Router();

routes.post("/users", Userscontrollers.create);
routes.get("/users", Userscontrollers.index);
routes.get("/users/:id", Userscontrollers.show);
export default routes;