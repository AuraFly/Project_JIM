//JIMDBData is just a placeholder collection! Feel free to alter and remove!
const db = require("../config/connection");
const { JIMDBData } = require("../models");

const jdbData = require("./jdbData.json");

db.once("open", async () => {
  await JIMDBData.deleteMany({});

  const placeholderData = await JIMDBData.insertMany(jdbData);

  console.log("JIMDBData seeded with placeholder data!");
  process.exit(0);
});
