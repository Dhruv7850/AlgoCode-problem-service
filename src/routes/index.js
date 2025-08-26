import { Router } from 'express';

import v1Router from './v1/index.js';

const apiRouter = Router();

//if any request comes and route starts with /v1, we map it to apiRouter
apiRouter.use('/v1', v1Router);

export default apiRouter;