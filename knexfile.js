require("dotenv").config();

const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/auth";
// if using a local postgres server, please create the database manually, Knex will not create it autmatically

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/auth.db3",
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./database/auth.db3",
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },



  production: {
    client: "pg",
    // connection: pgConnection,   3.91.73.211
    connection: {
      host : '3.91.73.211',
      user : 'uwunjfyfwkqwhn',
      password : 'fjdds',
      database : 'de04oan147dm36'
    },
    // pool: {
    //   min: 2,
    //   max: 10,
    // },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
  // production: {
  //   client: "pg",
  //   // connection: pgConnection,
    
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     directory: "./database/migrations",
  //   },
  //   seeds: {
  //     directory: "./database/seeds",
  //   },
  // },
  staging: {

  },

 



};
