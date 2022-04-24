const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

/*
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
*/
const port = 3301;
const config = require("./config");

const indexRouter = require("./routes/index.js");

app.use(logger("dev"));

const dbUrl = config.dbUrl;

var options = {
  keepAlive: true,
  connectTimeoutMS: 30000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(dbUrl, options, (err) => {
  if (err) console.log(err);
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", indexRouter);

app.listen(port, function () {
  console.log("Runnning on " + port);
});
module.exports = app;
