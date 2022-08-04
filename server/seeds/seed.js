const db = require("../config/connection");
const { User, Studio, Reminder, Product, Category } = require("../models");

const studioData = require("./studio.json");
const userData = require("./user.json");
const reminderData = require("./reminder.json");

db.once("open", async () => {
  await User.deleteMany({});
  const usersData = await User.insertMany(userData);

  await Studio.deleteMany({});
  const studiosData = await Studio.insertMany(studioData);

  await Reminder.deleteMany({});
  const remindersData = await Reminder.insertMany(reminderData);

  await Category.deleteMany({});
  const categories = await Category.insertMany([
    { name: "Services" },
    { name: "Merchandise" },
    { name: "Donation" },
  ]);

  const products = await Product.insertMany([
    {
      name: "Invoice - Basic",
      description: "Baic invoice services.",
      image: "inv1.png",
      category: categories[0]._id,
      price: 0.99,
      quantity: 999,
      likes: Math.floor(Math.random() * (50 - 0) + 0),
    },
    {
      name: "Invoice - Pro",
      description: "Pro invoice services.",
      image: "inv1.png",
      category: categories[0]._id,
      price: 2.99,
      quantity: 999,
      likes: Math.floor(Math.random() * (50 - 0) + 0),
    },
    {
      name: "J.I.M. Mug",
      description: "JIM Logo coffee mug",
      image: "mug.png",
      category: categories[1]._id,
      price: 9.99,
      quantity: 25,
      likes: Math.floor(Math.random() * (50 - 0) + 0),
    },
    {
      name: "J.I.M. T-Shirt",
      description: "JIM Logo coffee mug",
      image: "shirt.png",
      category: categories[1]._id,
      size: ["XS", "S", "M", "LG", "XL", "2XL"],
      price: 15.99,
      quantity: 25,
      likes: Math.floor(Math.random() * (50 - 0) + 0),
    },
    {
      name: "Coffee Tip",
      description: "Buy our dev team some coffee!",
      image: "coffee.png",
      category: categories[2]._id,
      price: 9.99,
      quantity: 25,
      likes: Math.floor(Math.random() * (50 - 0) + 0),
    },
  ]);

  console.log(
    "JIMDB seeded with user, studio, product, reminder, and category data!"
  );
  process.exit(0);
});
