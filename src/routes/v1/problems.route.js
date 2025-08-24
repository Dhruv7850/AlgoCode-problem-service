const express = require('express')

const { ProblemController } = require('../../controllers')

const problemRouter = express.Router();

problemRouter.get('/ping', ProblemController.pingControllerCheck);

problemRouter.get('/:id', ProblemController.getProblem);

problemRouter.get('/', ProblemController.getProblems);

problemRouter.post('/', ProblemController.addProblem);

problemRouter.delete('/:id', ProblemController.deleteProblem);

problemRouter.put('/:id', ProblemController.upadateProblem);

module.exports = problemRouter;