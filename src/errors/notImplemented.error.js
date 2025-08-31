import BaseError from './Base.error.js';
import StatusCodes from 'http-status-codes';

export class notImplemented extends BaseError {
    constructor(methodName) {
        super("notImplemented", StatusCodes.NOT_IMPLEMENTED, `${methodName}Not Implemented`, {});
    }
}

