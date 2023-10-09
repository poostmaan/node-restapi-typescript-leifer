import "dotenv/config";
import { connect } from "mongoose";

async function dbConnect(): Promise<void> {

  const MONGO_URI = <string>process.env.MONGO_URI;

  try {
    await connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(`Error while connecting to the database ${error}`);
  }
}

export default dbConnect;
