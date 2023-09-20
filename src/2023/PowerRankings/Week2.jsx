import { merge } from '../../util'
import React from 'react'

const rankings = [
    {
        //Shiv
        owner: "739628392529408000",
        position: 1,
        lastPosition: 3,
        up: "",
        down: "",
        game: "",
        upcoming: "",
        blurb: `Won big`
    },
    {
        //Danny
        owner:"739529793342726144",
        position: 4,
        lastPosition: 6,
        up: "",
        down: "",
        game: "",
        upcoming: "",
        blurb: `won idk`
    },
    {
        //Allan
        owner: "740648111118147584",
        position: 5,
        lastPosition: 9,
        up: "",
        down: "",
        game: "",
        upcoming: "",
        blurb: `Calvin Ridley!!!!`
    },
    {
        //Nicole
        owner: "739660607032352768",
        position: 7,
        lastPosition: 4,
        up: "",
        down: "",
        game: "",
        upcoming: "",
        blurb: `oof`
    },
    {
        //Nandan
        owner: "741390106056941568",
        position: 8,
        lastPosition: 7, 
        up: "",
        down: "",
        game: "",
        upcoming: "",
        blurb: `Whatever loss`
    },
    {
        //Mike
        owner: "870659100365737984",
        position: 6,
        lastPosition: 5,
        up: "",
        down: "",
        game: "",
        upcoming: "",
        blurb: `JK Dobbins`
    },
    {
        //Logan
        owner: "739556159849140224",
        position: 9,
        lastPosition: 8,
        up: "",
        down: "",
        game: "",
        upcoming: "",
        blurb: `Najee`
    },
    {
        //Neel
        owner: "722992153168531456",
        position: 2,
        lastPosition: 2,
        up: "",
        down: "",
        game: "",
        upcoming: "",
        blurb: `elite`
    },
    {
        //Saarang
        owner: "739672661684346880",
        position: 3,
        lastPosition: 1,
        up: "",
        down: "",
        game: "",
        upcoming: "",
        blurb: `scraping by`
    },
    {
        //Ram
        owner: "739540158155743232",
        position: 11,
        lastPosition: 10,
        up: "",
        down: "",
        game: "",
        upcoming: "",
        blurb: `Deshaun`
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

const Ranking = ({ team, wins, losses, position, lastPosition, upcoming, blurb, user, game, up, down, isMobile }) => {
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
            <p style={styles.blurb}>{blurb}</p>
        </div>
    )
}

const Week2 = ({ teams, isMobile }) => {
    const data = merge(teams, rankings)
    data.sort((a, b) => b.position - a.position)
    return (
        <div style={{...styles.page, width: isMobile ? 380 : 700}}>
            <h3> WEEK 2 POWER RANKINGS </h3>
            <div style={styles.article}>
                <p>
                    Fully did not do this this week but this is what it would've been
                </p>
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

export default Week2;