import { merge } from '../../util'
import React from 'react'
import jamar from "../AP_Steelers_Bengals_Football.webp"

const rankings = [
    {
        //Shiv
        owner: "739628392529408000",
        position: 10,
        lastPosition: 10,
        up: "Miles Sanders, James Robinson",
        down: "Aaron Jones",
        game: "L 98.32",
        upcoming: "Joe mama (1-0)",
        blurb: `We didn't think her team was bad enough to earn LOTW in Week 1, but at the same time, we told you so. CMC was ineffecient, but
        the touches will come, we're not worried. Same with CeeDee. Everyone else though? Aaron Jones did not seem to be the featured back
        in an offense with no WRs and Aaron Rodgers. Etienne was vastly outplayed by James Robinson, who had an awesome comeback at 6.6 YPC (our
        Best Pick for this team!). And then there were duds left and right. On the other hand, JRob and Miles Sanders look like studs and Hurts
        looks like the truth, so there may be some salvation. We will have to see. For now, though, stuck at #10.`
    },
    {
        //Danny
        owner:"739529793342726144",
        position: 9,
        lastPosition: 9,
        up: "Amon-Ra St. Brown",
        down: "Ezekiel Elliott",
        game: "W 107.86",
        upcoming: "The Smelly Saarangs (1-0)",
        blurb: `Even with a W, it was a rough week. Zeke did not look right, Diontae Johnson will need to step up to maintain WR2 status, Kittle
        already missed a game, and the bench outside of the Sun Gawd was bad. Oh, right, Dak also is getting surgery. Sure, a win is win, but there
        is nothing here that makes us feel like this team should slide up the rankings. Some comfort can be taken in Davante appearing to be the
        entire Raiders offensive plan and the Sun Gawd picking up right where he left off last season (he's in must-start territory, in our opinion),
        but this team needs Dalvin to score and for Kittle to hurry back for it to have a fighting chance week to week.`
    },
    {
        //Allan
        owner: "740648111118147584",
        position: 6,
        lastPosition: 8,
        up: "Saquon Barkley",
        down: "Mike Williams",
        game: "W 159.98",
        upcoming: "More Moore (0-1)",
        blurb: `Allan earns TOTW honors, and so far so good for the team of winners. Javonte appears to have locked RB1 down in Denver, despite a
        fumble, Saquon was a monster (he usually is when he's on the field, but he needs to actually make it there consistently for us to believe),
        JJettas is a god, and Slant Boi had a productive return. We will maintain that the upside does not make this a complete team until the 
        most inconsistenly available players show they will play 14+ games this year, but still, this showing was worthy of jumping 2 spots. And 
        don't forget Jeudy outplaying Sutton in Russ's first game. A few issues that tempered the leap were Mike Williams somehow not having 
        established a reliable connection with Herbert after last season, and the absolutely grim RB situation behind the top 2 guys.`
    },
    {
        //Nicole
        owner: "739660607032352768",
        position: 8,
        lastPosition: 7,
        up: "Jarvis Landry",
        down: "Cam Akers",
        game: "L 116.78",
        upcoming: "νίκη (0-1)",
        blurb: `Some bad luck and a loss drops this team 1 spot. Cam Akers, this teams RB1, saw 3 touches and zero points. McVay basically said
        after the game that he kept missing pass protection assignments, and against that violent Bills front, the Rams couldn't afford that 
        liability. While this won't be a trend, it certainly doesn't bode well that the Rams will yank a top offensive option so surely. This 
        should be mitigated by JK Dobbins return next week, but we will have to see him on the field first. On the bright side, Josh Allen and
        Stefon Diggs prove their draft investment against a top 5 defense, being the only reason Nicole had a shot at winning this week. Also, 
        Cooks and Landry are fantastic WR depth.`
    },
    {
        //Nandan
        owner: "741390106056941568",
        position: 4,
        lastPosition: 6,
        up: "Cordarelle Patterson",
        down: "Kyle Pitts",
        game: "W 130.50",
        upcoming: "βαβηκαταΣΥΣΥ (1-0)",
        blurb: `What a strange week for Nandan. A 1 place increase was in the bag for him, but the second is a result of circumstance. Still, 
        he rises to #4 on the backs of Mahomes, Mixon, and Swift. The RB is as good as can be, and Mahomes looked even better without Tyreek.
        All good news. The bad news, however, is that his top receiver is hurt and Kyle Pitts is somehow not establishing himself in Atlanta. 
        This team is in good shape to be carried by 3 very good, very consistent players, but is also primed to skid based on how ugly the rest
        looked. Silver lining? Geno didn't write back. DK should be a benefactor and a bit contributor moving forward. `
    },
    {
        //Mike
        owner: "870659100365737984",
        position: 7,
        lastPosition: 5,
        up: "Gabe Davis",
        down: "Allen Robinson",
        game: "L 99.46",
        upcoming: "Tyler Stock (0-1)",
        blurb: `A victim of some bad luck, Mike falls 2 positions. It's not exactly his fault, as we still think this team at full strength is good.
        But it looks like he might be down his top 2 RBs heading into Week 2, and that's not exactly cause for optimism. Between that and Allen Robinson
        not existing in Matt Staffod's eyes, it was a strange week that we don't think will continue. For now though, especially projecting to Week 2, he's
        going to have to earn his way back up.`
    },
    {
        //Logan
        owner: "739556159849140224",
        position: 3,
        lastPosition: 4,
        up: "Antonio Gibson",
        down: "Robert Woods",
        game: "W 144.10",
        upcoming: "Daeviontae's Inferno (1-0)",
        blurb: `Moving up a place with a loss? That's what will happen when the guy ahead of you loses and you would have beaten everyone in the league
        not named Allan. Even with a weak Henry week, this team surged. Tyreek caught passes 5 yards downfield from Tua, and Jalen Hurts is god reimagined
        so it seems like AJ Brown will be fine. Kelce and Mahomes didn't even notice Tyreek is gone. Good week with the potential to be even better. Let's ride. `
    },
    {
        //Neel
        owner: "722992153168531456",
        position: 5,
        lastPosition: 3,
        up: "AJ Dillon",
        down: "Elijah Moore",
        game: "L 106.32",
        upcoming: "Cook-ing Spring Rolls (1-0)",
        blurb: `This was an ugly match. One that should have been won, hence slipping 2 spots. Elijah Mitchell got hurt, the Jets defense was good enough
        to contain Lamar and Andrews (the team would still lose by 15, however), Ekeler was a nonfactor, Deebo fumbled, the Pats suck, and Flacco couldn't
        find anyone not named Michael Carter. The Mitchell loss stings, but on the bright side, AJ Dillon looked like Aaron Jones' worst nightmare, so let's
        see how he follows it up in Week 2 before condemning this team to RB hell. Not to mention Michael Carter was the best player on the Jets offense by
        a long way.`
    },
    {
        //Saarang
        owner: "739672661684346880",
        position: 2,
        lastPosition: 2,
        up: "Clyde Edwards-Helaire",
        down: "Dawson Knox",
        game: "W 140.22",
        upcoming: "Mixon deez (1-0)",
        blurb: `The top 2 remains unchaged, starting with Saarang. The RBs seem to be totally fine: Fournette will get his touches in a Bucs O that doesn't
        look as pass-happy as it used to, and James Conner is similarly inefficient (2.6 YPC) but TD prone to last year, the early showings tell. Chase and
        Kupp are as advertised. There's enough guys here who can pop off and carry any given week. On the downside, it looks like Knox will be a very
        inconsistent TE play week to week as the Bills offense doesn't exactly need him to thrive.`
    },
    {
        //Ram
        owner: "739540158155743232",
        position: 1,
        lastPosition: 1,
        up: "Kareem Hunt",
        down: "Aaron Rodgers",
        game: "W 132.12",
        upcoming: "CeeDeez Nutz in yo mouth (0-1)",
        blurb: `Joe mama had like 5 turnovers and it didn't even matter for Ram. JT and Chubb did the things they were supposed to, Allen looked like
        Herbert's favorite target before getting hurt, Waddle waddled, and everyone else did enough. This team should be steady as can be with so many 
        guys able to step up and score. On the bench, Hunt outplayed Chubb and Aaron Rodgers might not be worth rostering if GB can't figure out how to 
        run a Davante-less offense.`
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
                    Week 1 brought us revenge games gone wrong, the Cowboys being bad, the weirdest display of kicking we've probably ever seen,
                    way too many injuries, and our first in season power rankings. Lets dive in. 
                </p>
                <img src={jamar} alt="" style={{width: 600, alignSelf: "center"}}/>
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