var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "어부의 로또 추첨기" });
});

module.exports = router;
