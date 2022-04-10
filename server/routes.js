const express = require("express");
const router = express.Router();

module.exports = (db) => {
  const queryGenerator = require("./queryHelpers");

  router.get("/", (req, res) => {
    res.json({ test: "hello world" });
  });

  return router;
};
