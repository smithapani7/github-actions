const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 8085;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hellooo");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})