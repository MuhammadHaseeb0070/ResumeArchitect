import React, { useEffect, useRef } from "react";
import Draggable from "react-draggable";
import html2pdf from "html2pdf.js";
import { MdLocalPhone } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import "../template.css";

const Template1 = ({ data, isDownloading, setisDownloading }) => {
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
        className="w-[210mm] scale-100  max-w-full p-0 mx-auto  font-raleway box-border font-medium"
        ref={contentRef}
      >
        <div className="template1Header flex justify-between items-center py-8 px-6 bg-zinc-200 relative">
          <div className="Names  w-3/4">
            {firstName && (
              <p className="firstName text-3xl text-gray-800">{firstName}</p>
            )}
            {lastName && (
              <p className="lastName text-3xl text-gray-800">{lastName}</p>
            )}
            {position && (
              <p className="position text-sm text-gray-600">{position}</p>
            )}
          </div>

         
          <div className="profile-image-container scale-110   ">
            {data.profileImage && (
              <img
                className="profile-image"
                src={data.profileImage}
                
              />
            )}
          </div>
        </div>
        <div className="template1Body w-full flex mt-0">
          <div className="leftSection w-1/3 max-h-full bg-zinc-200 p-2">
            {(contact.phone || contact.email || contact.location) && (
              <div className="contactSection w-full p-3 text-sm">
                <h3 className="font-bold font-raleway text- mb-3 tracking-widest">
                  CONTACTS
                </h3>
                {contact.phone && (
                  <p className="contactEntry flex w-full justify-between font-poppins items-center avoid-break">
                    <span className="flex-grow min-w-0 break-words pt-1 pr-6 pb-1">
                      {contact.phone}
                    </span>
                    <MdLocalPhone className="w-4 h-4" />
                  </p>
                )}
                {contact.email && (
                  <p className="contactEntry flex w-full justify-between items-center avoid-break">
                    <span className="flex-grow min-w-0 break-words pt-1 pr-6 pb-1 text-sm">
                      {contact.email}
                    </span>
                    <IoMailSharp className="w-4 h-4" />
                  </p>
                )}
                {contact.location && (
                  <p className="contactEntry flex w-full justify-between items-center avoid-break">
                    <span className="flex-grow min-w-0 break-words pt-1 pr-6 pb-1">
                      {contact.location}
                    </span>
                    <IoLocationSharp className="w-4 h-4" />
                  </p>
                )}
              </div>
            )}
            {links.length > 0 && (
              <div className="linksSection w-full p-3 text-sm">
                <h3 className="linksHeader font-bold font-raleway text-base mb-3 tracking-widest">
                  LINKS
                </h3>
                {links.map((link, index) => (
                  <p
                    className="linkEntry mt-3 avoid-break w-full flex justify-between avoid-break"
                    key={index}
                  >
                    <a
                      className="links"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                    <FiExternalLink className="linkIcon" />
                  </p>
                ))}
              </div>
            )}

            {skills.length > 0 && (
              <div className="skillSection w-full p-3 text-sm">
                <h3 className="font-bold font-raleway text-base mb-3 tracking-widest">
                  SKILLS
                </h3>
                {skills.map((skill, index) => (
                  <div className="skillEntry mt-3 avoid-break" key={index}>
                    <p className="flex w-full justify-start text-sm font-semibold">
                      {skill.name}
                    </p>
                    <div className="skillBar w-full h-2 rounded-md bg-zinc-400 overflow-hidden mt-2">
                      <div
                        className="skillFill h-full bg-zinc-800"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {languages.length > 0 && (
              <div className="languageSection w-full p-3 text-sm">
                <h3 className="font-bold font-raleway text-base mb-3 tracking-widest">
                  LANGUAGES
                </h3>
                {languages.map((language, index) => (
                  <div className="languageEntry mt-3 avoid-break" key={index}>
                    <p className="flex w-full justify-start text-sm font-semibold">
                      {language.name}
                    </p>
                    <div className="languageBar w-full h-2 rounded-md bg-zinc-400 overflow-hidden mt-2">
                      <div
                        className="languageFill bg-zinc-800 h-full"
                        style={{ width: language.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {hobbies.length > 0 && (
              <div className="hobbySection w-full p-3 text-sm">
                <h3 className="font-bold font-raleway text-base mb-3 tracking-widest">
                  HOBBIES
                </h3>
                {hobbies.map((hobby, index) => (
                  <p className="hobbyEntry avoid-break mt-2" key={index}>
                    {hobby.name}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="rightSection w-2/3 max-h-full px-3 py-5">
            {profile.description && (
              <div className="profileSection rightSectionChild">
                <h3 className="profileHeader font-bold font-raleway text-base mb-3 tracking-widest">
                  PROFILE
                </h3>
                <p className="descriptionText profileDescription text-sm">
                  {profile.description}
                </p>
              </div>
            )}

            {employmentHistory.length > 0 && (
              <div className="employmentSection rightSectionChild mt-5">
                <h3 className="employmentHeader font-bold font-raleway text-base  mb-3 tracking-widest">
                  EMPLOYMENT HISTORY
                </h3>
                {employmentHistory.map((job, index) => (
                  <div
                    className="employmentEntry w-full mt-5 border-l-2 pl-3 avoid-break"
                    key={index}
                  >
                    <div className="employmentEntryHeader w-full flex justify-between items-center">
                      <p className="employmentProfession w-3/5 text-base pr-2">
                        {job.profession}
                      </p>
                      <p className="employmentLocation text-sm w-1/4">
                        {job.location}
                      </p>
                    </div>
                    <p className="employmentDate mt-2 text-sm">
                      {job.startDate} &mdash; {job.endDate}
                    </p>
                    <p className="employmentDescription mt-2 text-sm leading-5 ">
                      {job.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {education.length > 0 && (
              <div className="educationSection rightSectionChild mt-5">
                <h3 className="educationHeader font-bold font-raleway text-base mb-3 tracking-widest">
                  EDUCATION
                </h3>
                {education.map((edu, index) => (
                  <div
                    className="educationEntry w-full flex flex-col pl-2 border-l-2 mt-2 avoid-break"
                    key={index}
                  >
                    <div className="educationEntryHeader w-full flex justify-between items-center text-sm">
                      <p className="educationName text-base w-3/5">
                        {edu.name}
                      </p>
                      <p className="educationLocation text-sm w-1/4">
                        {edu.location}
                      </p>
                    </div>
                    <p className="educationDate mt-1 text-sm">
                      {edu.startDate} &mdash; {edu.endDate}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {courses.length > 0 && (
              <div className="courseSection rightSectionChild mt-5">
                <h3 className="courseHeader font-bold font-raleway text-base  mb-3 tracking-widest">
                  COURSES
                </h3>
                {courses.map((course, index) => (
                  <div
                    className="courseEntry border-l-2 pl-2 mt-2 avoid-break"
                    key={index}
                  >
                    <p className="courseName text-base">{course.name}</p>
                    <p className="courseDate text-sm mt-1">
                      {course.startDate} &mdash; {course.endDate}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Template1;
