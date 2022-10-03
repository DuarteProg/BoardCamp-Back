import joi from "joi"

const rentalSchema = joi.object({
    rentDate: joi.number().required(),
    daysRented: joi.number().required(),
    returnDate: joi.number().required(),
    originalPrice: joi.number().required(),
    delayFee: joi.number().required(),
});

export default rentalSchema;