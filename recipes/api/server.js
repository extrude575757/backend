const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const session = require("express-session");
const restrict = require("./auth/restricted-middleware.js");
const authRouter = require("./auth/auth-router.js");
const usersRouter = require("./users/users-router.js");

const server = express();
const recipesRouter = require("./recipes/recipes-router");





server.use(helmet());
server.use(express.json());
server.use(cors());



const sessionConfig = {
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, 
    secure: process.env.SECURE_COOKIE || false,
    httpOnly: true, 
  },
  resave: false,
  saveUninitialized: process.env.USER_ALLOWED_COOKIES || true,
  name: "monster",
  secret: process.env.COOKIE_SECRET || "keepitsecret,keepitsafe",
};
server.use(session(sessionConfig)); 

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/recipes", restrict, recipesRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
