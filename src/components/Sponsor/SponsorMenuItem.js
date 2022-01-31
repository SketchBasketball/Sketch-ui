import React from "react";
import "./SponsorMenuItem.scss";
// import sponsor1 from "../../logo/sponsor1.png";
// import sponsor3 from "../../logo/sponsor3.png";

const SponsorMenuItem = (props) => {
  // const handleImgClick = (url) => {
  //   window.open(url, "_blank");
  // };

  // const sponsor_wilson = {
  //   return (<img
  //     src={sponsor1}
  //     className="sponsor-logo"
  //     alt="sponsor-logo"
  //     onClick={() => {
  //       handleImgClick("https://www.wilson.com/en-us/basketball");
  //     }}
  //   />;)
  // };

  // const sponsor_masterwook = () => {
  //   <img
  //     src={sponsor3}
  //     className="sponsor-logo"
  //     alt="sponsor-logo"
  //     onClick={() => {
  //       handleImgClick("https://www.masterwook.com/");
  //     }}
  //   />;
  // };

  return (
    <div className="sponsor-menu-wrapper">
      <div
        className="sponsor-menu-item"
        activeStyle={{
          color: "#171e4f",
          fontWeight: 700,
          borderBottom: "#171e4f solid",
        }}
      >
        <div>{props.name}</div>
      </div>
      {props.name == "2022" ? 2022 : props.name == "2021" ? 2021 : 2022}

      {/* <div>{sponsor_masterwook + sponsor_wilson}</div> */}
    </div>
  );
};

export default SponsorMenuItem;
