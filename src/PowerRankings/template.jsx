import { merge } from '../util'
import React from 'react'

const rankings = [
    {
        //Shiv
        owner: "739628392529408000",
        position: 10,
        lastPosition: "",
        up: "",
        down: "",
        game: "",
        upcoming: "nmarwaha (0-0)",
        blurb: `Likely a hot take, we know. The top end of this team just makes us a little uneasy. CMC has played 13 complete games in his last
            33 possible appearances. Aaron Jones is probably losing his job to AJ Dillon at some point. Etienne missed his rookie year. Sanders
            didn't score a TD last year. That's a fair list of issues in her top 4 RBs. CeeDee is a stud, but DJ Moore is dealing with maybe
            the most dysfunctional team in the NFL and counting on Bateman for #2 is pretty tough. If Olave takes off and JRob bounces back in
            full, this team could feel a lot better, but again. More question marks.`
    },
    {
        //Danny
        owner:"739529793342726144",
        position: 9,
        lastPosition: "",
        up: "",
        down: "",
        game: "",
        upcoming: "More Moore(0-0)",
        blurb: `For the way the board fell, Danny did pretty well. Still, lets make him miserable. Dalvin is not a lock to go 13 (or 17) weeks.
            Zeke is slow and the Cowboys OL is bad. Josh Jacobs seems to just exist in limbo, but he's good. But he has Tae Adams on the same team.
            Tae Johnson has bricks for hands. Sun Gawd rules, PooPoo Shit-Poopster, and Te Smith is a stud. Kittle has injuries baked into his
            projections at this point. Devonte Smith is the best bet at a serious riser here, and the depth ain't looking great. 
            `
    },
    {
        //Allan
        owner: "740648111118147584",
        position: 8,
        lastPosition: "",
        up: "",
        down: "",
        game: "",
        upcoming: "The Smelly Saarangs (0-0)",
        blurb: `A team of winners. Also a team that depends very heavily on Saquon, Waller, Williams, MT, and Nuk playing any football. Lotta 
            games missed in that group, some on comical levels. Justin Jefferson and Javonte Williams are gonna be studs and anchor the team, 
            but the rest might be really fluid week to week. A lot to like if everything goes well, but that's one big fat if (knees, stuff, 
            inconsistent, bitch-pussy, and Fernando Tatis Jr, in order from earlier). \n \n Oh also, Tom Brady is 46. 
        `
    },
    {
        //Nicole
        owner: "739660607032352768",
        position: 7,
        lastPosition: "",
        up: "",
        down: "",
        game: "",
        upcoming: "βαβηκαταΣΥΣΥ (0-0)",
        blurb: `Taking Josh Allen where she did made the rest of the draft strategy pretty tough, as the roster overall is lacking serious
            top end talent. That said, a Josh Allen-Stefon Diggs stack is probably the best one in any fantasy league you can find right now.
            That is 50 points every week, without exaggeration. Going down the line, the top 2 RB situation is tricky, with Cam Akers 
            being on a finicky Rams team and JK Dobbins needing to rebound from surgery in a big way. Sutton will be a stud this year, we
            recommend Brett Kollman's video on Russ's playstyle being tailor made for for Sutton. Freiermuth is eh, but depth is legitamately 
            good here. 
        `
    },
    {
        //Nandan
        owner: "741390106056941568",
        position: 6,
        lastPosition: "",
        up: "",
        down: "",
        game: "",
        upcoming: "CeeDeez nutz in yo mouth (0-0)",
        blurb: `Nandan has far and away assembled the All-Name Team, the players are pretty good too. Swift and Mixon is as good as any 1-2 in
            this league, Pitts figures to be a nightmare, and Pee Piggins. That said, the reason he doesn't land higher is he has the #2 in Cincy
            as his best receiver, and we have no idea how Geno Smith will enable DK's production. RB depth is not amazing, but Skyy and Julio 
            are fantastic sleeper WRs. Ignoring that they were autodrafted. 
        `
    },
    {
        //Mike
        owner: "870659100365737984",
        position: 5,
        lastPosition: "",
        up: "",
        down: "",
        game: "",
        upcoming: "Budweiser Clyde-sdales (0-0)",
        blurb: `An absolute redemption draft for the goddess of victory or whatever. Our projected league MVP and AK are a great 1-2, Evans rules,
            Schultz is set for a good year (although was probably taken too early), and ARob is going to feast in his first NFL year with a good QB.
            The depth is really strong too. As for why only 5, its a competitive year, and Robinson at WR2 instead of flex really makes us feel
            shaky about the week to week production here, especially when the flex options are decent, but not confidently good. Still, a very, very
            competitive and nearly complete roster for the 2nd year vet. 
        `
    },
    {
        //Logan
        owner: "739556159849140224",
        position: 4,
        lastPosition: "",
        up: "",
        down: "",
        game: "",
        upcoming: "Cook-ing Spring Rolls (0-0)",
        blurb: `This is a fascinating team. Henry should be good, but his foot needs to work. Kelce should be good, but he's now the only
            real option in KC and is 32. Tyreek should be good, but Tua. AJ Brown should be good, but Eagles. Breece should be good, but rookie (
            and Jets if you wanna go that route). Gibson's team hates him and he'd be useless if someone didn't literally get shot, and Hollywood
            has a QB that plays more Valorant than football. Extremely high ceiling, but also huge, huge meh potential. \n \n For what its worth, 
            this team went from 6th to 4th while we was writing these rankings because we kept changing our minds. 
        `
    },
    {
        //Neel
        owner: "722992153168531456",
        position: 3,
        lastPosition: "",
        up: "",
        down: "",
        game: "",
        upcoming: "🙏🏻☀️LetDakCook&FeedZeke (0-0)",
        blurb: `This is a touch optimistic, but the defending champ gets a little boost from his reigning title. A Lamar-Andrews stack has the 
            ability to outright carry this team some weeks, and Ekeler and Mitchell are ready to blow up in their offenses. Deebo likely won't 
            replicate 2021, but will see plenty of touches, Pittman was a stud last year and arguably will have a better QB situation, AJ Dillon
            is taking a man's job, and Elijah Moore is Him. That's not to mention this team employing a soon-to-be rookie stud in Pierce, a thief,
            and the only hope Daniel Jones has at sticking in the NFL. We really, really don't like Mitchell and Deebo on the same team though, 
            and think someone should facilitate a trade, something like Deebo for Justin Jefferson, Najee Harris, and Nick Chubb.
        `
    },
    {
        //Saarang
        owner: "739672661684346880",
        position: 2,
        lastPosition: "",
        up: "",
        down: "",
        game: "",
        upcoming: "Tyler Stock (0-0)",
        blurb: `This was an extremely difficult decision. This team could be #1. But for reasons we'll cover later, we decided on #2. Still, a
            huge jump from last year's preseason #10 for Saarang. This is the best 1-2 and 1-2-3 WR group in the league by a long, LONG way. It
            actually should be malpractice for the other 9 teams in the league that Kupp, Ja'Marr, and Terry on one team was even possible. 
            Projections love this team, for good reason, because there's a lot of points here. That said, he's mortal. Kung-Fu Lenny is not likely
            to repeat last years scoring extravaganza, and James Conner wasn't exactly good last year, he just got an absurd level of redzone touches
            and was economical. Is he a great RB2 option? Yes, but we don't like him paired with Fournette. \n\n That said, we wouldn't want to be 
            facing this team. Ever. 
        `
    },
    {
        //Ram
        owner: "739540158155743232",
        position: 1,
        lastPosition: "",
        up: "",
        down: "",
        game: "",
        upcoming: "νίκη (0-0)",
        blurb: `What is ramp? Apparently, its a fantastic draft. The #1 overall pick lands at #1 overall on our power rankings, with the most complete
            team due to the best 1-2-3 WR 1-2-3 WR combo in the league, no question. This is the first area that Ram edges out Saarang: Keenan, Waddle,
            Theilen is great, but not as amazing as Kupp, Chase, McLaurin, but JT, Chubb, and Montgomery blows away Fournette, Conner, and CEH. Goedert
            is better than Knox, and we'll take the guy who just went to the Super Bowl over the guy who had a studying clause in his contract. Not to
            mention, Hunt and Lockett are seriously good #4 options at RB and WR. Top to botton, no complaints, no critiques. We're not terrified of the
            prospect of facing this team, since the top-end damage is not near Saarang's, but this is the deepest, most consistent team, without glaring
            injury concerns. #1, by an inch.
        `
    },
]

const Ranking = ({ team, wins, losses, ties, streak, position, upcoming, blurb, owner, user }) => {
    return (
        <div style={styles.ranking}>
            <div style={styles.rankingHeader}>
                <h2>#{position}: {team || user}</h2>
                <h2>{wins}-{losses}</h2>
            </div>
            <p style={styles.blurb}>{blurb}</p>
            <h6>Upcoming: {upcoming}</h6>
        </div>
    )
}

const Week1 = ({ teams }) => {
    const data = merge(teams, rankings)
    data.sort((a, b) => b.position - a.position)
    return (
        <div style={styles.page}>
            <h3> WEEK 1 POWER RANKINGS </h3>
            <div style={styles.article}>
                <p>
                    And we're back! <br/>
                    <br/>
                    After an eventful 2021 season with Our Holy Commish suspiciously winning the league, we return for a 2022 season sure to be
                    filled with drama, choking, hot streaks, massages, plastic surgery, and trash talk. <br/>
                    <br/>
                    Draft day was a resounding success, creating a slate of teams that, unlike last year, feel like they all can take off at a
                    moments notice or crash and burn spectacularly. Each team has at least 1 soft spot, a distinct stregnth that will stand 
                    against everyone else, and a not terrible bench. Even Mike avoided Blake Jarwin this year!<br/>
                    <br/>
                    Basically, we're trying to rinse ourselves of blame if we're horrifically wrong in power rankings compared to last years. 
                    There are genuinely no bad teams, and no one overpowered team.<br/>
                    <br/>
                    Before we jump into power rankings, though, let's take a crack at who we think will highlight this year, after an offseason
                    of endless trades, retirements, free agent movement, suspensions, and new coaching hires. <br/>
                    <br/>
                    <b>MVP: Najee Harris</b>: Between JT and Najee, Najee is on a team with a worse offense, worse QB, and worse RB2. A recipe
                    for success for the year 2 back. <br/>
                    <br/>
                    <b>ROY: Breece Hall</b>: Zach Wilson is coming off a knee injury and will probably need some time to get going. 
                    A Shanahan/Lafluer system mixed with a revamped OL makes this the safest ROY bet. <br/>
                    <br/>
                    <b>MIP: Justin Jefferson</b> JJ was no slouch last year, as he was the #4 receiver in fantasy. But we see him taking a leap
                    in this Kevin O'Connell offense (think 2021 Cooper Kupp but not white) to be #1 - and it won't be close either. 
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
        borderBottom: "1px solid white",
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
    }
}

export default Week1;