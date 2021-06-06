import dotenv from "dotenv";

export default () => {
  dotenv.config({ path: __dirname + "/.env" });
  dotenv.parse(".env");
  const { DB_COLLECTION_PATRIES, DB_COLLECTION_RESULTS, DB_NAME, DB_URI, APP_ENV, APP_TITLE } = process.env;
  return {
    DB_COLLECTION_PATRIES,
    DB_COLLECTION_RESULTS,
    DB_NAME,
    DB_URI,
    APP_ENV,
    APP_TITLE,
  };
};