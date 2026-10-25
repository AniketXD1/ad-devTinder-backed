const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://htmlcode931_db_user:c0WsbumZEjGZyiJ7@aniketnode.yalqbea.mongodb.net/devTinder",
  );
};

module.exports = connectDB;
