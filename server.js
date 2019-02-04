const express = require("express");
const server = express();
const port = process.env.PORT || 5000;
server.set("view engine", "ejs");
server.use(express.static("public"));
server.listen(port, () => {});
