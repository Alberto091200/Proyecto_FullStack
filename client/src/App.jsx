import { useState } from 'react'
import AppBar from './Components/AppBar/AppBar'
import Body from './Components/Body/Body'

function App() {

  document.documentElement.style.backgroundColor = "#4618AC"


  return (
    <div>
      <AppBar/>
      <Body/>
    </div> 
  )
}

export default App
