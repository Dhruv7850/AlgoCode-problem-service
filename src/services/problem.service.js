import { sanitizeMarkdownContent } from "../utils/markdownSanitize.js";

export class ProblemService {
    constructor(problemRepository) {
        this.problemRepository = problemRepository;

    }

    async createProblem(problemData) {
        //1. Sanitize the markdown for the description
        try {
            problemData.description = sanitizeMarkdownContent(problemData.description)
            console.log("problem data", problemData);
            const problem = await this.problemRepository.createProblem(problemData);

            console.log("problem created", problem);
            return problem;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
}