import React from "react";
import "./LeagueSummary.scss";
import ContentBox from "../components/ContentBox";
import {
  defaultStandingTableHeader,
  sampleTableData,
} from "../const/leagueDetailConsts";
import { Link } from "react-router-dom";
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
                            <Link
                              className="team-link"
                              to={`/Teams/${item.path}`}
                            >
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
            );
          })}
        </div>
      </ContentBox>
    </div>
  );
};

export default LeagueSummary;
