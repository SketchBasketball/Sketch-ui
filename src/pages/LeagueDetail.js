import React from "react";
import { useParams } from "react-router-dom";
import "./LeagueDetail.scss";
import ContentBox from "../components/ContentBox";
import {
  leaderBoardTitles,
  sampleLeaderBoardData,
} from "../const/leagueDetailConsts";
import { useDispatch, useSelector } from "react-redux";
import { getLeagueStandings } from "../store/actions/leagueStanding";
import { useEffect } from "react";
import Loader from "react-loader-spinner";
import StandingTable from "../components/StandingTable";

const LeagueDetail = () => {
  const { league } = useParams();
  const dispatch = useDispatch();
  const { standings } = useSelector((store) => store.leagueStandingReducer);

  useEffect(() => {
    dispatch(getLeagueStandings(league.replaceAll("-", " ")));
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
        <div className="leader-board-grid">
          {leaderBoardTitles.map((item, index) => {
            return (
              <div className="leader-board-item" key={index}>
                <div className="leader-board-title-wrapper">
                  <span className="leader-board-title">{item}</span>
                </div>
                <table className="leader-board-table">
                  <tbody>
                    {sampleLeaderBoardData.map((item, index) => {
                      if (index === 0) {
                        return (
                          <tr key={index}>
                            <th>{item.rank}.</th>
                            <th className="name">{item.name}</th>
                            <th>{item.score}</th>
                          </tr>
                        );
                      }
                      return (
                        <tr key={index}>
                          <td>{item.rank}.</td>
                          <td className="name">{item.name}</td>
                          <td>{item.score}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </ContentBox>
    </div>
  );
};

export default LeagueDetail;
