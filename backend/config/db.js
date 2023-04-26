const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URL, () => console.log("DB Connected"));
  } catch {
    console.log(err);
    process.exit();
  }
};

module.export = connectDB;
