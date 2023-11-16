import { storyData } from "../utils/constants";

const StorySection = () => {
    return (
        <div class="w-full h-auto flex items-center justify-center gap-x-3">
            {storyData.map((entry, index)=> {
                return (
                    <div className='w-auto h-auto text-xs flex flex-col items-center justify-center gap-y-1' key={index}>
                        <img src={entry.dp} alt="story1" className="w-[4.2rem] h-[4.2rem] rounded-full p-[0.15rem] border-[3px]  border-[#FD1D1D]"/>
                        {entry.username}
                    </div>
                )
            })}
            
        </div>
    )
}

export default StorySection;