'use strict';

import { MongoClient } from "mongodb";
import config from "./config.js";
const { DB_COLLECTION, DB_COLLECTION_RESULTS, DB_NAME, DB_URI } = config() ;

export const client = new MongoClient(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// pour optimiser la création de la collection si elle et déjà faite ce n'est plus à faire 
// voir plus bas
let collectionPatries = null;
let collectionResults = null;

export const run = async (collectionName) => {
  try {
    if (collectionName === "patries") {
      if(collectionPatries) return collectionPatries ;

      const connect = await client.connect();
      collectionPatries = await client.db(DB_NAME).collection(DB_COLLECTION);
      console.log("Connected successfully to collection patries");

      return collectionPatries;
    } else if (collectionName === "results") {
      if (collectionResults) return collectionResults;

      const connect = await client.connect();
      collectionResults = await client.db(DB_NAME).collection("results");
      console.log("Connected successfully to collection results");
      return collectionResults;
    }

  } catch (e) {
    console.error('Bad connect ...', e);
    client.close();
  }
};

