const { problemModel } = require("../models");
const NotFound = require("../errors/notfound.error");
const logger = require("../config/logger.config");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await problemModel.create({
        title: problemData.title,
        description: problemData.description,
        difficulty: problemData.difficulty,
        codeStubs: problemData.codeStubs,
        testCases: problemData.testCases ? problemData.testCases : [],
      });
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblem(id) {
    try {
      const problem = await problemModel.findById(id);
      if (!problem) {
        logger.warn(`Problem with id: ${id} does not exist in db`);
        throw new NotFound("Problem", id);
      }
      return problem;
    } catch (error) {
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await problemModel.find({});
      return problems;
    } catch (error) {
      throw error;
    }
  }

  async updateProblem(id, problemData) {
    try {
      // findByIdAndUpdate will return the updated document if found, otherwise null
      const updatedProblem = await problemModel.findByIdAndUpdate(
        id,
        problemData,
        {
          new: true, // This option returns the modified document rather than the original
        }
      );

      if (!updatedProblem) {
        logger.warn(`Problem with id ${id} not found for update`);
        throw new NotFound("Problem", id);
      }
      return updatedProblem;
    } catch (error) {
      // Re-throw the error to be handled by the service/controller layer
      throw error;
    }
  }

  async deleteProblem(id) {
    try {
      const deletedProblem = await problemModel.findByIdAndDelete(id);
      if (!deletedProblem) {
        logger.info(`Problem with id ${id} not found for deletion`);
        throw new NotFound("Problem", id);
      }
      return deletedProblem;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProblemRepository;
