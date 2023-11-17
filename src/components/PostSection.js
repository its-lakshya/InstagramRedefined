import { useState } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { createPost } from "../store/FeedSlice";
import { useDispatch, useSelector } from "react-redux";



const PostSection = ({closePostSection}) => {

    const userData = useSelector((store) => store.signInDetails.currentUserData)
    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState(null);
    const dispatch = useDispatch();

    const handleImage = (event) => {
        setImage(event.target.value)
    }

    const handleCaption = (event) => {
        setCaption(event.target.value)
    }

    const handlePost = () => {
        closePostSection();
        dispatch(createPost({
        image:image,
        caption:caption,
        username:userData.username,
        time:'just now',
        comments:[],
        likesCount:0,
        commentsVisibility:'hidden',
        commentColor:"text-black",
        likeColor:"text-black",
        dp:"https://marketplace.canva.com/EAFSZhFumYM/1/0/1600w/canva-dark-red-neon-futuristic-instagram-profile-picture-MUPA4np8in0.jpg"
        }));
    }

    return createPortal( 
        <div className="z-1 w-full h-22 fixed flex top-0 bottom-0 bg-black bg-opacity-60 items-center justify-center">
            <div className='w-[30rem] h-[25rem] bg-white flex flex-col items-start'>
                <button className='flex items-center justify-end w-full p-1 text-2xl text-gray-400' onClick={closePostSection}><IoClose/></button>
                <div className='w-full h-full flex items-center justify-center'>
                    <div className='w-full flex flex-col items-center justify-center gap-y-4 -mt-6'>
                        <div className='text-blue-400 font-semibold text-2xl '>Create Post</div>
                        <div className='flex flex-col gap-y-2 items-center'>
                            Paste the URL of the Image below
                            <input placeholder='paste the URL here' className='w-64 h-6 px-2 rounded-lg outline-none border border-blue-400 text-xs text-gray-700'
                            onChange={handleImage}
                            />
                        </div>
                        <div className="flex flex-col gap-y-2 items-center">
                            Caption
                            <textarea placeholder="caption here" className='text-xs w-64 outline-none border border-blue-400 rounded-lg px-2 py-1'
                            onChange={handleCaption}
                            />
                        </div>
                        <button className='bg-blue-400 rounded-lg w-20 h-6 text-white' onClick={handlePost}>Post</button>
                    </div>
                </div> 
            </div>
        </div>,document.getElementById("modal")
    )
}
export default PostSection;