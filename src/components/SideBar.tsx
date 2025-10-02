import logo from '../assets/logo-dark.svg'
import IconBoard from '../assets/icon-board.svg?react'
import IconLight from '../assets/icon-light-theme.svg?react'
import IconDark from '../assets/icon-dark-theme.svg?react'
import IconHide from '../assets/icon-hide-sidebar.svg?react'
import Switch from "react-switch";
import type { Board } from '../types'

interface SideBarProps {
  data: Board[]
  darkMode: boolean
  setDarkMode: (value: boolean) => void
  toggleSidebar: () => void
  hideSidebar: boolean
}

export const SideBar = ({data, darkMode, setDarkMode, toggleSidebar, hideSidebar}: SideBarProps) => {
  const numOfBoards = data.length
  const boardNames = data.map((board) => board.name)
  

  return (
        <div className="row-span-2 flex flex-col p-5 text-2xl">
          <div className="flex items-center mb-10">
            <img 
              className='w-[152.53px] h-[29.18px]'
              src={logo} 
              alt="Logo" 
            />
          </div>
          <div className='flex flex-col justify-between h-full'>
            <div>
              <p className='text-sm font-normal text-[#828FA3] mb-2'>ALL BOARDS ({numOfBoards})</p>
              {boardNames.map((name, i) => (
                    <div key={i} className='flex items-center gap-2 py-2'>
                        <IconBoard 
                            className='w-[16px] h-[16px]'
                        />
                        <p className='text-[15px] hover:cursor-pointer'>{name}</p>
                    </div>
                ))}
                <button className='flex items-center gap-2 py-2 text-[#635FC7] hover:cursor-pointer'>
                    <IconBoard 
                        className='w-[16px] h-[16px] text'
                    />
                    <p className='text-[15px] hover:cursor-pointer'>+ Create New Board</p>
                </button>
            </div>
            <div>
                <div className='flex items-center gap-10 w-[251px] h-[48px] py-2 bg-[#F4F7FD] align-center justify-center rounded-[2px]'>
                  <IconLight 
                    className='w-[18.33px] h-[18.33px]'
                  />
                  <Switch 
                    checked={darkMode} 
                    onColor="#635FC7" 
                    offColor="#635FC7" 
                    onHandleColor="#fff" 
                    offHandleColor="#fff"
                    checkedIcon={null}
                    uncheckedIcon={null}
                    onChange={(checked) => setDarkMode(checked)}
                    width={40}
                    height={20}
                  />
                  <IconDark 
                    className='w-[18.33px] h-[18.33px]'
                  />
                </div>
                <div>
                  <button className='flex items-center align-center justify-center gap-5 pt-6 pb-2 text-[#828FA3] hover:cursor-pointer hover:text-[#635FC7]'
                    onClick={toggleSidebar}
                  >
                    <IconHide 
                        className='w-[18px] h-[16px] text'
                    />
                    <p className='text-sm text-[#828FA3] font-normal'>Hide Sidebar</p>
                  </button>
                </div>
            </div>
          </div>     
        </div>
    )
}