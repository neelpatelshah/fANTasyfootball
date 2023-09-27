import React, { useState } from 'react'
import { useMediaQuery } from "react-responsive"

import logo from './fantasy.png'
import Button from './Button'
import Standings from './Standings'
import All2022 from './2022/All'
import Week1x2022 from './2022/PowerRankings/Week1'
import Week2x2022 from './2022/PowerRankings/Week2'
import Week3x2022 from './2022/PowerRankings/Week3'
import Week4x2022 from './2022/PowerRankings/Week4'
import Week5x2022 from './2022/PowerRankings/Week5'
import Week6x2022 from './2022/PowerRankings/Week6'
import Week7x2022 from './2022/PowerRankings/Week7'
import Week8x2022 from './2022/PowerRankings/Week8'
import All2023 from './2023/All'
import Week1 from './2023/PowerRankings/Week1'
import Week2 from './2023/PowerRankings/Week2'
import Week3 from './2023/PowerRankings/Week3'
import Week4 from './2023/PowerRankings/Week4'

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
                        <h3> 🏆 2022-2023 champ 🏆: Daeviontae's Inferno </h3>
                        : <h2> 🏆 2022-2023 champ 🏆: Daeviontae's Inferno </h2>
                    }
                    <h5>
                        😷 Runner Up 😷: Bare Butt Balls and Back
                    </h5>
                    <Button 
                        width={250}
                        label="View Week 4 Power Rankings"
                        onPress={() => setPage("WEEK_4")}
                    />
                    <Standings setTeams={setTeams} isMobile={isMobile}/>
                    <Button 
                        width={250}
                        label="All 2023 Power Rankings"
                        onPress={() => setPage("2023")}
                    />
                    <Button 
                        width={250}
                        label="View 2022 Power Rankings"
                        onPress={() => setPage("2022")}
                    />
                </div>
            )
        case "2022":
            return (
                <All2022 setPage={setPage} setTeams={setTeams} />
            )
        case "2023":
            return (
                <All2023 setPage={setPage} />
            )
        case "WEEK_1_2022":
            return (
                <Week1x2022 teams={teams}/>
            )
        case "WEEK_2_2022":
            return (
                <Week2x2022 teams={teams}/>
            )
        case "WEEK_3_2022":
            return (
                <Week3x2022 teams={teams}/>
            )
        case "WEEK_4_2022":
            return (
                <Week4x2022 teams={teams}/>
            )
        case "WEEK_5_2022":
            return (
                <Week5x2022 teams={teams} isMobile={isMobile}/>
            )
        case "WEEK_6_2022":
            return (
                <Week6x2022 teams={teams} isMobile={isMobile}/>
            )
        case "WEEK_7_2022":
            return (
                <Week7x2022 teams={teams} isMobile={isMobile}/>
            )
        case "WEEK_8_2022":
            return (
                <Week8x2022 teams={teams} isMobile={isMobile}/>
            )
        case "WEEK_1":
            return (
                <Week1 teams={teams} isMobile={isMobile} />
            )
        case "WEEK_2":
            return (
                <Week2 teams={teams} isMobile={isMobile} />
            )
        case "WEEK_3":
            return (
                <Week3 teams={teams} isMobile={isMobile} />
            )
        case "WEEK_4":
            return (
                <Week4 teams={teams} isMobile={isMobile} />
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