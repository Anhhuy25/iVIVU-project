import React from "react";

// Components
import NavbarEating from "./NavbarEating";
import FooterTop from "../tours/FooterTop";
import EatingTitle from "./EatingTitle";
import FooterBottom from "./FooterBottom";

const DinnerTitle = () => {
  return (
    <>
      <NavbarEating />
      <EatingTitle />
      <div style={{ backgroundColor: "#f9f9f9", padding: "0 8px" }}>
        <FooterTop />
        <FooterBottom />
      </div>
    </>
  );
};

export default DinnerTitle;
