import rentalSchema from "../Schemas/rentalsSchema.js"

export function rentalMiddle(req, res, next){
    const validation = rentalSchema.validate(req.body, { abortEarly: false });
    if (validation.error) {
      const erros = validation.error.details.map((detail) => detail.message);
      res.status(400).send(erros);
      return;
    }
    next();
}