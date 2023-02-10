import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Nav from "../../Layout/Nav";
import Header from "../../Layout/Slider";

const AddProductCategory = () => {
  const [category, setCategory] = useState({
    name: "",
    image: "",
  });

  const [cat, setCat] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API + "api/admin/category/get")
      .then((res) => {
        setCat(res.data);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((event) => {
      return {
        ...event,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    axios
      .post(process.env.REACT_APP_API + "api/admin/category/add", category)
      .then((res) => {
        toast.success("Category Added Successfully");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Header />
          <div className="layout-page">
            <Nav />
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">
                  <span className="text-muted fw-light">
                    {process.env.REACT_APP_NAME} /
                  </span>{" "}
                  Add Product Category
                </h4>
                <div className="row">
                  <div className="col-xl">
                    <div className="card mb-4">
                      <div className="card-body">
                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="basic-default-fullname"
                          >
                            Category Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Amazon, Flipkart, etc"
                            name="name"
                            required
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="basic-default-fullname"
                          >
                            Category Image
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="https://static.vecteezy.com/system/resources/previews/006/900/711/large_2x/blue-headphones-icon-isolated-on-modern-white-background-free-vector.jpg"
                            name="image"
                            required
                            onChange={handleChange}
                          />
                        </div>

                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={handleSubmit}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  <h4 className="fw-bold py-3 mb-4">
                    <span className="text-muted fw-light">
                      {process.env.REACT_APP_NAME} /
                    </span>{" "}
                    Product Categories
                  </h4>
                  <div className="row mb-5">
                    {loading === true ? (
                      <>
                        <p>Loaidng Product Categories</p>
                      </>
                    ) : (
                      <>
                        {cat.length !== 0 ? (
                          <>
                            {cat.map((c, i) => (
                              <>
                                <div className="col-md-6 col-lg-4 mb-3" key={i}>
                                  <div className="card h-80">
                                    <div className="card-body">
                                      <img
                                        src={c.image}
                                        alt={c.name}
                                        className="card-img-top"
                                      />
                                      {c.name}
                                    </div>
                                  </div>
                                </div>
                              </>
                            ))}
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddProductCategory;
