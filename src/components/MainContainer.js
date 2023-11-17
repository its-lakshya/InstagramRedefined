import StorySection from './StorySection';
import FeedSection from "./FeedSection";
import FollowSuggestions from "./FollowSuggestions"

const MainContainer = () => {
    
    return (
        <div className="w-full h-auto flex items-start justify-center max-sm:justify-start py-8 ml-[22rem] max-2xl:ml-64 max-xl:ml-20 max-sm:ml-0">
            <div className='w-[62rem] h-auto  flex justify-between items-start max-lg:justify-center max-sm:w-full '>
                <div className='flex flex-col items-center justify-start max-xs:items-start max-xs:px-2 w-[40rem] h-full max-sm:w-full max-sm:overflow-x-hidden max-xs:w-auto max-xs:flex-shrink max-sm:mt-10'>
                    <StorySection/>
                    <FeedSection/>
                </div>
                <FollowSuggestions />
            </div>
        </div>
    )
}

export default MainContainer;