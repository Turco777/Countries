const { Router } = require("express");

const router = Router();

const getAllCountries = require("../controllers/getAllCountries.js");
const getCountryById = require("../controllers/getCountryById.js");
const postActivities = require("../controllers/postActivities.js");
const getActivities = require("../controllers/getActivities.js");

router.get("/countries", getAllCountries);
router.get("/countries/:idPais", getCountryById);
router.post("/activities", postActivities);
router.get("/activities", getActivities);

module.exports = router;
