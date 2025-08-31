import { sanitizeMarkdownContent } from "../utils/markdownSanitize.js";

export class ProblemService {
    constructor(problemRepository) {
        this.problemRepository = problemRepository;

    }

    async createProblem(problemData) {
        //1. Sanitize the markdown for the description
        try {
            problemData.description = sanitizeMarkdownContent(problemData.description)

            const problem = await this.problemRepository.createProblem(problemData);


            return problem;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems() {
        try {
            const problem = await this.problemRepository.getAllProblems();
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(problemId) {
        const problem = await this.problemRepository.getProblem(problemId);
        return problem;
    }
}