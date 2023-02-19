import React, { useEffect, useState } from "react";
import Header from "../Layout/Slider";
import Nav from "../Layout/Nav";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
  const [data, setData] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API + "api/admin/home")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Internal Server Error");
      });
  }, []);

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Header />
          <div className="layout-page">
            <Nav />
            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="row">
                <div className="col-lg-12 col-md-4 order-1">
                  <div className="row">
                    {loading === true ? (
                      <>
                        <h1>Loading Dashboard.....</h1>
                      </>
                    ) : (
                      <>
                        <div className="col-lg-4 col-md-12 col-6 mb-4">
                          <div className="card">
                            <div className="card-body">
                              <div className="card-title d-flex align-items-start justify-content-between">
                                <div className="avatar flex-shrink-0">
                                  <img
                                    src="../assets/img/icons/unicons/wallet-info.png"
                                    alt="Credit Card"
                                    className="rounded"
                                  />
                                </div>
                                <div className="dropdown">
                                  <button
                                    className="btn p-0"
                                    type="button"
                                    id="cardOpt6"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-vertical-rounded" />
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="cardOpt6"
                                  >
                                    <a className="dropdown-item" href="#/">
                                      View More
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <span>Total Admins</span>
                              <h3 className="card-title text-nowrap mb-1">
                                {data.admins}
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-6 mb-4">
                          <div className="card">
                            <div className="card-body">
                              <div className="card-title d-flex align-items-start justify-content-between">
                                <div className="avatar flex-shrink-0">
                                  <img
                                    src="../assets/img/icons/unicons/wallet-info.png"
                                    alt="Credit Card"
                                    className="rounded"
                                  />
                                </div>
                                <div className="dropdown">
                                  <button
                                    className="btn p-0"
                                    type="button"
                                    id="cardOpt6"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-vertical-rounded" />
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="cardOpt6"
                                  >
                                    <a className="dropdown-item" href="#/">
                                      View More
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <span>Total Affiliate IDS</span>
                              <h3 className="card-title text-nowrap mb-1">
                                {data.id}
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-6 mb-4">
                          <div className="card">
                            <div className="card-body">
                              <div className="card-title d-flex align-items-start justify-content-between">
                                <div className="avatar flex-shrink-0">
                                  <img
                                    src="../assets/img/icons/unicons/wallet-info.png"
                                    alt="Credit Card"
                                    className="rounded"
                                  />
                                </div>
                                <div className="dropdown">
                                  <button
                                    className="btn p-0"
                                    type="button"
                                    id="cardOpt6"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-vertical-rounded" />
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="cardOpt6"
                                  >
                                    <a className="dropdown-item" href="#/">
                                      View More
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <span>Total Products</span>
                              <h3 className="card-title text-nowrap mb-1">
                                {data.products}
                              </h3>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-6 mb-4">
                          <div className="card">
                            <div className="card-body">
                              <div className="card-title d-flex align-items-start justify-content-between">
                                <div className="avatar flex-shrink-0">
                                  <img
                                    src="../assets/img/icons/unicons/wallet-info.png"
                                    alt="Credit Card"
                                    className="rounded"
                                  />
                                </div>
                                <div className="dropdown">
                                  <button
                                    className="btn p-0"
                                    type="button"
                                    id="cardOpt6"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-vertical-rounded" />
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="cardOpt6"
                                  >
                                    <a className="dropdown-item" href="#/">
                                      View More
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <span>Total Categories</span>
                              <h3 className="card-title text-nowrap mb-1">
                                {data.categories}
                              </h3>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-6 mb-4">
                          <div className="card">
                            <div className="card-body">
                              <div className="card-title d-flex align-items-start justify-content-between">
                                <div className="avatar flex-shrink-0">
                                  <img
                                    src="../assets/img/icons/unicons/wallet-info.png"
                                    alt="Credit Card"
                                    className="rounded"
                                  />
                                </div>
                                <div className="dropdown">
                                  <button
                                    className="btn p-0"
                                    type="button"
                                    id="cardOpt6"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-vertical-rounded" />
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="cardOpt6"
                                  >
                                    <a className="dropdown-item" href="#/">
                                      View More
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <span>Total Deals</span>
                              <h3 className="card-title text-nowrap mb-1">
                                {data.deals}
                              </h3>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-6 mb-4">
                          <div className="card">
                            <div className="card-body">
                              <div className="card-title d-flex align-items-start justify-content-between">
                                <div className="avatar flex-shrink-0">
                                  <img
                                    src="../assets/img/icons/unicons/wallet-info.png"
                                    alt="Credit Card"
                                    className="rounded"
                                  />
                                </div>
                                <div className="dropdown">
                                  <button
                                    className="btn p-0"
                                    type="button"
                                    id="cardOpt6"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-vertical-rounded" />
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="cardOpt6"
                                  >
                                    <a className="dropdown-item" href="#/">
                                      View More
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <span>Total Stores</span>
                              <h3 className="card-title text-nowrap mb-1">
                                {data.stores}
                              </h3>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-6 mb-4">
                          <div className="card">
                            <div className="card-body">
                              <div className="card-title d-flex align-items-start justify-content-between">
                                <div className="avatar flex-shrink-0">
                                  <img
                                    src="../assets/img/icons/unicons/wallet-info.png"
                                    alt="Credit Card"
                                    className="rounded"
                                  />
                                </div>
                                <div className="dropdown">
                                  <button
                                    className="btn p-0"
                                    type="button"
                                    id="cardOpt6"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-vertical-rounded" />
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="cardOpt6"
                                  >
                                    <a className="dropdown-item" href="#/">
                                      View More
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <span>Total Banners</span>
                              <h3 className="card-title text-nowrap mb-1">
                                {data.banners}
                              </h3>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-6 mb-4">
                          <div className="card">
                            <div className="card-body">
                              <div className="card-title d-flex align-items-start justify-content-between">
                                <div className="avatar flex-shrink-0">
                                  <img
                                    src="../assets/img/icons/unicons/wallet-info.png"
                                    alt="Credit Card"
                                    className="rounded"
                                  />
                                </div>
                                <div className="dropdown">
                                  <button
                                    className="btn p-0"
                                    type="button"
                                    id="cardOpt6"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-vertical-rounded" />
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="cardOpt6"
                                  >
                                    <a className="dropdown-item" href="#/">
                                      View More
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <span>Total Users</span>
                              <h3 className="card-title text-nowrap mb-1">
                                {data.users}
                              </h3>
                            </div>
                          </div>
                        </div>
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

export default Home;
