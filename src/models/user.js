const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 50,
    },
    lastName: {
      type: String,
      minLength: 4,
      maxLength: 50,
      //default: "enter the lastname",
    },
    emailId: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "other"].includes(value)) {
          throw new Error("Gender data is not  valid");
        }
      },
    },
    photoUrl: {
      type: String,
      default:
        "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    },
    about: {
      type: String,
      default: "This is a default about of the user",
    },

    skills: {
      type: [String],
    },
  },
  {
    timestamps: true,
  },
);

// this is one way to do it
// const User = mongoose.model("User", userSchema);

// module.exports = User;

// another way

module.exports = mongoose.model("User", userSchema);
