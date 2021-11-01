import React from "react";
import "./LeagueSummary.scss";
import ContentBox from "../components/ContentBox";
// import { sampleTableData } from "../const/leagueDetailConsts";
import StandingTable from "../components/StandingTable";
import { useDispatch, useSelector } from "react-redux";
import { getAllLeagueStandings } from "../store/actions/leagueStanding";
import { useEffect } from "react";
// const temp = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const LeagueSummary = () => {
  const dispatch = useDispatch();
  const { allStandings } = useSelector((store) => store.leagueStandingReducer);

  useEffect(() => {
    dispatch(getAllLeagueStandings());
  }, []);
  return (
    <div className="league-summary-wrapper">
      <ContentBox title="Standings">
        <div className="league-summary-grid">
          {allStandings.map((item, index) => {
            return (
              <div className="team-standing-table-wrapper" key={index}>
                <div className="league-name-wrapper">{item.league_name}</div>
                <StandingTable standings={item.league_standings} />
              </div>
            );
          })}
        </div>
      </ContentBox>
    </div>
  );
};

export default LeagueSummary;
