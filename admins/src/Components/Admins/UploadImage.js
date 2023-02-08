import axios from "axios";
import React, { lazy } from "react";
import Resizer from "react-image-file-resizer";
import "./helper.css";
const UploadFile = ({ loading, values, setValues, setLoading }) => {
  //to upload images to cloudinary
  const fileUploadAndResize = (e) => {
    let files = e.target.files;
    let allUploadedFiles = values.images;

    if (files) {
      setLoading(true);
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          "JPEG",
          100,
          0,
          (uri) => {
            axios
              .post(`http://localhost:8000/api/cloudinary/uploadimages`, {
                image: uri,
              })
              .then((res) => {
                setLoading(false);
                allUploadedFiles.push(res.data);
                setValues({ ...values, images: allUploadedFiles });
                console.log(allUploadedFiles);
              })
              .catch((err) => {
                setLoading(false);
                console.log("UPLOAD EROR", err);
              });
          },
          "base64"
        );
      }
    }
  };

  const handleImageRemove = (public_id) => {
    setLoading(true);
    axios
      .post(`http://localhost:8000/api/cloudinary/removeimage`, { public_id })
      .then((res) => {
        setLoading(false);
        const { images } = values;
        let filteredImages = images.filter((item) => {
          return item.public_id !== public_id;
        });
        setValues({ ...values, images: filteredImages });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      {!loading ? (
        <div className="rows">
          {values.images &&
            values.images.map((image) => (
              <>
                <div className="col-md-3">
                  <i
                    style={{
                      position: "relative",
                      left: "90%",
                      cursor: "pointer",
                    }}
                    onClick={() => handleImageRemove(image.public_id)}
                    className="ri-close-line"
                  ></i>
                  <img
                    src={image.url}
                    style={{ width: "100%", height: "100%" }}
                    // shape="square"
                    className="ml-3"
                    alt="images"
                  />
                </div>
              </>
              // <Badge
              //   count="X"
              //   key={image.public_id}
              //   onClick={() => handleImageRemove(image.public_id)}
              //   style={{ cursor: "pointer" }}
              // >
              //   <Avatar
              //     src={image.url}
              //     size={100}
              //     shape="square"
              //     className="ml-3"
              //   />
              // </Badge>
            ))}
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <i class="ri-refresh-line rotate"></i>
        </div>
      )}
      <br />
      <div className="row">
        <label
          style={{
            padding: "8px",
            borderRadius: "10px",
            transition: ".4s ease all",
            textAlign: "center",
            margin: "14px auto",
            width: "200px",
            textAlign: "center",
          }}
          className=" btn-primary btn-raised"
        >
          Choose Files
          <input
            type="file"
            name="images"
            className="input-field"
            hidden
            multiple
            accept="images/*"
            onChange={fileUploadAndResize}
          />
        </label>
      </div>
    </>
  );
};

export default UploadFile;
