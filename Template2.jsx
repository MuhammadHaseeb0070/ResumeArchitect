import React, { useEffect, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import { TbExternalLink } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail, IoLocationSharp } from "react-icons/io5";
import './template1.css';

const Template1 = ({ data , isDownloading  ,setisDownloading }) => {
    const contentRef = useRef(null);
    useEffect(() => {
        if(isDownloading){
           downloadPDF(); 
        }
        setisDownloading(false);
    
    }, [isDownloading])
    

    const downloadPDF = () => {
        const element = contentRef.current;
        const options = {
            margin: [2, 3],
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 4, logging: true, letterRendering: true, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().from(element).set(options).save();
    };

    const {
        firstName = '',
        lastName = '',
        position = '',
        contact = {},
        links = [],
        skills = [],
        languages = [],
        profile = {},
        employmentHistory = [],
        education = [],
        hobbies = [],
        courses = []
    } = data;

    return (
        <>
            <div className="templateDesign" >
                <div className="templatePage" ref={contentRef}>
                    <header className="templateHeader pageBody1">
                        {firstName && <p className="firstName">{firstName}</p>}
                        {lastName && <p className="lastName">{lastName}</p>}
                        {position && <p className="position">{position}</p>}
                    </header>
                    <div className="template1body">
                        <div className="leftSection">
                            {(contact.phone != '' || contact.email != '' || contact.location !='') && (
                                <div className="leftSectionChild contactSection">
                                    <p className="contactHeader leftSectionChildHeader">CONTACTS</p>
                                    <div className="contactData leftSectionData">
                                        {contact.phone && (
                                            <div className="contactEntry">
                                                <p className="phoneNumber">{contact.phone}</p>
                                                <FaPhoneAlt className='contactIcon' />
                                            </div>
                                        )}
                                        {contact.email && (
                                            <div className="contactEntry">
                                                <p className="emailAddress">{contact.email}</p>
                                                <IoMail className='contactIcon' />
                                            </div>
                                        )}
                                        {contact.location && (
                                            <div className="contactEntry">
                                                <p className="location">{contact.location}</p>
                                                <IoLocationSharp className='contactIcon' />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                            {links.length > 0 && (
                                <div className="leftSectionChild linksSection">
                                    <p className="contactHeader leftSectionChildHeader">LINKS</p>
                                    <div className="linksData leftSectionData">
                                        {links.map((link, index) => (
                                            <p key={index} >
                                                <a className="links" onClick={console.log(link.name , link.url)} href={link.url} target="_blank" rel="noopener noreferrer">
                                                    {link.name}
                                                </a>
                                                <TbExternalLink className='linkIcon' />
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {skills.length > 0 && (
                                <div className="leftSectionChild skillSection">
                                    <p className="skillHeader leftSectionChildHeader">SKILLS</p>
                                    <div className="skillData leftSectionData">
                                        {skills.map((skill, index) => (
                                            <div className="skillEntry" key={index}>
                                                <p className="skillName">{skill.name}</p>
                                                <div className="skillLevel">
                                                    <div className="skillFill" style={{ width: skill.level }}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {languages.length > 0 && (
                                <div className="leftSectionChild languageSection">
                                    <p className="languageHeader leftSectionChildHeader">LANGUAGE</p>
                                    <div className="languageData leftSectionData">
                                        {languages.map((language, index) => (
                                            <div className="languageEntry" key={index}>
                                                <p className="languageName">{language.name}</p>
                                                <div className="languageLevel">
                                                    <div className="languageFill" style={{ width: language.level }}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {hobbies.length > 0 && (
                                <div className="leftSectionChild">
                                    <p className="leftSectionChildHeader">HOBBIES</p>
                                    {hobbies.map((hobby, index) => (
                                        <p className="hobbyEntry" key={index}>{hobby.name}</p>
                                    ))}
                                </div>
                            )}


                        </div>
                        <div className="rightSection">
                            {profile.description && (
                                <div className="rightSectionChild profileSection">
                                    <p className="profileHeader rightSectionChildHeader">PROFILE</p>
                                    <div className="profileData">
                                        <p className="descriptionText profileDescription">{profile.description}</p>
                                    </div>
                                </div>
                            )}
                            {employmentHistory.length > 0 && (
                                <div className="rightSectionChild employmentSection">
                                    <p className="profileHeader rightSectionChildHeader">EMPLOYMENT HISTORY</p>
                                    {employmentHistory.map((job, index) => (
                                        <div className="employmentEntry" key={index}>
                                            <div className="employmentEntryHeader">
                                                <p className="employmentProfession">{job.profession}</p>
                                                <p className="employmentLocation">{job.location}</p>
                                            </div>
                                            <p className="employmentDate">{job.startDate}  &mdash; {job.endDate}</p>
                                            <p className="employmentDescription">{job.description}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {education.length > 0 && (
                                <div className="rightSectionChild educationSection">
                                    <p className="educationHeader rightSectionChildHeader">EDUCATION</p>
                                    {education.map((edu, index) => (
                                        <div className="employmentEntry" key={index}>
                                            <div className="employmentEntryHeader">
                                                <p className="educationProfession">{edu.name}</p>
                                                <p className="employmentLocation">{edu.location}</p>
                                            </div>
                                            <p className="employmentDate">{edu.startDate} &mdash; {edu.endDate} </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {courses.length > 0 && (
                                <div className="rightSectionChild">
                                    <p className="rightSectionChildHeader">COURSES</p>
                                    {courses.map((course, index) => (
                                        <div className="courseEntry" key={index}>
                                            <p className="courseName">{course.name}</p>

                                            <p className="courseDate">{course.startDate} &mdash; {course.endDate} </p>
                                        </div>
                                    ))}

                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Template1;
