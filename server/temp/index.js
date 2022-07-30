const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

//test only, can be deleted
const { getTest } = require("../controllers/test");
//router.get("/test", getTest);

module.exports = router;
