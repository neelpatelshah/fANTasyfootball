import { merge } from '../util'
import React from 'react'
import Week4Photo from '../4.webp'

const rankings = [
    {
        //Shiv
        owner: "739628392529408000",
        position: 6,
        lastPosition: 8,
        up: "CeeDee Lamb",
        down: "Christian McCaffery",
        game: "W 111.70",
        upcoming: "βαβηκαταΣΥΣΥ (2-1)",
        blurb: `CeeDee comes out to save Shiv and his own season thus far in the 4th quarter Monday night. It was looking like a guarenteed loss before
        Cooper Rush activated God mode and bailed out his WR, making him look like a #1 again, and Shiv all in one go. It wasn't ugly, but being above
        .500 matters. If she finally starts playing James Robinson, this team might start matching up well, week to week, especially with CMC not being
        the force he used to be, and now missing practices.`
    },
    {
        //Danny
        owner:"739529793342726144",
        position: 5,
        lastPosition: 5,
        up: "DeVonta Smith",
        down: "Davante Adams",
        game: "W 102.34",
        upcoming: "Mixon deez (3-0)",
        blurb: `Danny's fraudulence from last season continues, as he is 3-0 after barely scoring 100. Zeke was actually a pretty effecient rusher, which
        would help his team out a ton, but the Raiders look like an absolute mess, and there's really no telling how consistent Davante will be week to week.
        It'll take some time to see if this team can gain some player consistency, but for now, they're consistently winning. Somehow.`
    },
    {
        //Allan
        owner: "740648111118147584",
        position: 9,
        lastPosition: 9,
        up: "Saquon Barkley",
        down: "Tom Brady",
        game: "L 67.04",
        upcoming: "νίκη (0-3)",
        blurb: `Allan follows up last week's incredible performance with another one, this time tying for LOTW with under 70 points. The Bucs offense, even 
        down their weapons, seems to not be totally sure what its doing, so TB12 looks like he should probably not be rostered now. Javonte is not off to a 
        great start in Denver, but no one really is. Saquon is showing that he will still be a force when he's on the field, something that really could bail
        this team out in the coming weeks. Aside from that, we see the boom or bust players doing a lot of busting right now.`
    },
    {
        //Nicole
        owner: "739660607032352768",
        position: 7,
        lastPosition: 7,
        up: "Courtland Sutton",
        down: "Cam Akers",
        game: "L 103.50",
        upcoming: "Kekeler Schmekelers (3-0)",
        blurb: `She was a lock to win, be above .500, and move up a spot in power rankings at 11PM on Monday night. CeeDee Lamb decided otherwise. The stack
        was good, not otherwordly this week, and she needed that carry with JK Dobbins not being a full player yet and Cooper Rush blowing the Giants butts
        out. The bench needs an overhaul, but there's still enough here at the top end of the team to carry her through the coming weeks.`
    },
    {
        //Nandan
        owner: "741390106056941568",
        position: 1,
        lastPosition: 2,
        up: "Amari Cooper",
        down: "Skyy Moore",
        game: "W 121.80",
        upcoming: "Daeivoantae's Inferno (3-0)",
        blurb: `Even with uncharacteristically bad days from Mahomes, Mixon, and Swift, Nandan pulls out the win against the former #1 ranked team here.
        We feel that's enough to give him the crown. Cooper is looking like a dude in Cleveland, and there's enough depth here that others are able to 
        pick up the slack enough to still put up a respectable total. We knew this team had potential, but we didn't see them at #1 so soon. Now we wait
        to see if it lasts.`
    },
    {
        //Mike
        owner: "870659100365737984",
        position: 10,
        lastPosition: 10,
        up: "Devin Singletary",
        down: "Alvin Kamara",
        game: "L 67.04",
        upcoming: "Cook-ing Spring Rolls (1-2)",
        blurb: `Tying for LOTW, we have no idea what to even say this week. Along with some weird decisions (Jimmy G, Mecole), some complete duds from Kamara,
        Najee, Allen Robinson, and Gabe Davis at the same time sink this team. It feels too unlucky and too flat out bad to continue, the talent here is too
        good to keep losing, but until that happens, he sticks at #10.`
    },
    {
        //Logan
        owner: "739556159849140224",
        position: 8,
        lastPosition: 6,
        up: "AJ Brown",
        down: "Russell Wilson",
        game: "L 120.96",
        upcoming: "Joe Mama (1-2)",
        blurb: `We are very much not riding. This is a decent total, especially this week (ranks #3), but somethings gotta give here. 0-3 with this team is 
        crazy. Tyreek had a down game, as is going to happen with Tua, and the Broncos look like they're coached by Colorado, but everyone else was good enough,
        and he still lost. Bad luck, for sure, but we'll see if the name change eases his fortunes. On the bright side, it looks like AJ Brown hit another gear.`
    },
    {
        //Neel
        owner: "722992153168531456",
        position: 3,
        lastPosition: 4,
        up: "Dameon Pierce",
        down: "Deebo Samuel",
        game: "W 153.02",
        upcoming: "Tyler Stock (1-2)",
        blurb: `Back to back 150 point weeks and his first TOTW bumps Neel up a spot. Lamar is god tier right now. He's the highest scoring QB when you take
        his rushing totals away and the highest scoring RB when you take his passing totals away. Him and Mark Andrews might actually be the best stack in 
        the league this year. Dameon Pierce, while benched, finally had a week where he looked like RB1 in Houston. If he keeps that up moving forwards, that
        more or less completes this team, with Christian Kirk lighting it up with Sunshine every week and Elijah Mitchell due back in a month. On the downside,
        Deebo did not excel with Jimmy back. Maybe because he was too busy stepping out of the back of the endzone.`
    },
    {
        //Saarang
        owner: "739672661684346880",
        position: 2,
        lastPosition: 3,
        up: "Terry McLaurin",
        down: "Darnell Mooney",
        game: "W 117.66",
        upcoming: "CeeDeez Nutz in yo mouth (2-1)",
        blurb: `Saarang reclaims #2 with a win, albeit a modest one. The team basically underperformed across the board, its just that his opponent scored 67 
        points, so it didn't really matter. We see the weakness of this team again in the inconsistent RB group, but he survived a down week from them and his
        WRs, and still won, and there's only going to be so many of these duds this week, so this bit of luck makes the rest of the season look pretty dang good.
        Let's hope he doesn't fuck it up.`
    },
    {
        //Ram
        owner: "739540158155743232",
        position: 4,
        lastPosition: 1,
        up: "Tyler Lockett",
        down: "Jonathon Taylor",
        game: "L 112.10",
        upcoming: "Bare Butt Balls and Back (0-3)",
        blurb: `He kept #1 on a benefit of the doubt last week, but another clunker for this squad drops him 3 spots. Part of the reason for that fall is Taylor
        not seeming like he's all the way there just yet. We think it will come, but until he actually does it, this team isn't as bulletproof as we thought.
        The WR depth did flash this week, though. On his bench. Idiot.`
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

const Week4 = ({ teams }) => {
    const data = merge(teams, rankings)
    data.sort((a, b) => b.position - a.position)
    return (
        <div style={styles.page}>
            <h3> WEEK 4 POWER RANKINGS </h3>
            <div style={styles.article}>
                <p>
                    This week, we got to see 2 insane safeties. Jimmy G did his best Dan Orlovsky impression and willingly stepped out of the back of
                    the endzone, and the Phins punter sent his punt off a guy's ass to Jupiter. <br/>
                    <br/>
                    Nothing else that happened this week really even matters after that. <br/>
                    <br/>
                    Let's dive in.
                </p>
                <img src={Week4Photo} alt="" style={{width: 600, alignSelf: "center"}}/>
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

export default Week4;