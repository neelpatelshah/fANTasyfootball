import { omit } from "lodash"

export const merge = (xs, ys, on) => 
    xs.map(x => { return { ...omit(x, "owner"), ...(ys.find(y => x.owner === y.owner))}})

export const fetchLeagueInfo = (year, setter) => {
    const leagueId = year === "2023" ? "992180769013145600" : "861492945273094144"
    fetch(`https://api.sleeper.app/v1/league/${leagueId}/rosters`)
        .then((res) => res.json())
        .then((data) => {
            const standings = data.map(team => { return { 
                owner: team.owner_id,
                wins: team.settings.wins,
                losses: team.settings.losses,
                ties: team.settings.ties,
                streak: team.metadata?.streak
            }})
            fetch(`https://api.sleeper.app/v1/league/${leagueId}/users`)
                .then((res) => res.json())
                .then((data) => {
                    const newData = data.map(team => { return {
                        owner: team.user_id,
                        user: team.display_name,
                        team: team.metadata.team_name
                    }})
                    
                    setter(newData, standings)
            })
        })
}