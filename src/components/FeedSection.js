import { useDispatch, useSelector } from "react-redux";
import { MdMoreHoriz } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { TbMessageCircle2, TbMessageCircle2Filled } from "react-icons/tb";
import { FaRegBookmark } from "react-icons/fa6";
import { setCommentsVisibility, like } from "../store/FeedSlice";

const FeedSection = () => {

    const feedData = useSelector((store) => store.feedData)
    const dispatch = useDispatch()

    const handleCommentClick = ({index}) => {
        dispatch(setCommentsVisibility(index))
    }
    const handleLikeClick = ({index}) => {
        dispatch(like(index))
    }

    return (
        <div className="w-3/4 h-auto my-8 flex flex-col items-center justify-start gap-y-6">
            {feedData.map((data, index)=> {
                return (
                    <div className="flex flex-col w-full border-b border-gray-300 gap-y-3 pb-4" key={index}>
                        <div className='w-full flex items-center justify-between'>
                            <div className="flex items-center justify-center gap-x-2">
                                <img src={data.dp} alt='profile img' class='w-10 h-10 rounded-full'/>
                                <span className='text-sm font-semibold'>{data.username}</span>
                                <span className='text-sm text-gray-500'>{data.time}</span>
                            </div>
                            <MdMoreHoriz className='text-xl'/>
                        </div>
                        <img src={data.image} alt="post img" className='w-full'/>
                        <div className='w-full flex items-center justify-between text-2xl'>
                            <div className='flex gap-x-3 items-center'>
                                <span className={`${data.likeColor} cursor-pointer`} onClick={() => {handleLikeClick({index})}}> {data.likeColor === "text-black" ? <FaRegHeart /> : <FaHeart />}</span>
                                <span className={`${data.commentColor} cursor-pointer text-[]`} onClick={() => {handleCommentClick({index})}}> {data.commentColor === "text-black" ? <TbMessageCircle2 /> : <TbMessageCircle2Filled />}</span>
                                {/* <BiMessageRounded className={`${data.commentColor} cursor-pointer fill-black`} style={{ fill: 'red' }} onClick={() => {handleCommentClick({index})}}/> */}
                            </div>
                            <FaRegBookmark className='text-xl'/>
                        </div>
                        <div className="w-full flex flex-col gap-y-1">
                            <div className='w-full text-sm font-semibold'>{data.likesCount} likes</div>
                            <div className='w-full text-sm font-semibold flex gap-x-2'>
                                {data.username}
                                <div className='font-normal'>{data.caption}</div>
                            </div>
                            <div className= {`w-full flex flex-col text-sm gap-y-1 mt-2 ${data.commentsVisibility} `} >
                                <span className='text-gray-400 font-medium'>Comments</span>
                                {data.comments.map((comment, index)=> {
                                    return (
                                        <div className='flex gap-x-2' key={index}>
                                            <div className="font-semibold">{comment.username}</div>
                                            <div>{comment.text}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FeedSection;