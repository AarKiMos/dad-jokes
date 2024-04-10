import { Router } from "express";
import controller from "./controller.js";

const apiRouter = Router();

apiRouter.get("/search", controller.searchJokes);

export default apiRouter;
