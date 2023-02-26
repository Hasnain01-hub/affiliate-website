import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const CategoryProducts = () => {
  const [product, setProduct] = useState();

  const [loading, setLoaidng] = useState(true);

  const params = useParams();
  // const [link, setLink] = useState("");
  const generatelink = (e, link) => {
    e.preventDefault();

    let res = link.split("/com")[0];

    let cp_link = res;

    navigator.clipboard.writeText(cp_link).then(function () {
      toast.success("Link Copied");
    });
  };

  const handleRedirect = (id) => {
    window.location.href = "/Deal/Product/" + id;
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API + "api/admin/category/" + params.cat)
      .then((res) => {
        setProduct(res.data);
        setLoaidng(false);
      })
      .catch((err) => {
        toast.error("Internal Server Error");
      });
  }, [params.cat]);

  return (
    <>
      <div className="shop_area shop_fullwidth">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row no-gutters shop_wrapper">
                {loading === true ? (
                  <>
                    <h2>Loading Data....</h2>
                  </>
                ) : (
                  <>
                    {product.length === 0 ? (
                      <>
                        <h2>No Products Available</h2>
                      </>
                    ) : (
                      <>
                        {product.map((p, i) => (
                          <>
                            <div key={i} className="col-lg-3 col-md-4 col-12 ">
                              <article className="single_product">
                                <figure>
                                  <div className="product_thumb">
                                    <a className="primary_img" href="#/">
                                      <img src={p.image} alt="" />
                                    </a>
                                    <a className="secondary_img" href="#/">
                                      <img src={p.image} alt="" />
                                    </a>
                                    <div className="label_product">
                                      <span className="label_sale">Sale</span>
                                    </div>
                                  </div>
                                  <div className="product_content grid_content">
                                    <div className="product_content_inner">
                                      <h4 className="product_name">
                                        <a
                                          onClick={() => {
                                            handleRedirect(p._id);
                                          }}
                                        >
                                          {p.name}
                                        </a>
                                      </h4>
                                      <div className="price_box">
                                        <span className="old_price">
                                          {p.price}.00 INR
                                        </span>
                                        <span className="current_price">
                                          {p.discount}.00 INR
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      onClick={(e) => generatelink(e, p.link)}
                                      className="add_to_cart"
                                    >
                                      <a href="#/" title="Grab Deal">
                                        Grab Deal
                                      </a>
                                    </div>
                                  </div>
                                </figure>
                              </article>
                            </div>
                          </>
                        ))}
                      </>
                    )}
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

export default CategoryProducts;
