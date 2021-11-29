const express = require("express");
const mongoose = require("mongoose");


const connect = require("./configuration/db.js")

const Company = require("./model/company.model")

const Job = require("./model/job.model")



const companiesControllers = require("./controller/company.controller");
const jobsControllers = require("./controller/job.controller");


const app = express();

app.use(express.json());

app.use("/companies", companiesControllers);
app.use("/jobs", jobsControllers);





app.listen(7575, async function () {
  await connect();
  console.log("listening on port 7575");
});