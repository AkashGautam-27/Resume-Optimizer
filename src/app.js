const express = require("express");
const authRouter = require("./routes/authRoute")
const cookie = require("cookie-parser")

const app = express();

app.use(express.json());
app.use(cookie())
app.use("/auth",authRouter)


module.exports = app;