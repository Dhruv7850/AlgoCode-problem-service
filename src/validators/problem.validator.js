const Joi = require('joi');
const BadRequest = require('../errors/badrequest.error');

const problemSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    description: Joi.string().min(20).required(),
    difficulty: Joi.string().valid('easy', 'medium', 'hard').required(),
    testCases: Joi.array().items(
        Joi.object({
            input: Joi.string().required(),
            output: Joi.string().required()
        })
    ),
    codeStubs: Joi.array().items(
        Joi.object({
            language: Joi.string().valid('CPP', 'JAVA', 'PYTHON').required(),
            startSnippet: Joi.string(),
            endSnippet: Joi.string(),
            userSnippet: Joi.string()
        })
    )
});

const validateProblem = (req, res, next) => {
    const { error } = problemSchema.validate(req.body);
    if (error) {
        const errorDetails = error.details.map(detail => detail.message).join(', ');
        return next(new BadRequest('Problem', errorDetails));
    }
    next();
};

module.exports = {
    validateProblem
};