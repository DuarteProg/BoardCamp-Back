import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import router from "./src/routes/routes.js"

dotenv.config();
const PORT = process.env.PORT;

const server = express();
server.use(cors());
server.use(json());
server.use(router);


server.listen(PORT, () => {
  console.log(`Servidor funcionandona na porta ${PORT}`);
});
