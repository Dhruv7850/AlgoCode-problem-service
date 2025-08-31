import NotFound from '../errors/NotFound.error.js';
import Problem from '../models/problem.model.js'

class ProblemRepository {

    async createProblem(problemData) {
        try {
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: (problemData.testCases) ? problemData.testCases : []
            });
            return problem;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems() {
        try {
            const problem = await Problem.find({});
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(id) {
        try {
            const problem = await Problem.findById(id);
            if (!problem) {
                const notFoundError = new NotFound("problem", id);
                throw notFoundError;

            }
            return problem;
        } catch (error) {

            throw error;
        }
    }

    async deleteProblem(id) {
        try {
            const deletedproblem = await Problem.findByIdAndDelete(id);
            if (!deletedproblem) {
                const notFoundError = new NotFound("problem", id);
                throw notFoundError;

            }

            return deletedproblem

        } catch (error) {
            throw error;
        }
    }

    async updateProblem(id) {
        try {
            const updatedproblem = await Problem.findByIdAndUpdate(id, updatedData, { new: true });
            if (!updatedproblem) {
                const notFoundError = new NotFound("problem", id);
                throw notFoundError;

            }

            return updatedproblem;
        } catch (error) {
            throw error;
        }
    }
}

export default ProblemRepository;