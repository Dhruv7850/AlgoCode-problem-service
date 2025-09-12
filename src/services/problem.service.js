//In thiss layer, we implement business logic which is always generic in nature irrespective of what the db form is

const sanitizeMarkdown = require("../utils/markdownSanitizer");
const NotFound = require("../errors/notfound.error");

class ProblemService {
  //this will help us to interact our service layer to repo layer
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    try {
      //sanitize the markdown
      problemData.description = sanitizeMarkdown(problemData.description);

      //create the problem
      console.log("Problem data", problemData);
      const problem = await this.problemRepository.createProblem(problemData);

      console.log("Problem Created: ", problem);
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblem(problemId) {
    try {
      const problem = await this.problemRepository.getProblem(problemId);

    //   if (!problem) {
    //     throw new NotFound("Problem", problemId);
    //   }

      return problem;
    } catch (error) {
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await this.problemRepository.getAllProblems();
      return problems;
    } catch (error) {
      throw error;
    }
  }

  async updateProblem(problemId, problemData) {
    try {
      if (problemData.description) {
        problemData.description = sanitizeMarkdown(problemData.description);
      }

      const updatedProblem = await this.problemRepository.updateProblem(problemId, problemData);
      return updatedProblem;
    } catch (error) {
      throw error;
    }
  }

  async deleteProblem(problemId){
    try {
        const deletedProblem = await this.problemRepository.deleteProblem(problemId);
        return deletedProblem;
    } catch (error) {
        throw error;
    }
  }
}

module.exports = ProblemService;
