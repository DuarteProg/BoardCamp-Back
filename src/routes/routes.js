import {Router} from "express";
import categoryRouter from "./CategoryRouter.js"
import gameRouter from "./gameRouter.js";
import costumerRouter from "./costumerRouter.js"
// rota4

const router = Router();
router.use(categoryRouter);
router.use(gameRouter);
router.use(costumerRouter);
// router.use(rotas4)

export default router;