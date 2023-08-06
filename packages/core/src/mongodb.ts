import mongoose from "mongoose";
import { ConfigurationOptions, getConfigOption } from "./config";
import { initialiseUserCollection } from "./models/user";

export const getMongoose = () => {
  return mongoose;
};

export const startMongoose = async () => {
  console.log("Starting mongoose connection");

  await mongoose.connect(getConfigOption(ConfigurationOptions.MongoUri));

  await initialiseUserCollection();

  console.log("Started mongoose connection");
};

export const stopMongoose = async () => {
  console.log("Stopping mongoose connection");

  await mongoose.disconnect();
};
