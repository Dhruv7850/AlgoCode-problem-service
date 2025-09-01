import BaseError from './Base.error.js';
import StatusCodes from 'http-status-code';

class internalServer extends BaseError {
    constructor(details) {
        super("internalServer", StatusCodes.INTERNAL_SERVER_ERROR, `Something went wrong!!`, details);
    }
}

export default internalServer;