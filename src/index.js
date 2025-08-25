const express = require("express");
const bodyParser = require('body-parser');
const apiRouter = require('./routes/index')
const { PORT } = require('./config/server.config')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// if any request comes and route starts with /api, we map it to apiRouter
app.use("/api", apiRouter);
app.get("/ping", (req, res) => {
    return res.json({ message: "Problem service is running" })
})



app.listen(PORT, () => {
    console.log(`Server has started : ${PORT}`);
})