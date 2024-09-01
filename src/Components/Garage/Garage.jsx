import React, { useEffect } from "react";
import { useState } from "react";
import Template1 from "../Templates/Template1/Template1";
import Template2 from "../Templates/Template2/Template2";
import PersonalDetailsForm from "./Forms/PersonalDetailsForm";
import LinkForm from "./Forms/LinkForm";
import SkillForm from "./Forms/SkillForm";
import LanguagesForm from "./Forms/LanguagesForm";
import HobbyForm from "./Forms/HobbyForm";
import EmploymentForm from "./Forms/EmploymentForm";
import EducationForm from "./Forms/EducationForm";
import CourseForm from "./Forms/CourseForm";
import { IoMdEye } from "react-icons/io";

function Garage({ currentTemplate }) {
  const [imageData, setImageData] = useState(null);
  useEffect(() => {
    console.log("Garage Update ", imageData);
  }, [imageData]);
  // const [resumeData, setResumeData] = useState({
  //   profileImage: null,
  //   firstName: "EMMA",
  //   lastName: "WILSON",
  //   position: "Lead Software Engineer & AI Researcher",
  //   contact: {
  //     phone: "0456-7891234",
  //     email: "emma.wilson@example.com",
  //     location: "San Francisco, USA",
  //   },
  //   links: [
  //     { name: "Portfolio", url: "https://emmawilson.dev" },
  //     { name: "LinkedIn", url: "https://linkedin.com/in/emmawilson" },
  //   ],
  //   skills: [
  //     { name: "Artificial Intelligence & Machine Learning", level: "95%" },
  //     { name: "Algorithm Design & Optimization", level: "90%" },
  //     { name: "Python & C++ Programming", level: "95%" },
  //     { name: "Data Structures & Algorithms", level: "90%" },
  //     { name: "Distributed Systems", level: "85%" },
  //     { name: "Cloud Computing", level: "80%" },
  //   ],
  //   languages: [
  //     { name: "English", level: "100%" },
  //     { name: "French", level: "65%" },
  //   ],
  //   hobbies: [
  //     { name: "Contributing to Open Source Projects" },
  //     { name: "Building AI-Powered Applications" },
  //     { name: "Participating in Hackathons" },
  //   ],
  //   profile: {
  //     description:
  //       "Innovative Lead Software Engineer and AI Researcher with over a decade of experience in developing cutting-edge software solutions. Specializes in artificial intelligence, machine learning, and advanced algorithm design. Passionate about leveraging technology to solve complex problems and drive progress in the field of computer science. Known for exceptional problem-solving skills and a strong commitment to fostering diversity in tech.",
  //   },
  //   employmentHistory: [
  //     {
  //       profession: "Lead Software Engineer, Quantum Tech Solutions",
  //       location: "Silicon Valley, USA",
  //       startDate: "Feb-17",
  //       endDate: "Present",
  //       description:
  //         "Leading the development of AI-driven software products, managing a team of engineers, and collaborating with researchers to push the boundaries of technology. Spearheaded the implementation of machine learning models that improved product efficiency by 40%. Oversaw the migration of legacy systems to cloud-based architectures, reducing operational costs by 25%.",
  //     },
  //     {
  //       profession: "Junior Developer, CodeMasters Studio",
  //       location: "Boston, USA",
  //       startDate: "Jan-07",
  //       endDate: "Jun-09",
  //       description:
  //         "Assisted in developing software solutions, contributing to coding, testing, and debugging. Collaborated with senior developers to improve coding standards and practices. Engaged in code reviews and team learning sessions, accelerating personal growth in the software engineering field.",
  //     },
  //   ],
  //   education: [
  //     {
  //       name: "Ph.D. in Computer Science",
  //       location: "Stanford University, USA",
  //       startDate: "Sep-11",
  //       endDate: "Jun-15",
  //     },
  //   ],
  //   courses: [
  //     {
  //       name: "Advanced Machine Learning and Neural Networks",
  //       startDate: "Mar-19",
  //       endDate: "May-19",
  //     },
  //     {
  //       name: "Distributed Computing Systems",
  //       startDate: "Jul-17",
  //       endDate: "Sep-17",
  //     },
  //   ],
  // });

  const [resumeData, setResumeData] = useState({
    profileImage: null,
    firstName: "",
    lastName: "",
    position: "",
    contact: {
      phone: "",
      email: "",
      location: "",
    },
    links: [],
    skills: [],
    languages: [],
    hobbies: [],
    profile: {},
    employmentHistory: [],
    education: [],
    courses: [],
  });
  const [isDownloading, setisDownloading] = useState(false);
  const [form, setform] = useState(0);

  const [isPreview, setisPreview] = useState(false);

  useEffect(() => {
    // Load data from localStorage when the component mounts
    const storedData = localStorage.getItem("resumeData");
    if (storedData) {
      setResumeData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    // Save data to localStorage whenever resumeData changes
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
  }, [resumeData]);

  const handleDataChange = (field, value, index = null) => {
    if (index !== null) {
      setResumeData((prevData) => {
        const updatedArray = [...prevData[field]];
        updatedArray[index] = { ...updatedArray[index], ...value };
        return { ...prevData, [field]: updatedArray };
      });
    } else {
      setResumeData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    }
    console.log(resumeData);
  };
  const addEntry = (field) => {
    setResumeData((prevData) => ({
      ...prevData,
      [field]: [...prevData[field], {}], // Add an empty object for the new entry
    }));
  };

  const removeEntry = (field, index) => {
    setResumeData((prevData) => ({
      ...prevData,
      [field]: prevData[field].filter((_, i) => i !== index),
    }));
  };
  const formPoints = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className=" w-full h-full overflow-hidden flex justify-center items-center">
      <div
        className={`${
          window.innerWidth >= 1024
            ? "w-1/2 "
            : `${!isPreview ? "w-full" : "hidden w-full"}`
        } bg-zinc-100h-full max-h-full h-full flex   justify-center items-center overflow-y-scroll pt-10 pb-10  
              lg:w-1/2`}
      >
        <div className="formStatus absolute left-2 top-[50%] translate-y-[-50%] w-8 mt-4 flex flex-col self-start justify-between items-center">
      {formPoints.map((point, index) => (
        <div
          key={point}
          onClick={() => setform(point)}
          className={`formPoint rounded-full w-[80%] aspect-square flex justify-center items-center cursor-pointer ${
            form === point
              ? 'bg-zinc-900  text-white'
              : 'bg-gray-300  text-black'
          } ${index === 0 ? 'mt-0' : 'mt-3'} ${index === formPoints.length - 1 ? 'mb-0' : 'mb-3'}`}
        >
          {point + 1}
        </div>
      ))}
      <div className="z-[-10] centerLine absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-1 h-full bg-black"></div>
    </div>

        <div className="formContainer w-[80%] flex  flex-col justify-center items-center ">
          <p className="font-semibold w-full text-4xl mb-1 p-3 text-center">
            {" "}
            Please fill the Form
          </p>
          <button
            className={`z-20 p-3 bg-blue-900 flex items-center flex-row m-0 absolute top-[15%] right-0 translate-x-[-1/2] translate-y-[-1/2] opacity-60 rounded-md text-white
                 hover:bg-white border border-transparent hover:border-blue-900 hover:opacity-100 hover:text-blue-900 lg:hidden`}
            onClick={() => {
              setisPreview(true);
            }}
          >
            <IoMdEye className="mr-2" /> Preview Resume
          </button>
          {form == 0 && (
            <PersonalDetailsForm
              imageData={imageData}
              setImageData={setImageData}
              setform={setform}
              personalDetails={resumeData}
              onChange={handleDataChange}
            ></PersonalDetailsForm>
          )}

          {form == 1 && (
            <LinkForm
              setform={setform}
              links={resumeData.links}
              onChange={handleDataChange}
              onAddEntry={() => addEntry("links")}
              onRemoveEntry={(index) => removeEntry("links", index)}
            />
          )}

          {form == 2 && (
            <SkillForm
              setform={setform}
              skills={resumeData.skills}
              onChange={handleDataChange}
              onAddEntry={() => addEntry("skills")}
              onRemoveEntry={(index) => removeEntry("skills", index)}
            ></SkillForm>
          )}

          {form == 3 && (
            <LanguagesForm
              setform={setform}
              languages={resumeData.languages}
              onChange={handleDataChange}
              onAddEntry={() => addEntry("languages")}
              onRemoveEntry={(index) => removeEntry("languages", index)}
            ></LanguagesForm>
          )}

          {form == 4 && (
            <HobbyForm
              setform={setform}
              hobbies={resumeData.hobbies}
              onChange={handleDataChange}
              onAddEntry={() => addEntry("hobbies")}
              onRemoveEntry={(index) => removeEntry("hobbies", index)}
            ></HobbyForm>
          )}
          {form == 5 && (
            <EmploymentForm
              setform={setform}
              employments={resumeData.employmentHistory}
              onChange={handleDataChange}
              onAddEntry={() => addEntry("employmentHistory")}
              onRemoveEntry={(index) => removeEntry("employmentHistory", index)}
            ></EmploymentForm>
          )}

          {form == 6 && (
            <EducationForm
              setform={setform}
              educations={resumeData.education}
              onChange={handleDataChange}
              onAddEntry={() => addEntry("education")}
              onRemoveEntry={(index) => removeEntry("education", index)}
            ></EducationForm>
          )}
          {form == 7 && (
            <CourseForm
              setform={setform}
              isDownloading={isDownloading}
              setisDownloading={setisDownloading}
              courses={resumeData.courses}
              onChange={handleDataChange}
              onAddEntry={() => addEntry("courses")}
              onRemoveEntry={(index) => removeEntry("courses", index)}
            ></CourseForm>
          )}
        </div>
      </div>

      <div
        className={` ${
          window.innerWidth >= 1024
            ? "w-1/2 "
            : `${isPreview ? "w-full" : "hidden w-full"}`
        } h-full flex-col justify-start items-center flex overflow-y-scroll p-3 bg-zinc-100`}
      >
        <button
          className={`z-20 p-3 bg-blue-900 translate-x-[-1/2] translate-y-[-1/2] flex items-center absolute left-0 top-[15%] opacity-70 flex-row m-0 rounded-md text-white
            hover:bg-white border border-transparent hover:opacity-100 hover:border-blue-900 hover:text-blue-900 lg:hidden`}
          onClick={() => {
            setisPreview(false);
          }}
        >
          <IoMdEye className="mr-2" /> Preview Form
        </button>

        {currentTemplate == 1 && (
          <Template1
            data={resumeData}
            isDownloading={isDownloading}
            setisDownloading={setisDownloading}
          />
        )}

        {currentTemplate == 2 && (
          <Template2
            data={resumeData}
            isDownloading={isDownloading}
            setisDownloading={setisDownloading}
          />
        )}
      </div>
    </div>
  );
}

export default Garage;
