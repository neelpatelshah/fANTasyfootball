import React, { useCallback, useEffect, useState } from 'react'
import { merge } from "./util"

const Row = ({user, team, wins, losses, ties, streak, isMobile}) => {
    return (
        <div style={{...styles.row, width: isMobile ? 350 : 600}}>
            {isMobile ? (
                    <div style={styles.nameBlockM}>
                        <h5 style={{...styles.team, marginBottom: 1}}>{team}</h5>
                        <h6 style={{...styles.user, marginTop: 1}}>{user}</h6>
                    </div>
                ) : (
                    <div style={styles.nameBlockD}>
                        <h5 style={styles.team}>{team}</h5>
                        <h6 style={styles.user}>{user}</h6>
                    </div>
                )
            }
            <div style={styles.numbersBlock}>
                <h5 style={styles.entry}>{wins}</h5>
                <h5 style={styles.entry}>{losses}</h5>
                <h5 style={styles.entry}>{ties}</h5>
                <h5 style={styles.entry}>{streak}</h5>
            </div>
        </div>
    )
}

const Standings = ({ setTeams, isMobile }) => {

    const [league, setLeague] = useState([])

    const setter = useCallback((newData, standings) => {
        const data = merge(newData, standings)
        console.log(data.sort((a, b) => b.wins - a.wins))
        setLeague(data)
        setTeams(data)
    }, [setTeams])

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
    }, [setter])

    return (
        <div>
            <div style={{...styles.row, borderBottom: "1.5px solid white", width: isMobile ? 350 : 600}}>
                <div style={styles.nameBlockD}>
                    <h5 style={styles.team}>TEAM</h5>
                </div>
                <div style={styles.numbersBlock}>
                    <h5 style={styles.entry}>W</h5>
                    <h5 style={styles.entry}>L</h5>
                    <h5 style={styles.entry}>T</h5>
                    <h5 style={styles.entry}>📈</h5>
                </div>
            </div>
            {league.map((team, index) => <Row {...team} key={index} isMobile={isMobile}/>)}
        </div>
    )
}

const styles = {
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: 50,
        borderBottomWidth: 1,
        borderBottom: "1px dashed white"
    },
    entry: {
        marginLeft: 30
    },
    nameBlockD: {
        width: 400,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    nameBlockM: {
        width: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start"
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