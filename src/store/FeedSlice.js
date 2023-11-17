import { createSlice } from "@reduxjs/toolkit";
import feed1 from "../assets/feed1.jpeg";
import feed2 from "../assets/feed2.jpeg";
import feed3 from "../assets/feed3.jpg";
import feed4 from "../assets/feed4.jpeg";
import feed5 from "../assets/feed5.jpg";
import feed6 from "../assets/feed6.jpeg";
import feed7 from "../assets/feed7.jpeg";
import feed8 from "../assets/feed8.jpg";
import feed9 from "../assets/feed9.jpg";
import feed10 from "../assets/feed10.jpg";
import dp1 from "../assets/story1.jpeg"
import dp2 from "../assets/story2.jpeg"
import dp3 from "../assets/story3.jpeg"
import dp4 from "../assets/story4.jpeg"
import dp5 from "../assets/story5.jpeg"
import dp6 from "../assets/story6.jpeg"
import dp7 from "../assets/story7.jpeg"
import dp8 from "../assets/story8.jpeg"
import dp9 from "../assets/follow5.jpeg"
import dp10 from "../assets/follow3.jpeg"

const initialState = [
    {   
        dp: dp1,
        username: "holy_laura",
        time: ". 2 h",
        image: feed1,
        likesCount: 30524,
        caption: "Nobody believes in us, lets shock the world 🙂.",
        comments:[
            {
                username: "mohiit_thakor",
                text: "And lifting world cup🤌🏻♥️",
            },
            {
                username: "pooja_gaur_18",
                text: "Proud moment for India ❤️",
            },
            {
                username: "the.__.champ",
                text: "World aussies jeetaga 😍",
            },
            {
                username: "usmani__sheikh",
                text: "coetzee cricketer proper commitment 🙌",
            },
            {
                username: "leo_rahul.1",
                text: "Ab Final to Aus vs IND hi hoga bhai 😓",
            },
        ],
        commentsVisibility:'hidden',
        commentColor:"text-black",
        likeColor:"text-black",
    },
    {
        dp: dp2,
        username: "aishhh_401",
        time: ". 1 h",
        image: feed2,
        likesCount: 20789,
        caption: "< - - - - DOPE THROWBACK PICS 🔥 🔥 🔥",
        comments:[
            {
                username: "dexter5_5",
                text: "Thodi din baad mall pr hi kabja kr ",
            },
            {
                username: "the_trendy_made",
                text: "van der dussen catch of the tournament🙌",
            },
            {
                username: "the_trendy_made",
                text: "Staircase bolke escalator ka photo laga diya🤦🏻‍♂️",
            }
        ],
        commentsVisibility:'hidden',
        commentColor:"text-black",
        likeColor:"text-black",
    },
    {
        dp: dp3,
        username: "divya_anshii",
        time: ". 3 h",
        image: feed3,
        likesCount: 4045,
        caption: "No you the man 👉🏽 @mpurcell50. \n#49ers",
        comments:[
            {
                username: "xpoison_01",
                text: "Rohit bhai ke aage koi bol sakta hain kay 🤣😅",
            },
            {
                username: "aradhana_.24",
                text: "Mujhe kya mei toh berozgaar hu...",
            },
            {
                username: "taslimshaikh45",
                text: "Mai to kisiki crush hi nhi 😢",
            },
            {
                username: "lying_abhijeet",
                text: "Crush ne Saari pehen kr samne aake apni aukat dikha di",
            },
        ],
        commentsVisibility:'hidden',
        commentColor:"text-black",
        likeColor:"text-black",
    },
    {
        dp: dp4,
        username: "Rockiii_",
        time: ". 35 m",
        image: feed4,
        likesCount: 29,
        caption: "🙀🙀🙀😍Morí!!!! Yo quiero @rauspian @andres.a12  sí ves por q tienen q trabajar tanto 😍para q me den esos gusticos",
        comments:[
            {
                username: "xpoison_01",
                text: "Rohit bhai ke aage koi bol sakta hain kay 🤣😅",
            },
            {
                username: "aradhana_.24",
                text: "Mujhe kya mei toh berozgaar hu...",
            },
        ],
        commentsVisibility:'hidden',
        commentColor:"text-black",
        likeColor:"text-black",
    },
    {
        dp: dp5,
        username: "tanu._off",
        time: ". 8 h",
        image: feed5,
        likesCount: 7063,
        caption: "@ryan_bougenoy it's like MC... Looks dialed ✊☝🏻️",
        comments:[
            {
                username: "the.__.champ",
                text: "World aussies jeetaga 😍",
            },
            {
                username: "usmani__sheikh",
                text: "coetzee cricketer proper commitment 🙌",
            },
            {
                username: "leo_rahul.1",
                text: "Ab Final to Aus vs IND hi hoga bhai 😓",
            },
        ],
        commentsVisibility:'hidden',
        commentColor:"text-black",
        likeColor:"text-black",
    },
    {
        dp: dp6,
        username: "fc_rashmika",
        time: ". 10 m",
        image: feed6,
        likesCount: 1054,
        caption:"Beat the rain☁️⚡️",
        comments:[
            {
                username: "the.__.champ",
                text: "World aussies jeetaga 😍",
            },
            {
                username: "usmani__sheikh",
                text: "coetzee cricketer proper commitment 🙌",
            },
            {
                username: "leo_rahul.1",
                text: "Ab Final to Aus vs IND hi hoga bhai 😓",
            },
        ],
        commentsVisibility:'hidden',
        commentColor:"text-black",
        likeColor:"text-black",
    },
    {
        dp: dp7,
        username: "jai.345_",
        time: ". 4 h",
        image: feed7,
        likesCount: 501,
        caption:"150.-💰#พร้อมส่ง-ส่งเอง #สต็อกเองทุกตัว ‼️‼️ #22K 🎉🎉🎉",
        comments:[
            {
                username: "xpoison_01",
                text: "Rohit bhai ke aage koi bol sakta hain kay 🤣😅",
            },
            {
                username: "taslimshaikh45",
                text: "Mai to kisiki crush hi nhi 😢",
            }
        ],
        commentsVisibility:'hidden',
        commentColor:"text-black",
        likeColor:"text-black",
    },
    {
        dp: dp8,
        username: "ritik.shekhar_",
        time: ". 3 h",
        image: feed8,
        likesCount: 15000,
        caption:"Thx for everything na ka my bff ❤️",
        comments:[
            {
                username: "xpoison_01",
                text: "Rohit bhai ke aage koi bol sakta hain kay 🤣😅",
            },
            {
                username: "aradhana_.24",
                text: "Mujhe kya mei toh berozgaar hu...",
            },
        ],
        commentsVisibility:'hidden',
        commentColor:"text-black",
        likeColor:"text-black",
    },
    {
        dp: dp9,
        username: "dhruvSingh.12",
        time: ". 2 h",
        image: feed9,
        likesCount: 2004,
        caption:"Paraguay💙❤️💙❤️💙❤️💙❤️",
        comments:[
            {
                username: "mohiit_thakor",
                text: "And lifting world cup🤌🏻♥️",
            },
            {
                username: "pooja_gaur_18",
                text: "Proud moment for India ❤️",
            },
            {
                username: "the.__.champ",
                text: "World aussies jeetaga 😍",
            },
        ],
        commentsVisibility:'hidden',
        commentColor:"text-black",
        likeColor:"text-black",
    },
    {
        dp: dp10,
        username: "abhi_singhhh",
        time: ". 55 m",
        image: feed10,
        likesCount: 304,
        caption:"San Diego ✈️ London. Jet lag is real but I'm happy to be back in the UK!  I missed ya! ❤️",
        comments:[
            {
                username: "usmani__sheikh",
                text: "coetzee cricketer proper commitment 🙌",
            },
            {
                username: "leo_rahul.1",
                text: "Ab Final to Aus vs IND hi hoga bhai 😓",
            },
        ],
        commentsVisibility:'hidden',
        commentColor:"text-black",
        likeColor:"text-black",
    },
]

const FeedSlice = createSlice({
    name:"feedData",
    initialState:initialState,

    reducers: {
        like:(state, action) => {
            if(state[action.payload].likeColor==='text-black'){
                state[action.payload].likesCount++;
                state[action.payload].likeColor='text-[#FD1D1D]'
            }
            else{
                state[action.payload].likesCount--;
                state[action.payload].likeColor='text-black'
            }

        },
        comment:(state,action) => {
            // console.log(action.payload.text, action.payload.index)
            state[action.payload.index].comments.push({username:'lakshya_kumar', text:action.payload.text})
        },
        setCommentsVisibility:(state, action)=> {
            if(state[action.payload].commentsVisibility==='hidden'){
                state[action.payload].commentsVisibility='visible'
                state[action.payload].commentColor="text-blue-400"
            }
            else{
                state[action.payload].commentsVisibility='hidden'
                state[action.payload].commentColor='text-black'
            }
        }   
    }
})


export const {like, comment, setCommentsVisibility} = FeedSlice.actions;
export default FeedSlice.reducer