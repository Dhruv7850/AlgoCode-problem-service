import BaseError from './Base.error.js';
import StatusCodes from 'http-status-code';

class internalServer extends BaseError {
    constructor(details) {
        super("internalServer", StatusCodes.internalServer, `Something went wrong!!`, details);
    }
}

module.exports = internalServer;