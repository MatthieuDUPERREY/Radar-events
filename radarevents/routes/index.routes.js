const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/about-us", (req, res, next) => {
  res.render("about-us");
})


module.exports = router;
