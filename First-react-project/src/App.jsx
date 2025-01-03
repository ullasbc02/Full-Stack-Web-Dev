import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Greeter } from './Greeter'
import { Slot } from './Slot'
import {Clicker} from './Clicker'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Greeter name="Ullas"/>
      <Slot slots={['🍊', '🍋', '🍒']} />
      <Slot slots={['d', 'd', 'd']} /> */}
      <Clicker />
    </>
  )
}

export default App
