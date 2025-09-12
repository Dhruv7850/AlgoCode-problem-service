const express = require('express');

const { problemController } = require("../../controllers");
const { validateProblem } = require("../../validators/problem.validator");
const authenticate = require("../../utils/authenticate");

const problemRouter = express.Router();

problemRouter.get("/ping", problemController.pingProblemController);
problemRouter.get("/:id", problemController.getProblem);
problemRouter.get("/", problemController.getAllProblems);
problemRouter.post(
  "/",
  authenticate,
  validateProblem,
  problemController.addProblem
);
problemRouter.put(
  "/:id",
  authenticate,
  validateProblem,
  problemController.updateProblem
);
problemRouter.delete("/:id", authenticate, problemController.deleteProblem);


module.exports = problemRouter;
