import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import { IoClose } from "react-icons/io5";
import Resume1SS from "../../../../Assets/ResumeSS/Resume1SS.png";
import { IoIosBriefcase } from "react-icons/io";
import Resume2SS from "../../../../Assets/ResumeSS/Resume2SS.png";
import { useNavigate } from "react-router-dom";

function TemplateSelection({ setcurrentTemplate }) {
  const [preview, setpreview] = useState(0);
  const navigate = useNavigate();
  const [currentImages, setcurrentImages] = useState();

  return (
    <div className="w-full h-full bg-zinc-50 flex flex-col justify-start items-center font-poppins">
      <div className="w-full flex flex-col items-center justify-center text-blue-950 my-10">
        <h4 className="font-semibold text-2xl">Resume Templates</h4>
        <p className="font-normal text-base">
          Select Any Resume You Want
        </p>
      </div>
      <div className="templateContainer flex flex-wrap w-full justify-center bg-zinc-100 p-6">
        <div
          className={`templateEntry mx-1 backdrop-blur-md flex flex-col justify-center items-center transition-transform duration-500
                 ease-in-out cursor-pointer delay-100 my-4 shadow-md py-2
                 ${
                   preview == 1
                     ? "z-50 scale-[170%] border-blue-900 border-2"
                     : ""
                 }
                 `}
        >
          <h3 className="flex w-full justify-between items-center">
            Aston Martin{" "}
            {preview == 1 ? (
              <IoClose
                onClick={() => {
                  setpreview(0);
                }}
              />
            ) : (
              ""
            )}
          </h3>
          <img
            onClick={() => {
              setcurrentTemplate(1);
              navigate("/garage");
            }}
            className="w-44 h-64 rounded-sm m-1 
                "
            src={Resume1SS}
            alt="Image 1"
          />
          {preview != 1 && (
            <button
              className="bg-zinc-300 w-[95%] justify-self-center hover:scale-105 hover:py-1 transition-all duration-200"
              onClick={() => setpreview(1)}
            >
              Preview
            </button>
          )}
        </div>
        <div
          className={`templateEntry mx-1 backdrop-blur-md flex flex-col justify-center items-center transition-transform duration-500
                 ease-in-out cursor-pointer delay-100 my-4 shadow-md py-2
                 ${
                   preview == 2
                     ? "z-50 scale-[170%] border-blue-900 border-2"
                     : ""
                 }
                 `}
        >
          <h3 className="flex w-full justify-between items-center">
            Rolls Royce{" "}
            {preview == 2 ? (
              <IoClose
                onClick={() => {
                  setpreview(0);
                }}
              />
            ) : (
              ""
            )}
          </h3>
          <img
            onClick={() => {
              setcurrentTemplate(2);
              navigate("/garage");
            }}
            className="w-44 h-64 rounded-sm m-1 
                "
            src={Resume2SS}
            alt="Image 1"
          />
          {preview != 2 && (
            <button
              className="bg-zinc-300 w-[95%] justify-self-center hover:scale-105 hover:py-1 transition-all duration-200"
              onClick={() => setpreview(2)}
            >
              Preview
            </button>
          )}
        </div>
      </div>
      <div>
        <p>Stay tuned for more upcoming templates</p>
      </div>
    </div>
  );
}

export default TemplateSelection;
