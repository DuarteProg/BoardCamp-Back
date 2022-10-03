import {Router} from "express";
import {getCostumer, postCostumer, getCostumerId, putCostumer } from "../controllers/costumerControllers.js"
import { costumerMiddle } from "../middlewares/costumerMiddle.js"


const costumerRouter = Router();

costumerRouter.get("/customers", getCostumer);
costumerRouter.get("/customers/:id", getCostumerId);
costumerRouter.post("/customers" ,costumerMiddle ,postCostumer); 
costumerRouter.put("/customers/:id", costumerMiddle, putCostumer);


export default costumerRouter;