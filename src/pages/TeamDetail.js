import React, { useEffect, useState } from "react";
import "./TeamDetail.scss";
// import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMainNextGames } from "../store/actions/mainPage";
import TeamSchedule from "../components/Team/TeamSchedule";
import TeamBanner from "../components/Team/TeamBanner";
import TeamRoster from "../components/Team/TeamRoster";
import TeamStats from "../components/Team/TeamStats";
import TeamAllTime from "../components/Team/TeamAllTime";
import TeamStarting from "../components/Team/TeamStarting";
import {
  getTeamSeasons,
  getTeamPlayerStats,
  getTeamStats,
  getTeamWLStats,
  getTeamAllTimeHigh,
} from "../store/actions/team";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const TeamDetail = () => {
  const dispatch = useDispatch();

  const team_id = "6ceb528c-f839-4580-b322-b0af0f79d81d";
  const season_id = "4453f917-8248-4df2-b62c-2356408a26f0";

  const { next_games, next_loading } = useSelector(
    (store) => store.mainPageReducer
  );
  const { teamSeasons } = useSelector((store) => store.teamReducer);
  const [teamSeasonId, setTeamSeasonId] = useState("");

  useEffect(() => {
    dispatch(getMainNextGames());
  }, []);

  useEffect(() => {
    dispatch(getTeamSeasons(team_id));
  }, []);

  useEffect(() => {
    if (teamSeasons.length) {
      setTeamSeasonId(teamSeasons[0].id);
    }
  }, [teamSeasons]);

  useEffect(() => {
    dispatch(getTeamPlayerStats(team_id, season_id));
    dispatch(getTeamStats(team_id, season_id));
    dispatch(getTeamWLStats(team_id, season_id));
    dispatch(getTeamAllTimeHigh(team_id));
  }, []);

  useEffect(() => {
    console.log("getTeamSeasons", teamSeasons);
  }, [teamSeasons]);

  return (
    <div className="team-wrapper">
      <TeamBanner />
      <div className="stat-search-bar">
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Seasons</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={teamSeasonId}
            label="League"
            onChange={(event) => {
              setTeamSeasonId(event.target.value);
            }}
          >
            {teamSeasons.map((item, index) => {
              return (
                <MenuItem value={item.id} key={index}>
                  {item.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <div className="team-alltime-starting">
        <TeamAllTime />
        <TeamStarting />
      </div>
      <TeamSchedule
        title="Upcoming Matches"
        games={next_games}
        isLoading={next_loading}
      />
      <TeamRoster />
      <TeamStats />
    </div>
  );
};

export default TeamDetail;
