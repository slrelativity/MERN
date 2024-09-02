import { useState } from 'react'
import Card from './component/Card'
import './App.css'

function App() {


  return (
    <>
      <div>
        <h1>Card Example</h1>
        <Card>
          <h2>Title</h2>
          <p>This is the content of the card.</p>
        </Card>
        <Card>
        <h2>Another Title</h2>
        <p>More content for another card.</p>
        </Card>
      </div>
    
    </>
  )
}

export default App
