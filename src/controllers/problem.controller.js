const BadRequest = require("../errors/badrequest.error");
const NotImplemented = require("../errors/notImplemented.error");

const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");

//initialize a new object, here problemService
const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
  return res.json({ message: "Problem Controller is Working" });
}

async function addProblem(req, res, next) {
  try {
    //nothing implemeneted
    // throw new NotImplemented("Add Problem");

    //Implementation
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Problem created successfully",
      error: {},
      data: newProblem,
    });
  } catch (error) {
    next(error);
  }
}

async function getProblem(req, res, next) {
  try {
    const problem = await problemService.getProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      error: {},
      message: "Successfully fetched a problem",
      data: problem,
    });
  } catch (error) {
    next(error);
  }
}

async function getAllProblems(req, res) {
  try {
    //nothing implemeneted
    // throw new NotImplemented("Add Problem");
    const allProblems = await problemService.getAllProblems();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "All Problems are fetched successfully",
      error: {},
      data: allProblems,
    });
  } catch (error) {
    next(error);
  }
}

async function updateProblem(req, res, next) {
    try {
        const updatedProblem = await problemService.updateProblem(req.params.id, req.body);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully updated the problem',
            error: {},
            data: updatedProblem
        });
    } catch(error) {
        next(error);
    }
}

async function deleteProblem(req, res, next) {
    try {
        const deletedProblem = await problemService.deleteProblem(req.params.id);
        // console.log(deletedProblem)
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully deleted the problem',
            error: {},
            data: deletedProblem
        });
    } catch(error) {
        next(error);
    }
}

module.exports = {
  pingProblemController,
  addProblem,
  getProblem,
  getAllProblems,
  updateProblem,
  deleteProblem,
};
