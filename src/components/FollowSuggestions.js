import profile from "../assets/profile.jpeg"
import { followData } from "../utils/constants";
import { followDataFooter } from "../utils/constants";

const FollowSuggestions = () => {
    return (
        <div className="w-[29%] h-auto my-3 flex flex-col gap-y-6 ">
            <div className='flex justify-between items-center'>
                <div className='flex gap-x-3 items-center justify-center'>
                    <img src={profile} alt="profile img" className='w-[2.7rem] h-[2.7rem] rounded-full'/>
                    <div className='flex flex-col text-sm items-start justify-center'>
                        <div className='font-semibold'>its.lakshya_</div>
                        <div className='text-gray-500'>Lakshya Kumar</div>
                    </div>
                </div>
                <div className='text-xs text-blue-400 font-semibold'>Switch</div>
            </div>
            <div className='w-full flex flex-col items-center justify-start gap-y-4'>
                <div className='w-full flex items-center justify-between'>
                    <div className='text-gray-500 font-bold text-sm'>Suggested for you</div>
                    <div className='text-xs font-bold'>See All</div>
                </div>
                <div className="w-full flex flex-col gap-y-4">
                    {followData.map((entry)=> {
                        return (
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-x-3 items-center justify-center'>
                                    <img src={entry.dp} alt="profile img" className='w-[2.7rem] h-[2.7rem] rounded-full'/>
                                    <div className='flex flex-col text-sm items-start justify-center'>
                                        <div className='font-semibold'>{entry.username}</div>
                                        <div className='text-gray-500 text-xs font-medium'>{entry.addInfo}</div>
                                    </div>
                                </div>
                                <div className='text-xs text-blue-400 font-semibold'>Follow</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='w-full flex flex-col gap-5 text-xs text-gray-400 mt-5'>
                <div className='flex flex-wrap  gap-x-1 gap-y-1'>
                    {followDataFooter.map((entry)=> {
                        return (
                            <span>{entry}</span>
                        )
                    })}
                </div>
                <div>© 2023 INSTAGRAM FROM META</div>
            </div>
        </div>
    )
}

export default FollowSuggestions;