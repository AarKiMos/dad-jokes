import { Router } from "express";
import controller from "./controller.js";

const apiRouter = Router();

apiRouter.get("/search", controller.searchJokes);
apiRouter.get("/saved", controller.listSavedJokes);
apiRouter.post("/saved", controller.createSavedJoke);
apiRouter.delete("/saved/:joke_id", controller.deleteSavedJokeById);

export default apiRouter;
