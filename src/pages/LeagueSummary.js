import "./LeagueSummary.scss"
import ContentBox from "../components/ContentBox";
import { defaultStandingTableHeader, sampleTableData } from "../const/leagueDetailConsts";
import { Link } from "react-router-dom";

const LeagueSummary = () => {
    return (
        <div className='league-summary-wrapper'>
            <ContentBox title="Standings">
                <div className="league-name-wrapper">
                    <span className='league-name'>Men's League</span>
                </div>
                <div className="team-standing-table-wrapper">
                    <table className="team-standing-table">
                        <thead className="team-standing-table-header">
                            <tr>
                                {defaultStandingTableHeader.map((item, index) => {
                                    return <th key={index}>{item}</th>
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {sampleTableData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.rank}</td>
                                        <td>
                                            <Link className="team-link" to={`/Teams/${item.path}`}>{item.name}</Link>
                                        </td>
                                        <td>{item.win}</td>
                                        <td>{item.loss}</td>
                                        <td>{item.winRate}</td>
                                        <td>{item.gb}</td>
                                        <td>{item.goalDiff}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="league-name-wrapper">
                    <span className='league-name'>Women's League</span>
                </div>
                <div className="team-standing-table-wrapper">
                    <table className="team-standing-table">
                        <thead className="team-standing-table-header">
                            <tr>
                                {defaultStandingTableHeader.map((item, index) => {
                                    return <th key={index}>{item}</th>
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {sampleTableData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.rank}</td>
                                        <td>
                                            <Link className="team-link" to={`/Teams/${item.path}`}>{item.name}</Link>
                                        </td>
                                        <td>{item.win}</td>
                                        <td>{item.loss}</td>
                                        <td>{item.winRate}</td>
                                        <td>{item.gb}</td>
                                        <td>{item.goalDiff}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
              </ContentBox>
              <ContentBox title="Leader Board">
                <div>
                  <h3>Home~~~</h3>
                  <h3>Home~~~</h3>
                  <h3>Home~~~</h3>
                  <h3>Home~~~</h3>
                  <h3>Home~~~</h3>
                </div>
              </ContentBox>
              
        </div>
    )
}

export default LeagueSummary;