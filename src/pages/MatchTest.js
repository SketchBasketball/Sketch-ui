import React from "react";
import "./MatchTest.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import { getMatchDetails } from "../store/actions/match";
import GameResult from "../components/GameResult";
import MatchDetailBox from "../components/MatchDetailBox";
import DataGrid from "react-data-grid";
import matchTestStatDefaultHeader from "../const/matchTestStatDefault";

const MatchTest = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { matchDetails } = useSelector((store) => store.matchReducer);
  const [homeRows, setHomeRows] = useState(
    matchDetails ? matchDetails.home_team.match_stats : []
  );
  const summaryRows = useMemo(() => {
    const summaryRow = {
      id: "total_0",
      totalMin: homeRows.reduce(function (prev, cur) {
        return prev + cur.minutes;
      }, 0),
      totalPoints: homeRows.reduce(function (prev, cur) {
        return prev + cur.points;
      }, 0),
      totalCount: homeRows.length,
      yesCount: homeRows.filter((r) => r.available).length,
    };
    return [summaryRow];
  }, [homeRows]);

  useEffect(() => {
    dispatch(getMatchDetails(id));
  }, []);

  useEffect(() => {
    setHomeRows(matchDetails ? matchDetails.home_team.match_stats : []);
  }, [matchDetails]);

  return (
    <div className="match-container">
      <div className="match-content-wrapper">
        <GameResult matchDetails={matchDetails} />
        {matchDetails?.is_finished ? (
          <MatchDetailBox matchDetails={matchDetails} />
        ) : (
          <div className="not-finished-div">TBD: Shooting Chart and MVP</div>
        )}

        <div className="box-score-wrapper">
          <span className="box-score-team-name">
            {matchDetails ? matchDetails.home_team.name : null}
          </span>
          <DataGrid
            style={{ height: "100%" }}
            className="rdg-light"
            columns={matchTestStatDefaultHeader}
            rows={homeRows}
            summaryRows={summaryRows}
          />
        </div>
        {/* <div className="box-score-wrapper">
          <span>{matchDetails ? matchDetails.away_team.name : null}</span>
          <DataGrid
            rows={matchDetails ? matchDetails.away_team.match_stats : []}
            columns={matchStatDefaultHeader}
            autoHeight={true}
            rowHeight={30}
            pageSize={100}
            rowsPerPageOptions={[100]}
          />
        </div> */}
      </div>
    </div>
  );
};

export default MatchTest;
