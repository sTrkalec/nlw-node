import { Router } from "express";
import { CreateUserController } from "./controllers/CreateController";

const router = Router();

const createUserController = new CreateUserController();

router.post("/users", createUserController.handle);

export {router};