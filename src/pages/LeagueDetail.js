import {useParams} from "react-router-dom";
import "./LeagueDetail.scss"
import ContentBox from "../components/ContentBox";
import { defaultStandingTableHeader, sampleTableData, leaderBoardTitles, sampleLeaderBoardData } from "../const/leagueDetailConsts";
import { Link } from "react-router-dom";

const LeagueDetail = () => {
    const {league} = useParams()
    return (
        <div className='league-summary-wrapper'>
            <ContentBox title={`Standings - ${league}`}>
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
              <ContentBox title={`Leader Board - ${league}`}>
                <div className="leader-board-grid">
                    {leaderBoardTitles.map((item, index) => {
                        return (
                        <div className="leader-board-item" key={index}>
                            <div className="leader-board-title-wrapper">
                                <span className='leader-board-title'>{item}</span>
                            </div>
                            <table className="leader-board-table">
                                {sampleLeaderBoardData.map((item, index) => {
                                    if (index === 0) {
                                        return (
                                            <tr key={index}>
                                                <th>{item.rank}.</th>
                                                <th className="name">{item.name}</th>
                                                <th>{item.score}</th>
                                            </tr>
                                        )
                                    }
                                    return (
                                        <tr key={index}>
                                            <td>{item.rank}.</td>
                                            <td className="name">{item.name}</td>
                                            <td>{item.score}</td>
                                        </tr>
                                    )
                                })}
                            </table>
                        </div>
                    )
                    })}
                </div>  
              </ContentBox>
        </div>
    )
}

export default LeagueDetail;