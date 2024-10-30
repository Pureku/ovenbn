const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MAIN_ROUTE = require("./src/routers/main.router");

const moment = require("moment");
const cron = require("node-cron");

const port = process.env.PORT || 5000;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse request data content type application/json
app.use(bodyParser.json());

app.use("/", MAIN_ROUTE);

app.listen(port, () => {
  console.log(`Express is running at port ${port}`);
});
