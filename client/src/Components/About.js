import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
  return (
    <>
      <div className="about_bg_area">
        <div className="container">
          {/*about section area */}
          <section className="about_section">
            <div className="row align-items-center">
              <div className="col-12">
                <figure>
                  <figcaption className="about_content">
                    <h1>About DealsGhar</h1>
                    <div className="aff_content">
                      <p>
                        dealsghar.com is a participant in the Amazon Associates
                        Program, an affiliate advertising program designed to
                        provide a means for sites to earn advertising fees by
                        advertising and linking to amazon.in.” dealsghar.com is
                        the world’s best website for deals, offers and discount.
                        We work effortlessly to complete your shopping needs.
                        One stop solution to all your shopping needs..
                      </p>
                      <p>
                        Amazon and the Amazon logo are trademarks of{" "}
                        <b>Amazon.in</b>, <b>Amazon.com</b>, Inc. or its
                        affiliates.
                      </p>
                    </div>
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
        </div>
      </div>
    </>
  );
};

export default About;
