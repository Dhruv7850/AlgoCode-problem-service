// Corrected constructor
class BaseError extends Error {



    constructor(name, statusCode, message, details) { // <-- Use 'message'

        console.log(`Creating error. statusCode is: ${statusCode}`);

        super(message); // <-- Use 'message'
        this.name = name;
        this.statusCode = statusCode;
        this.details = details;
        Error.captureStackTrace(this);
    }
}
export default BaseError;