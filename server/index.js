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
  const d =
    "https://www.amazon.in/Mezonite-Leatherette-Ergonomic-Executive-Spacious/dp/B0B1WZSJGW/ref=sr_1_1_sspa?qid=1675437833&refinements=p_n_feature_nine_browse-bin%3A27362396031&s=kitchen&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGZfYnJvd3Nl&psc=1";

  /* This is the code that is responsible for the redirection. */
  if (d.includes("a.co")) {
    const de = await axios.get(d);

    const url = de.request.res.responseUrl;

    const new_url = url.replace("amazon.com", "amazon.in");

    ds = new_url.split("?_encoding")[0];
    const tag = "tag=ronak3103-21";
    const modify = ds + "?" + tag;

    res.json(modify);
  }

  /* This is the code that is responsible for the redirection. */
  if (d.includes("amzn.to") || d.includes("B0")) {
    const de = await axios.get(d);

    const url = de.request.res.responseUrl;

    let ds;

    if (url.includes("?th=1")) {
      ds = url.split("?th=1")[0];
    } else if (url.includes("?qid")) {
      ds = url.split("?qid")[0];
    } else {
      ds = url.split("?&linkCode=sl1")[0];
    }

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
