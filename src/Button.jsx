import React from 'react'

const Button = ({ width, label, onPress }) => {
    return (
        <div style={{...styles.container, width }} onClick={onPress}>
            {label}
        </div>
    )
}

const styles = {
    container: {
        height: 50,
        backgroundColor: "#c2a00a",
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        "&:hover": {
            background: "#9e830b"
        },
        fontWeight: 600,
        margin: 25
    }
}

export default Button;