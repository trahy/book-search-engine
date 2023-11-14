const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://mdb-user1:vj1UOsxW03mhYjya@cluster0.xtw0lp0.mongodb.net/?retryWrites=true&w=majority"
);

module.exports = mongoose.connection;
