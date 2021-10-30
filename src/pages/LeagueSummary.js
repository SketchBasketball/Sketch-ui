import React from "react";
import "./LeagueSummary.scss";
import ContentBox from "../components/ContentBox";
import { sampleTableData } from "../const/leagueDetailConsts";
import StandingTable from "../components/StandingTable";
const temp = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const LeagueSummary = () => {
  return (
    <div className="league-summary-wrapper">
      <ContentBox title="Standings">
        <div className="league-summary-grid">
          {temp.map((item) => {
            return (
              <div className="team-standing-table-wrapper" key={item}>
                <div className="league-name-wrapper">Men's League</div>
                <StandingTable standings={sampleTableData} />
              </div>
            );
          })}
        </div>
      </ContentBox>
    </div>
  );
};

export default LeagueSummary;
