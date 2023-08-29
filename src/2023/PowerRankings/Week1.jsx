import React from 'react'
import { merge } from '../../util'
import Week1Photo from "../image/Week1.png"

const rankings = [
    {
        //Shiv
        owner: "739628392529408000",
        position: 3,
        lastPosition: 3,
        wins: 8,
        losses: 5,
        best: "Kyle Pitts",
        worst: "Justin Fields",
        mvp: "Josh Jacobs",
        upcoming: "Dak The Halls",
        roster: `
            1.5: T. Hill (WR), 2.6: J. Jacobs (RB), 3.5: T. Higgins (WR), 4.6: A. Jones (RB), 5.5: J. Fields (QB), 6.6: B. Aiyuk (WR), 
            7.5: K. Pitts (TE), 8.6: I. Pacheco (RB), 9.5: J. Addison (WR), 10.6: B. Robinson (RB), 11.5: E. Moore (WR), 12.6: D. Cowboys (DEF), 
            13.5: D. Schultz (TE), 14.6: T. Bass (K), 15.5: R. Rice (WR), 16.6: D. Singletary (K)
        `,
        blurb: `Shiv had a great draft, and is coming in with quite a balanced team. Hill, Higgins, Jacobs, and Jones are a pretty good law firm (and starting
            4), Pitts might finally have the big year, and Fields showed out with his legs. However, the 5th round seemed a little early when he has not learned
            how to throw a football yet. Aiyuk and Addison could be fine plays, but Pacheco and Robinson are very shaky without being in committees to begin with. 
            This is the main thing keeping her out of the top 2, but this is all meaningless anyways I'm not sure why we try to justify it this deeply.`
    },
    {
        //Danny
        owner:"739529793342726144",
        position: 6,
        lastPosition: 6,
        wins: 7,
        losses: 6,
        best: "Courtland Sutton",
        worst: "TJ Hockenson",
        mvp: "Christian McCaffery",
        upcoming: "Mixon Deez",
        roster: `
            1.4: C. McCaffery (RB), 2.7: A. St. Brown (WR), 3.4, T. Etienne (RB), 4.7: T. Hockenson (TE) 5.4, J. Burrow (QB), 6.7: D. Hopkins (WR), 
            7.4, C. Akers (RB), 8.7: M. Brown (WR), 9.4, J. Smith-Njigba (WR), 10.7: J. Williams (RB), 11.4, C. Sutton (WR), 12.7: D. Achane (RB), 
            13.4, B. Bills (DEF), 14.7: J. Williams (WR), 15.4, B. Young (QB), 16.7: J. Sanders (RB)
        `,
        blurb: `Danny was gift wrapped CMC who still somehow goes top 5 every year, and between him and Etienne that's potentially our best RB duo.
        Big Thick Hock was probably a little early, but the real funsies are with WR2. Nuk, hurt a lot and playing with a revolving door QB? Hollywood, a
        trade candidate? That then makes flexing someone a task all on its own. JSN is an exciting rookie to bloom late season, but its not a lock 
        this team is contending so late. And we love our sun gods but he's got a lot of pressure on him this year. Better read up on your prayers.`
    },
    {
        //Allan
        owner: "740648111118147584",
        position: 9,
        lastPosition: 9,
        wins: 5,
        losses: 8,
        best: "Anthony Richardson",
        worst: "Amari Cooper",
        mvp: "Nick Chubb",
        upcoming: "Tyler Stock",
        roster: `1.7: C. Kupp (WR), 2.4: N. Chubb (RB), 3.7: M. Andrews (TE), 4.4: C. Ridley (WR), 5.7: A. Cooper (WR), 6.4: T. Lawrence (QB), 
        7.7: D. Johnson (WR), 8.4: J. Williams (RB), 9.7: J. Cook (RB), 10.4: Q. Johnston (WR), 11.7: R. Penny (RB), 12.4: P. Eagles (DEF), 
        13.7: T. Bigsby (WR), 14.4: A. Richardson (QB), 15.7: J. Elliott (K), 16.4: J. Warren (RB)`,
        blurb: `Who the fuck is Bigsby? We feel bad sticking Allan down here again after #8 last year, but he really got cooked like a spring roll
        with this RB situation. He's counting on a functional Broncos team giving off Urban Meyer Jax vibes to bring Javonte
        back in a meaningful and useful capacity. But that's not the only prayer - Kupp is coming off injury, Ridley off a suspension,
        Cooper has never been too reliable and now will have Moore eating targets and they're running a massage parlor, and the Bills RB 
        situation is always weird. Not to mention Mark Andrews having the most competition for targets in a run heavy offense in a long, 
        long time. He needs a lot of things to break his way.`
    },
    {
        //Nicole
        owner: "739660607032352768",
        position: 4,
        lastPosition: 4,
        wins: 8,
        losses: 5,
        best: "Christian Kirk",
        worst: "Evan McPherson",
        mvp: "Patrick Mahomes",
        upcoming: "Cook-ing Spring Rolls",
        roster: `
            1.3: J. Chase (WR), 2.8: D. Henry (RB), 3.3: P. Mahomes (QB), 4.8: D. Metcalf (WR), 5.3: G. Kittle (TE), 6.8: A. Mattison (RB), 
            7.3: D. Pierce (RB), 8.8: C. Kirk (WR), 9.3: R. White (RB), 10.8: G. Davis (WR), 11.3: J. Smith-Schuster (WR), 12.8: T. Allgeier (RB), 
            13.3: E. McPherson (K), 14.8: B. Ravens (DEF), 15.3: D. Mooney (WR), 16.8: K. Murray (QB)
        `,
        blurb: `Nicole rolls in with an actual, realistic chance to have the #1 WR, #1 RB, and #1 QB. And that's with Kittle having an outside chance at TE1.
        To us, she's the only one with that sort of top end. However, she lands at 4th because of shaky-ish second options. DK is fine enough but thats an offense
        with a lot of mouths and a lot of faith in Geno. Kirk was a stud last year, and even with Ridley in the picture, a Trevor year 3 leap figures to keep him
        playable. RB2 is a bit of a prayer, with Mattison in his first season getting the rock without Dalvin and Pierce trying to build off a shaky second half.
        The upside is there, and the floor isn't all too bad. But why is she seeking out Evan McPherson?`
    },
    {
        //Nandan
        owner: "741390106056941568",
        position: 7,
        lastPosition: 7,
        wins: 6,
        losses: 7,
        best: "Tyler Boyd",
        worst: "Rhamondre Stevenson",
        mvp: "Joe Mixon",
        upcoming: "Daeviontae's Inferno",
        roster: `
            1.9: S. Diggs (WR), 2.2: A. Brown (WR), 3.9: R. Stevenson (RB), 4.2: J. Mixon (RB), 5.9: J. Herbert (QB), 6.2: D. Moore (WR), 
            7.9: P. Freiermuth (TE), 8.2: M. Pittman (WR), 9.9: A. Dillon (RB), 10.2: S. 49ers (DEF), 11.9: E. Elliot (RB), 12.2: T. Boyd (WR),
            13.9: T. Higbee (TE), 14.2: D. Carlson (K), 15.9: J. McKinnon (RB), 16.2: Z. Jones (RB)
        `,
        blurb: `Nandan went with #9 in the draft for the second year in a row for reasons unknown, and did decently well. For reasons unknown. That's maybe the best WR duo 
        we have in the league, but Mixon will ultimately be his RB1 since you never want to rely on Pats RBs. DJ Moore is a fine WR3 but it could be better, and Freiermuth is
        extremely underwhelming at TE. Autodraft (we assume) has some slam dunks though - Tylers Boyd and Higbee are great late late round gets.`
    },
    {
        //Mike
        owner: "870659100365737984",
        position: 5,
        lastPosition: 5,
        wins: 7,
        losses: 6,
        best: "Deuce Vaughn",
        worst: "Cole Kmet",
        mvp: "Jalen Hurts",
        upcoming: "TuAnon",
        roster: `
            1.6: B. Robinson (RB), 2.5: D. Adams (WR), 3.6: J. Hurts (QB), 4.5: D. Samuel (WR), 5.6: J. Dobbins (RB), 6.5: D. Waller (TE), 
            7.6: T. Lockett (WR), 8.5: D. Montgomery (RB), 9.6: B. Cooks (WR), 10.5: C. Kmet (TE), 11.6: O. Beckham (WR), 12.5: E. Mitchell (RB), 
            13.6: H. Butker (K), 14.5: P. Steelers (DEF), 15.6: J. Goff (QB), 16.5: D. Vaughn (RB)
        `,
        blurb: `Mike turns in another solid draft. The RB room is a bit of a critical issue, but the immense upside is why he edges Danny out for #5.
        Bijan is a rookie, using #6 on an unproven player is sort of insanity, and then JK Dobbins has like 9 rush attempts in the NFL, so that's a bit scary.
        Aside from the gross inexperience, if he actually plays like he can and Bijan is 80% the player he's hyped to be, it'll play out fine enough. DMont and 
        Deuce Vaughn have big upside too, so the success of this group is really the X-factor here. WR are solid, Waller could be great, Hurts should have a 
        huge year. Good draft. Minimal head scratchers.`
    },
    {
        //Logan
        owner: "739556159849140224",
        position: 8,
        lastPosition: 8,
        wins: 6,
        losses: 7,
        best: "Mike Williams",
        worst: "Najee Harris",
        mvp: "Saquon Barkley",
        upcoming: "",
        roster: `
            1.10: S. Barkley (RB), 2.1: C. Lamb (WR), 3.10: J. Allen (QB), 4.1: N. Harris (RB), 5.10: J. Jeudy (WR), 6.1: D. London (WR),
            7.10: J. Conner (RB), 8.1: M. Williams (WR), 9.10: D. Njoku (TE), 10.1: M. Thomas (WR), 11.10: S. Perine (RB), 
            12.1: G. Smith (QB), 13.10: D. Harris (RB), 14.1: J. Meyers (WR), 15.10: K. Chiefs (DEF), 16.1: J. Myers (WR)
        `,
        blurb: `Logan at 8 is a strange, strange feeling. But we ripped Danny and Shiv last year, so it's his turn.
        Saquon hates his team, Josh Allen's division is an absolute blender, Najee looked like he had cement blocks for
        feet last year, Jeudy is ????, London is unfinished, Michael Thomas is geriatric, and a Bills RB. That said, Mike
        Williams in round 8 is an absurdity (in a good way), Conner is poised to vulture a lot of TDs again, and Njoku isn't
        the worst to have as the last TE. Also his team name sucks right now so we're docking points there too.`
    },
    {
        //Neel
        owner: "722992153168531456",
        position: 2,
        lastPosition: 2,
        wins: 9,
        losses: 4,
        best: "Mike Evans",
        worst: "Kadarius Toney",
        mvp: "Garrett Wilson",
        upcoming: "νίκη",
        roster: `
            1.8: A. Ekeler (RB), 2.3: G. Wilson (WR), 3.8: D. Smith (WR), 4.3: J. Gibbs (RB), 5.8: T. McLaurin (WR), 6.3: M. Sanders (RB), 
            7.8: E. Engram (TE), 8.3: M. Evans (WR), 9.8: Z. Flowers (WR), 10.3: K. Toney (WR), 11.8: Z. Charbonnet (RB), 
            12.3: A. Theilen (WR), 13.8: N. Jets (DEF), 14.3: T. Tagovailoa (QB), 15.8: A. Rodgers (QB), 16.3: Y. Koo (K)
        `,
        blurb: `A pretty strong draft, if we might say so ourselves, helped along by Ekeler mysteriously falling. Likely our favorite WR1-2-3 
        and RB1-2-3 combo, and it could've gone to 4 if not for a tryhard Toney pick. Engram is also a huge hail mary, if he can't match last 
        year, that's a black hole at TE. And matching is unfortunately his ceiling, and the main thing capping this team. But Garrett Wilson is
        gonna go absolutely crazy so who cares. Also, Evans in round 8? Did we miss something?`
    },
    {
        //Saarang
        owner: "739672661684346880",
        position: 1,
        lastPosition: 1,
        wins: 10,
        losses: 3,
        best: "Allen Lazard",
        worst: "Justin Tucker",
        mvp: "Justin Jefferson",
        upcoming: "Mike Williams Enjoyer",
        roster: `
            1.1: J. Jefferson (WR), 2.10: J. Taylor (RB), 3.1: J. Waddle (WR), 4.10: L. Jackson (QB), 5.1: K. Walker (RB), 6.10: C. Godwin (WR), 
            7.1: D. Goedert (TE), 8.10: D. Swift (RB), 9.1: G. Pickens (WR), 10.10: T. Burks (WR), 11.1: J. Tucker (K), 12.10: R. Mostert (RB), 
            13.1: A. Lazard (WR), 14.10: N. Patriots (DEF), 15.1: K. Cousins (QB), 16.10: C. Okonkwo (TE),
        `,
        blurb: `Saarang had a sterling draft and gives us our second year in a row of a #1 pick landing at #1 on our Week 1 rankings. ASSUMING JT
        IS NOT TRADED (we know he will be now and he will cripple Saarang's team and probably Mike's, knowing his luck), this is the best starting unit 
        across the league. The other JT is an annoyingly early pick, so much so that he couldn't wait to talk about it, but Mostert and Lazard right 
        after are great grabs so we can let it go. But this is an impressively well rounded team. We can't wait to see Saarang fuck it up!`
    },
    {
        //Ram
        owner: "739540158155743232",
        position: 10,
        lastPosition: 10,
        wins: 4,
        losses: 9,
        best: "Alvin Kamara",
        worst: "Dalvin Cook",
        mvp: "Travis Kelce",
        upcoming: "Reeky Pitts & Ass",
        roster: `1.2: T. Kelce (TE), 2.9: T. Pollard (RB), 3.2: C. Olave (WR), 4.9: B. Hall (RB), 5.2: K. Allen (WR), 6.9: C. Watson (WR), 7.2:
        A. Kamara (RB), 8.9: J. Dotson (WR), 9.2: D. Cook (RB), 10.9: A. Gibson (RB), 11.2: K. Herbert (RB), 12.9: S. Moore (WR), 13.2:
        R. Bateman (WR), 14.9: D. Prescott (QB), 15.2: W. Commanders (DEF), 16.9: G. Gano (K)`,
        blurb: `Uhhhhhh. Kelce #2 is odd, to be polite, but if you wanted Kelce, why didn't Ram pick #4, 5, 6, or 7? He's a near gaurentee there and 
        his picks on the swings would have been way better. But you know what, top 3, you need a bonafide superstar who will give you 20 every week,
        and Kelce is actually in that handful of 4 or 5 players who can do that. So sure. As long as the roster levels out, right? But Pollard round 2,
        who has never been the bellcow without Zeke, Breece off an ACL, Allen on a decline and Watson without Rodgers as WR2 and 3, and having the
        entire Jets RB committee? It doesn't sit well. At least Kamara is a great value stash for only a 3 week suspension.`
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

const Ranking = ({ team, wins, losses, position, upcoming, blurb, user, mvp, best, worst, roster, isMobile }) => {
    return (
        <div style={styles.ranking}>
            <div style={styles.rankingHeader}>
                {isMobile ? (
                        <>
                            <h3>#{position}: {team || user}</h3>
                            <h3>{wins}-{losses}</h3>
                        </>
                    ) : (
                        <>
                            <h2>#{position}: {team || user}</h2>
                            <h2>{wins}-{losses}</h2>
                        </>
                    )
                }
            </div>
            <i style={styles.roster}>{roster}</i>
            {isMobile ? (
                    <div style={styles.awardsM}>
                        <h5 style={styles.awardRow}>Best Pick: {best}</h5>
                        <h5 style={styles.awardRow}>Worst Pick: {worst}</h5>
                        <h5 style={styles.awardRow}>MVP: {mvp}</h5>
                    </div>
                ) : (
                    <div style={styles.awardsD}>
                        <h5>Best Pick: {best}</h5>
                        <h5>Worst Pick: {worst}</h5>
                        <h5>MVP: {mvp}</h5>
                    </div>
                )

            }
            <p style={styles.blurb}>{blurb}</p>
            <h6>Upcoming: {upcoming}</h6>
        </div>
    )
}

const Week1 = ({ teams, isMobile }) => {
    const data = merge(teams, rankings)
    data.sort((a, b) => b.position - a.position)
    return (
        <div style={{...styles.page, width: isMobile ? 380 : 700}}>
            <h3> WEEK 1 POWER RANKINGS </h3>
            <div style={styles.article}>
                <p>
                    We're so back. <br/>
                    <br/>
                    There was a lot of off-season movement. A lot of new uniforms for good players. Because of that uncertainty, its really
                    hard to separate teams out this year. We have a clear cut #10, then a okay-but-could-be-better group, a good-not-great group,
                    and then MAYBE two elite looking teams. But after year 1 of power rankings felt clear, and year 2 felt difficult, this year
                    feels the most like a complete crapshoot. It's basically who is rolling out someone starting-worthy at every spot and who is not.<br/>
                    <br/>
                    <i>A note that the records do not indicate a simulated season - it is impossible for our league results to match these projections. 
                        We know. This more strongly suggests the tiers we placed teams in.</i> <br/>
                    <br/>
                    <b>MVP - Justin Jefferson:</b> Even with Jordan Addison, JJettas usage should go up after the Vikings
                    let Dalvin walk. We nailed him being MIP last year - and he's still going to ascend. <br/>
                    <br/>
                    <b>ROY - Bijan Robinson:</b> Let's not overthink this. Arthur Smith needs to tell Desmond Ridder
                    to either try to pass or just give the ball to Bijan. It's gonna be Bijan. <br/>
                    <br/>
                    <b>MIP - Garrett Wilson:</b> Complete homer pick? No. GW gets a HOF QB who can't stop comparing him to
                     Davante Adams. Reigning OROY would be in OPOY contention if not for Justin Jefferson (who might make an MVP case?).
                     What do you expect us to say?
                </p>
                <img src={Week1Photo} alt="" style={{width: isMobile ? 350 : 700, alignSelf: "center"}}/>
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
    },
    awardsM: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: 250,
        marginLeft: 5,
        marginTop: 5
    },
    awardRow: {
        margin: 3
    },
    roster: {
        fontSize: 10,
    }
}

export default Week1;