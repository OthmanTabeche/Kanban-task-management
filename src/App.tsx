import './index.css'
import { NavBar } from './components/NavBar'
import { SideBar } from './components/SideBar'
import { Board } from './components/Board';
import { Routes, Route } from "react-router";


function App() {
  
  return (
      <div className='flex w-screen h-screen'>
        <div className='flex flex-col w-full h-screen'>
          <NavBar />
          <Board />
        </div>
      </div>
  )
}

export default App