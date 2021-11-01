import React from "react";
import { useParams } from "react-router-dom";
import "./LeagueDetail.scss";
import ContentBox from "../components/ContentBox";
import { useDispatch, useSelector } from "react-redux";
import {
  getLeagueStandings,
  getLeaderBoard,
} from "../store/actions/leagueStanding";
import { useEffect } from "react";
import Loader from "react-loader-spinner";
import StandingTable from "../components/StandingTable";
import LeaderBoardBox from "../components/LeaderBoardBox";

const LeagueDetail = () => {
  const { league } = useParams();
  const dispatch = useDispatch();
  const { standings, leaderBoard } = useSelector(
    (store) => store.leagueStandingReducer
  );

  useEffect(() => {
    let leagueName = league.replaceAll("-", " ");
    dispatch(getLeagueStandings(leagueName));
    dispatch(getLeaderBoard(leagueName));
  }, []);

  return (
    <div className="league-detail-wrapper">
      <ContentBox title={`Standings - ${league}`}>
        <div className="team-standing-table-wrapper">
          {standings.length ? (
            <StandingTable standings={standings} />
          ) : (
            <div className="standings-loading-div">
              <Loader
                type="Oval"
                color="#ff5722"
                secondaryColor="#757575"
                width={40}
                height={40}
              />
            </div>
          )}
        </div>
      </ContentBox>
      <ContentBox title={`Leader Board - ${league}`}>
        {leaderBoard.length ? (
          <div className="leader-board-grid">
            {leaderBoard.map((item, index) => {
              return <LeaderBoardBox key={index} leaders={item} />;
            })}
          </div>
        ) : (
          <div className="standings-loading-div">
            <Loader
              type="Oval"
              color="#ff5722"
              secondaryColor="#757575"
              width={40}
              height={40}
            />
          </div>
        )}
      </ContentBox>
    </div>
  );
};

export default LeagueDetail;
