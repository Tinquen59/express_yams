const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const dbName = "yams";
const collectionName = "patries";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const run = async () => {
  try {
    connect = await client.connect();
    collection = await client.db(dbName).collection(collectionName);
    console.log("Connected successfully to server");

    return collection;

  } catch (e) {
    console.error('Bad connect ...', e);
    client.close();
  }
};

module.exports = run ;