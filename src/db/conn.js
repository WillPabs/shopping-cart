const { MongoClient } = require("mongodb");
require('dotenv').config();

const connectionString = process.env.ATLAS_URI;
console.log('Connection ',connectionString);
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: async () => {
    try {
      client.on('commandStarted', started => console.log(started));
      
      dbConnection = client.db('cluster0');

      console.log("Successfully connected to MongoDB.");
    } catch (err) {
      console.log(err);
    }
  },

  getDb: function () {
    return dbConnection;
  },
};