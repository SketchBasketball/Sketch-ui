import React from "react";
import "./BannerStaff.scss";

const BannerStaff = () => {
  return (
    <div className="banner-staff-container">
      <div
        className="banner-staff"
        style={{ borderRight: "1px solid #ffffff" }}
      >
        <div className="staff-title">CAPTAIN</div>
        <div className="staff-person">-</div>
      </div>
      <div className="banner-staff">
        <div className="staff-title">COACH</div>
        <div className="staff-person">-</div>
      </div>
    </div>
  );
};

export default BannerStaff;
