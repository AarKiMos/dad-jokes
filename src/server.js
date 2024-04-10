import express from "express";
import apiRouter from "./api/routes.js";

const server = express();
server.use(express.json());

server.use("/api/v1/jokes", apiRouter);

export default server;
