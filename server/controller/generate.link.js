const axios = require("axios");
exports.generateLink = async (req, res) => {
  // const d = "https://amzn.to/40t8nri";
  const d = req.body.link;
  /* This is the code that is responsible for the redirection. */
  if (d.includes("a.co") || d.includes("amazon.com")) {
    const de = await axios.get(d);

    const url = de.request.res.responseUrl;

    const new_url = url.replace("amazon.com", "amazon.in");

    ds = new_url.split("?_encoding")[0];
    const tag = `tag=${req.body.tag}`;
    const modify = ds + "?" + tag;

    res.json(modify);
  } else if (d.includes("/dp/")) {
    const de = await axios.get(d);

    const url = de.request.res.responseUrl;

    let ds;

    if (url.includes("ref=")) {
      ds = url.split("ref=")[0];
    } else if (url.includes("?tag=")) {
      ds = url.split("?tag=")[0];
    }
    const tag = `tag=${req.body.tag}`;
    const modify = ds + "?" + tag;

    res.json(modify);
  } else if (d.includes("amzn.to") || d.includes("B0")) {
    /* This is the code that is responsible for the redirection. */
    const de = await axios.get(d);

    const url = de.request.res.responseUrl;

    let ds;

    if (url.includes("?th=1")) {
      ds = url.split("?th=1")[0];
    } else if (url.includes("crid=")) {
      ds = url.split("crid=")[0];
    } else if (url.includes("qid=")) {
      ds = url.split("qid=")[0];
    } else {
      ds = url.split("?&linkCode=sl1")[0];
    }

    const tag = `tag=${req.body.tag}`;
    const modify = ds + "?" + tag;

    res.json(modify);
  } else if (
    !d.includes("amzn.to") ||
    !d.includes("a.co") ||
    !d.includes("amazon.in") ||
    !d.includes("amazon.com") ||
    !d.includes("amzn")
  ) {
    res.status(404).json({ message: "Invalid Link" });
  } else {
    const de = await axios.get(d);

    const url = de.request.res.responseUrl;

    if (url.includes("psc=")) {
      ds = url.split("psc=")[0];
    } else {
      ds = url;
    }
    const tag = `tag=${req.body.tag}`;
    const modify = ds + "?" + tag;

    res.json(modify);
  }
};
