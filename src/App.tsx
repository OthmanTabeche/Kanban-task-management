import './index.css'
import { SideBar } from './components/SideBar'
import { NavBar } from './components/NavBar'
import { Kanban } from './components/Kanban'
import { useState } from 'react'
import { boards } from './data.json'
import type { Board } from './types'

function App() {
  const [data] = useState<Board[]>(boards) //el setData lo usare para hacer el feching de la API
  const [darkMode, setDarkMode] = useState(false)
  const [hideSidebar, setHideSidebar] = useState(true)

  const toggleSidebar = () => {
    setHideSidebar(!hideSidebar)
  }
  
  return (
      <div className="grid grid-cols-[300px_1fr] grid-rows-[97px_1fr] h-screen w-full m-0">
        {hideSidebar && <SideBar 
          data={data} 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          toggleSidebar={toggleSidebar}
        />}
        <NavBar />
        <Kanban />
      </div>
  )
}

export default App