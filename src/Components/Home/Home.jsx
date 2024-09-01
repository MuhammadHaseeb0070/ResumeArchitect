import React from "react";
import { PiReadCvLogoLight } from "react-icons/pi";
import HeroImg from "../../../Assets/hero10.jpg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div
        style={{
          background: "rgb(0,0,0)",
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(6,66,94,1) 50%,  rgba(0,91,109,1) 100%)",
        }}
        className={`w-full h-full bg-cover bg-center flex flex-col-reverse items-center justify-center bg-zinc-900 font-poppins
        md:flex-row `}
      >
        <div className="leftHome w-full  flex justify-center  items-center z-10 md:w-1/2">
          <div className="homeIntro w-4/5 h-auto  p-6">
            <span className="text-white text-2xl font-semibold">
              Blueprint Your Career with Expertly Crafted Resumes
            </span>
            <p
              className="title text-white font-popp
            ins text-lg  mt-3"
            >
              Design a Professional Resume that Stands Out and Gets You Hired
            </p>
            <button
              className="text-blue-950 outline-none border border-transparent bg-white py-1 px-4 rounded-sm mt-5 
              hover:border-blue-300 hover:text-white hover:bg-transparent hover:py-3 transition-all duration-300 ease-in-out
              active:scale-90"
            >
              <Link to="/templateSelection"> Build your resume</Link>
            </button>
          </div>
        </div>

        <div className="rightHome w-4/5  flex justify-center items-center  md:w-1/2">
          {/* <PiReadCvLogoLight className='w-1/2 h-1/2 text-white' /> */}
          <img
            className="w-full rounded-sm md:w-4/5"
            src={HeroImg}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Home;
