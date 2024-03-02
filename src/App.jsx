import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Team from './components/Team'
import Contact from './components/Contact'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <Team></Team>
      <Contact></Contact>
    </div>
  )
}

export default App
