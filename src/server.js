import express from "express";
import Path from "node:path";
import apiRouter from "./api/routes.js";

const dirname = import.meta.dirname;

const server = express();
server.use(express.json());

server.use(express.static(Path.join(dirname, "../public")));
server.use("/api/v1/jokes", apiRouter);

export default server;
