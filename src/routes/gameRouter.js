import {Router} from "express";
import {getGame, postGame } from "../controllers/gameControlles.js"
import { gameMiddle } from "../middlewares/gameMiddle.js"


const gameRouter = Router();

gameRouter.get("/games", getGame);
gameRouter.post("/games" ,gameMiddle ,postGame); 


export default gameRouter;