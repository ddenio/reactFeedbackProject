import { useState } from 'react'
import './App.css'
import Display from './Display'
import Button from './Button'
import DisplaySmall from './DisplaySmall'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // const handleGoodClick = () => {
  //   const updatedGood = good + 1
  //   setGood(updatedGood)
  // }

  // const handleNeutralClick = () => {
  //   const updatedNeutral = neutral + 1
  //   setNeutral(updatedNeutral)
  // }

  // const handleBadClick = () => {
  //   const updatedBad = bad + 1
  //   setBad(updatedBad)
  // }


  return (
    <>
      <Display text="give feedback" />
      <div>
        <Button onClick={() => setGood(good+1)} text="good" />
        <Button onClick={() => setNeutral(neutral+1)} text="neutral" />
        <Button onClick={() => setBad(bad+1)} text="bad" />
        {/* <Button onClick={handleGoodClick} text="good" />
        <Button onClick={handleNeutralClick} text="neutral" />
        <Button onClick={handleBadClick} text="bad" /> */}
      </div>
      <Display text="statistics" />
      <DisplaySmall text="good" num={good} />
      <DisplaySmall text="neutral" num={neutral} />
      <DisplaySmall text="bad" num={bad} />
    </>
  )
}

export default App
