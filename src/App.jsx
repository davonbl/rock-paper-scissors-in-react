import { useState, useEffect } from 'react'
import Computer from './components/Computer.jsx'
import Player from './components/Player.jsx'
import './App.css'

function App() {
  // const [gameOver, setGameOver] = useState(false)
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)

  const [playerChoice, setPlayerChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')

  useEffect(() => {
    if(playerScore === 2){
      console.log('final score: ', playerScore)
      console.log('final score: ', computerScore)
      alert('you win')
      setPlayerScore(0)
      setComputerScore(0)
  
     }else if(computerScore === 2){
      console.log('final score: ', playerScore)
      console.log('final score: ', computerScore)
      setPlayerScore(0)
      setComputerScore(0)
      alert('you lose')
     }
  
  },[playerScore,computerScore])


  return (
    <>
      <Player
        playerScore = {playerScore}
        setPlayerScore = {setPlayerScore}
        playerChoice = {playerChoice}
        setPlayerChoice = {setPlayerChoice}
        computerChoice = {computerChoice}
        setComputerChoice = {setComputerChoice}
        setComputerScore = {setComputerScore}
      />
      <Computer 
        computerScore = {computerScore}
      />
    </>
  )
}

export default App
