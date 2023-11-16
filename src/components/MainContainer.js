import StorySection from './StorySection';
import FeedSection from "./FeedSection";
import FollowSuggestions from "./FollowSuggestions"

const MainContainer = () => {
    return (
        <div className="w-full h-auto flex items-start justify-center py-8">
            <div className='w-[60rem] h-auto  flex justify-between items-start '>
                <div className='flex flex-col items-center justify-start w-[64%] h-full '>
                    {/* <div></div> */}
                    <StorySection/>
                    <FeedSection/>
                </div>
                <FollowSuggestions/>
            </div>
        </div>
    )
}

export default MainContainer;