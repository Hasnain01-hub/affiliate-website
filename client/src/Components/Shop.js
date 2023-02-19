import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Shop = () => {
  const [product, setProduct] = useState();

  const [loading, setLoaidng] = useState(true);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API + "api/admin/product/get")
      .then((res) => {
        setProduct(res.data);
        setLoaidng(false);
      })
      .catch((err) => {
        toast.error("Internal Server Error");
      });
  }, []);

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
                    {product.map((p, i) => (
                      <>
                        <div className="col-lg-3 col-md-4 col-12 ">
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
                                    <a href="#/">{p.name}</a>
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
                                <div className="add_to_cart">
                                  <a href="#/" title="Grab Deal">
                                    Grab Deal
                                  </a>
                                </div>
                              </div>
                              <div className="product_content list_content">
                                <h4 className="product_name">
                                  <a href="#/">
                                    Natus erro at congue massa commodo sit Natus
                                    erro
                                  </a>
                                </h4>
                                <div className="price_box">
                                  <span className="old_price">$80.00</span>
                                  <span className="current_price">$70.00</span>
                                </div>
                                <div className="add_to_cart">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Shop;
