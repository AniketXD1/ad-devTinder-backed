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

const express = require("express");

const app = express();

app.get(
  "/user",
  (req, res, next) => {
    //res.send("route handel 1");

    console.log("handeling the route user");
    //res.send("Response...");
    next();
  },
  (req, res, next) => {
    // route  handel 2
    console.log("handeling the route user 2");
    //res.send("2nd Response...");
    next();
  },
  (req, res, next) => {
    // route  handel 3
    console.log("handeling the route user 3");
    //res.send("3rd Response...");
    next();
  },
  (req, res, next) => {
    // route  handel 4
    console.log("handeling the route user 4");
    //res.send("4th Response...");
    next();
  },
  (req, res, next) => {
    // route  handel 4
    console.log("handeling the route user 5");
    res.send("5th Response...");
  },
);

app.listen(7777, () => {
  console.log("Server is Successfully listening on port 7777");
});
