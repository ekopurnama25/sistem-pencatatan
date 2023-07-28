const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");
const app = express();
const port = 5000;
const dotenv = require("dotenv");

dotenv.config();
app.use(bodyParser.json());

app.use(cors());

const usersRoute = require("./router/users.route");
const authRoute = require("./router/auth.route");
const expenditureRoute = require("./router/expenditure.route");
const incomeRoute = require("./router/income.route");

app.use("/v2/users", usersRoute);
app.use("/v2/auth", authRoute);
app.use("/v2/income", incomeRoute);
app.use("/v2/expenditure", expenditureRoute);
app.use("/file", express.static("file"));

app.listen(port, () => {
  db.sequelize.sync();
});
