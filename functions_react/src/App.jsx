import { useState } from 'react'
import './App.css'

function App() {

  const [count,setCount] = useState(0)

  const increaseCount = () => {
    setCount(count  + 1)
  }
  
  const decreaseCount = () => {
    setCount(count - 1)
  }

  const resetCount = () => {
    setCount(0)
  }


  return(
    <div className='container'>
      <h1 className='counter'>{count}</h1>
      <button onClick={increaseCount} className='increase'>Increase</button>
      <button onClick={decreaseCount} className='decrease'>Decrease</button> <br />
      <button onClick={resetCount} className='increase'>Reset</button>
    </div>
  )
}

export default App
