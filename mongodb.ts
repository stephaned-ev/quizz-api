import { MongoClient } from "https://deno.land/x/mongo@v0.11.1/mod.ts";

// const username = "stephaned";
// const pwd = "h3DMPA1BO9evLtkm";

const client = new MongoClient();

client.connectWithUri(
  "mongodb+srv://stephaned:h3DMPA1BO9evLtkm@deno-cluster.hao1l.gcp.mongodb.net/?retryWrites=true&w=majority",
);

const db = client.database("starting");

export default db;
