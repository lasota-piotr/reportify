import mongoose from "mongoose";

export const connect = (url = process.env.MONGODB_URI, opts = {}) => {
  return mongoose.connect(url, {
    ...opts,
    useNewUrlParser: true,
    // authSource: "admin",
    // readPreference: "primary",
    useUnifiedTopology: true
  });
};
