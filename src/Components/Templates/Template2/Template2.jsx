import React, { useEffect, useRef } from "react";
import Draggable from "react-draggable";
import html2pdf from "html2pdf.js";
import { MdLocalPhone } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import '../template.css'

const Template2 = ({ data, isDownloading, setisDownloading }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isDownloading) {
      downloadPDF().then(() => {
        setisDownloading(false);
      });
    }
  }, [isDownloading]);

  const downloadPDF = async () => {
    const element = contentRef.current;
    const options = {
      margin: [0, 0, 0, 0], // Set margins to control the layout
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 4,
        logging: true,
        letterRendering: true,
        useCORS: true,
        windowWidth: element.scrollWidth, // Ensure full width capture
        windowHeight: element.scrollHeight, // Ensure full height capture
      },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    await html2pdf().from(element).set(options).save();
  };

  const {
    firstName = "",
    lastName = "",
    position = "",
    contact = {},
    links = [],
    skills = [],
    languages = [],
    profile = {},
    employmentHistory = [],
    education = [],
    hobbies = [],
    courses = [],
  } = data;

  return (
    <>
      <div
        className="w-[210mm] scale-100  max-w-full mx-auto bg-zinc-0  p-4 px-6 font-roman box-border font-medium text-zinc-700 "
        ref={contentRef}
      >
        <div className="template2Header flex flex-col justify-center items-start pt-2 pb-1 px-0 relative">
          <p className="firstName text-2xl font-semibold text-gray-800">
            {firstName} {lastName}
          </p>

          <p className="contactEntry flex items-center avoid-break text-base">
            <span className="flex-grow min-w-0 break-words">
              {contact.location && contact.location}
              {contact.location && contact.phone && " | "}
              {contact.phone && contact.phone}
            </span>
          </p>

          {contact.email && (
            <p className="contactEntry flex items-center avoid-break">
              <span className="flex-grow min-w-0 break-words text-base">
                {contact.email}
              </span>
            </p>
          )}
        </div>

        <div className="template2Body w-full flex flex-col justify-start items-start mt-2">
          {profile && (
            <div className="Summary w-full avoid-break">
              <div className="sectionHeader mb-1 font-semibold text-lg border-b-2 border-zinc-400 py-1 ">
                <span>Summary</span>
              </div>
              <div className="sectionBody py-1 text-sm">
                <p>{profile.description}</p>
              </div>
            </div>
          )}

          {employmentHistory.length > 0 && (
            <div className="Experience w-full">
              <div className="sectionHeader mb-1 font-semibold text-lg border-b-2 border-zinc-400 py-1 ">
                <span>Experience</span>
              </div>
              {employmentHistory.map((job, index) => (
                <div
                  className="experienceEntry mb-1 w-full py-1 text-sm avoid-break"
                  key={index}
                >
                  <div className=" w-full flex flex-col items-start justify-center">
                    <p className="employmentProfession text-base font-semibold my-0 py-0">
                      {job.profession && job.profession}
                      {job.profession && job.location && " | "}
                      {job.location && job.location}
                    </p>

                    <p className="employmentDate font-semibold text-base my-0 py-0">
                      {job.startDate && job.startDate}
                      {job.startDate && job.endDate && " / "}
                      {job.endDate && job.endDate}
                    </p>
                    <p className="employmentDescription w-full mt-2 text-sm leading-5 pl-3 border-l-2 ml-2">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {education.length > 0 && (
            <div className="educationSection w-full">
              <div className="sectionHeader mb-1 font-semibold text-lg border-b-2 border-zinc-400 py-1 ">
                <span>Education</span>
              </div>
              {education.map((edu, index) => (
                <div
                  className="educationEntry mb-2 w-full  py-1 text-sm avoid-break   mt-1"
                  key={index}
                >
                  <div className=" w-full flex flex-col items-start justify-center">
                    <p className=" text-base font-semibold pr-2 py-0 my-0">
                      {edu.name && edu.name}
                      {edu.name && edu.location && " | "}
                      {edu.location && edu.location}
                    </p>

                    <p className=" font-semibold text-sm">
                      {edu.startDate && edu.startDate}
                      {edu.startDate && edu.endDate && " | "}
                      {edu.endDate && edu.endDate}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {skills.length > 0 && (
            <div className="skillsSection w-full avoid-break">
              <div className="sectionHeader mb-1 font-semibold text-lg border-b-2 border-zinc-400 py-1">
                <span>Skills</span>
              </div>
              <p className="text-sm leading-5 py-2">
                {skills.map((skill) => skill.name).join("  |  ")}
              </p>
            </div>
          )}

          {links.length > 0 && (
            <div className="linksSection w-full">
              <div className="sectionHeader mb-1 font-semibold text-lg border-b-2 border-zinc-400 py-1 ">
                <span>Links</span>
              </div>
              {links.map((link, index) => (
                <div
                  className="linkEntry w-full flex items-start justify-start py-1"
                  key={index}
                >
                  <p className=" text-base font-semibold pr-2  mr-2">
                    {link.name}
                  </p>

                  <a href={link.url} target="_blank">
                    {link.url}
                  </a>
                </div>
              ))}
            </div>
          )}

          {courses.length > 0 && (
            <div className="coursesSection w-full">
              <div className="sectionHeader mb-1 font-semibold text-lg border-b-2 border-zinc-400 py-1 ">
                <span>Courses</span>
              </div>
              {courses.map((course, index) => (
                <div className="coursesEntry mb-2 w-full py-1 text-sm  mt-1 avoid-break">
                  <div className=" w-full flex flex-col items-start justify-center">
                    <p className=" text-base font-semibold pr-2">
                      {course.name}
                    </p>
                    <p className=" font-semibold text-sm">
                      {" "}
                      {course.startDate && course.startDate}
                      {course.startDate && course.endDate && " | "}
                      {course.endDate && course.endDate}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {languages.length > 0 && (
            <div className="languageSection w-full avoid-break">
              <div className="sectionHeader mb-1 font-semibold text-lg border-b-2 border-zinc-400 py-1 ">
                <span>Languages</span>
              </div>
              <p className="text-sm leading-5 py-2">
                {languages.map((lg) => lg.name).join("  |  ")}
              </p>
            </div>
          )}
          {hobbies.length > 0 && (
            <div className="hobbiesSection w-full avoid-break">
              <div className="sectionHeader mb-1 font-semibold text-lg border-b-2 border-zinc-400 py-1 ">
                <span>Hobbies</span>
              </div>
              <p className="text-sm leading-5 py-2">
                {hobbies.map((hb) => hb.name).join("  |  ")}
              </p>
            </div>
          )}

       
        </div>
      </div>
    </>
  );
};

export default Template2;
