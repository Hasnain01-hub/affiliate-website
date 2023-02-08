import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Header from "../../Layout/Slider";
import Nav from "../../Layout/Nav";
import UploadImage from "./UploadImage";

const AddDeals = () => {
  const [loading, setLoading] = useState(false);
  const [deals, setdeals] = useState({
    images: [],
    p_name: "",
    p_link: "",
    end_date: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setdeals((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (deals.p_link !== "" && deals.p_name) {
        axios
          .post(process.env.REACT_APP_API + `api/admin/add-product`, { deals })
          .then((res) => {
            if (res.status === 200) {
              toast.success("Deals Added Successfully");
              setdeals({ images: [], p_name: "", p_link: "", end_date: "" });
            }
          });
      } else {
        toast.error("Please enter details");
      }
    } catch (err) {
      toast.error("An error Occured!");
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
                  Add Deals
                </h4>
                <div className="row">
                  <div className="col-xl">
                    <div className="card mb-4">
                      <div className="card-body">
                        <UploadImage
                          values={deals}
                          loading={loading}
                          setValues={setdeals}
                          setLoading={setLoading}
                        />

                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="basic-default-fullname"
                          >
                            Product Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Laptop"
                            name="p_name"
                            value={deals.p_name}
                            required
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="basic-default-fullname"
                          >
                            Product Link
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="https://amzn.eu/d/fVpAfUt"
                            name="p_link"
                            value={deals.p_link}
                            required
                            onChange={handleChange}
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="basic-default-fullname"
                          >
                            End Date
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            placeholder="31-12-2022"
                            value={deals.end_date}
                            name="end_date"
                            required
                            onChange={handleChange}
                          />
                        </div>

                        {/* <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="basic-default-fullname"
                          >
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password....."
                            name="cp"
                            required
                            onChange={handleChange}
                          />
                        </div> */}
                        <button
                          onClick={handleSubmit}
                          type="submit"
                          className="btn btn-primary"
                        >
                          Add
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

export default AddDeals;
