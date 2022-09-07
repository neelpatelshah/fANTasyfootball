import React, { useEffect, useState } from 'react'
import { merge } from "./util"

const Row = ({user, team, wins, losses, ties, streak}) => {
    return (
        <div style={styles.row}>
            <div style={styles.nameBlock}>
                <h5 style={styles.team}>{team}</h5>
                <h6 style={styles.user}>{user}</h6>
            </div>
            <div style={styles.numbersBlock}>
                <h5 style={styles.entry}>{wins}</h5>
                <h5 style={styles.entry}>{losses}</h5>
                <h5 style={styles.entry}>{ties}</h5>
                <h5 style={styles.entry}>{streak}</h5>
            </div>
        </div>
    )
}

const Standings = ({ setTeams }) => {

    const [league, setLeague] = useState([])

    const setter = (newData, standings) => {
        setLeague(merge(newData, standings))
        setTeams(merge(newData, standings))
    }

    useEffect(() => {
        fetch("https://api.sleeper.app/v1/league/861492945273094144/rosters")
            .then((res) => res.json())
            .then((data) => {
                const standings = data.map(team => { return { 
                    owner: team.owner_id,
                    wins: team.settings.wins,
                    losses: team.settings.losses,
                    ties: team.settings.ties,
                    streak: team.metadata.streak
                }})
                fetch("https://api.sleeper.app/v1/league/861492945273094144/users")
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
    }, [])

    return (
        <div>
            <div style={{...styles.row, borderBottom: "1.5px solid white"}}>
                <div style={styles.nameBlock}>
                    <h5 style={styles.team}>TEAM</h5>
                </div>
                <div style={styles.numbersBlock}>
                    <h5 style={styles.entry}>W</h5>
                    <h5 style={styles.entry}>L</h5>
                    <h5 style={styles.entry}>T</h5>
                    <h5 style={styles.entry}>📈</h5>
                </div>
        </div>
            {league.map((team, index) => <Row {...team} key={index}/>)}
        </div>
    )
}

const styles = {
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: 600,
        height: 50,
        borderBottomWidth: 1,
        borderBottom: "1px dashed white"
    },
    entry: {
        marginLeft: 30
    },
    nameBlock: {
        width: 400,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    numbersBlock: {
        width: 200,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    team: {
        marginLeft: 5,
    },
    user: {
        marginLeft: 10,
        color: "#b4b9c2"
    },
}

export default Standings;