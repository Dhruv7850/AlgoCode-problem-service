import { BaseError } from '../errors/Base.error.js'; // Use import with curly braces for named export
import StatusCodes from 'http-status-codes';


// Use 'export default' to make this the default export of the file
export default function errorHandler(err, req, res, next) {

    console.log(err);

    if (err instanceof BaseError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.details,
            data: {} // because this is an exception so no data is going to be provided.
        });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Something went wrong",
        error: err.message, // It's better to send err.message than the whole object
        data: {} // because this is an exception so no data is going to be provided
    });
}
