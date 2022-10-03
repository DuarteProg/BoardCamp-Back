import {Router} from "express";
import {getCategory, postCategory} from "../controllers/categoryControllers.js";
import { categoryMiddle } from "../middlewares/categoryMiddle.js";


const categoryRouter = Router();

categoryRouter.get("/categories", getCategory);
categoryRouter.post("/categories",categoryMiddle ,postCategory);

export default categoryRouter;