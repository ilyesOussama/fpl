import { MongoClient } from 'mongodb';

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
} = process.env;

const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.5yi3aze.mongodb.net/?retryWrites=true&w=majority`;

export const client = new MongoClient(MONGO_URI);
export const db = client.db();
