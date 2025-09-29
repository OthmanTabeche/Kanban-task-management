import './index.css'
import { NavBar } from './components/NavBar'
import { SideBar } from './components/SideBar'
import { Board } from './components/Board';
import { Routes, Route } from "react-router";


function App() {
  
  return (
      <div className='flex'>
          <SideBar />
          <NavBar />
          <Board />
      </div>
  )
}

export default App
