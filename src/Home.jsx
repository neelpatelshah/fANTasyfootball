import React, { useState } from 'react'
import logo from './fantasy.png'
import Button from './Button'
import Standings from './Standings'
import Week1 from './PowerRankings/Week1'
import All from './PowerRankings/All'
import Week2 from './PowerRankings/Week2'
import Week3 from './PowerRankings/Week3'

const Home = () => {

    const [page, setPage] = useState("HOME")
    const [teams, setTeams] = useState([])

    return (
        <div style={styles.page}>
            <div style={styles.header} onClick={() => setPage("HOME")}>
                <h4>fANTasy </h4>
                    <img src={logo} style={styles.logo} alt="logo"/>
                <h4> football</h4>
            </div>
            <Contents 
                page={page} 
                setPage={setPage} 
                teams={teams}
                setTeams={setTeams}
            />
        </div>
    )
}

const Contents = ({page, setPage, teams, setTeams}) => {
    switch (page) {
        case "HOME":
            return (
                <div style={styles.page}>
                    <h2>
                        🏆 2021-2022 champ 🏆: Pee Piggins
                    </h2>
                    <h5>
                        😷 Runner Up 😷: Tyler Stock
                    </h5>
                    <Button 
                        width={250}
                        label="View Week 3 Power Rankings"
                        onPress={() => setPage("WEEK_3")}
                    />
                    <Standings setTeams={setTeams}/>
                    <Button 
                        width={250}
                        label="View All Power Rankings"
                        onPress={() => setPage("ALL")}
                    />
                </div>
            )
        case "ALL":
            return (
                <All setPage={setPage}/>
            )
        case "WEEK_1":
            return (
                <Week1 teams={teams}/>
            )
        case "WEEK_2":
            return (
                <Week2 teams={teams}/>
            )
        case "WEEK_3":
            return (
                <Week3 teams={teams}/>
            )
        default: 
            return <></>
    }

}


const styles = {
    header: { 
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center",
        cursor: "pointer"
    },
    page: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        color: "white",
    },
    logo: {
        width: 50, 
        height: 50, 
        margin: 5 
    }
}

export default Home;