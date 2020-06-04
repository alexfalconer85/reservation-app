// import dependencies
var express = require("express");

// create an "express" server
var app = express();

//defind port where the server will listen
var PORT = process.env.PORT || 8080;

// add middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// application data
var tables = [
  {
    customerName: "Table test",
    customerEmail: "table@test.com",
    customerID: "0123456789",
    phoneNumber: "000-000-0000",
  },
];
var waitlist = [
  {
    customerName: "waitlist test",
    customerEmail: "waitlist@test.com",
    customerID: "0123456789",
    phoneNumber: "000-000-0000",
  },
];

// html routes
app.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/home.html"));
});
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/reserve.html"));
});
app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/tables.html"));
});
// api routes
app.get("/api/tables", function (req, res) {
  res.json(tables);
});
app.post("/api/tables", function (req, res) {
  if (tables.length < 5) {
    tables.push(req.body);
  } else {
  }
});
app.get("/api/waitlist", function (req, res) {
  res.json(waitlist);
});
// start the server
app.listen(PORT, function () {
  console.log("~>~>~>~>SERVER IS LISTENING ON http://localhost:" + PORT);
});
