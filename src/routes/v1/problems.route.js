const express = require('express')

const { ProblemController } = require('../../controllers')

const problemRouter = express.Router();

//if any request comes and route continues with /ping, we map it to pingControllerCheck
problemRouter.get('/ping', ProblemController.pingControllerCheck);

problemRouter.get('/:id', ProblemController.getProblem);

problemRouter.get('/', ProblemController.getProblems);

problemRouter.post('/', ProblemController.addProblem);

problemRouter.delete('/:id', ProblemController.deleteProblem);

problemRouter.put('/:id', ProblemController.upadateProblem);

module.exports = problemRouter;