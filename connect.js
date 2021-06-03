import { MongoClient } from "mongodb";
import config from "./config.js";
const { DB_COLLECTION, DB_NAME, DB_URI } = config() ;

export const client = new MongoClient(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// pour optimiser la création de la collection si elle et déjà faite ce n'est plus à faire 
// voir plus bas
let collection = null;

export const run = async () => {
  try {
    if(collection) return collection ;

    const connect = await client.connect();
    collection = await client.db(DB_NAME).collection(DB_COLLECTION);
    console.log("Connected successfully to server");

    return collection;

  } catch (e) {
    console.error('Bad connect ...', e);
    client.close();
  }
};

