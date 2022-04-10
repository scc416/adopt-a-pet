// load .env data into process.env
require("dotenv").config({ path: ".env.local" });

// Web server config
const PORT = process.env.PORT || 3001;
const express = require("express");
const app = express();

//SocketIo config
const { createServer } = require("http");
const httpServer = createServer(app);

// Set up cookie-session
const cookieSession = require("cookie-session");
app.use(cookieSession({ secret: process.env.SECRET }));

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/public", express.static(__dirname + "/public"));

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own

const routes = require("./routes");
app.use("/api", routes(db));

httpServer.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
