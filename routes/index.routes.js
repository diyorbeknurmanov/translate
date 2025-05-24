const { boshSahifa } = require("../controllers/translate.controller");

const router = require("express").Router();

router.get("/", boshSahifa);


module.exports = router