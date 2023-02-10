import React from "react";
import { useSelector } from "react-redux";
import { MakeLink } from "./MakeLink";

const Links = () => {
  const { user } = useSelector((state) => state.user);

  setTimeout(() => {
    if (user) {
      if (user.tag === "") {
        window.location.href = "/Incomplete-Profile";
      }
    }
  }, 500);

  return (
    <>
      <MakeLink />
    </>
  );
};

export default Links;
