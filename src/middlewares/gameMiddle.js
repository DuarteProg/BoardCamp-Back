import gameSchema from "../Schemas/gameSchema.js";

export function gameMiddle(req, res, next){
    const validation = gameSchema.validate(req.body, { abortEarly: false });
    if (validation.error) {
      const erros = validation.error.details.map((detail) => detail.message);
      res.status(400).send(erros);
      return;
    }
    next();
}