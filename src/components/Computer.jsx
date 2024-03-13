
import { useState } from "react";

const Computer = (props) => {
    let computerScore = props.computerScore
    return (
        <>
            <h2>Computer score: </h2>
            <p>{computerScore}</p>
        </>
    )
}

export default Computer; 