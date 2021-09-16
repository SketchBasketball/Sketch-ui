const leagueDetailTopics = [
    {title: 'League Standings', path: '/Leagues'}, 
    {title: 'Leader Board', path: '/LeaderBoard'}, 
]

const defaultStandingTableHeader = [
    "",
    "TEAM",
    "W",
    "L",
    "WIN%",
    "GB",
    "+/-"
]

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
]

const sampleTableData = [
    {
        rank: 1,
        name: "QIU KUN",
        path: "qui-kun",
        win: 5,
        loss: 0,
        winRate: "1.000",
        gb: "-",
        goalDiff: "+38",
    },
    {
        rank: 2,
        name: "VIRTUS",
        path: "virtus",
        win: 4,
        loss: 1,
        winRate: "0.800",
        gb: "-",
        goalDiff: "+50",
    },
    {
        rank: 3,
        name: "MILLENIUM",
        path: "millenium",
        win: 3,
        loss: 2,
        winRate: "0.600",
        gb: "-",
        goalDiff: "+33",
    },
    {
        rank: 4,
        name: "TEAM KOREA",
        path: "team-korea",
        win: 2,
        loss: 2,
        winRate: "0.500",
        gb: "-",
        goalDiff: "-3",
    },
    {
        rank: 5,
        name: "PROHEALTHSS",
        path: "prohealthss",
        win: 2,
        loss: 3,
        winRate: "0.400",
        gb: "-",
        goalDiff: "-8",
    },
    {
        rank: 6,
        name: "VEGE DOGE",
        path: "vege-doge",
        win: 2,
        loss: 3,
        winRate: "0.400",
        gb: "-",
        goalDiff: "-41",
    },
    {
        rank: 7,
        name: "HLS",
        path: "hls",
        win: 1,
        loss: 3,
        winRate: "0.250",
        gb: "-",
        goalDiff: "-16",
    },
    {
        rank: 8,
        name: "LUCKY",
        path: "lucky",
        win: 0,
        loss: 5,
        winRate: "0.000",
        gb: "-",
        goalDiff: "-53",
    }
]

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
        rank: 4,
    },
]


export {leagueDetailTopics, defaultStandingTableHeader, sampleTableData, leaderBoardTitles, sampleLeaderBoardData};