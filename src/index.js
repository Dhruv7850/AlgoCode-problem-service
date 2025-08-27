import express from 'express';
import bodyParser from 'body-parser';
import apiRouter from './routes/index.js'; // Added .js extension
import { PORT } from './config/server.config.js'; // Added .js extension
import { BaseError } from './errors/Base.error.js'; // Added .js extension
import errorHandler from './utils/errorHandlers.js'; // Added .js extension and changed import

const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// If any request comes and the route starts with /api, we map it to apiRouter
app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
    return res.json({ message: "Problem service is running" });
});

// Error handling middleware should be last
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server has started on PORT: ${PORT}`);

    // Note: Throwing an error here will crash your application on startup.
    // This is generally used for testing the error handler, not for production.
    // For example:
    // try {
    //   throw new BaseError('Startup Test Error', 500, "Something went wrong during startup test.");
    // } catch(error) {
    //   console.error(error.message);
    // }
});
