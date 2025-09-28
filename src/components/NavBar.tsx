export const NavBar = ({ logo }: { logo: string }) => {
    return (
        <div className="flex items-center bg-white p-7">
            <img 
                className="w-[152.53px] h-[25.22px]"
                src={logo} 
                alt="logo of the web page" 
            />
            <h1 className="ml-[150px] text-[24px] font-bold">Platform Launch</h1>
        </div>
    )
}