import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Nav from "../../Layout/Nav";
import Header from "../../Layout/Slider";

const ViewCategoryProducts = () => {
  const [products, setProducts] = useState();

  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    loadCatogery(params.cat);
  }, [params.cat]);
  const loadCatogery = (id) => {
    axios
      .get(process.env.REACT_APP_API + "api/admin/category/" + id)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Internal Server Error");
      });
  };
  const deleteCatogery = async (e, _id) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this Product?")) {
      await axios
        .get(`${process.env.REACT_APP_API}/api/admin/removeproduct/${_id}`)
        .then((res) => {
          window.location.href = "/View-Products";
          toast.success("Product deleted successfully");
        })
        .catch((err) => {});
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
                {loading === true ? (
                  <>
                    <h1>Loading Products.....</h1>
                  </>
                ) : (
                  <>
                    <h4 className="fw-bold py-3 mb-4">
                      <span className="text-muted fw-light">
                        {process.env.REACT_APP_NAME} /
                      </span>{" "}
                      Products
                    </h4>
                    {/* Examples */}
                    <div className="row mb-5">
                      {products.length <= 0 ? (
                        <>
                          <h1>No product till now?</h1>
                        </>
                      ) : (
                        <>
                          {products.map((item, i) => (
                            <div className="col-md-4 col-lg-4 mb-4" key={i}>
                              <div className="card h-80">
                                <div className="card-body">
                                  <img
                                    style={{ width: "100%" }}
                                    src={item.image}
                                    alt="items"
                                  />
                                  <h5 className="card-title">{item.name}</h5>
                                  <h6 className="card-title">
                                    <del>Rs{item.price} </del>
                                    <b> {item.discount} /-</b>
                                  </h6>
                                  <div className="row">
                                    <Link
                                      to={"/products/" + item._id}
                                      className="col-3"
                                    >
                                      <button className="btn btn-outline-primary">
                                        View
                                      </button>
                                    </Link>
                                    <Link className="col-3">
                                      <button
                                        onClick={(e) =>
                                          deleteCatogery(e, item._id)
                                        }
                                        className="btn btn-outline-danger"
                                      >
                                        Delete
                                      </button>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ViewCategoryProducts;
