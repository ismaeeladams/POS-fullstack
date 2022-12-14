// const express = require("express"); // Used to set up a server
// const cors = require("cors"); // Used to prevent errors when working locally
// require("dotenv").config;
// const app = express(); // Initialize express as an app variable
// app.set("port", process.env.PORT || 8080); // Set the port
// app.use(express.json()); // Enable the server to handle JSON requests
// app.use(cors()); // Dont let local development give errors

// app.get("/", (req, res) => {
//   res.json({ msg: "Welcome" });
// });

// const jwt = require("jsonwebtoken");
// // const bcrypt = require("")
// app.use(express.static("public"));
// // app.use(bodyParser.urlencoded({ extended: false }));

// const userRoutes = require("./Routes/UserRoute");
// app.use("/users", userRoutes);
// // app.use("/users/register", userRoutes);
// // app.use("/users/login", userRoutes);

// const productsRoutes = require("./Routes/ProductsRoute");
// app.use("/products", productsRoutes);

// const orderRoutes = require("./Routes/OrderRoute");
// const router = require("./Routes/UserRoute");
// app.use("/orders", orderRoutes);

// // const categoriesRoutes = require("./Routes/categoriesRoute");
// // app.use("/categories", categoriesRoutes);

// app.listen(app.get("port"), () => {
//   console.log(`Listening for calls on port ${app.get("port")}`);
//   console.log("Press Ctrl+C to exit server");
// });

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/" + "index.html");
// });

// Import needed libraries
const express = require("express"); // Used to set up a server
const cors = require("cors"); // Used to prevent errors when working locally
require("dotenv").config();
// Import routes
const userRoute = require("./Routes/UserRoute");
const productRoute = require("./Routes/ProductsRoute");
const orderRoutes = require("./Routes/OrderRoute");
// Configure Server
const app = express(); // Initialize express as an app variable
app.set("port", process.env.PORT || 8080); // Set the port
app.use(express.json()); // Enable the server to handle JSON requests
app.use(cors()); // Dont let local development give errors
// Use individual routes when visiting these URLS
app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/orders", orderRoutes);
// Set up server to start listening for requests
app.listen(app.get("port"), () => {
  console.log(`Listening for calls on port ${app.get("port")}`);
  console.log("Press Ctrl+C to exit server");
});
app.use(express.static("public"));
// This is where we check URLs and Request methods to create functionality
// GET '/' is always what will be displayed on the home page of your application
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/" + "./index.html");
});
