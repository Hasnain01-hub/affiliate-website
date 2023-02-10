import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Nav from "../../Layout/Nav";
import Header from "../../Layout/Slider";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    from: "",
    link: "",
    image: "",
    price: "",
    discount: "",
    category: "",
  });

  const [store, setStore] = useState();

  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState();

  useEffect(() => {
    axios.get(process.env.REACT_APP_API + "api/admin/store/get").then((res) => {
      setStore(res.data);
    });

    axios
      .get(process.env.REACT_APP_API + "api/admin/category/get")
      .then((res) => {
        setCategory(res.data);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((event) => {
      return {
        ...event,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    if (
      product.name === "" ||
      product.image === "" ||
      product.link === "" ||
      product.discount === "" ||
      product.price === "" ||
      product.from === ""
    ) {
      toast.error("Please Fill the Whole Form");
    } else {
      axios
        .post(process.env.REACT_APP_API + "api/admin/product/add", product)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Product Added Successfully");
            setTimeout(() => {
              window.location.reload();
            }, 500);
          }
        })
        .catch((err) => {
          toast.error("Internal Server Error");
          console.log(err);
        });
    }
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
                  <span className="text-muted fw-light">ConnectWithRMT /</span>{" "}
                  Add Affiliate IDS
                </h4>
                <div className="row">
                  <div className="col-xl">
                    <div className="card mb-4">
                      <div className="card-body">
                        <div className="row">
                          <div className="mb-3 col-md-6">
                            <label className="form-label">
                              Product Name <span className="red">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basic-default-fullname"
                              placeholder="John Doe"
                              name="name"
                              required
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label className="form-label">
                              Store <span className="red">*</span>
                            </label>
                            <select
                              onChange={handleChange}
                              name="from"
                              className="form-control"
                            >
                              {loading === true ? (
                                <>
                                  <option selected>Loading Stores....</option>
                                </>
                              ) : (
                                <>
                                  <option selected>-------</option>
                                  {store.map((s, i) => (
                                    <>
                                      <option value={s.name}>{s.name}</option>
                                    </>
                                  ))}
                                </>
                              )}
                            </select>
                          </div>

                          <div className="mb-3 col-md-12">
                            <label className="form-label">
                              Categories <span className="red">*</span>
                            </label>
                            <select
                              onChange={handleChange}
                              name="category"
                              className="form-control"
                            >
                              {loading === true ? (
                                <>
                                  <option selected>
                                    Loading Categories....
                                  </option>
                                </>
                              ) : (
                                <>
                                  <option selected>-------</option>
                                  {category.map((s, i) => (
                                    <>
                                      <option value={s.name}>{s.name}</option>
                                    </>
                                  ))}
                                </>
                              )}
                            </select>
                          </div>
                          <div className="mb-3 col-md-12">
                            <label className="form-label">
                              Product Affiliate Link
                              <span className="red">*</span>
                            </label>
                            <input
                              type="text"
                              id="basic-default-phone"
                              className="form-control phone-mask"
                              placeholder="https://www.google.com/"
                              name="link"
                              required
                              onChange={handleChange}
                            />
                          </div>
                          <div className="row">
                            <div className="mb-3 col-md-6">
                              <label className="form-label">
                                Discount Price <span className="red">*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="149"
                                name="discount"
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="mb-3 col-md-6">
                              <label className="form-label">
                                Original Price <span className="red">*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="249"
                                name="price"
                                required
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="mb-3 col-md-12">
                            <label className="form-label">
                              Product Image URL
                              <span className="red">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control phone-mask"
                              placeholder="https://www.google.com/"
                              name="image"
                              required
                              onChange={handleChange}
                            />
                          </div>
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

export default AddProduct;
