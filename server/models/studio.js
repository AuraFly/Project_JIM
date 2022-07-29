const { Schema, model } = require("mongoose");

const studioSchema = new Schema({
  studioName: {
    type: String,
    trim: true,
    require: true,
  },
  ownerName: {
    type: String,
    trim: true,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
});

const Studio = model("Studio", studioSchema);

module.exports = Studio;
