import { merge } from '../../util'
import React from 'react'
import photo from '../7.jpg'

const rankings = [
    {
        //Shiv
        owner: "739628392529408000",
        position: 7,
        lastPosition: 5,
        up: "Miles Sanders",
        down: "Aaron Jones",
        game: "L 112.26",
        upcoming: "Bare Butt Balls and Back (3-3)",
        blurb: `Back to back tough weeks sees Shiv slide down even further, this time with a sub-100 point loss. The Pack just can't seem to get
        Aaron Jones going properly, Jalen Hurts didn't play out of his mind, and the TE stream was unfortunate. Just overall an underwhelming week
        with a team she needed some overacheivement from. A tough BYE this upcoming week doesn't seem to be doing her any favors.`
    },
    {
        //Danny
        owner:"739529793342726144",
        position: 2,
        lastPosition: 3,
        up: "Zach Ertz",
        down: "Curtis Samuel",
        game: "W 101.24",
        upcoming: "νίκη (0-6)",
        blurb: `Fraudulence abounds as Danny scores barely anything and still wins somehow. The only real duds this week were Rodgers, who ran
        into the buzzsaw that is Sauce Gardner and Quinnen Williams, and Curtis Samuel, though. So it's not really an ugly performace. Pretty
        good balance aside from that, and like Nandan, 5 wins in 6 games makes not making the playoffs a tough sell. In this case, however, we
        think it's pretty much a lock at this point. The bench is way too good to see a proper collapse.`
    },
    {
        //Allan
        owner: "740648111118147584",
        position: 8,
        lastPosition: 8,
        up: "Deandre Hopkins",
        down: "Tomy Brady",
        game: "L 122.80",
        upcoming: "βαβηκαταΣΥΣΥ (3-3)",
        blurb: `A loss keeps Allan snugly in 8th. Nuk's return wasn't enough to match up against a big time showing from Saarang, but at least
        he deviated from his boom or bust style and put up a solid point total. Likely the shakiest of the 3-4 teams, he needs a lot of things
        to fall his way to make this work. Brady has to step it up in a big way, Stevenson needs to keep being the offense, Waller needs to
        pick it up big time, Nuk can't really slow down. You get the picture. Not a lot of consistency is ensured here.`
    },
    {
        //Nicole
        owner: "739660607032352768",
        position: 6,
        lastPosition: 7,
        up: "Chris Godwin",
        down: "Cam Akers",
        game: "W 110.46",
        upcoming: "Joe mama (1-5)",
        blurb: `Another week of Allen and Diggs bailing this team out, with absolutely dire RB weeks. This team needs a magic RB pickup or buy-low
        trade to work out desperately. Still, a win is a win, and a 2W streak still counts for something. If Dobbins gains any form of consistency
        down the stretch, there's some hope here. But this week looks ugly with Buffalo's BYE looming. RIP in peace.`
    },
    {
        //Nandan
        owner: "741390106056941568",
        position: 5,
        lastPosition: 4,
        up: "Chase Claypool",
        down: "Tee Higgins",
        game: "W 105.12",
        upcoming: "Kekeler Schmekelers (4-2)",
        blurb: `Even though he won, we're moving him down a spot to keep consistent with rewarding Mike with a win. It just didn't count in our eyes.
        The depth issues almost came for his soul, but he kept things going enough to eek out the "win". A returning D'Andre Swift should help, and 5
        wins in 6 games makes taking him out of the playoff discussion pretty hard. Still, an epic collapse wouldn't surprise us at all.`
    },
    {
        //Mike
        owner: "870659100365737984",
        position: 9,
        lastPosition: 10,
        up: "Tyler Boyd",
        down: "Justin Herbert",
        game: "W 144.32",
        upcoming: "Daeivoantae's Inferno (5-1)",
        blurb: `HE WON. Mike snaps his winless season in true style, notching TOTW and beating the second highest scoring team, so every bit of the
        win is deserved. While 1 win on the season pretty much ties our hands as far as movement in rankings goes, he has certainly earned his premature
        bump up to #9, so here he stays. Key to the win was Tyler Boyd and the Bengals eruption, and key to the TOTW was an undying faith to his boys
        Defense. THe best part of this win, though, is that there was decent contribution up and down the lineup, even with some solid players on BYE.
        We love this outcome and it putting a pin in any narrative Danny can build that he's not a fraud, because he lost. Electric.`
    },
    {
        //Logan
        owner: "739556159849140224",
        position: 3,
        lastPosition: 6,
        up: "Breece Hall",
        down: "Antonio Gibson",
        game: "W 135.88",
        upcoming: "CeeDeez Nutz in yo mouth (3-3)",
        blurb: `Logan has won 3 straight and has fully regressed to the mean. Even while hunting for QBs, this team has become a force, especially
        due to the ascension of Breece Hall. A returned Derrick Henry will make this team relentless. No other notes, really, he just needs a QB,
        maybe via trade, to really vault into best team in the league discussion.`
    },
    {
        //Neel
        owner: "722992153168531456",
        position: 1,
        lastPosition: 1,
        up: "Brian Robinson",
        down: "Elijah Moore",
        game: "W 142.80",
        upcoming: "Mixon deez (5-1)",
        blurb: `The defending champ claims #1 for the first time this season because we said so. Also, he notches another TOTW, is the league's
        lone 4-2 team, and is balanced enough to weather BYE shennanigans. Not to mention, there's an Elijah Mitchell-sized trick up his sleeve. 
        Ekeler, Pittman, and Andrews are the highlights this week, and look like they'll be the guys who carry this team to the playoffs and beyond if
        everyone else can just do enough. And if Elijah Moore finally sees a god damn target? Sheesh.`
    },
    {
        //Saarang
        owner: "739672661684346880",
        position: 4,
        lastPosition: 1,
        up: "Kenneth Walker",
        down: "Matt Stafford",
        game: "L 120.88",
        upcoming: "Cook-ing Spring Rolls (3-3)",
        blurb: `Between this 3-3 and Logan's we like Logan's, plus he just lost to Logan, so it didn't feel right keeping him above. He didn't
        even have a bad week really, Logan just had a better one, but so far, we haven't seen the top end pop that we thought we'd get consistently
        here. That and the TE position STILL hasn't been ironed out. And Stafford still rostered? Why? Kenneth Walker could be a massive piece going
        forward, though.`
    },
    {
        //Ram
        owner: "739540158155743232",
        position: 10,
        lastPosition: 9,
        up: "Brandon Aiyuk",
        down: "Jaylen Waddle",
        game: "W 124.06",
        upcoming: "Tyler Stock (3-3)",
        blurb: `Ram notches a win with an absurd week from Joe Burrow making his point total look solid. The record is still bad and Mike also won,
        so he doesn't move up here, and also the returned reinforcements of JT and Keenan did not produce at a level that would make us think this
        team belongs with the ones hovering around .500. Arrow is pointed up, though.`
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

const Week8 = ({ teams, isMobile }) => {
    const data = merge(teams, rankings)
    data.sort((a, b) => b.position - a.position)
    return (
        <div style={{...styles.page, width: isMobile ? 380 : 700}}>
            <h3> WEEK 8 POWER RANKINGS </h3>
            <div style={styles.article}>
                <p>
                    The only thing I wish to use this section for this week is to see if anyone knows how to donate an ACL.
                </p>
                <img src={photo} alt="" style={{width: isMobile ? 350 : 600, alignSelf: "center"}}/>
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

export default Week8;
