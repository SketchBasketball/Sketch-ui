import React, { useEffect, useState } from "react";
import "./PlayerDetail.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import PlayerBanner from "../components/Player/PlayerBanner";
import PlayerCareerHigh from "../components/Player/PlayerCareerHigh";
import PlayerCurrentSeasonAvg from "../components/Player/PlayerCurrentSeasonAvg";
import PlayerMatchStats from "../components/Player/PlayerMatchStats";
import PlayerSeasonStats from "../components/Player/PlayerSeasonStats";
import {
  getPlayerDetails,
  getPlayerTeams,
  getPlayerTeamSeasons,
  getPlayerAllTimeHighs,
  getPlayerCurrentAVGs,
  getPlayerMatchStats,
  getPlayerSeasonStats,
} from "../store/actions/player";

const PlayerDetail = () => {
  const { playerId } = useParams();
  const dispatch = useDispatch();

  const { playerTeams, playerTeamSeasons } = useSelector(
    (store) => store.playerReducer
  );

  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("");

  useEffect(() => {
    if (playerId) {
      dispatch(getPlayerDetails(playerId));
      dispatch(getPlayerTeams(playerId));
      dispatch(getPlayerAllTimeHighs(playerId));
    }
  }, []);

  useEffect(() => {
    if (playerTeams.length) {
      setSelectedTeam(playerTeams[0].team_id);
    }
  }, [playerTeams]);

  useEffect(() => {
    if (playerId != "" && selectedTeam != "") {
      dispatch(getPlayerTeamSeasons(playerId, selectedTeam));
      dispatch(getPlayerSeasonStats(playerId, selectedTeam));
    }
  }, [playerId, selectedTeam]);

  useEffect(() => {
    if (playerTeamSeasons.length) {
      setSelectedSeason(
        playerTeamSeasons[playerTeamSeasons.length - 1].season_id
      );
    }
  }, [playerTeamSeasons]);

  useEffect(() => {
    if (selectedTeam != "" && selectedSeason != "") {
      dispatch(getPlayerCurrentAVGs(playerId, selectedTeam, selectedSeason));
      dispatch(getPlayerMatchStats(playerId, selectedTeam, selectedSeason));
    }
  }, [playerId, selectedTeam, selectedSeason]);

  return (
    <div className="player-wrapper">
      <div className="team-season-search-bar-container">
        <div className="team-season-search-bar">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">{"Team"}</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={selectedTeam}
              label="Team"
              onChange={(event) => {
                setSelectedTeam(event.target.value);
              }}
            >
              {playerTeams?.map((item, index) => {
                return (
                  <MenuItem value={item.team_id} key={index}>
                    {item.team_name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: 250 }} size="small">
            <InputLabel id="demo-select-small">{"Leagues/Seasons"}</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={selectedSeason}
              label="Leagues/Seasons"
              onChange={(event) => {
                setSelectedSeason(event.target.value);
              }}
            >
              {playerTeamSeasons.map((item, index) => {
                return (
                  <MenuItem value={item.season_id} key={index}>
                    {item.league_name + " - " + item.season_name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </div>
      <PlayerBanner />
      <div className="player-careerhigh-currentseason-container">
        <PlayerCareerHigh />
        <PlayerCurrentSeasonAvg />
      </div>
      <PlayerMatchStats />
      <PlayerSeasonStats />
    </div>
  );
};

export default PlayerDetail;
