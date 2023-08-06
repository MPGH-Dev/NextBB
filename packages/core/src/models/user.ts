import { Schema, SchemaTypes } from "mongoose";
import { getMongoose } from "../mongodb";

const connection = getMongoose();

interface User {
  username: string;
  email: string;
  password: string;
}

const userSchema = new Schema<User>({
  username: {
    type: SchemaTypes.String,
    minlength: 3,
    maxlength: 128,
    unique: true,
    index: true,
  },
  email: {
    type: SchemaTypes.String,
    unique: true,
    index: true,
    maxlength: 320,
  },
  password: {
    type: SchemaTypes.String,
  },
});

const UserModel = connection.model<User>("Users", userSchema);

export const initialiseUserCollection = async () => {
  console.log("Initialising User Collection");

  await UserModel.createCollection();
  await UserModel.ensureIndexes();
};
