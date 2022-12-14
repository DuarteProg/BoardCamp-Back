import joi from "joi"

const costumerSchema = joi.object({
    name: joi.string().required(),
    phone: joi.number().required(),
    cpf: joi.number().required(),
    birthday: joi.number().required()
});

export default costumerSchema;