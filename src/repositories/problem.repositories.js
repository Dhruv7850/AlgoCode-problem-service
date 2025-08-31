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
                console.log('--- 1. ERROR CREATED IN SERVICE ---');
                console.log('Is instance of NotFound here?', notFoundError instanceof NotFound); // Should be TRUE
                throw notFoundError;

            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default ProblemRepository;