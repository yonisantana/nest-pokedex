import * as Joi from 'joi'

// definir valores para las variables de entorno, para cuando se instancie EnvConfiguration ya lleguen valores por defaul
export const JoiValidationSchema = Joi.object({
    MONGODB: Joi.required(),
    PORT: Joi.number().default(3000),
    DEFAULT_LIMIT: Joi.number().default(3),
})