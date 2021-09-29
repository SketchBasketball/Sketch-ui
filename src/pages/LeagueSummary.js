import React from "react";
import "./LeagueDetail.scss";
import ContentBox from "../components/ContentBox";
import {
  defaultStandingTableHeader,
  sampleTableData,
  leaderBoardTitles,
} from "../const/leagueDetailConsts";
import { Link } from "react-router-dom";

const LeagueSummary = () => {
  return (
    <div className="league-summary-wrapper">
      <div className="league-name-wrapper">
        <span className="league-name">
          TODO. League Main Page contents and layout to be determined
        </span>
      </div>
      <ContentBox title="Standings">
        <div className="league-name-wrapper">
          <span className="league-name">Men's League</span>
        </div>
        <div className="team-standing-table-wrapper">
          <table className="team-standing-table">
            <thead className="team-standing-table-header">
              <tr>
                {defaultStandingTableHeader.map((item, index) => {
                  return <th key={index}>{item}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {sampleTableData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.rank}</td>
                    <td>
                      <Link className="team-link" to={`/Teams/${item.path}`}>
                        {item.name}
                      </Link>
                    </td>
                    <td>{item.win}</td>
                    <td>{item.loss}</td>
                    <td>{item.winRate}</td>
                    <td>{item.gb}</td>
                    <td>{item.goalDiff}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="league-name-wrapper">
          <span className="league-name">Women's League</span>
        </div>
        <div className="team-standing-table-wrapper">
          <table className="team-standing-table">
            <thead className="team-standing-table-header">
              <tr>
                {defaultStandingTableHeader.map((item, index) => {
                  return <th key={index}>{item}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {sampleTableData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.rank}</td>
                    <td>
                      <Link className="team-link" to={`/Teams/${item.path}`}>
                        {item.name}
                      </Link>
                    </td>
                    <td>{item.win}</td>
                    <td>{item.loss}</td>
                    <td>{item.winRate}</td>
                    <td>{item.gb}</td>
                    <td>{item.goalDiff}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </ContentBox>
      <ContentBox title="Leader Board">
        <div className="league-name-wrapper">
          <span className="league-name">Men's League</span>
        </div>
        <div className="leader-board-grid">
          {leaderBoardTitles.map((item, index) => {
            return (
              <div className="leader-board-item" key={index}>
                <div className="leader-board-title-wrapper">
                  <span className="leader-board-title">{item}</span>
                </div>
                <table className="leader-board-table">
                  <tr>
                    <th>1.</th>
                    <th className="name">Stephen Curry</th>
                    <th>32.0</th>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td className="name">Bobby Lee</td>
                    <td>31.0</td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td className="name">Taemin Ha</td>
                    <td>26.0</td>
                  </tr>
                  <tr>
                    <td>4.</td>
                    <td className="name">Jongha Kim</td>
                    <td>16.0</td>
                  </tr>
                  <tr>
                    <td>5.</td>
                    <td className="name">Michael Jordan</td>
                    <td>15.0</td>
                  </tr>
                </table>
              </div>
            );
          })}
        </div>
        <div className="league-name-wrapper">
          <span className="league-name">Women's League</span>
        </div>
        <div className="leader-board-grid">
          {leaderBoardTitles.map((item, index) => {
            return (
              <div className="leader-board-item" key={index}>
                <div className="leader-board-title-wrapper">
                  <span className="leader-board-title">{item}</span>
                </div>
                <table className="leader-board-table">
                  <tr>
                    <th>1.</th>
                    <th className="name">Stephen Curry</th>
                    <th>32.0</th>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td className="name">Bobby Lee</td>
                    <td>31.0</td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td className="name">Taemin Ha</td>
                    <td>26.0</td>
                  </tr>
                  <tr>
                    <td>4.</td>
                    <td className="name">Jongha Kim</td>
                    <td>16.0</td>
                  </tr>
                  <tr>
                    <td>5.</td>
                    <td className="name">Michael Jordan</td>
                    <td>15.0</td>
                  </tr>
                </table>
              </div>
            );
          })}
        </div>
      </ContentBox>
    </div>
  );
};

export default LeagueSummary;
