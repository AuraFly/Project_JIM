const mongoose = require("mongoose");
const { Schema } = mongoose;

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

const Studio = mongoose.model("Studio", studioSchema);
module.exports = Studio;
