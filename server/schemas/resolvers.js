//JIMDBData is just a placeholder collection! Feel free to alter and remove!
const { JIMDBData } = require("../models");

const resolvers = {
  Query: {
    testdata: async () => {
      return await JIMDBData.find({});
    },
  },
};

module.exports = resolvers;
