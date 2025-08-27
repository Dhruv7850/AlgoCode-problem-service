import { BaseError } from './Base.error.js';
import StatusCodes from 'http-status-codes';

export default class BadRequest extends BaseError {
    constructor(propertyName, details) {
        super("BadRequest", StatusCodes.BAD_REQUEST, `Invalid structure  for ${propertyName} provided`, details);
    }
}

