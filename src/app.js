//! Routing Example
// app.use("/hello/2", (req, res) => {
//   res.send("abcdefgssaskhk ");
// });
// app.use("/hello", (req, res) => {
//   res.send("Hello ");
// });
// app.use("/", (req, res) => {
//   res.send(" dashborde");
// });

// app.use("/user", (req, res) => {
//   res.send("hahahahahahhaahahahahahhaha");
// });

// this will only handel GET  call  to /user
// app.get("/user", (req, res) => {
//   res.send({ firstName: "Aniket", lastName: "Deshapnde" });
// });

// app.post("/user", (req, res) => {
//   // assume user giving input this input  Saving to data DB
//   res.send("Data successfully saved to the database");
// });

// app.delete("/user", (req, res) => {
//   res.send("delete sucessfully");
// });

// app.patch("/user", (req, res) => {
//   res.send("patch sucessfully");
// });

// // This will match  all the HTTP method API call to /test
// app.use("/test", (req, res) => {
//   res.send("Hello from the server");
// });

// app.get("/user", (req, res) => {
//   console.log(req.query);
//   res.send({ firstName: "Aniket", lastName: "Deshapnde" });
// });

// app.get("/user/:userId/:name/:password", (req, res) => {
//   console.log(req.params);
//   res.send({ firstName: "Aniket", lastName: "Deshapnde" });
// });

//!--------------------------------------------------------------------------------------

// const express = require("express");

// const app = express();

// app.get(
//   "/user",
//   (req, res, next) => {
//     //res.send("route handel 1");

//     console.log("handeling the route user");
//     //res.send("Response...");
//     next();
//   },
//   (req, res, next) => {
//     // route  handel 2
//     console.log("handeling the route user 2");
//     //res.send("2nd Response...");
//     next();
//   },
//   (req, res, next) => {
//     // route  handel 3
//     console.log("handeling the route user 3");
//     //res.send("3rd Response...");
//     next();
//   },
//   (req, res, next) => {
//     // route  handel 4
//     console.log("handeling the route user 4");
//     //res.send("4th Response...");
//     next();
//   },
//   (req, res, next) => {
//     // route  handel 4
//     console.log("handeling the route user 5");
//     res.send("5th Response...");
//   },
// );

// app.listen(7777, () => {
//   console.log("Server is Successfully listening on port 7777");
// });

//! another way

// const express = require("express");

// const app = express();

// app.get("/user", (req, res, next) => {
//   console.log("handeling route the user2");
//   res.send("2nd route handel ");
// });

// app.get("/user", (req, res, next) => {
//   console.log("handeling route the user");
//   next();
// });

// app.listen(7777, () => {
//   console.log("Server is Successfully listening on port 7777");
// });

//!-------------------------------------
//!middel ware example

// GET /user => it checks all the app.xxx("matching route") functions
//! GET /user => middleware chain => request hander
// const express = require("express");

// const app = express();

//app.use("/", (req, res, next) => {
//<--- this is middle ware
// res.send("handeling / route");
//   next();
// });

// app.get(
//   "/user",
//   (req, res, next) => {
//     console.log("get user route ");
//     next();
//   },
//   (req, res, next) => {
//     res.send("1st route handel ");
//   },
//   (req, res, next) => {
//     res.send("2nd route handel ");
//   },
// );

// app.listen(7777, () => {
//   console.log("Server is Successfully listening on port 7777");
// });

//-------------------------------------------
//! why do  we need  middleware

// const express = require("express");

// const app = express();

// const { adminAuth, userAuth } = require("./middlewares/auth");

//! handel auth middleware for all request GET, POST, DELETE, {so that why we want app.use for middleware get all request }
//app.use("/admin", adminAuth);

// this for multile user auth
//app.use("/user", userAuth);

// we can do thta one user auth

// app.post("/user/login", (req, res) => {
//   res.send("User logged in  successfully ");
// });

// app.get("/user/data", userAuth, (req, res) => {
//   res.send("user data send");
// });
// app.get("/admin/getAllData", (req, res) => {
//    logic of fetching all data

//   res.send("All Data Sent");
// });

// app.get("/admin/deleteUser", (req, res) => {
//   res.send("Deleted a user");
// });

// app.listen(7777, () => {
//   console.log("Server is Successfully listening on port 7777");
// });

//------------------------------------------------------------
//! Error Handing
// const express = require("express");

// const app = express();

// app.use("/", (err, req, res, next) => {
//   if (err) {
//     res.status(500).send("something went wrong");
//   }
// });

// app.get("/getUserData", (req, res) => {
//   // what we do over here ---> logic DB  call and get user data
//   // supose some error in the code --> here we see how to handel error
//   // just an exmaple

//   // try {
//   throw new Error("fcghbjnkm");
//   res.send("user data send");
//   // } catch (err) {
//   //   res.status(500).send("some error contact support team ");
//   // }
// });
// app.use("/", (err, req, res, next) => {
//   if (err) {
//     res.status(500).send("something went wrong");
//   }
// });
// app.listen(7777, () => {
//   console.log("Server is Successfully listening on port 7777");
// });

//---------------------------------------------------------------------------------

//!

const express = require("express");
const connectDB = require("./config/database");

const app = express();
const User = require("./models/user");

const { validateSignUpData } = require("./utils/validation");

const bcrypt = require("bcrypt");

app.use(express.json());

app.post("/signup", async (req, res) => {
  // dummy user data
  //! this one way do it
  // const userObj = {
  //   firstName: "Aniket",
  //   lastName: "Deshpande",
  //   emailId: "aniket@gmail.com",
  //   password: "aniket@123",
  // };
  // creating  a new instance of  the User model
  //const user = new User(userObj);
  //! another way
  try {
    // validation of data

    validateSignUpData(req);

    const { firstName, lastName, emailId, password } = req.body;

    // Encrypt the passwod

    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);

    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });

    await user.save();
    res.send("user added successfully");
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId: emailId });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      res.send("Login Successful!!!!");
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

// get  user by email

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const user = await User.findOne({ emailId: userEmail });

    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
    // const users = await User.find({ emailId: userEmail });
    // if (users.length === 0) {
    //   res.status(404).send("User not found");
    // } else {
    //   res.send(users);
    // }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

// Feed API - GET /feed - get all the users from the  database

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

//delete user form the database
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete({ _id: userId });

    //const user = await User.findByIdAndDelete(userId);

    res.send("User deleted succesfully");
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

// update data of the user

app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;

  try {
    const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];

    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k),
    );
    if (!isUpdateAllowed) {
      throw new Error("Update not allowed");
    }
    if (data?.skills.length > 10) {
      throw new Error("skills cannot be more than 10");
    }
    // if (data?.photoUrl && !/^https?:\/\/.+/.test(data.photoUrl)) {
    //   throw new Error("Please provide a valid photo URL");
    // }
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
      runValidators: true,
    });
    console.log(user);
    res.send("user updated successfully");
  } catch (err) {
    res.status(400).send("UPDATE FAILED" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("DataBase Connection established");
    app.listen(7777, () => {
      console.log("Server is Successfully listening on port 7777");
    });
  })
  .catch((err) => {
    console.error("Database can not be established");
  });
