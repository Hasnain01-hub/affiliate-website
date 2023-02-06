const cloudinary = require("cloudinary");

//config
cloudinary.config({
  cloud_name: "",
  api_key: "",
  api_secret: "",
});

/* This is the function that is called when the user uploads a file. It takes the file and uploads it
to cloudinary. */
exports.upload = async (req, res) => {
  let result = await cloudinary.uploader.upload(req.body.image, {
    public_id: `${Date.now()}`,
    resource_type: "auto",
  });
  res.json({
    public_id: result.public_id,
    url: result.secure_url,
  });
};

exports.remove = (req, res) => {
  let resume_id = req.body.asset_id;
  console.log(resume_id);
  cloudinary.uploader.destroy(resume_id, (err, result) => {
    if (err) return res.json({ success: false, err });
    console.log(result);
    res.send("ok");
  });
};
