const leagueDetailTopics = [
  { title: "League Standings", path: "/Leagues" },
  { title: "Leader Board", path: "/LeaderBoard" },
];

const defaultStandingTableHeader = [
  "",
  "TEAM",
  "W",
  "L",
  "WIN%",
  "GB",
  "STREAK",
  "+/-",
];

const leaderBoardTitles = [
  "Points Per Game",
  "Rebounds Per Game",
  "Assists Per Game",
  "Blocks Per Game",
  "Steals Per Game",
  "Field Goal Percentage",
  "Three Pointers Made",
  "Three Point Percentage",
  "Fantasy Points Per Game",
];

const sampleTableData = [
  {
    id: "dfb2b299-0552-4dac-b331-c2220b5ae1bc",
    name: "Virtus",
    win: 7,
    loss: 1,
    rank: 1,
    win_percentage: 0.875,
    games_behind: 0,
    win_streak: 4,
    points_plus_minus: 130,
  },
  {
    id: "3ef8b851-b40a-46ab-9bbc-3685fc31ffc8",
    name: "Qiu Kun",
    win: 6,
    loss: 2,
    rank: 2,
    win_percentage: 0.75,
    games_behind: 1,
    win_streak: 1,
    points_plus_minus: -21,
  },
  {
    id: "a6ddc88f-6a17-4117-9c62-40bb4f524dfd",
    name: "Millenium",
    win: 5,
    loss: 3,
    rank: 3,
    win_percentage: 0.625,
    games_behind: 2,
    win_streak: 1,
    points_plus_minus: 51,
  },
  {
    id: "63f77a7a-3480-4a15-86a7-99a006790fe6",
    name: "Team Korea",
    win: 4,
    loss: 4,
    rank: 4,
    win_percentage: 0.5,
    games_behind: 3,
    win_streak: -1,
    points_plus_minus: 16,
  },
  {
    id: "259a4cc9-2c91-45bb-9580-c97c9caf4446",
    name: "Prohealth SS",
    win: 4,
    loss: 4,
    rank: 4,
    win_percentage: 0.5,
    games_behind: 3,
    win_streak: 1,
    points_plus_minus: -22,
  },
  {
    id: "ad15aa2f-4c6d-43e9-841d-1c928553e7e5",
    name: "Vegedoge",
    win: 3,
    loss: 5,
    rank: 5,
    win_percentage: 0.375,
    games_behind: 4,
    win_streak: -1,
    points_plus_minus: -55,
  },
  {
    id: "812c0ca8-9dde-4f24-92ca-cf3354a38f67",
    name: "HLS",
    win: 2,
    loss: 6,
    rank: 6,
    win_percentage: 0.25,
    games_behind: 5,
    win_streak: -1,
    points_plus_minus: -18,
  },
  {
    id: "08abdf0e-5c5c-450a-a1be-3f54b22cae1a",
    name: "Lucky",
    win: 1,
    loss: 7,
    rank: 7,
    win_percentage: 0.125,
    games_behind: 6,
    win_streak: -2,
    points_plus_minus: -81,
  },
];

const sampleLeaderBoardData = [
  {
    name: "Bobby Lee",
    score: 32.0,
    rank: 1,
  },
  {
    name: "Michael Jordan",
    score: 29.0,
    rank: 2,
  },
  {
    name: "Stephen Curry",
    score: 25.0,
    rank: 3,
  },
  {
    name: "Taemin Ha",
    score: 24.0,
    rank: 4,
  },
  {
    name: "Jongha Kim",
    score: 22.0,
    rank: 5,
  },
];

export {
  leagueDetailTopics,
  defaultStandingTableHeader,
  sampleTableData,
  leaderBoardTitles,
  sampleLeaderBoardData,
};
