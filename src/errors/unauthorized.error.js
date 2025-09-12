const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class UnauthorizedError extends BaseError {
    constructor(details) {
        super("UnauthorizedError", StatusCodes.UNAUTHORIZED, `Authentication failed`, details);
    }
}

module.exports = UnauthorizedError;