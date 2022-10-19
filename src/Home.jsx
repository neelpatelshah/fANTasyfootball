import React, { useState } from 'react'
import { useMediaQuery } from "react-responsive"

import logo from './fantasy.png'
import Button from './Button'
import Standings from './Standings'
import Week1 from './PowerRankings/Week1'
import All from './PowerRankings/All'
import Week2 from './PowerRankings/Week2'
import Week3 from './PowerRankings/Week3'
import Week4 from './PowerRankings/Week4'
import Week5 from './PowerRankings/Week5'
import Week6 from './PowerRankings/Week6'
import Week7 from './PowerRankings/Week7'

const Home = () => {

    const [page, setPage] = useState("HOME")
    const [teams, setTeams] = useState([])
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

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
                isMobile={isMobile}
            />
        </div>
    )
}

const Contents = ({page, setPage, teams, setTeams, isMobile}) => {
    switch (page) {
        case "HOME":
            return (
                <div style={styles.page}>
                    {isMobile ?
                        <h3> 🏆 2021-2022 champ 🏆: Pee Piggins </h3>
                        : <h2> 🏆 2021-2022 champ 🏆: Pee Piggins </h2>
                    }
                    <h5>
                        😷 Runner Up 😷: Tyler Stock
                    </h5>
                    <Button 
                        width={250}
                        label="View Week 7 Power Rankings"
                        onPress={() => setPage("WEEK_7")}
                    />
                    <Standings setTeams={setTeams} isMobile={isMobile}/>
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
        case "WEEK_4":
            return (
                <Week4 teams={teams}/>
            )
        case "WEEK_5":
            return (
                <Week5 teams={teams} isMobile={isMobile}/>
            )
        case "WEEK_6":
            return (
                <Week6 teams={teams} isMobile={isMobile}/>
            )
        case "WEEK_7":
            return (
                <Week7 teams={teams} isMobile={isMobile}/>
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