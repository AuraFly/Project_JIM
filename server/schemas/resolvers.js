const { Studio, User } = require("../models");

const resolvers = {
  Query: {
    udata: async () => {
      return await User.find({});
    },
  },
};

module.exports = resolvers;
