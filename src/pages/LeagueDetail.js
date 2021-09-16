import {useParams} from "react-router-dom";

const LeagueDetail = () => {
    const {league} = useParams()
    return (
        <div className='league-detail-wrapper'>
            <h3>League Details Page: {league}</h3>
        </div>
    )
}

export default LeagueDetail;