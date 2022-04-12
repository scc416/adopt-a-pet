const express = require("express");
const router = express.Router();

module.exports = (db) => {
  const queryGenerator = require("./db/queryHelpers");
  const { getLikes, postLikes, deleteLikes, getLike } = queryGenerator(db);

  router.get("/likes", async (req, res) => {
    const { visitorId } = req.session;
    if (visitorId) return res.json({});

    try {
      const likes = await getLikes(visitorId);
      res.json(likes);
    } catch (err) {
      console.log(err.message);
    }
  });

  router.get("/likes/:petId", async (req, res) => {
    const { visitorId } = req.session;
    if (visitorId) return res.json({});
    const { petId } = req.params;
    try {
      const likes = await getLike(visitorId, petId);
      res.json(likes);
    } catch (err) {
      console.log(err.message);
    }
  });

  router.post("/likes/:petId", async (req, res) => {
    const { visitorId } = req.session;
    const { petId } = req.params;
    try {
      const result = postLikes(visitorId, petId);
      if (!visitorId) req.session.visitor_id = result.visitor_id;
      res.json(result);
    } catch (err) {
      console.log(err.message);
    }
  });

  router.delete("/likes", (req, res) => {
    const { visitorId } = req.session;
    res.json({ test: "hello world" });
  });

  return router;
};
