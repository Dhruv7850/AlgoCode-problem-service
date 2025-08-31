import BaseError from './Base.error.js';
import StatusCodes from 'http-status-codes';

export default class NotFound extends BaseError {
    constructor(resourceName, resourceValue) {
        super("NotFound", StatusCodes.NOT_FOUND, `The requested resource: ${resourceName} with value ${resourceValue} not found`,
            {
                resourceName,
                resourceValue
            });
    }
}

