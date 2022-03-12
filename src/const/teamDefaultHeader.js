const teamRosterDefaultHeader = [
  {
    field: "player_name",
    headerName: "PLAYER",
    flex: 1,
    minWidth: 180,
    sortable: false,
  },
  // {
  //   field: "back_number",
  //   headerName: "#",
  //   flex: 1,
  //   minWidth: 40,
  //   sortable: false,
  // },
  {
    field: "PTS",
    headerName: "PTS",
    flex: 1,
    minWidth: 60,
    sortable: false,
    valueFormatter: ({ value }) => parseFloat(value.toFixed(1)),
  },
  {
    field: "FGM",
    headerName: "FGM",
    flex: 1,
    minWidth: 60,
    sortable: false,
    valueFormatter: ({ value }) => parseFloat(value.toFixed(1)),
  },
  {
    field: "FGA",
    headerName: "FGA",
    flex: 1,
    minWidth: 60,
    sortable: false,
    valueFormatter: ({ value }) => parseFloat(value.toFixed(1)),
  },
  {
    field: "FG%",
    headerName: "FG%",
    flex: 1,
    minWidth: 60,
    sortable: false,
    valueFormatter: ({ value }) => parseFloat(value.toFixed(1)),
  },
  {
    field: "3PM",
    headerName: "3PM",
    flex: 1,
    minWidth: 60,
    sortable: false,
    valueFormatter: ({ value }) => parseFloat(value.toFixed(1)),
  },
  {
    field: "3PA",
    headerName: "3PA",
    flex: 1,
    minWidth: 60,
    sortable: false,
    valueFormatter: ({ value }) => parseFloat(value.toFixed(1)),
  },
  {
    field: "3P%",
    headerName: "3P%",
    flex: 1,
    minWidth: 60,
    sortable: false,
    valueFormatter: ({ value }) => parseFloat(value.toFixed(1)),
  },
  {
    field: "FTM",
    headerName: "FTM",
    flex: 1,
    minWidth: 60,
    sortable: false,
    valueFormatter: ({ value }) => parseFloat(value.toFixed(1)),
  },
  {
    field: "FTA",
    headerName: "FTA",
    flex: 1,
    minWidth: 60,
    sortable: false,
    valueFormatter: ({ value }) => parseFloat(value.toFixed(1)),
  },
  {
    field: "FT%",
    headerName: "FT%",
    flex: 1,
    minWidth: 60,
    sortable: false,
    valueFormatter: ({ value }) => parseFloat(value.toFixed(1)),
  },
  {
    field: "DREB",
    headerName: "DREB",
    flex: 1,
    minWidth: 60,
    sortable: false,
    valueFormatter: ({ value }) => parseFloat(value.toFixed(1)),
  },
  {
    field: "OREB",
    headerName: "OREB",
    flex: 1,
    minWidth: 60,
    sortable: false,
    valueFormatter: ({ value }) => parseFloat(value.toFixed(1)),
  },
  {
    field: "REB",
    headerName: "REB",
    flex: 1,
    minWidth: 60,
    sortable: false,
    valueFormatter: ({ value }) => parseFloat(value.toFixed(1)),
  },
  {
    field: "AST",
    headerName: "AST",
    flex: 1,
    minWidth: 60,
    sortable: false,
    valueFormatter: ({ value }) => parseFloat(value.toFixed(1)),
  },
  {
    field: "STL",
    headerName: "STL",
    flex: 1,
    minWidth: 60,
    sortable: false,
    valueFormatter: ({ value }) => parseFloat(value.toFixed(1)),
  },
  {
    field: "BLK",
    headerName: "BLK",
    flex: 1,
    minWidth: 60,
    sortable: false,
    valueFormatter: ({ value }) => parseFloat(value.toFixed(1)),
  },
  {
    field: "TOV",
    headerName: "TO",
    flex: 1,
    minWidth: 60,
    sortable: false,
    valueFormatter: ({ value }) => parseFloat(value.toFixed(1)),
  },
  {
    field: "EFF",
    headerName: "EFF",
    flex: 1,
    minWidth: 60,
    sortable: false,
    valueFormatter: ({ value }) => parseFloat(value.toFixed(1)),
  },
];

const overallStatsDefaultHeader = [
  {
    field: "season_name",
    headerName: "OVERALL",
    flex: 1,
    minWidth: 80,
    sortable: false,
  },
  {
    field: "PTS_AVG",
    headerName: "PTS",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "FGM_AVG",
    headerName: "FGM",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "FGA_AVG",
    headerName: "FGA",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "3PM_AVG",
    headerName: "3PM",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "3PA_AVG",
    headerName: "3PA",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "FTM_AVG",
    headerName: "FTM",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "FTA_AVG",
    headerName: "FTA",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "AST_AVG",
    headerName: "AST",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "BLK_AVG",
    headerName: "BLK",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "OREB_AVG",
    headerName: "OREB",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "DREB_AVG",
    headerName: "DREB",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "REB_AVG",
    headerName: "REB",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "STL_AVG",
    headerName: "STL",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "TOV_AVG",
    headerName: "TOV",
    flex: 1,
    minWidth: 30,
    sortable: false,
  },
];

const winlossStatsDefaultHeader = [
  {
    field: "title",
    headerName: "WIN / LOSS",
    flex: 1,
    minWidth: 80,
    sortable: false,
  },
  {
    field: "PTS_AVG",
    headerName: "PTS",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "FGM_AVG",
    headerName: "FGM",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "FGA_AVG",
    headerName: "FGA",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "3PM_AVG",
    headerName: "3PM",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "3PA_AVG",
    headerName: "3PA",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "FTM_AVG",
    headerName: "FTM",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "FTA_AVG",
    headerName: "FTA",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "AST_AVG",
    headerName: "AST",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "BLK_AVG",
    headerName: "BLK",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "OREB_AVG",
    headerName: "OREB",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "DREB_AVG",
    headerName: "DREB",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "REB_AVG",
    headerName: "REB",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "STL_AVG",
    headerName: "STL",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "TOV_AVG",
    headerName: "TOV",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
];

const teamRecordsDefaultHeader = [
  {
    field: "record_title",
    headerName: "",
    flex: 1,
    minWidth: 80,
    sortable: false,
  },
  {
    field: "player_name",
    headerName: "",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
  {
    field: "record_count",
    headerName: "",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
];

const teamAchievementsDefaultHeader = [
  {
    field: "achievement_title",
    headerName: "Achievement",
    flex: 1,
    minWidth: 80,
    sortable: false,
  },
  // {
  //   field: "season_name",
  //   headerName: "Season",
  //   flex: 1,
  //   minWidth: 40,
  //   sortable: false,
  // },
  // {
  //   field: "league_name",
  //   headerName: "League",
  //   flex: 1,
  //   minWidth: 40,
  //   sortable: false,
  // },
  // {
  //   field: "division_name",
  //   headerName: "Division",
  //   flex: 1,
  //   minWidth: 40,
  //   sortable: false,
  // },
];

const teamAwardsDefaultHeader = [
  {
    field: "award_title",
    headerName: "Awards",
    flex: 1,
    minWidth: 80,
    sortable: false,
  },
  // {
  //   field: "player_name",
  //   headerName: "",
  //   flex: 1,
  //   minWidth: 40,
  //   sortable: false,
  // },
  // {
  //   field: "season_name",
  //   headerName: "Season",
  //   flex: 1,
  //   minWidth: 40,
  //   sortable: false,
  // },
  // {
  //   field: "league_name",
  //   headerName: "League",
  //   flex: 1,
  //   minWidth: 40,
  //   sortable: false,
  // },
  // {
  //   field: "division_name",
  //   headerName: "Division",
  //   flex: 1,
  //   minWidth: 40,
  //   sortable: false,
  // },
];

const teamIntroDefaultHeader = [
  {
    field: "info.title",
    headerName: "",
    flex: 1,
    minWidth: 80,
    sortable: false,
  },
  {
    field: "info.info",
    headerName: "",
    flex: 1,
    minWidth: 40,
    sortable: false,
  },
];

export {
  teamRosterDefaultHeader,
  overallStatsDefaultHeader,
  winlossStatsDefaultHeader,
  teamRecordsDefaultHeader,
  teamAchievementsDefaultHeader,
  teamAwardsDefaultHeader,
  teamIntroDefaultHeader,
};
