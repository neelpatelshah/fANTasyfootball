import { merge } from '../util'
import React from 'react'
import Week6Photo from '../6.jpeg'

const rankings = [
    {
        //Shiv
        owner: "739628392529408000",
        position: 5,
        lastPosition: 4,
        up: "Chris Olave",
        down: "Aaron Jones",
        game: "L 112.26",
        upcoming: "Kekeler Schmekelers (3-2)",
        blurb: ``
    },
    {
        //Danny
        owner:"739529793342726144",
        position: 3,
        lastPosition: 5,
        up: "Josh Jacobs",
        down: "Juju Smith-Schuster",
        game: "W 159.46",
        upcoming: "Joe mama (1-4)",
        blurb: ``
    },
    {
        //Allan
        owner: "740648111118147584",
        position: 8,
        lastPosition: 9,
        up: "Jeff Wilson",
        down: "Jerry Jeudy",
        game: "W 152.86",
        upcoming: "Tyler Stock (2-3)",
        blurb: ``
    },
    {
        //Nicole
        owner: "739660607032352768",
        position: 7,
        lastPosition: 7,
        up: "Marquez Valdez-Scantling",
        down: "Garrett Wilson",
        game: "W 102.66",
        upcoming: "Cook-ing Spring Rolls (3-2)",
        blurb: ``
    },
    {
        //Nandan
        owner: "741390106056941568",
        position: 4,
        lastPosition: 1,
        up: "DK Metcalf",
        down: "Mike Gesicki",
        game: "L 97.78",
        upcoming: "νίκη (0-5)",
        blurb: ``
    },
    {
        //Mike
        owner: "870659100365737984",
        position: 10,
        lastPosition: 10,
        up: "Gabe Davis",
        down: "Najee Harris",
        game: "L 120.42",
        upcoming: "Mixon deez (4-1)",
        blurb: ``
    },
    {
        //Logan
        owner: "739556159849140224",
        position: 6,
        lastPosition: 6,
        up: "Breece Hall",
        down: "Antonio Gibson",
        game: "W 141.26",
        upcoming: "βαβηκαταΣΥΣΥ (3-2)",
        blurb: ``
    },
    {
        //Neel
        owner: "722992153168531456",
        position: 2,
        lastPosition: 2,
        up: "Dameon Pierce",
        down: "Tyler Conklin",
        game: "L 137.56",
        upcoming: "CeeDeez Nutz in yo mouth (3-2)",
        blurb: ``
    },
    {
        //Saarang
        owner: "739672661684346880",
        position: 1,
        lastPosition: 3,
        up: "Kenneth Walker",
        down: "Matt Stafford",
        game: "W 151.20",
        upcoming: "Bare Butt Balls and Back (2-3)",
        blurb: ``
    },
    {
        //Ram
        owner: "739540158155743232",
        position: 9,
        lastPosition: 8,
        up: "Goedert, definitely",
        down: "Jaylen Waddle",
        game: "L 144.28",
        upcoming: "Daeivoantae's Inferno (4-1)",
        blurb: ``
    },
]

const RankChange = ({position, lastPosition}) => {
    if (position > lastPosition) {
        return <span style={{color: "#c92e20"}}>-{position-lastPosition}</span>
    } else if (position < lastPosition) {
        return <span style={{color: "#48c74a"}}>+{lastPosition-position}</span>
    } else {
        return <span style={{color: "#cca029"}}>-</span>
    }
}

const Ranking = ({ team, wins, losses, ties, streak, position, lastPosition, upcoming, blurb, owner, user, game, up, down, isMobile }) => {
    return (
        <div style={styles.ranking}>
            <div style={styles.rankingHeader}>
                {isMobile ? (
                        <>
                            <h3>#{position} [<RankChange position={position} lastPosition={lastPosition}/>]: {team || user}</h3>
                            <h3>{wins}-{losses}</h3>
                        </>
                    ) : (
                        <>
                            <h2>#{position} [<RankChange position={position} lastPosition={lastPosition}/>]: {team || user}</h2>
                            <h2>{wins}-{losses}</h2>
                        </>
                    )
                }   
            </div>
            {isMobile ? (
                    <div style={styles.awardsM}>
                        <h5 style={styles.awardRow}>Last Game: {game}</h5>
                        <h5 style={styles.awardRow}>📈: {up}</h5>
                        <h5 style={styles.awardRow}>📉: {down}</h5>
                    </div>
                ) : (
                    <div style={styles.awardsD}>
                        <h5>Last Game: {game}</h5>
                        <h5>📈: {up}</h5>
                        <h5>📉: {down}</h5>
                    </div>
                )

            }
            <p style={styles.blurb}>{blurb}</p>
            <h6>Upcoming: {upcoming}</h6>
        </div>
    )
}

const Week6 = ({ teams, isMobile }) => {
    const data = merge(teams, rankings)
    data.sort((a, b) => b.position - a.position)
    return (
        <div style={{...styles.page, width: isMobile ? 380 : 700}}>
            <h3> WEEK 5 POWER RANKINGS </h3>
            <div style={styles.article}>
                <p>
                    I did not watch much football besides TNF, the Jets, and MNF, so I don't have a lot to say this week. For that reason,
                    I don't have any analysis to dive into, but I do have a few things to say. <br/>
                    <br/>
                    Zach Wilson and the Jets are coming, Russ sucks, the Colts suck, Patty M is good, and Davante should see 10 targets a week
                    no matter how ill advised they are. <br/>
                    <br/>
                    Let's look at rankings.
                </p>
                <img src={Week6Photo} alt="" style={{width: isMobile ? 350 : 600, alignSelf: "center"}}/>
            </div>
            <div style={isMobile ? styles.rankingsContainerM : styles.rankingsContainerD}>
                {data.map((team, index) => 
                    <Ranking {...team} key={index} isMobile={isMobile}/>
                )}
            </div>
        </div>
    )
}

const styles = {
    page: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        color: "white",
    },
    article: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        lineHeight: 1.5,
        borderBottom: "1px solid white",
        padding: 20
    },
    ranking: {
        borderBottom: "1px dotted white",
        padding: 12
    },
    rankingsContainerD: {
        width: 700
    },
    rankingsContainerM: {
        width: 380
    },
    rankingHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    blurb: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        lineHeight: 1.5,
    },
    awardsD: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 500,
        marginLeft: 100
    },
    awardsM: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: 250,
        marginLeft: 5,
    },
    awardRow: {
        margin: 3
    }
}

export default Week6;