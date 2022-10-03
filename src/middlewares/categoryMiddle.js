import categorySchema from "../Schemas/categorySchema.js";

export function categoryMiddle(req, res, next){
    const validation = categorySchema.validate(req.body, { abortEarly: false });
    if (validation.error) {
      const erros = validation.error.details.map((detail) => detail.message);
      res.status(400).send(erros);
      return;
    }
    next();
}