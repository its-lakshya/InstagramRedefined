import textLogo from "../assets/textLogo.png"
import { FiHome } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FaRegCompass } from "react-icons/fa";
import { LuMonitorPlay } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { GrAddCircle } from "react-icons/gr";
import { FaThreads } from "react-icons/fa6";
import { GrMenu } from "react-icons/gr";
import profile from "../assets/profile.jpeg"
import { FaInstagram } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className='w-full h-auto flex'>
            <div className='w-[22rem] max-2xl:w-64 max-xl:w-20 max-sm:hidden h-screen fixed border-r flex flex-col items-center justify-between border-gray-300'>
                <div className='w-5/6 h-auto flex flex-col items-start max-xl:items-center justify-center gap-y-8 py-8 max-xl:mt-4'>
                    <img src={textLogo} alt='text logo' className="w-30 h-[3.5rem] max-xl:hidden"/>
                    <FaInstagram className='xl:hidden max-xl:visible text-2xl mb-6'/>
                    <div className='flex items-center justify-start gap-x-4 '><FiHome className='text-2xl '/><span className='max-xl:hidden'>Home</span></div>
                    <div className='flex items-center justify-start gap-x-4 '><FiSearch className='text-2xl '/><span className='max-xl:hidden'>Search</span></div>
                    <div className='flex items-center justify-start gap-x-4 '><FaRegCompass className='text-2xl '/><span className='max-xl:hidden'>Explore</span></div>
                    <div className='flex items-center justify-start gap-x-4 '><LuMonitorPlay className='text-2xl '/><span className='max-xl:hidden'>Reals</span></div>
                    <div className='flex items-center justify-start gap-x-4 '><AiOutlineMessage className='text-2xl '/><span className='max-xl:hidden'>Messages</span></div>
                    <div className='flex items-center justify-start gap-x-4 '><FiHeart className='text-2xl '/><span className='max-xl:hidden'>Notifications</span></div>
                    <div className='flex items-center justify-start gap-x-4 '><GrAddCircle className='text-2xl '/><span className='max-xl:hidden'>Create</span></div>
                    <div className='flex items-center justify-start gap-x-4 '><img src={profile} alt='profile img' className='w-6 h-6 rounded-full'/><span className='max-xl:hidden'>Profile</span></div>
                </div>
                <div className='w-5/6 h-36 flex flex-col items-start max-xl:items-center justify-center gap-y-8'>
                    <div className='flex items-center justify-start gap-x-4 '><FaThreads className='text-2xl '/><span className='max-xl:hidden'>Threads</span></div>
                    <div className='flex items-center justify-start gap-x-4 '><GrMenu className='text-2xl '/><span className='max-xl:hidden'>More</span></div>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}

export default Home;