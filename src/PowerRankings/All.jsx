import React from 'react'
import Button from '../Button'

const weeks = [
    { label: "Week 1", page: "WEEK_1" },
    { label: "Week 2", page: "WEEK_2"}
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