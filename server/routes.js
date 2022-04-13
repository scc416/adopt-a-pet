const express = require("express");
const router = express.Router();

module.exports = (db) => {
  const queryGenerator = require("./db/queryHelpers");
  const { getLikes, postLikes, getLike } = queryGenerator(db);

  router.get("/likes", async (req, res) => {
    const { visitor_id } = req.session;
    if (!visitor_id) return res.json([]);

    try {
      const likes = await getLikes(visitor_id);
      res.json(likes);
    } catch (err) {
      console.log(err.message);
    }
  });

  router.get("/likes/:petId", async (req, res) => {
    const { visitor_id } = req.session;
    console.log(visitor_id);
    if (!visitor_id) return res.json([]);
    const { petId } = req.params;
    try {
      const likes = await getLike(visitor_id, petId);
      res.json(likes);
    } catch (err) {
      console.log(err.message);
    }
  });

  router.post("/likes/:petId", async (req, res) => {
    const { visitor_id } = req.session;
    const { petId } = req.params;
    try {
      const result = await postLikes(visitor_id, petId);
      if (!visitor_id) {
        req.session.visitor_id = result;
      }
      res.json(result);
    } catch (err) {
      console.log(err.message);
    }
  });

  return router;
};
