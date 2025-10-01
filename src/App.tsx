import './index.css'
import { SideBar } from './components/SideBar'
import { NavBar } from './components/NavBar'
import { Board } from './components/Board'


function App() {
  
  return (
      <div className="grid grid-cols-[300px_1fr] grid-rows-[97px_1fr] h-screen w-full m-0">
        <SideBar />
        <NavBar />
        <Board />
      </div>
  )
}

export default App