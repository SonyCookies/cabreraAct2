const express = require("express");
const router = express.Router();
const main = require("../controllers/main.controller.js");

router.get("/", main.home);
router.get("/download", main.download);
router.get("/library", main.library);
router.get("/premium", main.premium);
router.get("/liked_song", main.liked_song);

module.exports = router;
