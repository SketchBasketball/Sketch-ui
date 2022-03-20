import React from "react";
import "./PlayerDetail.scss";
import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import PlayerBanner from "../components/Player/PlayerBanner";
import PlayerCareerHigh from "../components/Player/PlayerCareerHigh";
import PlayerCurrentSeasonAvg from "../components/Player/PlayerCurrentSeasonAvg";
import PlayerSeasonStats from "../components/Player/PlayerSeasonStats";

const PlayerDetail = () => {
  const { playerId } = useParams();
  console.log(playerId);
  // const dispatch = useDispatch();
  // const [playerSeasonId, setPlayerSeasonId] = useState(playerSeasons[0].id);

  const playerSeasons = [
    {
      name: "Season 5",
      id: "64d06da7-dd66-4f63-8f7a-5179904bacbd",
      start_date: "2021-11-01",
      end_date: "2021-12-31",
      league_id: "d413b9e4-465d-4329-a4a0-baf2ec393d87",
      league_name: "Hong Kong Korean Basketball League",
    },
    {
      name: "Season 4",
      id: "34d06da7-dd66-4f63-8f7a-5179904bacbd",
      start_date: "2021-11-01",
      end_date: "2021-12-31",
      league_id: "d413b9e4-465d-4329-a4a0-baf2ec393d87",
      league_name: "Hong Kong Korean Basketball League",
    },
  ];

  return (
    <div className="player-wrapper">
      <div className="team-season-search-bar-container">
        <div className="team-season-search-bar">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              {"Leagues"}
            </InputLabel>
            <Select
              sx={{ height: "2.5rem" }}
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={playerSeasons[0]?.name}
              label="Leagues"
              // onChange={(event) => {
              //   setPlayerSeasonId(event.target.value);
              // }}
            >
              {playerSeasons.map((item, index) => {
                return (
                  <MenuItem value={item.id} key={index}>
                    {item.league_name + " - " + item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              {"Seasons"}
            </InputLabel>
            <Select
              sx={{ height: "2.5rem" }}
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={playerSeasons[0]?.name}
              label="Seasons"
              // onChange={(event) => {
              //   setPlayerSeasonId(event.target.value);
              // }}
            >
              {playerSeasons.map((item, index) => {
                return (
                  <MenuItem value={item.id} key={index}>
                    {item.league_name + " - " + item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              {"Teams"}
            </InputLabel>
            <Select
              sx={{ height: "2.5rem" }}
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={playerSeasons[0]?.name}
              label="Teams"
              // onChange={(event) => {
              //   setPlayerSeasonId(event.target.value);
              // }}
            >
              {playerSeasons.map((item, index) => {
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
      <PlayerBanner />
      <div className="player-careerhigh-currentseason-container">
        <PlayerCareerHigh />
        <PlayerCurrentSeasonAvg />
      </div>
      <PlayerSeasonStats />
    </div>
  );
};

export default PlayerDetail;
