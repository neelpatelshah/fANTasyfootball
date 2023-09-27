import { merge } from '../../util'
import React from 'react'
import Week4Photo from "../image/Week4.jpg"

const rankings = [
    {
        //Shiv
        owner: "739628392529408000",
        position: 5,
        lastPosition: 2,
        up: "Pacheco?",
        down: "Justin Fields",
        game: "L 103.16",
        upcoming: "νίκη (2-1)",
        blurb: `We're going to have to see if being optimistic about a team directly correlates to them losing and providing uninspiring performances. In a much-needed win for men everywhere, 
        Shiv loses to her less football-informed boyfriend pretty comfortably. Relying on Fields is going to continue to burn her (and Howell as a backup is kinda crazy), and no amount of 
        Dolphins-Tyreek magic seems to be able to fight the Bears curse. This team will undoubtedly bounce back, especially with Aiyuk and Aaron Jones back in the fold, but we can't put a 
        team under 500 in the playoff rankings for the sake of our credibility.`
    },
    {
        //Danny
        owner:"739529793342726144",
        position: 2,
        lastPosition: 4,
        up: "Sam LaPorta",
        down: "Deandre Hopkins",
        game: "L 155.46",
        upcoming: "Cook-ing Spring Rolls (1-2)",
        blurb: `Danny not only enjoys the rare case of moving up in a loss, but he gets to move up two spaces. In part due to 155 points in a loss (but Bills defense, soooooo), in part due to him probably
        unfairly being stuck at #4 last week, and in part because his team looked a lot better than Neel's. We didn't really have another convincing #2 team. He's also got a valuable trade piece
        in either TJ Hockenson or Sam LaPorta that could further bolster this team. Nuk looks like he probably shouldn't be starting, and depth isn't amazing, but this team is hitting on upside so far.
        And it seems sort of sustainable.`
    },
    {
        //Allan
        owner: "740648111118147584",
        position: 8,
        lastPosition: 6,
        up: "Tank Dell",
        down: "Javonte Williams",
        game: "L 114.36",
        upcoming: "Itch me with your Prescott (2-1)",
        blurb: `Javonte Williams really might not be a playable guy this year. Between still bouncing back from injury and Sean Payton's disasterclass, that's a tough spot for him. The rest
        of the team underperformed as well, but its starting to look like relying on a bunch of young/unproven/comeback guys might really start to take a toll. That's most of the roster, and
        while it can make for some fun weeks, we are not optimistic that a bunch of 21 year olds will lead to fantasy success.`
    },
    {
        //Nicole
        owner: "739660607032352768",
        position: 7,
        lastPosition: 8,
        up: "Jerome Ford",
        down: "Darnell Mooney",
        game: "W 155.88",
        upcoming: "Mixon Deez (1-2)",
        blurb: `A big-time win the same week Ja'Marr stops being invisible. It's not a coincidence. Even with Derrick Henry putting up a 2 burger, every other player banged to put Nicole over 150.
        The dynamic Bengals duo of Chase and McPherson almost net her 50 points, and the rest of the team is solid enough without being outlier booms for us to feel like this should be a sign of
        things to come. Our biggest concern is really about if Henry's quiet day of his legs finally, finally giving way. We sincerely hope not.`
    },
    {
        //Nandan
        owner: "741390106056941568",
        position: 9,
        lastPosition: 9,
        up: "Justin Herbert",
        down: "Tyler Boyd",
        game: "W 135.10",
        upcoming: "Tyler Stock (1-2)",
        blurb: `Nandan hangs out at #9 for no real fault of his own. He won his domestic dispute, his team performed, and his bench didn't look awful either. Between our other 1-2 teams
        and how we feel his players will keep doing, we couldn't justify a change until they really keep winning. We really don't have anything bad to say, I guess we're just being haters. 
        The TE position sucks I guess, even with a decent week they're just not very good. Look for this team to shoot up the rankings if they win next week and/or the week after. `
    },
    {
        //Mike
        owner: "870659100365737984",
        position: 4,
        lastPosition: 5,
        up: "Davante Adams",
        down: "Josh Reynolds",
        game: "W 137.88",
        upcoming: "Reeky Pitts & Ass (1-2)",
        blurb: `According to our notes, this might be the first time Mike is in a playoff rank. He had a strong, repeatable win with an outsized contribution from Davante Adams who openly
        is talking about how little he wants to play on his team. That counts as a good sign. The RB2 position continues to look like a black hole, but there might be enough production
        elsewhere week to week to cover that up. We aren't sure this team can crack top-3, the depth isn't ideal and Waller really needs to figure it out, but this team genuinely seems like
        a force. And that's awesome.`
    },
    {
        //Logan
        owner: "739556159849140224",
        position: 10,
        lastPosition: 10,
        up: "Zack Moss",
        down: "Najee Harris",
        game: "L 126.56",
        upcoming: "TuAnon (2-1)",
        blurb: `Logan becomes our only remaining winless team. Poverty. To make matters worse, Jason Myers might have been his most impressive performer. To actually make
        matters worse, Mike Williams is done for the year and he's now down to probably Jakobi Meyers as his #2 (potential trade brewing?). Najee will continue to be the
        down-trending player probably until he's not rostered, and Zack Moss is actually looking like the guy in Indy, proving us very wrong from last week. There's a chance
        to stabilize here but going against our corrupt ruler who might fix the match, he's probably looking at 0-4.`
    },
    {
        //Neel
        owner: "722992153168531456",
        position: 3,
        lastPosition: 1,
        up: "Romeo Doubs",
        down: "Jaxon Smith-Njigba",
        game: "L 97.76",
        upcoming: "Mike Williams Enjoyer (0-3)",
        blurb: `Ranking this team #1 only for them to have the lowest score of the week. Electrifying. We're noticing that RB depth after gambling on JSN looks like a proper issue,
        and might really burn this team with Ekeler being shaken up. The starting WRs had an uncharacteristically bad day, which won't continue, Engram had 3 weeks of steady-but-not-great
        production which we think will continue, Tua will continue to ball the fuck out, and Gibbs ideally finds the endzone some time soon. We still have plenty of optimism for the team,
        but looking at RB3 and the level of performance from both losing squads, we give Danny the edge for #2.`
    },
    {
        //Saarang
        owner: "739672661684346880",
        position: 1,
        lastPosition: 3,
        up: "Mostert obviously",
        down: "Chris Godwin",
        game: "W 177.68",
        upcoming: "Scratching my BHalls (2-1)",
        blurb: `Well well well. Look who's back in #1, just like we said. Talk all the shit you want, just know that your success just proves us right Saarang. You can't win. A resounding TOTW
        win that couldn't have been close to challenged on the back on Mostert and the abusive Dolphins and Ken Walker's absurd TD run leaves him as the only undefeated team remaining. Lamar and 
        Jetta also had great games, but that's basically it. Everyone else was a bit underwhelming. And that's what makes this team insane. Oh, and, this all happened without Waddle. Very 
        McDaniel-esque this week. The depth can use a light re-working, but holy mother of christ we're not sure when this team will lose a game.`
    },
    {
        //Ram
        owner: "739540158155743232",
        position: 6,
        lastPosition: 7,
        up: "Jordan Love",
        down: "Dalvin Cook",
        game: "W 159.52",
        upcoming: "βαβηκαταΣΥΣΥ (3-0)",
        blurb: `Ram chose love over massages and it's working out for him! A big, MNF nailbiter of a win gives him a winning record and a chance to challenge for a top-half position.
        Even with relatively underwhelming RB performances, Keenan Allen went supernova and covered it up. We'll have to see how things hold up, since we still don't love this roster
        at all, but wins are wins. Also, Dalvin Cook looks worse than Najee Harris. Just saying.`
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

const Week2 = ({ teams, isMobile }) => {
    const data = merge(teams, rankings)
    data.sort((a, b) => b.position - a.position)
    return (
        <div style={{...styles.page, width: isMobile ? 380 : 700}}>
            <h3> WEEK 4 POWER RANKINGS </h3>
            <div style={styles.article}>
                <p>
                    It's hard to really talk about anything besides nerd-chad Mike McDaniel hanging 70 points and a 50 point margin of victory on Sean Payton's chad-virgin head.
                    What an absolutely godless, future-of-NFL altering game. There will be an SBNation rewinder about this game, a Brett Kollman offensive-scheme-tree breakdown
                    about this game, and a Kyle Shanahan-level coach poaching run on McDaniel's staff for the forseeable future because of this game. We just want to take a moment
                    to make sure you all recognize what just happened this week, because it will absolutely shape the future of this league. AND it happened without a top 12-ish WR
                    on the field in Jaylen Waddle.<br />
                    <br/>
                    In other news...is there other news? The 2021 QB class stinks, the 2020 QB class is looking legendary, and that's with Burrow looking comfortably like the
                    worst of the bunch so far this season. CJ Stroud is washing out some stink in the Texans organization, so we're probably about two weeks away from Saarang unironically saying
                    "Coleridgeee come on now" on Sundays. Eagles and Chiefs look unstoppable again too, that's worth a mention. Anyways.<br />
                    <br />
                    Let's dive in.
                </p>
                <img src={Week4Photo} alt="" style={{width: isMobile ? 350 : 700, alignSelf: "center"}}/>
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