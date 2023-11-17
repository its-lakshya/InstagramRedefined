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
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import PostSection from "../components/PostSection";

const Home = () => {
    const authStatus = useSelector((store)=> store.signInDetails.isAuthenticated);
    const [isOpen, setIsOpen] = useState(false)
    const closePostSection = () => {
        return (setIsOpen(false))
    } 

    if(!authStatus){
        return <Navigate to="/" replace/>;
    }
    return (
        <div className='w-full h-auto flex'>
            <div className='w-[22rem] max-2xl:w-64 max-xl:w-20 max-sm:hidden h-screen fixed border-r flex flex-col items-center justify-between border-gray-300'>
                <div className='w-5/6 h-auto flex flex-col items-start max-xl:items-center justify-center gap-y-8 py-8 max-xl:mt-4'>
                    <img src={textLogo} alt='text logo' className="w-30 h-[3.5rem] max-xl:hidden"/>
                    <FaInstagram className='xl:hidden max-xl:visible text-2xl mb-6'/>
                    <button className='flex items-center justify-start gap-x-4 '><FiHome className='text-2xl '/><span className='max-xl:hidden'>Home</span></button>
                    <button className='flex items-center justify-start gap-x-4 '><FiSearch className='text-2xl '/><span className='max-xl:hidden'>Search</span></button>
                    <button className='flex items-center justify-start gap-x-4 '><FaRegCompass className='text-2xl '/><span className='max-xl:hidden'>Explore</span></button>
                    <button className='flex items-center justify-start gap-x-4 '><LuMonitorPlay className='text-2xl '/><span className='max-xl:hidden'>Reals</span></button>
                    <button className='flex items-center justify-start gap-x-4 '><AiOutlineMessage className='text-2xl '/><span className='max-xl:hidden'>Messages</span></button>
                    <button className='flex items-center justify-start gap-x-4 '><FiHeart className='text-2xl '/><span className='max-xl:hidden'>Notifications</span></button>
                    <button className='flex items-center justify-start gap-x-4 ' onClick={() => {setIsOpen(true)}}><GrAddCircle className='text-2xl ' /><span className='max-xl:hidden'>Create</span></button>
                    <button className='flex items-center justify-start gap-x-4 '><img src={profile} alt='profile img' className='w-6 h-6 rounded-full'/><span className='max-xl:hidden'>Profile</span></button>
                </div>
                <div className='w-5/6 h-36 flex flex-col items-start max-xl:items-center justify-center gap-y-8'>
                    <button className='flex items-center justify-start gap-x-4 '><FaThreads className='text-2xl '/><span className='max-xl:hidden'>Threads</span></button>
                    <button className='flex items-center justify-start gap-x-4 '><GrMenu className='text-2xl '/><span className='max-xl:hidden'>More</span></button>
                </div>
            </div>
            {(isOpen) ? <PostSection closePostSection={closePostSection} /> : null}
            <Outlet/>
        </div>
    )
}

export default Home;