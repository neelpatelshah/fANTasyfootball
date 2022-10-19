import React from 'react'
import Button from '../Button'

const weeks = [
    { label: "Week 1", page: "WEEK_1" },
    { label: "Week 2", page: "WEEK_2"},
    { label: "Week 3", page: "WEEK_3"},
    { label: "Week 4", page: "WEEK_4"},
    { label: "Week 5", page: "WEEK_5"},
    { label: "Week 6", page: "WEEK_6"},
    { label: "Week 7", page: "WEEK_7"},
]

const All = ({ setPage }) => {
    return (
        <div style={styles.page}>
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