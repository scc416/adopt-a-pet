const express = require("express");
const router = express.Router();

module.exports = (db) => {
  const queryGenerator = require("./db/queryHelpers");

  router.get("/likes", (req, res) => {
    const { visitorId } = req.session;
    if (visitorId) return res.json({});

    res.json({ test: "hello world" });
  });

  router.post("/likes", (req, res) => {
    const { visitorId } = req.session;

    // req.session.user_id = user.id;
    res.json({ test: "hello world" });
  });

  router.delete("/likes", (req, res) => {
    const { visitorId } = req.session;
    res.json({ test: "hello world" });
  });

  return router;
};
