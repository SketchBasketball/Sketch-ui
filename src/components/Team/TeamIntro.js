import React from "react";
import "./TeamIntro.scss";
// import { DataGrid } from "@mui/x-data-grid";
// import { teamIntroDefaultHeader } from "../../const/teamDefaultHeader";

const TeamIntro = ({ intro }) => {
  const gridTitle = "Background Information";

  console.log("LOOK HERE", intro);

  return (
    <div className="team-intro-wrapper">
      <div className="team-intro-container">
        <span>{intro ? gridTitle : "No Team Selected"}</span>
        {/* <DataGrid
          rows={intro && intro}
          getRowId={(row) => row.info.title}
          columns={teamIntroDefaultHeader}
          autoHeight={true}
          rowHeight={30}
          pageSize={100}
          rowsPerPageOptions={[100]}
          hideFooter={true}
        /> */}
      </div>
    </div>
  );
};

export default TeamIntro;
