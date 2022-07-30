const db = require("../config/connection");
const { User } = require("../models");
const { Studio } = require("../models");
const { Reminder } = require("../models");


const studioData = require("./studio.json");
const userData = require("./user.json");

db.once("open", async () => {
  await User.deleteMany({});
  const usersData = await User.insertMany(userData);

  await Studio.deleteMany({});
  const studiosData = await Studio.insertMany(studioData);

  await ReminderList.deleteMany({});
  const reminderData = await Studio.insertMany(reminderData);

  console.log("JIMDB seeded with user, and stuido data!");
  process.exit(0);
});
