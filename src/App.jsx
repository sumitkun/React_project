import Nav from './Components/Nav'
import Text from './Components/Text'
import About from './Components/About'
import Alert from './Components/Alert'
import './App.css'
import { useState } from 'react'

function App() {
  const [mode,setMode] = useState('light')
  const togglemode = () => {
 if(mode === 'light'){
  setMode('dark')
  document.body.style.backgroundColor = '#042743'
  document.body.style.color = 'white'

 }
 else
 {
  setMode('light')
  document.body.style.backgroundColor = 'white'
  document.body.style.color = 'black'

 }
  }
  return (
    <>
     <Nav Navbar="Utilss" mode ={mode} togglemode = {togglemode}/>
     <Alert Alert = "Successfully compiled"/>
     <div className="container my-3">
   <Text texts = "Enter the text belows" mode = {mode}/>
   </div>
   <div className="container my-3">
     <About mode = {mode}/>
     </div>
    </>
  )
}

export default App