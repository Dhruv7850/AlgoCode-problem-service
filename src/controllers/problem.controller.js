import StatusCodes from 'http-status-codes';
import { notImplemented } from '../errors/notImplemented.error.js';
import BadRequest from '../errors/Badrequest.error.js'

function pingControllerCheck(req, res) {
    return res.json({ message: "Problem controller is up" })
}

function addProblem(req, res, next) {
    try {
        throw new BadRequest('Problem name', { missing: ["problem name"] });
    } catch (error) {
        next(error);
    }
}


function getProblems(req, res, next) {
    try {
        // Now we throw the error on purpose to test the errorHandler
        throw new notImplemented('getProblems');
    } catch (error) {
        next(error);
    }
}


function getProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented"
    });
}

function deleteProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented"
    });
}
function upadateProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented"
    });
}

export default {
    addProblem,
    getProblems,
    getProblem,
    deleteProblem,
    upadateProblem,
    pingControllerCheck
}