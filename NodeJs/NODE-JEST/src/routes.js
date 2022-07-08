import { request, Router } from "express";
import { USERS_CONTROLLER } from "./controllers/usersController.js";


const routes = Router();


routes.get('/users', USERS_CONTROLLER.listarUsuario)

routes.post('/users', USERS_CONTROLLER.criarUsuario)

export { routes }