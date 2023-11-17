import { storyData } from "../utils/constants";

const StorySection = () => {
    return (
        <div className="w-[40rem] h-auto flex items-center justify-center max-sm:justify-end gap-x-3 max-sm:gap-x-1  max-sm:w-[32rem] max-sm:overflow-x-scroll  ">
            {storyData.map((entry, index)=> {
                return (
                    <div className='w-full h-auto text-xs flex flex-col items-center justify-start gap-y-1' key={index}>
                        <img src={entry.dp} alt="story1" className="w-[4.2rem] h-[4.2rem] max-sm:w-[3.5rem] max-sm:h-[3.5rem] rounded-full p-[0.15rem] border-[3px]  border-[#FD1D1D]"/>
                        {entry.username}
                    </div>
                )
            })}
            
        </div>
    )
}

export default StorySection;