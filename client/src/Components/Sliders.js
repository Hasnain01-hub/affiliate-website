import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "./Slider.css";
import axios from "axios";
import SliderLoaders from "./SliderLoaders";

const Sliders = () => {
  SwiperCore.use([Autoplay]);

  const [banners, setBanners] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API + "api/admin/banners/get")
      .then((res) => {
        setBanners(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading === true ? (
        <>
          <SliderLoaders />
        </>
      ) : (
        <>
          {window.innerWidth < 800 ? (
            <>
              <Swiper
                pagination={{
                  type: "fraction",
                }}
                slidesPerView={1}
                longSwipesRatio={0}
                centeredSlides={true}
                spaceBetween={30}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                navigation={true}
                loop={true}
                autoplay
              >
                {banners.map((b, i) => (
                  <>
                    <SwiperSlide>
                      {b.url !== null ? (
                        <>
                          <a href={b.url} target="_blank" rel="noreferrer">
                            <div
                              style={{
                                backgroundImage: "url(" + b.image + ")",
                                height: "100%",
                                width: "100%",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            ></div>
                          </a>
                        </>
                      ) : (
                        <>
                          <div
                            style={{
                              backgroundImage: "url(" + b.image + ")",
                              height: "100%",
                              width: "100%",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          ></div>
                        </>
                      )}
                    </SwiperSlide>
                  </>
                ))}
              </Swiper>
            </>
          ) : (
            <>
              <Swiper
                pagination={{
                  type: "fraction",
                }}
                slidesPerView={1.7}
                longSwipesRatio={0}
                centeredSlides={true}
                spaceBetween={30}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                navigation={true}
                loop={true}
                autoplay
              >
                {banners.map((b, i) => (
                  <>
                    <SwiperSlide>
                      {b.url !== null ? (
                        <>
                          <a href={b.url} target="_blank" rel="noreferrer">
                            <div
                              style={{
                                backgroundImage: "url(" + b.image + ")",
                                height: "100%",
                                width: "100%",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            ></div>
                          </a>
                        </>
                      ) : (
                        <>
                          <div
                            style={{
                              backgroundImage: "url(" + b.image + ")",
                              height: "100%",
                              width: "100%",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          ></div>
                        </>
                      )}
                    </SwiperSlide>
                  </>
                ))}
              </Swiper>
            </>
          )}
        </>
      )}

      <br />
      <br />
    </>
  );
};

export default Sliders;
