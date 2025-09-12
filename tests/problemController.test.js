import problemController from "../src/controllers/problem.controller.js";
import { ProblemService } from "../src/services/problem.service.js";
import { StatusCodes } from "http-status-codes";

jest.mock('../services/problem.service.js');

describe("tests", () => {
    beforeEach(() => {
        req = {},
            res = {
                status: jest.fn(() => res),
                json: jest.fn()
            };

        next = jest.fn();
    })

    test('should get all problems', async () => {
        const problem = [];
        ProblemService.prototype.getAllProblems.mockResolvedValue(problem);

        await problemController.getProblem(req, res, next);

        expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
        expect(ProblemService.prototype.getAllProblems).toHaveBeenCalledWith(1);
        expect(next).not.toHaveBeenCalledWith();
    })

    test('getproblem should call next with error if service throws error', async () => {
        const mockError = new Error('id', 123);
        ProblemService.prototype.getProblem.mockRejectedValue(mockError);
        req.params = { id: 10 };
        await problemController.getProblem(req, res, next);

        expect(next).toHaveBeenCalledTimes(mockError);
        expect(res.status).not.toHaveBeenCalled();
        expect(res.json).not.toHaveBeenCalled();
    })

})