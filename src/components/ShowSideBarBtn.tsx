import IconShow from "../assets/icon-show-sidebar.svg?react"

interface ShowSideBarBtnProps {
    toggleSidebar: () => void
}

export const ShowSideBarBtn = ({ toggleSidebar }: ShowSideBarBtnProps) => {
    return (
        <button 
          onClick={toggleSidebar}
          className="fixed bottom-8 left-0 flex items-center gap-3 pl-6 pr-5 py-5 bg-[#635FC7] rounded-r-full hover:bg-[#A8A4FF] transition-colors z-50"
        >
          <IconShow className="w-[18px] h-[16px] text-white"/>
        </button>
    )
}