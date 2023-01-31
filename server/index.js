const express = require("express");
const mongoose = require("mongoose");
/* A middleware that logs all requests, errors, statuses, etc... to the console. */
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");
const { default: axios } = require("axios");
require("dotenv").config();

//app
const app = express();

//database
mongoose
  .connect(process.env.MONGODB_URI || "", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })

  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERR", err));

// middleware

app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

//port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server is Running");
});

app.get("/", async (req, res) => {
  const d = "https://amzn.eu/d/j1e8x8J";

  if (d.includes("amzn.to") || d.includes("B0")) {
    const de = await axios.get(d);

    const url = de.request.res.responseUrl;
    const ds = url.split("?th=1")[0];

    const tag = "tag=ronak3103-21";
    const modify = ds + "?" + tag;

    res.json(modify);
  } else {
    const de = await axios.get(d);

    const url = de.request.res.responseUrl;
    const tag = "tag=ronak3103-21";
    const modify = url + "?" + tag;

    res.json(modify);
  }
});
