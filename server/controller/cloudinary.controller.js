const cloudinary = require("cloudinary");

//config
cloudinary.config({
  cloud_name: "dpwustwce",
  api_key: "547464747529574",
  api_secret: "VYOzdC-MG3FUbPKZCAQk0GXxgfA",
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
  let product_id = req.body.public_id;
  console.log(product_id);
  console.log(req.body);
  cloudinary.uploader.destroy(product_id, (err, result) => {
    if (err) return res.json({ success: false, err });
    console.log(result);
    res.send("ok");
  });
};
