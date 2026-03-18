const express = require("express");
const router = express.Router();

const { questionPost, questionGet } = require("../controllers/questionController");
const { authenticateToken } = require("../controllers/authJWT");


router.post("/question", authenticateToken, questionPost);

router.get("/question", questionGet);

module.exports = router;