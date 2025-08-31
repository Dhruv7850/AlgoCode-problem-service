import express from 'express';
import bodyParser from 'body-parser';
import apiRouter from './routes/index.js'; // Added .js extension
import { PORT } from './config/server.config.js'; // Added .js extension
import errorHandler from './utils/errorHandlers.js'; // Added .js extension and changed import
import connectToDB from './config/db.config.js';
import Problem from './models/problem.model.js'
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

app.listen(PORT, async () => {
    console.log(`Server has started on PORT: ${PORT}`);

    await connectToDB();
    console.log("Successfully connected to DB");


});
