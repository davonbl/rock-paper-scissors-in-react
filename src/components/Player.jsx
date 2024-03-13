
import { useState } from "react";


const Player = (props) => {
    const playerScore = props.playerScore;
    const setPlayerScore = props.setPlayerScore
    const playerChoice = props.playerChoice;
    const setPlayerChoice = props.setPlayerChoice;
    const computerChoice = props.computerChoice; 
    const setComputerChoice = props.setComputerChoice; 
    const setComputerScore = props.setComputerScore; 

    const computerOptions = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    const computerDecides = computerOptions[randomNumber]

    const getPosition = (e) => {
        // console.log(e.target.value)
        setPlayerChoice(e.target.value)

    }
    const getKeyPosition= (e) => {
        // setComputerChoice(computerDecides)
        if(e.key === 'Enter'){
            if(
                (playerChoice.toLowerCase() === 'rock' && computerDecides === 'scissors') 
                || (playerChoice.toLowerCase() === 'paper' && computerDecides === 'rock') 
                || (playerChoice.toLowerCase() === 'scissors' && computerDecides === 'paper') 
                ){
                    setPlayerScore(initalValue => initalValue + 1)
                    
            }else if(
                (playerChoice.toLowerCase() === 'scissors' && computerDecides === 'rock') 
                || (playerChoice.toLowerCase() === 'rock' && computerDecides === 'paper') 
                || (playerChoice.toLowerCase() === 'paper' && computerDecides === 'scissors') 
                ){
                    setComputerScore(initalValue => initalValue + 1)
            }else{
                console.log('it is a tied')
            }
            console.log('cpu decides this: ', computerDecides)
            // console.log(playerScore)
            // if(playerScore === 6){
            //  alert('you win')
            //  setPlayerScore(0)
            // }
            setPlayerChoice('')
        }
    }

    console.log(playerScore)
    const clickBtn = () => {    
        console.log(playerChoice)
        if(playerChoice.toLowerCase() === 'rock' || 
           playerChoice.toLowerCase() === 'paper' || 
           playerChoice.toLowerCase() === 'scissors'){
            setPlayerScore(initalValue => initalValue + 1)
           }
           if(playerScore === 6){
            alert('you win')
            setPlayerScore(0)
           }
           setPlayerChoice('')
        // console.log('clicked')
    }

    // will cause an error
    // if(playerScore === 6){
    //     alert('you win')
    //     setPlayerScore(0)
    //    }
    
    return (
        <>
            <input
                type="text"
                placeholder="type your position"
                onChange={getPosition}
                onKeyDown={getKeyPosition}
                value={playerChoice}
            />
            <button onClick={clickBtn}>Click Here</button>
            <h2>Player Score:</h2>
            <p>{playerScore}</p>
        </>
    )
}

export default Player; 