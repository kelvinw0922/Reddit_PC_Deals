const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

// Initialize Express
const app = express();

// Middleware

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Load Routes
const index = require("./routes/index");
const deals = require("./routes/deals");

// Routes
app.use("/", index);
app.use("/deals", deals);

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
