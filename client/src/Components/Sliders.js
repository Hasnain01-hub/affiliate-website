import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "./Slider.css";
import axios from "axios";

const Sliders = () => {
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
        <></>
      ) : (
        <>
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {banners.map((b, i) => (
              <>
                <SwiperSlide>
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
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </>
      )}

      <br />
      <br />
    </>
  );
};

export default Sliders;
