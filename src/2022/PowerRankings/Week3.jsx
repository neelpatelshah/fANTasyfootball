import { merge } from '../../util'
import React from 'react'
import Week3Photo from '../week3.jpg'

const rankings = [
    {
        //Shiv
        owner: "739628392529408000",
        position: 8,
        lastPosition: 10,
        up: "James Robinson",
        down: "TJ Hockenson",
        game: "W 159.22",
        upcoming: "Tyler Stock (1-1)",
        blurb: `After that performance, she probably should be above 8, but too many people in the bottom half won and who do we reasonably
        put her over? Regardless, Shiv goes from LOTW to TOTW in one week, but to be honest, we aren't sure how. It was just strong performances
        from everyone and a few 30 pointers that add up to the insane total which, by the way, was 100% needed to beat Ram this week. We may have
        beaten the drum on Aaron Jones' downfall too early, but we will not retract our statement for a while. This team, with all the main guys 
        going, is nothing to scoff at. That's an unfortunately important condidition, though.`
    },
    {
        //Danny
        owner:"739529793342726144",
        position: 5,
        lastPosition: 9,
        up: "Amon-Ra St. Brown",
        down: "Ezekiel Elliott",
        game: "W 134.38",
        upcoming: "Cook-ing Spring Rolls (1-1)",
        blurb: `Just like 0-2 is 0-2 and can't be in the top-5, 2-0 is 2-0 and has to be top 5. Even if that means jumping a whopping 4 places. The
        reason we don't even mind that is the Sun Gawd himself being a top-5 receiver in the National Football League. No, we will not explain. You 
        might be blind if you disagree. Ignoring the idiotic Tayson Hill play, this team ignored 3 dud performances to win for the second straight week.
        We still don't feel objectively good about it, especially when you have to bench a high pick in Zeke, but like we said. 2-0 is 2-0.`
    },
    {
        //Allan
        owner: "740648111118147584",
        position: 9,
        lastPosition: 6,
        up: "Michael Thomas",
        down: "Tom Brady",
        game: "L 110.50",
        upcoming: "Daeviontae's Inferno (2-0)",
        blurb: `To be honest, Allan shouldn't have fallen all the way to 9. Everyone between Mike and him winning and putting up big points in the
        process while he lost did him no favors, though, as the team full of winners is now #9. Brady and the Bucs did god knows what all day, the
        running backs didn't score and don't have the volume to survive without that, and Justin Jefferson didn't go nuclear. It's not really disaster,
        it's just that the roster doesn't seem to be able to absorb tough (not even atrocious) weeks from some guys. We'll see if Allan stabilizes as
        a middle-of-the-pack team as the season goes, which we think it could, or if it wil live at the bottom.`
    },
    {
        //Nicole
        owner: "739660607032352768",
        position: 7,
        lastPosition: 8,
        up: "Garrett Wilson",
        down: "Rashaad Penny",
        game: "W 155.38",
        upcoming: "CeeDeez Nutz in yo mouth (1-1)",
        blurb: `The best stack in the league pays off yet again. Like Shiv, Nicole might deserve jumping more than 1 place, but still, a rise is 
        a rise. Even with the atrocious RB performance, she put up a 150+ point week. Josh Allen is as obvious of an MVP bet as we have ever seen,
        Diggs went nuclear, Sutton is the guy for the Broncos, and Garrett Wilson might be a permanent flex play for the rest of the season. Even
        with wins, we will be cautious to elevate this team to top-5 status until we see Akers and Dobbins figure their seasons out. That consistency
        will be huge for this team to make a run.`
    },
    {
        //Nandan
        owner: "741390106056941568",
        position: 2,
        lastPosition: 4,
        up: "Cordarelle Patterson",
        down: "Amari Cooper",
        game: "W 126.50",
        upcoming: "Joe mama (1-1)",
        blurb: `Nandan continues his ascent. #2 may be a little bit bloated, but 2-0 is 2-0 like we've said. Swift is a beast, Pee Piggins rules, 
        Amari over DK proved to be the right play which we would have laughed at before the week began, and Mahomes didn't even do anything that 
        crazy. This team showed off its well-roundedness this week, and that its not just an RB carry. On the other hand, Kyle Pitts needs to start
        blackmailing Arthur Smith for touches or something. `
    },
    {
        //Mike
        owner: "870659100365737984",
        position: 10,
        lastPosition: 7,
        up: "Allen Robinson",
        down: "Najee Harris",
        game: "L 109.96",
        upcoming: "βαβηκαταΣΥΣΥ (1-1)",
        blurb: `There's really not much we could do about this one. 0-2 is 0-2, and they've been 2 pretty poor showings. The biggest culprits this
        week are Mike Evans for getting ejected, Dalton Schultz for not having targets, and Devin Singletary for being wildly unreliable. Additionally,
        the total only crosses 100 because the Bucs D put up 27. On the plus side, Gabe Davis should be back and Allen Robinson made legit contribuations.
        While Kamara was out, Najee not beating out Mitch Trubisky for touches is a problem. LOTW earns him #10.`
    },
    {
        //Logan
        owner: "739556159849140224",
        position: 6,
        lastPosition: 3,
        up: "Tyreek Hill",
        down: "Russell Wilson",
        game: "L 119.86",
        upcoming: "Kekeler Schmekelers (1-1)",
        blurb: `We still think this team is good, but 0-2 is 0-2 and you can't be living in the top-5 like that. The Broncos as a mess and Russ does not 
        seem to be riding, Derrick Henry desperately needs to get back to form, and not starting Pollard was an interesting personnel decision. It's not
        all bad, as the team is better than 0-2, but until the wins come, we have to have other squads ahead. Even with an absurd Tyreek week, he couldn't
        cross 120. Weird start to the year, but we would bet it doesn't last much longer.`
    },
    {
        //Neel
        owner: "722992153168531456",
        position: 4,
        lastPosition: 5,
        up: "Christian Kirk",
        down: "Devante Parker",
        game: "W 150.72",
        upcoming: "The Smelly Saarangs (0-2)",
        blurb: `A nice bounce-back from the previous week earns Neel a 1 spot rise. Lamar went crazy, the stack worked, Kirk kirked, and he scored 150
        with a solid goose egg in flex. Adding Pittman to this team makes its original top-3 status very plain. Deebo still hasn't gotten it going, but the return
        of Jimmy G should go a long way towards that. Nothing else to really say, besides that AJ Dillson will be back. You just wait.`
    },
    {
        //Saarang
        owner: "739672661684346880",
        position: 3,
        lastPosition: 2,
        up: "Clyde Edwards-Helaire",
        down: "Darnell Mooney",
        game: "L 122.38",
        upcoming: "νίκη (0-2)",
        blurb: `Saarang being Saarang didn't let our top-2 billing last longer than 1 week of game time. The main culrpit seemed to be weak weeks from 
        Fournette and Conner, shocker, like we said would be the flaw of this team. Chase wil bounce back, Kupp is insane, and the depth is still solid.
        Knox may not be the guy you want every week, but the team is gonna be fine. Keep an eye on those running backs, though.`
    },
    {
        //Ram
        owner: "739540158155743232",
        position: 1,
        lastPosition: 1,
        up: "Jaylen Waddle",
        down: "Joe Burrow",
        game: "W 153.46",
        upcoming: "Mixon deez (2-0)",
        blurb: `Even at 1-1, we're gonna leave Ram at 1. Shiv needed a massive week and insane play from Jalen Hurts to pull it off. Keenan Allen was 
        hurt and Jonanthon Taylor had an uncharacteristically bad week and it didn't even matter. This team is deep, well rounded, and ready to go week
        to week. We don't have much more to say than that, and it'll take disaster to shake him from the #1 spot.`
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

const Week3 = ({ teams }) => {
    const data = merge(teams, rankings)
    data.sort((a, b) => b.position - a.position)
    return (
        <div style={styles.page}>
            <h3> WEEK 3 POWER RANKINGS </h3>
            <div style={styles.article}>
                <p>
                    What an absolutely absurd week. Deep breath. Ready? <br/> 
                    <br/>
                    Chubb scored 3 TDs and shouldn't have for the sake of his team winning, Joe Flacco unlocked Garrett Wilson in the most improbable NFL 
                    win in 20 years, Tua went supersaiyan and Waddle and Tyreek are an insane duo, Lamar had a top-tier Lamar game and it somehow didn't even 
                    matter because the Ravens choked it away, Herbert played through a broken rib and it didn't even matter, the Sun Gawd (and Jared Goff!) 
                    is elite, the Colts somehow stink, the Bengales OL stinks more, Jimmy G is back, the Rams look like swiss cheese, Jimmy G is BACK, the 
                    Eagles may be the best NFC team, death, taxes, and Kirk sucking in primetimeand the Bills sleepwalked to a 30 point blowout over a playoff 
                    team. <br/> 
                    <br/>
                    That's not even touching every game. <br/> 
                    <br/>
                    The NFL is awesome and the WR talent around the league is insane. Like best-in-history insane. <br/> 
                    <br/>
                    Lets dive in.
                </p>
                <img src={Week3Photo} alt="" style={{width: 600, alignSelf: "center"}}/>
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

export default Week3;