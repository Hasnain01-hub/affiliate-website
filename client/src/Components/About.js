import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
  return (
    <>
      <div className="about_bg_area">
        <div className="container">
          {/*about section area */}
          <section className="about_section mb-60">
            <div className="row align-items-center">
              <div className="col-12">
                <figure>
                  <figcaption className="about_content">
                    <h1>
                      We are a digital agency focused on delivering content and
                      utility user-experiences.
                    </h1>
                    <p>
                      Adipiscing lacus ut elementum, nec duis, tempor litora
                      turpis dapibus. Imperdiet cursus odio tortor in elementum.
                      Egestas nunc eleifend feugiat lectus laoreet, vel nunc
                      taciti integer cras. Hac pede dis, praesent nibh ac dui
                      mauris sit. Pellentesque mi, facilisi mauris, elit sociis
                      leo sodales accumsan. Iaculis ac fringilla torquent lorem
                      consectetuer, sociosqu phasellus risus urna aliquam,
                      ornare.
                    </p>
                    <div className="about_signature">
                      <LazyLoadImage
                        src="assets/img/about/about-us-signature.png"
                        alt=""
                        effect="blur"
                      />
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>
          {/*about section end*/}
          {/*chose us area start*/}
          <div
            className="choseus_area"
            data-bgimg="assets/img/about/about-us-policy-bg.jpg"
            style={{
              backgroundImage: 'url("assets/img/about/about-us-policy-bg.jpg")',
            }}
          >
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="single_chose">
                  <div className="chose_icone">
                    <LazyLoadImage
                      src="assets/img/about/About_icon1.png"
                      alt=""
                      effect="blur"
                    />
                  </div>
                  <div className="chose_content">
                    <h3>Creative Design</h3>
                    <p>
                      Erat metus sodales eget dolor consectetuer, porta ut purus
                      at et alias, nulla ornare velit amet
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="single_chose">
                  <div className="chose_icone">
                    <LazyLoadImage
                      src="assets/img/about/About_icon2.png"
                      alt=""
                      effect="blur"
                    />
                  </div>
                  <div className="chose_content">
                    <h3>100% Money Back Guarantee</h3>
                    <p>
                      Erat metus sodales eget dolor consectetuer, porta ut purus
                      at et alias, nulla ornare velit amet
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="single_chose">
                  <div className="chose_icone">
                    <LazyLoadImage
                      src="assets/img/about/About_icon3.png"
                      alt=""
                      effect="blur"
                    />
                  </div>
                  <div className="chose_content">
                    <h3>Online Support 24/7</h3>
                    <p>
                      Erat metus sodales eget dolor consectetuer, porta ut purus
                      at et alias, nulla ornare velit amet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*chose us area end*/}
          {/*services img area*/}
          <div className="about_gallery_section mb-45">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <article className="single_gallery_section">
                  <figure>
                    <div className="gallery_thumb">
                      <LazyLoadImage
                        src="assets/img/about/about2.jpg"
                        alt=""
                        effect="blur"
                      />
                    </div>
                    <figcaption className="about_gallery_content">
                      <h3>What do we do?</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto
                      </p>
                    </figcaption>
                  </figure>
                </article>
              </div>
              <div className="col-lg-4 col-md-4">
                <article className="single_gallery_section">
                  <figure>
                    <div className="gallery_thumb">
                      <LazyLoadImage
                        src="assets/img/about/about3.jpg"
                        alt=""
                        effect="blur"
                      />
                    </div>
                    <figcaption className="about_gallery_content">
                      <h3>Our Mission</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto
                      </p>
                    </figcaption>
                  </figure>
                </article>
              </div>
              <div className="col-lg-4 col-md-4">
                <article className="single_gallery_section">
                  <figure>
                    <div className="gallery_thumb">
                      <LazyLoadImage
                        src="assets/img/about/about4.jpg"
                        alt=""
                        effect="blur"
                      />
                    </div>
                    <figcaption className="about_gallery_content">
                      <h3>History Of Us</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto
                      </p>
                    </figcaption>
                  </figure>
                </article>
              </div>
            </div>
          </div>
          {/*services img end*/}
          {/*testimonial area start*/}
          <div className="faq-client-say-area">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="section_title">
                  <h2>What can we do for you ?</h2>
                </div>
                <div className="faq-style-wrap" id="faq-five">
                  {/* Panel-default */}
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h5 className="panel-title">
                        <a
                          id="octagon"
                          className="collapsed"
                          role="button"
                          data-bs-toggle="collapse"
                          href="#faq-collapse1"
                          aria-controls="faq-collapse1"
                        >
                          {" "}
                          <span className="button-faq" />
                          Fast Free Delivery
                        </a>
                      </h5>
                    </div>
                    <div
                      id="faq-collapse1"
                      className="collapse show"
                      role="tabpanel"
                      data-bs-parent="#faq-five"
                    >
                      <div className="panel-body">
                        <p>
                          Nam liber tempor cum soluta nobis eleifend option.
                        </p>
                        <p>
                          Congue nihil imperdiet doming id quod mazim placerat
                          facer possim assum. Typi non habent claritatem insitam
                          est usus legentis in iis qui facit eorum claritatem.
                          Investigationes demonstraverunt lectores legere me.
                        </p>
                        <p>
                          {" "}
                          Claritas est etiam processus dynamicus, qui sequitur
                          mutationem consuetudium lectorum.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*// Panel-default */}
                  {/* Panel-default */}
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h5 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-bs-toggle="collapse"
                          href="#faq-collapse2"
                          aria-controls="faq-collapse2"
                        >
                          {" "}
                          <span className="button-faq" />
                          More Than 30 Years In The Business
                        </a>
                      </h5>
                    </div>
                    <div
                      id="faq-collapse2"
                      className="collapse"
                      role="tabpanel"
                      data-bs-parent="#faq-five"
                    >
                      <div className="panel-body">
                        <p>
                          Nam liber tempor cum soluta nobis eleifend option.
                        </p>
                        <p>
                          Congue nihil imperdiet doming id quod mazim placerat
                          facer possim assum. Typi non habent claritatem insitam
                          est usus legentis in iis qui facit eorum claritatem.
                          Investigationes demonstraverunt lectores legere me.
                        </p>
                        <p>
                          {" "}
                          Claritas est etiam processus dynamicus, qui sequitur
                          mutationem consuetudium lectorum.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*// Panel-default */}
                  {/* Panel-default */}
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h5 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-bs-toggle="collapse"
                          href="#faq-collapse3"
                          aria-expanded="false"
                          aria-controls="faq-collapse3"
                        >
                          {" "}
                          <span className="button-faq" />
                          100% Organic Foods
                        </a>
                      </h5>
                    </div>
                    <div
                      id="faq-collapse3"
                      className="collapse"
                      role="tabpanel"
                      data-bs-parent="#faq-five"
                    >
                      <div className="panel-body">
                        <p>
                          Nam liber tempor cum soluta nobis eleifend option.
                        </p>
                        <p>
                          Congue nihil imperdiet doming id quod mazim placerat
                          facer possim assum. Typi non habent claritatem insitam
                          est usus legentis in iis qui facit eorum claritatem.
                          Investigationes demonstraverunt lectores legere me.
                        </p>
                        <p>
                          {" "}
                          Claritas est etiam processus dynamicus, qui sequitur
                          mutationem consuetudium lectorum.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*// Panel-default */}
                  {/* Panel-default */}
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h5 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-bs-toggle="collapse"
                          href="#faq-collapse4"
                          aria-expanded="false"
                          aria-controls="faq-collapse4"
                        >
                          {" "}
                          <span className="button-faq" />
                          Best Shopping Strategies
                        </a>
                      </h5>
                    </div>
                    <div
                      id="faq-collapse4"
                      className="collapse"
                      role="tabpanel"
                      data-bs-parent="#faq-five"
                    >
                      <div className="panel-body">
                        <p>
                          Nam liber tempor cum soluta nobis eleifend option.
                        </p>
                        <p>
                          Congue nihil imperdiet doming id quod mazim placerat
                          facer possim assum. Typi non habent claritatem insitam
                          est usus legentis in iis qui facit eorum claritatem.
                          Investigationes demonstraverunt lectores legere me.
                        </p>
                        <p>
                          {" "}
                          Claritas est etiam processus dynamicus, qui sequitur
                          mutationem consuetudium lectorum.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*// Panel-default */}
                </div>
              </div>
            </div>
          </div>
          {/*testimonial area end*/}
        </div>
      </div>
    </>
  );
};

export default About;
