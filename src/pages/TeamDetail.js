import React, { useEffect, useState } from "react";
import "./TeamDetail.scss";
import { useParams } from "react-router-dom";
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
  const { teamId } = useParams();
  const dispatch = useDispatch();

  const { teamSeasons } = useSelector((store) => store.teamReducer);
  const { next_games, next_loading } = useSelector(
    (store) => store.mainPageReducer
  );

  const [selectedSeason, setSelectedSeason] = useState("");

  useEffect(() => {
    dispatch(getMainNextGames());
  }, []);

  useEffect(() => {
    if (teamId) {
      dispatch(getTeamSeasons(teamId));
      dispatch(getTeamAllTimeHigh(teamId));
    }
  }, []);

  useEffect(() => {
    if (teamSeasons.length) {
      setSelectedSeason(teamSeasons[0].id);
    }
  }, [teamSeasons]);

  useEffect(() => {
    if (selectedSeason != "" && teamId != "") {
      dispatch(getTeamStats(teamId, selectedSeason));
      dispatch(getTeamWLStats(teamId, selectedSeason));
      dispatch(getTeamPlayerStats(teamId, selectedSeason));
    }
  }, [selectedSeason]);

  return (
    <div className="team-wrapper">
      <div className="team-season-search-bar-container">
        <div className="team-season-search-bar">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">{"Leagues/Season"}</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={selectedSeason}
              label="League/Seasons"
              onChange={(event) => {
                setSelectedSeason(event.target.value);
              }}
            >
              {teamSeasons.map((item, index) => {
                return (
                  <MenuItem value={item.id} key={index}>
                    {item.league_name + " - " + item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </div>
      <TeamBanner />
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
