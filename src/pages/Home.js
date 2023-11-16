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
import story4 from "../assets/story4.jpeg"
import MainContainer from "../components/MainContainer";

const Home = () => {
    return (
        <div className='w-full h-auto flex relative'>
            <div className=' w-[22rem] max-2xl:w-64 h-screen  border-r flex flex-col items-center justify-between border-gray-300'>
                <div className='w-5/6 h-auto flex flex-col items-start justify-center gap-y-8 py-8'>
                    <img src={textLogo} alt='text logo' className="w-30 h-[3.5rem]"/>
                    <div className='flex items-center justify-start gap-x-4 '><FiHome className='text-2xl '/>Home</div>
                    <div className='flex items-center justify-start gap-x-4 '><FiSearch className='text-2xl '/>Search</div>
                    <div className='flex items-center justify-start gap-x-4 '><FaRegCompass className='text-2xl '/>Explore</div>
                    <div className='flex items-center justify-start gap-x-4 '><LuMonitorPlay className='text-2xl '/>Reals</div>
                    <div className='flex items-center justify-start gap-x-4 '><AiOutlineMessage className='text-2xl '/>Messages</div>
                    <div className='flex items-center justify-start gap-x-4 '><FiHeart className='text-2xl '/>Notifications</div>
                    <div className='flex items-center justify-start gap-x-4 '><GrAddCircle className='text-2xl '/>Create</div>
                    <div className='flex items-center justify-start gap-x-4 '><img src={story4} alt='profile img' className='w-6 h-6 rounded-full'/>Profile</div>
                </div>
                <div className='w-5/6 h-36 flex flex-col items-start justify-center gap-y-8'>
                    <div className='flex items-center justify-start gap-x-4 '><FaThreads className='text-2xl '/>Threads</div>
                    <div className='flex items-center justify-start gap-x-4 '><GrMenu className='text-2xl '/>More</div>
                </div>
            </div>
            <MainContainer/>
        </div>
    )
}

export default Home;