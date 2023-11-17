import textLogo from "../assets/textLogo.png"
import playStoreLogo from "../assets/playStoreLogo.png"
import appStoreLogo from "../assets/appStoreLogo.png"
import loginImage from "../assets/loginImage.png"
import loginImage2 from "../assets/loginImage2.png"
import { loginFooter } from "../utils/constants"
import { loginFooterAdditional } from "../utils/constants"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setAuthentication } from "../store/SigninSlice"

const Login = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [visibility, setVisibility] = useState("hidden");
    const signinDetails = useSelector((store) => store.signInDetails.data)
    const authStatus = useSelector((store)=> store.signInDetails.isAuthenticated);
    const dispatch = useDispatch()

    const navigate = useNavigate();

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    
    useEffect(()=> {
        dispatch(setAuthentication(false))
    },[])
    

    const handleLogin = () => {
        signinDetails.find((entry) => {
            if(entry.username===username && entry.password===password){
                dispatch(setAuthentication(true))
                navigate("/home");
            }
            
            return null
        })
        if (!authStatus) {
            setVisibility("visible");
        }
        else{
            setVisibility("hidden");
        }
    }

        


    return (
        <div className='w-full h-screen flex flex-col items-center justify-center gap-y-10'>
            <div className='w-full h-[70%] flex items-center justify-center gap-x-12 '>
                    <div className='w-72 bg-black rounded-[2rem] border-8 border-black -mr-56 -mt-3'>
                        <img src={loginImage} alt="login img" className='w-full'/>
                    </div>
                    <div className='w-72 bg-black rounded-[2rem] border-8 border-black '>
                        <img src={loginImage2} alt="login img" className='w-full'/>
                    </div>
                <div className='w-1/4 h-full flex flex-col items-center justify-center gap-y-3'>
                    <div className=" w-full h-2/3 border border-gray-300 flex flex-col items-center justify-center px-10">
                        <img src={textLogo} alt='text logo' className='h-24 w-48'/>
                        <div className='w-full flex flex-col gap-y-4'>
                            <div className="w-full flex flex-col gap-y-2">
                            <input className='w-full h-9 border border-gray-300 px-2 text-xs outline-none rounded-sm bg-gray-50' placeholder="Username"
                            onChange={handleUsername}
                            />
                            <input className='w-full h-9 border border-gray-300 px-2 text-xs outline-none rounded-sm bg-gray-50' placeholder="Password"
                            onChange={handlePassword}
                            />
                            </div>
                        <button className='w-full rounded-lg bg-blue-400 h-8 text-sm font-semibold text-white'
                        onClick={handleLogin}
                        >
                            Log in
                        </button>
                        <div className={`text-xs h-1 flex w-full justify-center items-center text-[#FD1D1D] ${visibility}`}>username or paswword is incorrect.</div>
                        <div className='flex items-center justify-center text-sm font-semibold tracking-wide'>OR</div>
                        <div className='flex items-center justify-center text-sm font-semibold tracking-wide text-blue-900'>Log in with Facebook</div>
                        <div className='flex items-center justify-center text-xs tracking-wide text-blue-900'>Forgotten you password?</div>
                        </div>
                    </div>
                    <div className='w-full h-16 border border-gray-300 flex items-center justify-center text-sm tracking-wide '>Don't have an account? &nbsp;<Link to='/signin' className='text-blue-400 font-bold'>Sign up</Link> </div>
                    <div className='w-full h-6 flex items-center justify-center text-sm tracking-wide'>Get the app.</div>
                    <div className='w-full h-12 flex items-center justify-center gap-x-2'>
                        <img src={appStoreLogo} alt="app store logo" className='w-32 h-10'/>
                        <img src={playStoreLogo} alt="play store logo" className='w-32 h-10'/>
                    </div>
                </div> 
            </div>
            <div className='w-full h-28 flex flex-col items-center justify-center gap-y-5'>
                <div className='flex text-xs text-gray-500 gap-x-4 tracking-wide'>
                    {loginFooter.map((entry)=> {
                        return(
                            <div>{entry}</div>
                        )
                    })}
                </div>
                <div className="flex text-xs text-gray-500 gap-x-4 tracking-wide">
                    {loginFooterAdditional.map((entry)=> {
                            return(
                                <div>{entry}</div>
                            )
                    })}</div> 
            </div>
        </div>
    )
}

export default Login;