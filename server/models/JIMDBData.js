//JIMDBData is just a placeholder collection! Feel free to alter and remove!
const { Schema, model } = require("mongoose");

const jimdbSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const JIMDBData = model("JIMDBData", jimdbSchema);

module.exports = JIMDBData;
