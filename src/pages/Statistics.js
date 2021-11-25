import React, { useEffect, useState } from "react";
import "./Statistics.scss";
import { DataGrid } from "@mui/x-data-grid";
import { statPageDefaultHeader } from "../const/matchStatDefaultHeader";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useDispatch, useSelector } from "react-redux";
import {
  getLeagues,
  getSeasons,
  getStats,
  getTeams,
} from "../store/actions/statistics";

const Statistics = () => {
  const dispatch = useDispatch();
  const { leagues, seasons, teams, stats } = useSelector(
    (store) => store.statisticsReducer
  );
  const [leagueId, setLeagueId] = useState("");
  const [seasonId, setSeasonId] = useState("");
  const [teamId, setTeamId] = useState("All");
  const [matchType, setMatchType] = useState("League");

  useEffect(() => {
    dispatch(getLeagues());
  }, []);

  useEffect(() => {
    if (leagues.length) {
      setLeagueId(leagues[0].id);
    }
  }, [leagues]);

  useEffect(() => {
    if (leagueId != "") {
      dispatch(getSeasons(leagueId));
    }
  }, [leagueId]);

  useEffect(() => {
    if (seasons.length) {
      setSeasonId(seasons[0].id);
    }
  }, [seasons]);

  useEffect(() => {
    if (seasonId != "") {
      dispatch(getTeams(seasonId));
      setTeamId("All");
    }
  }, [seasonId]);

  useEffect(() => {
    if (seasonId != "") {
      dispatch(getStats(seasonId, teamId, matchType));
    }
  }, [teamId, matchType, seasonId]);

  return (
    <div className="statistics-wrapper">
      <div className="stat-search-bar">
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">League</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={leagueId}
            label="League"
            onChange={(event) => {
              setLeagueId(event.target.value);
              setSeasonId("");
            }}
          >
            {leagues.map((item, index) => {
              return (
                <MenuItem value={item.id} key={index}>
                  {item.abv}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Season</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={seasonId}
            label="Season"
            onChange={(event) => {
              setSeasonId(event.target.value);
            }}
          >
            {seasons.map((item, index) => {
              return (
                <MenuItem value={item.id} key={index}>
                  {item.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={matchType}
            label="Type"
            onChange={(event) => {
              setMatchType(event.target.value);
            }}
          >
            <MenuItem value={"League"}>League</MenuItem>
            <MenuItem value={"Playoff"}>Playoff</MenuItem>
            <MenuItem value={"Event"}>Event</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 210 }}>
          <InputLabel id="demo-simple-select-helper-label">Teams</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={teamId}
            label="Teams"
            onChange={(event) => {
              setTeamId(event.target.value);
            }}
          >
            <MenuItem value={"All"}>All</MenuItem>
            {teams.map((item, index) => {
              return (
                <MenuItem value={item.id} key={index}>
                  {item.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <div className="stat-data-grid">
        <DataGrid
          rows={stats}
          columns={statPageDefaultHeader}
          autoHeight={true}
          rowHeight={30}
          pageSize={50}
          rowsPerPageOptions={[50]}
        />
      </div>
    </div>
  );
};

export default Statistics;
