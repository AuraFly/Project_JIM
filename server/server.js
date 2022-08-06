//importing modules
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const cors = require("cors");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

//user routes added
// const userRoutes = require("./routes/userRoutes");
const { authMiddleware } = require("./utils/auth");

// const routes = require("./routes");

//db
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

//PORT
const PORT = process.env.PORT || 3001;

//app
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "../client/images")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

//middleware
app.use(cors({ origin: true, credentials: true }));

//routes
// app.use(routes);
app.use("/api", require("./routes/api-route"));

//users routes

// app.use("/api/users", userRoutes);

// app.use(notFound);
// app.use(errorHandler);

//listener
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

//Start
startApolloServer(typeDefs, resolvers);
