import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { IoIosBriefcase } from "react-icons/io";
import { ImLinkedin } from "react-icons/im";

function About() {
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(6,66,94,1) 50%,  rgba(0,91,109,1) 100%)",
        }}
        className="w-full h-full flex flex-col justify-center items-center text-white font-poppins p-2"
      >
        <h3 className="mb-4 font-semibold text-2xl md:text-3xl">
          About ResumeArchitect
        </h3>
        <div className="w-full p-8 flex flex-col justify-center items-start bg-zinc-100 text-black md:w-[75%] rounded-md">
          <h3 className="mb-4 text-xl font-semibold">
            Craft Your Perfect Resume with ease
          </h3>
          <p className="text-sm text-black   ">
            Welcome to{" "}
            <span className="font-semibold text-black">ResumeArchitect. </span>{" "}
            I’m Muhammad Haseeb, a Computer Science student with a passion for
            technology and innovation. This project is a reflection of my
            dedication to creating practical tools that make a difference.
          </p>
          <p className="mt-4 text-black text-sm">
            <span className="font-semibold text-black">ResumeArchitect </span>
            is a platform I developed to help individuals build professional
            resumes with ease. Whether you're a student preparing for your first
            job or a seasoned professional looking to update your career
            documents, ResumeArchitect offers a straightforward and effective
            way to craft a standout resume.
          </p>
        </div>
        <div className="w-full p-8 flex flex-col justify-center items-start bg-zinc-100 text-black mt-10 md:w-[75%] rounded-md">
          <h3 className="mb-4 text-xl font-semibold">My Mission</h3>
          <p className="text-sm text-black">
            My mission with{" "}
            <span className="font-semibold ">ResumeArchitect </span> is to
            simplify the resume-building process and make it accessible to
            everyone. I understand that a resume is more than just a list of
            qualifications—it's a vital tool in showcasing your unique skills
            and achievements. Through this platform, I aim to provide a
            user-friendly experience that helps you present your professional
            story in the best light.
          </p>
        </div>
        <div className="w-full p-8 flex flex-col justify-center items-start bg-zinc-100 text-black my-10 md:w-[75%] rounded-md">
          <h3 className="mb-4 text-xl font-semibold">Join the journey</h3>
          <p className="text-sm text-black">
            Thank you for visiting{" "}
            <span className="font-semibold ">ResumeArchitect. </span> I’m
            excited to share this project with you and hope it becomes a
            valuable resource in your career journey. Feel free to explore and
            create a resume that opens doors to new opportunities!
          </p>
          <div className="Icons w-full flex flex-row-reverse items-center">
            <a
              href="https://www.linkedin.com/in/muhammad-haseeb-b4544a257/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:scale-125 transition-all duration-300 ease-in-out"
            >
              <ImLinkedin size={20} />
            </a>
            <a
              href="https://github.com/MuhammadHaseeb0070"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="mx-3 hover:scale-125 transition-all duration-300 ease-in-out"
            >
              <IoLogoGithub size={20} />
            </a>
            <a
              href="https://muhammadhaseeb007.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:scale-125 transition-all duration-300 ease-in-out flex bg-zinc-900 text-zinc-200 p-1 rounded-md
              hover:bg-zinc-200 hover:text-zinc-900"
            >
              <IoIosBriefcase size={20} className="mr-2"/>
               Portfolio
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
