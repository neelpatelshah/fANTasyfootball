import { merge } from '../util'
import React from 'react'
import Week5Photo from '../5.gif'

const rankings = [
    {
        //Shiv
        owner: "739628392529408000",
        position: 4,
        lastPosition: 6,
        up: "CeeDee Lamb",
        down: "Travis Etienne",
        game: "W 159.86",
        upcoming: "Daeivoantae's Inferno (3-1)",
        blurb: `CeeDee continues to appear like he'll be the steady guy for this team, while Shiv notched a TOTW on the backs of Miles Sanders and TJ Hockenson.
        Yeah...that's weird to say. Regardless, this team has dodged the problems we saw early on, and is 3-1 despite a curious benching of CMC. Smellvin Gordon
        stock is theoretically up with the Javonte injury, but on the other hand he's terrible. Etienne can't even find production with JRob finally having
        a down week, so we now wonder if he's even worth rostering. Overall, though, this is a team on the up.`
    },
    {
        //Danny
        owner:"739529793342726144",
        position: 5,
        lastPosition: 5,
        up: "Josh Jacobs",
        down: "George Kittle",
        game: "L 80.60",
        upcoming: "CeeDeez Nutz in yo mouth (3-1)",
        blurb: `Danny is still 5th because we kinda have no where else to put him. We feel better about Logans team than Danny's, for example, but even if Logan
        wins this week and Danny loses this week, Danny still has a better record, so he stays in front for now. But it was an ugly week up and down the team.
        The best production stuck on the bench, Danny earns LOTW and was the only team not to eclipse 110 this week (missed by 30). He also made the dumb choice
        to think Diontae Johnson was going to play well against Sauce Garnder. For a positive, the Sun Gawd will inject some juice into this team when he's back, 
        and Jacobs realized he's still a stud. For a negative, George Kittle plays LT now. Good luck.`
    },
    {
        //Allan
        owner: "740648111118147584",
        position: 9,
        lastPosition: 9,
        up: "Saquon Barkley",
        down: "Darren Waller",
        game: "W 140.30",
        upcoming: "Joe mama (1-3)",
        blurb: `Despite the strong week, we're going to wait to see if Allan has a middle ground before moving him up, or if it's exclusively gonna be 
        140+ or 80- every week with him. Easily the most boom or bust first 4 weeks we could've seen, Allan's been lucky its been 50/50 in that regard.
        For the positives, Saquon is the best back in football and Justin Jefferson is a freak. As for bad, Waller was not instrumental in the
        first Raiders win of the year, and Javonte is done for the year. Those are tough obstacles.`
    },
    {
        //Nicole
        owner: "739660607032352768",
        position: 7,
        lastPosition: 7,
        up: "JK Dobbins",
        down: "Cam Akers",
        game: "L 124.32",
        upcoming: "Mixon deez (4-0)",
        blurb: `She's stuck in purgatory. If not for Jalen Ramsey having not a clue how to tackle Deebo in open field, and Cam Akers apparently not
        playing for the Rams, Nicole is .500. A last minute come-from-behind loss in the 4Q of MNF for the second week in a row sends her to 1-3. 
        Back to back tough losses. There are so many positives though. Josh Allen is putting up 23 in down weeks, Jamaal Williams is an excellent 
        pickup for the next few matches, Penny finally looked like he did at the end of last year, and most importantly, JK Dobbins is back. If 
        Penny stabilizes, her team suddenly looks very well rounded and poised for a run.`
    },
    {
        //Nandan
        owner: "741390106056941568",
        position: 1,
        lastPosition: 1,
        up: "DK Metcalf",
        down: "Kyle Pitts",
        game: "W 123.66",
        upcoming: "Tyler Stock (1-3)",
        blurb: `Nandan keeps #1 with a solid, no nonsense win to become the only undefeated team in our league through 4 weeks. The weekly story
        here seems to be that enough folks on this team do what they need to and earn a win each week. There were huge duds, with Amari and Pitts
        combining for 5.4 points, but DK balled, Pee balled, Mahomes balled, and Mixon was good. That's all it took this week. Lets see the recipe
        next week. We'll let you in on a secret, though. The bench is UGLY right now.`
    },
    {
        //Mike
        owner: "870659100365737984",
        position: 10,
        lastPosition: 10,
        up: "Gerald Everett",
        down: "Gabe Davis",
        game: "L 123.40",
        upcoming: "Bare Butt Balls and Back (1-3)",
        blurb: `Mike's getting stuck with a decent amount of bad luck at this point. He put up a perfectly fine point total, and yet falls to an
        0-4 start. It's been a mix of the bad being really bad and the regular weeks having zero luck attached. Najee had a dud, again, but how do you
        panic and bench him? Gabe Davis seems like he's gonna need a minute, but there wasn't even anyone on his bench that could have bailed him out
        this week. Everyone else was totally fine. Let's hope he cooks up a good snag on waivers and his luck finally turns.`
    },
    {
        //Logan
        owner: "739556159849140224",
        position: 6,
        lastPosition: 8,
        up: "Breece Hall",
        down: "Antonio Gibson",
        game: "W 158.92",
        upcoming: "νίκη (0-4)",
        blurb: `Logan may have started clawing his way back into action. Another huge week for him, this time finally with a W. Russ finally rode (the bench),
        and it didn't even matter because Goff was better. Breece is establishing himself, Tyreek is still that guy even with Teddy, and King Henry shook off
        whatever was slowing him down this offseason. The wins need to keep coming, as luck seems to be awful, but we're optimistic. This is basically the Lions
        squad of our league. Logan has the highest scoring team thus far. He has the most points scored against him. He has 1 win. Detroit Lions.`
    },
    {
        //Neel
        owner: "722992153168531456",
        position: 2,
        lastPosition: 3,
        up: "Dameon Pierce",
        down: "AJ Dillon",
        game: "W 127.46",
        upcoming: "βαβηκαταΣΥΣΥ (2-2)",
        blurb: `Neel eeks out a win thanks to a huge Deebo play and 57 yard lapse in concentration by the Los Angeles Rams. Even with the down-to-the-wire nature
        of this win, we actually think its a very strong one, because this was done with Lamar and Mark Andrews-the core stack-scoring just 16.5. Ekeler finally went off,
        Dameon Pierce has fully arrived, and we mentioned Deebo already. Like we said, if Pierce keeps it up, this is a complete team, top to bottom. If this holds and
        the wins keep rolling in, #1 is in play.`
    },
    {
        //Saarang
        owner: "739672661684346880",
        position: 3,
        lastPosition: 2,
        up: "Clyde Edwards-Helaire",
        down: "James Conner",
        game: "L 121.08",
        upcoming: "Kekeler Schmekelers (3-1)",
        blurb: `It didn't matter if Saarang rolled out his best lineup this week, since his max output would've fallen short of Shiv's total anyways. That said,
        we are concerned about the odd personnel decisions being made. Irv Smith and Treylon Burks are hardly worthy of roster spots, there are better TE options
        available for free (and for trade) than Dawson Knox, and CEH has clearly been the better option over Conner thus far this season. The biggest things 
        holding this team back are the TE position and Saarang himself. One is fixable, the other is not.`
    },
    {
        //Ram
        owner: "739540158155743232",
        position: 8,
        lastPosition: 4,
        up: "Goedert, kinda?",
        down: "Jonathon Taylor",
        game: "L 111.58",
        upcoming: "Cook-ing Spring Rolls (2-2)",
        blurb: `This might be a bit harsh, but we have some less than ideal trends emerging. Aside from a bunch of duds, the #1 receiver on this team has played
        2.5 quarters of ball this season and Waddle, Lockett, and Theilen don't appear consistent, while Jonathon Taylor and the Colts look nothing like they did
        a season ago and he might now be missing time. These things must change for this team to look anything like its former #1 billing. 8th is a long way down,
        to be sure, but Week 5 looks like it might be the same story as Week 3 and 4.`
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

const Week5 = ({ teams, isMobile }) => {
    const data = merge(teams, rankings)
    data.sort((a, b) => b.position - a.position)
    return (
        <div style={{...styles.page, width: isMobile ? 380 : 700}}>
            <h3> WEEK 5 POWER RANKINGS </h3>
            <div style={styles.article}>
                <p>
                    2-2 is the new black. Up and down the NFL, teams are sitting at .500. <br/>
                    <br/>
                    In a week of QB stories, the Mormon Messiah returned, Stafford is color blind, Tom Brady is single, Russell rode, 
                    Mac Jones 2.0 is out, the Giants split Daniel Jones out wide for an entire quarter, Geno and Jared run the league,
                    and Trevor "Butterfingers" Lawrence is getting a free pass when he really shouldn't. <br/>
                    <br/>
                    DK also had one of the funnier poop walks we've ever seen at a sporting event. <br/>
                    <br/>
                    Let's dive in.
                </p>
                <img src={Week5Photo} alt="" style={{width: isMobile ? 350 : 600, alignSelf: "center"}}/>
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

export default Week5;