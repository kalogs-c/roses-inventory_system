import { MongoClient } from "mongodb";

let cachedDb = null;

const client = new MongoClient(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function connect() {
  if (cachedDb) {
    return { cachedDb, client};
  }

  await client.connect();
  const db = client.db("balur");
  cachedDb = db;
  return { cachedDb, client };
}
