import joi from "joi"

const gameSchema = joi.object({
    name: joi.string().required(),
    image: joi.string().required(),
    categoryId: joi.number().required(),
    stockTotal: joi.string().required(),
    pricePerDay: joi.string().required()
});

export default gameSchema;