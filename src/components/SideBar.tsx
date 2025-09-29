import { useState } from 'react';

import Switch from '@mui/material/Switch';
import { boards } from '../../data.json'

import logo from '../assets/logo-dark.svg'
import iconBorder from '../assets/icon-board.svg'
import iconLight from '../assets/icon-light-theme.svg'
import iconDark from '../assets/icon-dark-theme.svg'
import iconHide from '../assets/icon-hide-sidebar.svg'
import iconShow from '../assets/icon-show-sidebar.svg'
import { Outlet } from 'react-router';



const num = boards.length

const boardNames = boards.map((board) => board.name)
const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const SideBar = () => {

    const [sideBar, setSideBar] = useState(true)

    const hiddeShowSideBar = () => {
        setSideBar(!sideBar)
    }

    return (
        <div className="relative flex flex-col justify-center bg-white max-w-[275px]">
            <img
                className="w-[152.53px] h-[25.22px] m-7"
                src={logo} 
                alt="logo" 
            />
            {
                sideBar &&
                <div className='ml-7'>
                    <div className='flex h-[85vh] flex-col justify-between'>
                        <div>
                            <p className='text-[12px] text-gray-500 pt-3 font-bold mb-3'>ALL BOARDS {num}</p>
                            {boardNames.map((name, i) => (
                                <div key={i} className='flex items-center gap-2 py-2'>
                                    <img 
                                        className='w-[16px] h-[16px]'
                                        src={iconBorder} 
                                        alt="icon of the sidebar" 
                                    />
                                    <p className='text-[15px] hover:cursor-pointer'>{name}</p>
                                </div>
                            ))}
                            <button className='text-[15px] flex items-center gap-2 py-2 text-[#635FC7] hover:cursor-pointer'>+ Create New Board</button>
                        </div>
                        <div className='flex gap-4 justify-center my-3 w-[215px] py-1 bg-[#F4F7FD] rounded-sm'>
                            <img 
                                className='w-[18.33px] h-[18.33px] my-2'
                                src={iconLight} 
                                alt="icon light theme" 
                            />
                            <Switch {...label} defaultChecked />
                            <img 
                                className='w-[18.33px] h-[18.33px] my-2'
                                src={iconDark} 
                                alt="icon dark theme" 
                            />
                        </div>
                    </div>
                    <button 
                        className='flex gap-3 items-center hover:text-[#635FC7] hover:bg-[#A8A4FF] pr-26 py-1 pl-2 m-0 rounded-md'
                        onClick={hiddeShowSideBar}
                    >
                        <img 
                            className='w-[18px] h-[16px] my-2'
                            src={iconHide}
                            alt="hide sidebar icon" 
                        />
                        <p className='text-[13px] text-[#828FA3]'>Hide Sidebar</p>
                    </button>
                </div>
            }
            {
                !sideBar &&
                <div className='flex h-[85vh] w-[55px] flex-col justify-end relative'>
                    <button
                        className='bg-[#635FC7] pl-4 py-4 pr-2 rounded-r-2xl'
                        onClick={hiddeShowSideBar}
                    >
                        <img 
                            className='w-[16px] h-[11px]'
                            src={iconShow} 
                            alt="show sidebar icon" 
                        />
                    </button>  
                </div>
            }
            {sideBar && (
                <div className="absolute right-0 top-0 bottom-0 w-px bg-[#E4EBFA]" />
            )}
        </div>
    )
}