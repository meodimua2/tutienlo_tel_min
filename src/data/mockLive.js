/** Dữ liệu mẫu — thay bằng API sau */
export const LIVE_COMPETITIONS = [
    {
        id: "c1",
        league: "Premier League",
        round: "Vòng 24",
        status: "live",
        minute: "67'",
        home: { name: "Arsenal", short: "ARS", goals: 2 },
        away: { name: "Chelsea", short: "CHE", goals: 1 }
    },
    {
        id: "c2",
        league: "La Liga",
        round: "Vòng 23",
        status: "live",
        minute: "HT",
        home: { name: "Barcelona", short: "BAR", goals: 1 },
        away: { name: "Valencia", short: "VAL", goals: 1 }
    },
    {
        id: "c3",
        league: "V-League 1",
        round: "Vòng 12",
        status: "soon",
        kickoff: "19:00",
        home: { name: "Hà Nội FC", short: "HNH", goals: null },
        away: { name: "Công An HN", short: "CAH", goals: null }
    }
];

export const RANKING_MOCK = [
    { rank: 1, name: "Minh Quân", points: 2840, streak: 12 },
    { rank: 2, name: "Hải Đăng", points: 2712, streak: 8 },
    { rank: 3, name: "Tuấn Anh", points: 2655, streak: 9 },
    { rank: 4, name: "Bạn", points: 2410, streak: 5, isYou: true },
    { rank: 5, name: "Việt Hưng", points: 2388, streak: 4 }
];
