import { MongoClient as Mongo, Db } from "mongodb";

export const MongoClient = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const uri = process.env.MONGODB_URI || "localhost:27017";

    const client = new Mongo(uri);
    const db = client.db("user-db");

    this.client = client;
    this.db = db;

    // console.log(client);
    console.log("connected to mongodb!");
  },
};