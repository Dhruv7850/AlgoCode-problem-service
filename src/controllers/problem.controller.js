import StatusCodes from 'http-status-codes';
import { notImplemented } from '../errors/notImplemented.error.js';
import { ProblemService } from '../services/problem.service.js';
import ProblemRepository from '../repositories/problem.repositories.js'
import NotFound from '../errors/NotFound.error.js';

const problemService = new ProblemService(new ProblemRepository());
function pingControllerCheck(req, res) {
    return res.json({ message: "Problem controller is up" })
}

async function addProblem(req, res, next) {
    try {

        console.log("incoming request body", req.body);
        const newproblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully created a new problem",
            error: {},
            data: newproblem
        })
    } catch (error) {
        next(error);
    }
}


async function getProblems(req, res, next) {
    try {
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully fetched all the problems",
            error: {},
            data: response
        })

    } catch (error) {
        next(error);
    }
}


async function getProblem(req, res, next) {
    try {
        const problem = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully fetched a problem",
            error: {},
            data: problem
        })
    }
    catch (error) {
        next(error);
    }
}


function deleteProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented"
    });
}
function updateProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not Implemented"
    });
}

export default {
    addProblem,
    getProblems,
    getProblem,
    deleteProblem,
    updateProblem,
    pingControllerCheck
}