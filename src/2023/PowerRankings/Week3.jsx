import { merge } from '../../util'
import React from 'react'
import Week3Photo from "../image/Week3.jpeg"

const rankings = [
    {
        //Shiv
        owner: "739628392529408000",
        position: 2,
        lastPosition: 1,
        up: "Brian Robinson",
        down: "Justin Fields",
        game: "L 112.24",
        upcoming: "Mixon deez (0-2)",
        blurb: `Yeah, she lost, but this team still goes kinda crazy. Even if Pacheco drops to RB3 (which he should), Brian Robinson is on an absolute tear and should more than fill in. 
        Tyreek and Tee will continue to be strong and dependable options, Aiyuk, Aaron Jones, and Addison are some more great weapons, and QB can always be remedied. However, Pitts is really
        not finding space in Atlanta and could be a massive handicap on this team week in, week out. TE is also a really hard position to fix, so we will have to see how this shakes out. But
        she looks set to bounce back next week in a couples dispute we don't want any part of.`
    },
    {
        //Danny
        owner:"739529793342726144",
        position: 4,
        lastPosition: 4,
        up: "Sam LaPorta",
        down: "Deandre Hopkins",
        game: "W 116.88",
        upcoming: "Scratching my BHalls (1-1)",
        blurb: `Danny stick at #4 from no real fault of his own, we just like the other 3 teams more, even with one having a worse record. The team isn't showing that much sign of being
        loaded, either, but its clearly strong and has led to 2-0 to start the year. CMC is a force as he ever was, and Hock cashed in one of his 3 big games a season. The rest of his team
        was largely meh, but for the most part without red flags. Except one, in the name of Deandre Hopkins. He just doesn't look like he's a starting caliber player anymore. much less the
        de facto #2 WR on a team. If an answer appears for that, this team looks a whole lot better.`
    },
    {
        //Allan
        owner: "740648111118147584",
        position: 6,
        lastPosition: 5,
        up: "Puka Nacua",
        down: "Javonte Williams",
        game: "L 114.74",
        upcoming: "νίκη (1-1)",
        blurb: `Sean McVay is absolutely COOKING and Sean Payton is absolutely NOT. Nacua looks like Antonio Brown pre-CTE, an absurd waiver add, and while he will cool off, he seems
        like he might be startable all year. Allan will want to trade him or Kupp, but even relegated to WR2 in a few weeks, he's an intriguing piece based on how Tutu Atwell is playing.
        On the other hand, Sean Payton is a doofus and Javonte Williams is suffering for it. Allan loses an absolutely brutal game he was slated to win in which Chubb has an injury so 
        gruesome they finally don't replay it on TV. That's a really tough blow to the team, as the rest of the RBs barely crack RB2 status. Allan slips into the bottom half as a result.`
    },
    {
        //Nicole
        owner: "739660607032352768",
        position: 8,
        lastPosition: 7,
        up: "Christian Kirk",
        down: "Alexander Mattison",
        game: "L 99.86",
        upcoming: "Mike Williams Enjoyer (0-2)",
        blurb: `Ja'Marr Chase is single handedly going to sink her season before she gets a chance to get going if he doesn't start scoring Nicole some points. Henry will be fine,
        a backup RB will do, Kittle will be fine, Kirk is clearly still a great TLaw option, and there's still team balance. But more stinkers from him will not give her much room 
        to work with. Mattison also has been so bad that someone traded for Cam Akers to upgrade the running back room. That's just kinda insane honestly. But she avoids #10 because 
        there's no way Ja'Marr keeps being this bad, right? Right?????? *Joe Burrow re aggrivated his calf* oh sick.`
    },
    {
        //Nandan
        owner: "741390106056941568",
        position: 9,
        lastPosition: 8,
        up: "Justin Herbert",
        down: "Several People",
        game: "L 100.70",
        upcoming: "Reeky Pitts & Ass (1-1)",
        blurb: `Rhamondre Stevenson being your best non-QB is a tough look. The positives: Justin Herbert is tracking to be a top 3 QB again with the new OC, Charges wins be damned.
        Aaaand thats it. RBs are okay but the depth isn't, the top 2 WR are probably silently hating on their elite QBs and conference-contending teams, and DJ Moore had a good year
        until the Bears literally just imploded. TE room is ROOOUUUGHHHH. Yeah man. If Logan didn't have Najee Harris, this would be a simple #10.`
    },
    {
        //Mike
        owner: "870659100365737984",
        position: 5,
        lastPosition: 6,
        up: "Darren Waller",
        down: "Odell Beckham Jr",
        game: "W 157.62",
        upcoming: "Cook-ing Spring Rolls (1-1)",
        blurb: `Mike is back in the top half of the league after a decisive TOTW win. The Giants not looking like D-II Binghampton led to Waller actually having a presence,
        which could be huge for the teams balance moving forward. One of his bench pieces dating a Kardashian drains the depth a little bit, but on the whole its turning out
        nicely. Bijan was a gamble that has so far paid off, and if it continues to, means this team should fiiiinally go over 500. We will see.`
    },
    {
        //Logan
        owner: "739556159849140224",
        position: 10,
        lastPosition: 9,
        up: "CeeDee Lamb",
        down: "Najee Harris",
        game: "L 126.96",
        upcoming: "Tyler Stock (0-2)",
        blurb: `On the back of a tough loss, Logan slips into 10th place. Even though the points look fine, we're just not jazzed about the way the team is looking. 
        Najee looks like he's running in sand, Saquon will be out for a few crucial weeks and will effectively be replaced by Zack Moss, Njoku has kinda sucked and
        will be replaced by a geriatric Ertz, and Mike Williams probably is on a clock for how long he'll actually be useful. Week 3 is looking smellier than Saarang.`
    },
    {
        //Neel
        owner: "722992153168531456",
        position: 1,
        lastPosition: 2,
        up: "Mike Evans",
        down: "Jaxon Smith-Njigba",
        game: "W 121.06",
        upcoming: "βαβηκαταΣΥΣΥ (2-0)",
        blurb: `Our Supreme Commander attains #1, in no small part due to Chubb's horrific injury and Shiv's loss. Tua figures to not keep being that bad, Ekeler will return, and
        the Jets D won't forget how to play 7 up every week. Most importantly, with his #1 choice hurt, he still put up 120+ for a W. Garrett Wilson is still producing with Zach (also Wilson)
        running the show, Smith is great, and Mike Evans looks like he wants a fattie of a contract. Terry McLaurin and Zay Flowers look like crazy 4 and 5 options, too. While the RB depth
        isn't ideal with Ekeler likely being out another week or two and Akers getting sent off the team (and to the Vikings), Engram being strong so far and the crazy WR depth earns this team
        a spot at #1 in the league.`
    },
    {
        //Saarang
        owner: "739672661684346880",
        position: 3,
        lastPosition: 3,
        up: "George Pickens",
        down: "Chris Godwin",
        game: "W 144.68",
        upcoming: "TuAnon (2-0)",
        blurb: `It's a good win, and more of what we expected to see from our original #1 seed. However, he doesn't move up because we like both teams in front of him
        a tad more right now, and the depth doesn't look as strong as we originally thought. Goedert is fighting for targets, Lamar has like 6 good games left in his season, 
        Mostert won't flash for over 20 more than one more time this year, we have no idea what capacity JT can come back in, and Godwin looks like he's a very distant second fiddle
        to Mike Evans in Baker's eyes. However, on the plus side, Pickens finally had THAT game we've been waiting for, and Swift clearly has juice left. It's just not reliably going
        to show up every week.`
    },
    {
        //Ram
        owner: "739540158155743232",
        position: 7,
        lastPosition: 11,
        up: "Jordan Love",
        down: "Khalil Herbert",
        game: "W 121.50",
        upcoming: "Smellma Caffrey (2-0)",
        blurb: `Ram eclipses #10 the first time largely on the back of everyone below him being 0-2. On the bright side: Breece will never get 4 touches again this season, Kelce will
        continue to heat up, Keenan still has some gas, and Skyy Moore finally had an actual game. On the downside, Olave isn't reaaaally that guy, the WR depth is still not good, and
        the RB depth is bleh. Most importantly, he upgraded from Deshaun to Jordan Love, a no-brainer move in 22 specific ways.`
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
            <h3> WEEK 3 POWER RANKINGS </h3>
            <div style={styles.article}>
                <p>
                    We didn't watch a lot of football this week, but we're still moping about Aaron Rodgers getting hurt and trying to talk ourselved into Zach Wilson. Did anything
                    important happen this week? Probably not.
                </p>
                <img src={Week3Photo} alt="" style={{width: isMobile ? 350 : 700, alignSelf: "center"}}/>
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