import costumerSchema from "../Schemas/costumerSchema.js";

export function costumerMiddle(req, res, next){
    const validation = costumerSchema.validate(req.body, { abortEarly: false });
    if (validation.error) {
      const erros = validation.error.details.map((detail) => detail.message);
      res.status(400).send(erros);
      return;
    }
    next();
}