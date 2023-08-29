import React, { useCallback, useEffect } from 'react'
import Button from '../Button'
import { fetchLeagueInfo, merge } from '../util'

const weeks = [
    { label: "Week 1", page: "WEEK_1_2022" },
    { label: "Week 2", page: "WEEK_2_2022"},
    { label: "Week 3", page: "WEEK_3_2022"},
    { label: "Week 4", page: "WEEK_4_2022"},
    { label: "Week 5", page: "WEEK_5_2022"},
    { label: "Week 6", page: "WEEK_6_2022"},
    { label: "Week 7", page: "WEEK_7_2022"},
    { label: "Week 8", page: "WEEK_8_2022"},
]

const All = ({ setPage, setTeams }) => {

    const setter = useCallback((newData, standings) => {
        const data = merge(newData, standings)
        console.log(data.sort((a, b) => b.wins - a.wins))
        setTeams(data)
    }, [setTeams])

    useEffect(() => {
        fetchLeagueInfo("2022", setter)
    }, [setter])

    return (
        <div style={styles.page}>
            <h5>Champ: Daeviontae's Inferno</h5>
            <h3> ALL POWER RANKINGS </h3>
            {weeks.map((week) => <Button width={300} label={week.label} onPress={() => setPage(week.page)}/>)}
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
}

export default All;