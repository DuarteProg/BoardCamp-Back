rentalMiddle

import {Router} from "express";
import {getRental, postRental} from "../controllers/rentalsControllers.js"
import { rentalMiddle } from "../middlewares/rentalsMiddle.js"


const gameRouter = Router();

gameRouter.get("/rentals", getRental);
gameRouter.post("/rentals" ,rentalMiddle ,postRental); 


export default gameRouter;