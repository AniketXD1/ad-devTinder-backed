const express = require("express");

const app = express();

// app.use("/", (req, res) => {
//   res.send(" dashborde");
// });

app.use("/hello", (req, res) => {
  res.send("Hello ");
});

app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.use("/", (req, res) => {
  res.send(" dashborde");
});
app.listen(7777, () => {
  console.log("Server is Successfully listening on port 7777");
});
