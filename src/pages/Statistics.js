import React, { useEffect, useState } from "react";
import "./Statistics.scss";
import { DataGrid } from "@mui/x-data-grid";
import { statDefaultHeader } from "../const/matchStatDefaultHeader";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const Statistics = () => {
  const [rows, setRows] = useState([]);
  const [league, setLeague] = useState("Division 1");
  const [season, setSeason] = useState("Season 1");
  const [seasonType, setSeasonType] = useState("Regular Season");

  const handleLeagueChange = (event) => {
    setLeague(event.target.value);
    console.log(event.target.value);
  };
  const handleSeasonChange = (event) => {
    setSeason(event.target.value);
    console.log(event.target.value);
  };
  const handleSeasonTypeChange = (event) => {
    setSeasonType(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    let temp = [];
    setRows([]);
    for (let i = 0; i < 200; i++) {
      temp.push({
        id: i,
        seasonplayer_id: "b904eb0d-cd08-49cb-b2c9-841a3989256b",
        name: "Swing Sze Wing V Leung",
        PTS: 17.4,
        FGM: 5.7,
        FGA: 13.7,
        "FG%": 41.6058,
        "3PM": 2.6,
        "3PA": 6.8,
        "3P%": 38.2353,
        FTM: 3.4,
        FTA: 4.4,
        "FT%": 77.2727,
        OREB: 0.2,
        DREB: 0.8,
        REB: 1,
        AST: 1.8,
        STL: 1.1,
        BLK: 0,
        TOV: 1.8,
        EFF: 18.5,
        TSP: 2,
      });
    }
    temp.push({
      id: 9999,
      seasonplayer_id: "b904eb0d-cd08-49cb-b2c9-841a3989256b",
      name: "Swing Sze Wing V Leung",
      PTS: 200,
      FGM: 5.7,
      FGA: 13.7,
      "FG%": 41.6058,
      "3PM": 2.6,
      "3PA": 6.8,
      "3P%": 38.2353,
      FTM: 3.4,
      FTA: 4.4,
      "FT%": 77.2727,
      OREB: 0.2,
      DREB: 0.8,
      REB: 1,
      AST: 1.8,
      STL: 1.1,
      BLK: 0,
      TOV: 1.8,
      EFF: 18.5,
      TSP: 2,
    });
    setRows(temp);
  }, []);
  return (
    <div className="statistics-wrapper">
      <div className="stat-search-bar">
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">League</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={league}
            label="League"
            onChange={handleLeagueChange}
          >
            <MenuItem value={"Division 1"}>Division 1</MenuItem>
            <MenuItem value={"Division 2"}>Division 2</MenuItem>
            <MenuItem value={"HKKBL"}>HKKBL</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Season</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={season}
            label="Season"
            onChange={handleSeasonChange}
          >
            <MenuItem value={"Season 1"}>Season 1</MenuItem>
            <MenuItem value={"Season 2"}>Season 2</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={seasonType}
            label="Type"
            onChange={handleSeasonTypeChange}
          >
            <MenuItem value={"Regular Season"}>Regular Season</MenuItem>
            <MenuItem value={"Playoff"}>Playoff</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="stat-data-grid">
        <DataGrid
          rows={rows}
          columns={statDefaultHeader}
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
