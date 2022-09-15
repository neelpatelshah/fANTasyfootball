import { merge } from '../util'
import React from 'react'

const rankings = [
    {
        //Shiv
        owner: "739628392529408000",
        position: 10,
        lastPosition: 10,
        up: "",
        down: "",
        game: "",
        upcoming: "",
        blurb: ``
    },
    {
        //Danny
        owner:"739529793342726144",
        position: 9,
        lastPosition: 9,
        up: "",
        down: "",
        game: "",
        upcoming: "",
        blurb: ``
    },
    {
        //Allan
        owner: "740648111118147584",
        position: 8,
        lastPosition: 8,
        up: "",
        down: "",
        game: "",
        upcoming: "",
        blurb: ``
    },
    {
        //Nicole
        owner: "739660607032352768",
        position: 7,
        lastPosition: 7,
        up: "",
        down: "",
        game: "",
        upcoming: "",
        blurb: ``
    },
    {
        //Nandan
        owner: "741390106056941568",
        position: 6,
        lastPosition: 6,
        up: "",
        down: "",
        game: "",
        upcoming: "",
        blurb: ``
    },
    {
        //Mike
        owner: "870659100365737984",
        position: 5,
        lastPosition: 5,
        up: "",
        down: "",
        game: "",
        upcoming: "",
        blurb: ``
    },
    {
        //Logan
        owner: "739556159849140224",
        position: 4,
        lastPosition: 4,
        up: "",
        down: "",
        game: "",
        upcoming: "",
        blurb: ``
    },
    {
        //Neel
        owner: "722992153168531456",
        position: 3,
        lastPosition: 3,
        up: "",
        down: "",
        game: "",
        upcoming: "",
        blurb: ``
    },
    {
        //Saarang
        owner: "739672661684346880",
        position: 2,
        lastPosition: 2,
        up: "",
        down: "",
        game: "",
        upcoming: "",
        blurb: ``
    },
    {
        //Ram
        owner: "739540158155743232",
        position: 1,
        lastPosition: 1,
        up: "",
        down: "",
        game: "",
        upcoming: "",
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

const Ranking = ({ team, wins, losses, ties, streak, position, lastPosition, upcoming, blurb, owner, user, game, up, down }) => {
    return (
        <div style={styles.ranking}>
            <div style={styles.rankingHeader}>
                <h2>#{position} [<RankChange position={position} lastPosition={lastPosition}/>]: {team || user}</h2>
                <h2>{wins}-{losses}</h2>
            </div>
            <div style={styles.awards}>
                <h5>Last Game: {game}</h5>
                <h5>📈: {up}</h5>
                <h5>📉: {down}</h5>
            </div>
            <p style={styles.blurb}>{blurb}</p>
            <h6>Upcoming: {upcoming}</h6>
        </div>
    )
}

const Week2 = ({ teams }) => {
    const data = merge(teams, rankings)
    data.sort((a, b) => b.position - a.position)
    return (
        <div style={styles.page}>
            <h3> WEEK 2 POWER RANKINGS </h3>
            <div style={styles.article}>
                <p>
                    
                </p>
            </div>
            <div style={styles.rankingsContainer}>
                {data.map((team, index) => 
                    <Ranking {...team} key={index}/>
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
        width: 700,
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
    rankingsContainer: {
        width: 700

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
    awards: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 500,
        marginLeft: 100
    },
}

export default Week2;