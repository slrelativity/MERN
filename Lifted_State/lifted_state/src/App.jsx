import { useState } from 'react'
import './App.css'
import ChildOne from '../components/ChildOne'
import ChildTwo from '../components/ChildTwo'


function App() {
  const [liftedState, setLiftedState] = useState ([])

  const stateUpdater = (newValue) =>{
    setLiftedState((prevLiftedState) => [...prevLiftedState, newValue])
  }

  return (
    <>
    {/*We pass in our function that will take in a string and update our state in our App component */}
    <ChildOne stateUpdater={stateUpdater}/>
    {/* We pass our state getter from our App component down to ChildTwo through props */}
               {/* for displaying its value */}
    <ChildTwo liftedState={liftedState}/>
    </>
  )
}

export default App
