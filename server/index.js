const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

//app
const app = express();

//database
mongoose
  .connect(process.env.MONGODB_URI || "", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })

  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERR", err));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.set("trust proxy", 1);
app.use(helmet());
app.use(morgan("common"));

app.use(bodyParser.json({ extended: true }));
/* This is a CORS middleware. It allows the server to accept requests from different origins. */
// const corsOptions = {
//   origin: true,
//   credentials: true,
// };
// app.options("*", cors(corsOptions));

app.use(cors());

// Importing Routes
const authRoute = require("./routes/auth.route");
const generatelink = require("./routes/generate.link");
const cloudinary = require("./routes/cloudinary.route");
const adminRoutes = require("./routes/adminpost.route");

app.use("/api/auth", authRoute);
app.use("/api/createlink", generatelink);
app.use("/api/cloudinary", cloudinary);
app.use(require("./controller/handlebars"));
app.use("/api/admin", adminRoutes);
app.use("/", function (req, res) {
  res.send("Hello World");
});
app.set("views", path.join(__dirname, "..", "views"));
//port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server is Running");
});
