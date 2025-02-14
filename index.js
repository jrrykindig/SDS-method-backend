const express = require("express");
const staging = require("./config/staging_env.json");

const team = require("./routes/team_api_endpoint");
const auth = require("./routes/auth_api_endpoint");

const app = express();
app.use(express.json());

app.use("/ibm/api/v1/team", team);

app.use("/ibm/api/v1/auth", auth);

//connects to the database
require("./connection/db_connection")();

//main
function start() {
  console.log(`Server started on port ${port}`);
}
const port = process.env.PORT || staging.port;
const server = app.listen(port, start);

module.exports = server;
