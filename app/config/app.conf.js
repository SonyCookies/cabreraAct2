const express = require("express");
const path = require("path");
const mainRoute = require("../routes/main.route");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join("app", "views"));
app.use(express.urlencoded({ extended: true }));

app.use("/public",express.static(path.join("public")));
app.use("/src", express.static(path.join("src")));

app.use("/", mainRoute);

module.exports = app;
