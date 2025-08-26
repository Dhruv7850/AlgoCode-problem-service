import { Router } from 'express';

import problemRouter from './problems.route.js';

const v1Router = Router();

//if any request comes and route starts with /problems, we map it to problemRouter
v1Router.use('/problems', problemRouter);

export default v1Router;