import React from "react";
import "./TeamRecords.scss";
import { DataGrid } from "@mui/x-data-grid";
import { teamRecordsDefaultHeader } from "../../const/teamDefaultHeader";

const TeamRecords = ({ records }) => {
  const gridTitle = "All Time Records";
  console.log(records);

  return (
    <div className="team-records-wrapper">
      <div className="team-records-container">
        <span>{records ? gridTitle : "No Team Selected"}</span>
        <DataGrid
          rows={records && records}
          getRowId={(row) => row.record_id}
          columns={teamRecordsDefaultHeader}
          autoHeight={true}
          rowHeight={30}
          pageSize={100}
          rowsPerPageOptions={[100]}
          hideFooter={true}
        />
      </div>
    </div>
  );
};

export default TeamRecords;
