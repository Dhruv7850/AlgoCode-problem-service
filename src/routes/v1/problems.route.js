import { Router } from 'express';

// Corrected: Removed curly braces to correctly import the default export
import ProblemController from '../../controllers/problem.controller.js';

const problemRouter = Router();

// if any request comes and route continues with /ping, we map it to pingControllerCheck
problemRouter.get('/ping', ProblemController.pingControllerCheck);

problemRouter.get('/:id', ProblemController.getProblem);

problemRouter.get('/', ProblemController.getProblems);

problemRouter.post('/', ProblemController.addProblem);

problemRouter.delete('/:id', ProblemController.deleteProblem);

problemRouter.put('/:id', ProblemController.upadateProblem);

export default problemRouter;
