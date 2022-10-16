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
        blurb: `A disappointing performance this week for sure, but Hurts and CMC (especially now that he might have a functional offense
          with Ratt Fhule fired) are enough to keep the boat steady for now. There is some concern in the RB room, with Boobie’s
          inconsistency and Jones struggling in a disappointing Packers offense. But CeeDee will have better weeks, especially with
          Rayne Dakota Prescott back in action within the next week or two. Olave has proven himself as a legit starter, but has a pretty
          limited ceiling in a Saints offense incomprehensibly obsessed with Taysom Hill. Shivs00 needs a WR to step up as a bonafide WR1
          for her season to rise to the next level.`
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
        blurb: `After putting up the lowest total in the league in Week 4 for his first loss, Danny fights back against the fraud allegations
        with a TOTW performance flexing what this team is capable of. An uncharacteristically poor showing by the Sun Gawd (the Lions were
          the league’s highest scoring offense before getting shutout by the Pats this week) is hidden by the Raiders continuing to shove
          targets down Davante’s throat, remembering Josh Jacobs is elite, and maintaining Carlson as the highest scoring kicker this season.
          This team has a bounty of flex worthy WR depth but will need to face the pressure of choosing the right ones each week.
          If Dalvin stays Cooking, Dak manages to win back the starting job (no promises), and Kittle runs routes more than he blocks,
          this team can make a case for #1.
`
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
        blurb: `As expected coming out of the draft, this squad is the epitome of boom-or-bust. Saquon is amidst a dazzling return to form,
        and if he manages to stay healthy while carrying literally an entire organization his back, he can surely help carry this team
        into the playoff race. Jjettass is historically good, and Mike Williams is reminding us how stupid we are for letting him fall
        so far in the draft after being a top 10 WR last season. However, this team’s RB depth is shaky, and will require flawless start-sit
        decisions on a weekly basis unless one of them gets to run all over the Panthers. This team has taken a stride in convincing us it’s
        among our league’s best, but needs more consistency to ascend.`
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
        blurb: `Tyler Stock scrapes by with an ugly win, beating the only team who put up less points, and even then it was only because an
        undefeated GM started a TE who didn’t play and a WR who was listed as active but only saw 10 snaps with 0 targets.
        The Josh Allen - Stefon Diggs stack is as good as it gets, but they aren’t superhuman enough to win matchups when they outscore
        all of the other starters combined. The RB room is an absolute disaster and Tyler Stock will have to make good moves on the
        waiver wire (you know, like choosing the right Washington RB) to recoup.`
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
        blurb: `A huge slide after his first loss may appear harsh, but it’s warranted here. While he couldn’t predict Pee being falsely
        listed as active, he certainly could’ve swapped out an inactive Kyle Pitts. The outlook for this team isn’t great. With Cordarelle
        Patterson on IR, there are only 2 healthy RBs on the roster, and having to rely on any Patriots RB to win the Belicheck weekly lottery
        is not a recipe for success. There are still some major positives, as Mahomes will always perform, Pee will bounce back, Pooper has had
        a few big weeks, and Metcalf seems to be hitting his stride with Geno. `
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
        blurb: `Even with a bold, heavily biased play of the Cowboys D putting up QB1 numbers, Mike continues to disrespect his team’s namesake.
        Najee continues his downward trend, but I guess you can’t expect many big hand(s)offs with Kenny Pickett at the helm. Gabe Davis had a
        breakout week that put the game out of reach early, which should’ve resulted in a bit more output from Single[digits]tary. As a positive,
        Kamara finally remembered he’s elite, but 0-5 is too much to bounce back from for any success this year.`
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
        blurb: `We should’ve dropped this man lower for how quick he was to lose faith in fellow Golden Bear Wared Woff, but with King Henry
        back on his throne, Breece Hall living up to the Neel-fueled hype, and Kelce being an absolute machine, this team remains a threat.
        Reek’s stock drops a bit due to the QB disaster in Miami, so he better hope AJ Brown’s bad week is an exception rather than a trend.
        The bench is full of boom/bust players, so we need to see established starters fill out this lineup before we believe this team has
        what it takes. Most importantly, though, Padres in 5. `
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
        blurb: `We won’t penalize Neel for a solid point total in a loss against this week’s new #1 team in the power rankings.
        It’s wild how a 40-point Lamar-Andrews stack feels like a down week. Dameon Pieree had a breakout game a few weeks ago
        and decided he liked being one of the league’s best RBs, and a healthy Ekeler has always been one of those too.
        We’re keeping an eye on this WR room, which has a ton of potential, but are stuck in middling offenses. The way those
        players trend will make or break this season.`
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
        blurb: `This team lacks depth, but has great balance and consistency across the starting lineup, spearheaded by Kooper Cupp
        being WR1 even as the Rams struggle. The Bengals also continue to struggle, but we still expect Chase will pick things up soon.
        We should all count our blessings that the Commies have a QB who doesn’t like throwing to Terry, because then this WR room
        would really get Scary. Touchdown Lenny has been finding quite a lot of paydirt since he tweeted directly to fantasy managers
        promising to do so. Must be nice. This team is on the rise, and will remain among the league’s best barring injuries.`
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
        blurb: `The trend of brutal losses continues for ramp (what is ramp, anyways?), as he was matched up against 1 of only 3 teams
        who put up more points this week. Chubb continues to be an absolute stud and is possibly the best pure runner in the NFL.
        Mostert is emerging as a solid flex play, but at the cost of Waddle’s production now that the Dolphins have no choice but to start
        Skyler Thompson, a QB who surely none of us heard of before a dozen words ago. This team has the talent to win any given week.
        With the right personnel decisions and some luck now and then, maybe he strings together a few wins to get back into the playoff race.`
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
            <h3> WEEK 6 POWER RANKINGS </h3>
            <div style={styles.article}>
                <p>
                    We have some new, groundbreaking analysis coming from a new contributor this week! If the takes are shit, that's our
                    excuse for why. The main guy decided to take the week off or something we don't really know. He's a bum, clearly. Anyways,
                    here's a brief, brief recap of the week: <br/>
                    <br/>
                    Zach Wilson and the Jets are coming, Russ sucks, the Colts suck, Patty M is good, and Davante should see 10 targets a week
                    no matter how ill-advised they are. <br/>
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
