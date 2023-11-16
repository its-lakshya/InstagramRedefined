import textLogo from "../assets/textLogo.png";
import appStoreLogo from "../assets/appStoreLogo.png";
import playStoreLogo from "../assets/playStoreLogo.png";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className="w-[24%] h-full flex flex-col items-center justify-center gap-y-3">
        <div className=" w-full h-3/4 border border-gray-300 flex flex-col items-center justify-center px-10">
          <img src={textLogo} alt="text logo" className="h-24 w-48" />
          <div className="w-full flex flex-col gap-y-4">
          <div className="text-gray-500 font-semibold text-center">
            Sign up to see photos and videos from your friends.
          </div>
          <button className="w-full rounded-lg bg-blue-400 h-8 text-sm font-semibold text-white">
            Sign Up
          </button>
          <div className="flex items-center justify-center text-sm font-semibold tracking-wide text-gray-500">
            OR
          </div>
          
            <div className="w-full flex flex-col gap-y-2">
              <input
                className="w-full h-9 border border-gray-300 px-2 text-xs outline-none rounded-sm bg-gray-50"
                placeholder="Mobile number or email address"
              />
              <input
                className="w-full h-9 border border-gray-300 px-2 text-xs outline-none rounded-sm bg-gray-50"
                placeholder="Full Name"
              />
              <input
                className="w-full h-9 border border-gray-300 px-2 text-xs outline-none rounded-sm bg-gray-50"
                placeholder="Username"
              />
              <input
                className="w-full h-9 border border-gray-300 px-2 text-xs outline-none rounded-sm bg-gray-50"
                placeholder="Password"
              />
            </div>
            <div className="w-full flex items-center justify-center text-xs text-gray-500 text-center">
              People who use our service may have uploaded your contact
              information to Instagram. Learn more
            </div>
            <div className="w-full flex items-center justify-center text-xs text-gray-500 text-center">
              By signing up, you agree to our Terms, Privacy Policy and Cookies
              Policy.
            </div>
            <button className="w-full rounded-lg bg-blue-400 h-8 text-sm font-semibold text-white">
              Sign Up
            </button>
          </div>
        </div>
        <div className="w-full h-16 border border-gray-300 flex items-center justify-center text-sm tracking-wide ">
          Have an account? &nbsp;
          <Link to="/" className="text-blue-400 font-bold">Log in</Link>{" "}
        </div>
        <div className="w-full h-6 flex items-center justify-center text-sm tracking-wide">
          Get the app.
        </div>
        <div className="w-full h-12 flex items-center justify-center gap-x-2">
          <img src={appStoreLogo} alt="app store logo" className="w-32 h-10" />
          <img
            src={playStoreLogo}
            alt="play store logo"
            className="w-32 h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
