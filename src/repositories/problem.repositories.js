import NotFound from '../errors/NotFound.error.js';
import Problem from '../models/problem.model.js'
import logger from '../config/logger.config.js';


class ProblemRepository {

    async createProblem(problemData) {
        try {
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: (problemData.testcase) ? problemData.testcase : []
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
                console.log('--- 1. ERROR CREATED IN SERVICE ---');
                console.log('Is instance of NotFound here?', notFoundError instanceof NotFound);
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
                logger.error(`Problem with id: ${id} not found in the db`)
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