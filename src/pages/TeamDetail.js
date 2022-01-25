import React, { useEffect } from "react";
import "./TeamDetail.scss";
// import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMainNextGames } from "../store/actions/mainPage";
import TeamSchedule from "../components/Team/TeamSchedule";
import TeamHeader from "../components/Team/TeamHeader";
import TeamRoster from "../components/Team/TeamRoster";
import TeamStats from "../components/Team/TeamStats";
// import { getTeamDetails } from "../store/actions/team";
import teamDetails from "./TeamDetailExample";
import teamRoster from "./TeamRosterExample";

const TeamDetail = () => {
  // const { id } = useParams();
  const dispatch = useDispatch();
  // const { seasons } = useSelector((store) => store.statisticsReducer);

  // console.log(seasons);
  // const { teamDetails } = useSelector((store) => store.teamReducer);
  // useEffect(() => {
  //   dispatch(getTeamDetails(id));
  // }, []);

  console.log(teamDetails);
  console.log(teamRoster);

  const { next_games, next_loading } = useSelector(
    (store) => store.mainPageReducer
  );

  // const { seasons } = useSelector((store) => store.statisticsReducer);

  useEffect(() => {
    dispatch(getMainNextGames());
  }, []);

  return (
    <div className="team-wrapper">
      <TeamHeader />
      <TeamSchedule
        title="Upcoming Matches"
        games={next_games}
        isLoading={next_loading}
      />
      <TeamRoster roster={teamRoster} />
      <TeamStats stats={teamDetails} />
    </div>
  );
};

export default TeamDetail;
