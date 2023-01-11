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
      await client.connect();
      // console.log('DbConnect',dbConnection);
      await client.db('cluster0').command({ ping: 1});
      dbConnection = client.db('cluster0');

      const doc = {
        title: "Record of a Shriveled Datum",
        content: "No bytes, no problem. Just insert a document, in MongoDB",
      }

      dbConnection.collection('sales').insertOne(doc);
      console.log("Successfully connected to MongoDB.");
    } catch (err) {
      console.log(err);
    }
  },

  getDb: function () {
    return dbConnection;
  },
};