import React from "react";
import "./Sponsor.scss";
import sponsor1 from "../logo/sponsor1.png";
import sponsor2 from "../logo/sponsor2.png";
import sponsor3 from "../logo/sponsor3.png";

const Sponsor = () => {
  const handleImgClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="sponsor-container">
      <div className="sponsor-wrapper">
        <img
          src={sponsor1}
          className="sponsor-logo"
          alt="sponsor-logo"
          onClick={() => {
            handleImgClick("https://www.wilson.com/en-us/basketball");
          }}
        />
        <img
          src={sponsor2}
          className="sponsor-logo"
          alt="sponsor-logo"
          onClick={() => {
            handleImgClick("https://stiz.kr/");
          }}
        />
        <img
          src={sponsor3}
          className="sponsor-logo"
          alt="sponsor-logo"
          onClick={() => {
            handleImgClick("https://www.masterwook.com/");
          }}
        />
      </div>
    </div>
  );
};

export default Sponsor;
