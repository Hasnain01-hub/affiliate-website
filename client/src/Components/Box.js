import React from "react";
import { WhatsappIcon, WhatsappShareButton } from "react-share";
import "./Slider.css";
import $ from "jquery";

const Box = (props) => {
  const hideBox = () => {
    $(".popup").hide();
  };

  return (
    <>
      <div className="popup">
        <div className="box">
          <div className="icon" onClick={hideBox}>
            X
          </div>
          <h2>The Affiliate Link is Here :</h2>
          <p>
            <a
              href={"https://lamefame.in/link.html?" + props.link}
              target="_blank"
              rel="noreferrer"
              style={{ wordBreak: "break-word" }}
            >
              {"https://lamefame.in/link.html?" + props.link}
            </a>
          </p>
          <a
            href={
              "https://wa.me/?text=https://lamefame.in/link.html?" + props.link
            }
          >
            <WhatsappShareButton title="Whatsapp">
              <WhatsappIcon />
            </WhatsappShareButton>
          </a>
        </div>
      </div>
    </>
  );
};

export default Box;
