import mongoose from "mongoose";

export const connect = (url = process.env.MONGODB_URI, opts = {}) => {
  return mongoose.connect(url, {
    ...opts,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};
