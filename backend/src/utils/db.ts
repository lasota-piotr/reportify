import mongoose from "mongoose";

export const connect = (url = process.env.MONGO_PATH, opts = {}) => {
  return mongoose.connect(url, {
    ...opts,
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASSWORD,
    dbName: process.env.MONGO_DATABASE,
    useNewUrlParser: true,
    authSource: "admin",
    readPreference: "primary",
    useUnifiedTopology: true
  });
};
