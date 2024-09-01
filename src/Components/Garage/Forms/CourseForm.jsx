import React, { useState } from 'react';
import './form.css';
import { MdDeleteForever } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import { HiOutlineDownload } from "react-icons/hi";

function CourseForm({ setform, courses, onChange, onAddEntry, onRemoveEntry, setisDownloading }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <form className='personalDetailForm max-w-md w-full flex flex-col items-center justify-center p-6 shadow-2xl'>
                <h4 className='formHeader w-full text-center text-2xl font-semibold mb-5'>Courses</h4>
                <div className="personalFormContainer w-full flex flex-col items-center justify-center">
                    {courses.map((course, index) => (
                        <div key={index} className="courseFormEntry w-full flex flex-col items-start justify-center mt-3 mb-2 shadow-md p-4">
                            <div className="accordionHeader w-full flex items-center justify-between cursor-pointer" onClick={() => toggleAccordion(index)}>
                                <span>{course.name || `Course, Institute ${index + 1}`}</span>
                                <div className='flex flex-row-reverse items-center justify-center'>
                                    {openIndex === index ? <FaChevronUp className='mt-2' /> : <FaChevronDown className='mt-2' />}
                                    <button
                                        type="button"
                                        className="text-red-500 hover:text-red-700 flex items-center space-x-2 mt-2 mr-2"
                                        onClick={() => onRemoveEntry(index)}
                                    >
                                        <MdDeleteForever className="text-2xl" />

                                    </button>

                                </div>
                            </div>
                            <div className={`accordionContent w-full flex flex-col items-start justify-center mt-3 mb-1 ${openIndex === index ? 'open' : ''}`}>
                                <div className="inputEntry w-full flex flex-col items-start justify-center mt-3 mb-1">
                                    <label htmlFor={`course-name-${index}`} className='font-medium text-gray-700'>Course, Institute</label>
                                    <input
                                        placeholder='Blockchain, Udemy'
                                        type="text"
                                        name={`course-name-${index}`}
                                        className='inputField w-5/6 outline-none rounded-sm h-8 pl-2 border-2'
                                        value={course.name}
                                        onChange={(e) => onChange('courses', { name: e.target.value }, index)}
                                    />
                                </div>
                                <div className="courseDateEntry w-full flex justify-between items-center mt-3 mb-1">
                                    <div className="inputEntry w-full mr-2">
                                        <label htmlFor={`course-startDate-${index}`} className='font-medium text-gray-700'>Start Date</label>
                                        <input
                                            placeholder='2002 Dec 18'
                                            type="text"
                                            name={`course-startDate-${index}`}
                                            className='inputField w-full outline-none rounded-sm h-8 pl-2 border-2'
                                            value={course.startDate}
                                            onChange={(e) => onChange('courses', { startDate: e.target.value }, index)}
                                        />
                                    </div>
                                    <div className="inputEntry w-full ml-2">
                                        <label htmlFor={`course-endDate-${index}`} className='font-medium text-gray-700'>End Date</label>
                                        <input
                                            placeholder='Present'
                                            type="text"
                                            name={`course-endDate-${index}`}
                                            className='inputField w-full outline-none rounded-sm h-8 pl-2 border-2'
                                            value={course.endDate}
                                            onChange={(e) => onChange('courses', { endDate: e.target.value }, index)}
                                        />
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    type="button"
                    className="addCourseButton bg-blue-900 text-white hover:bg-transparent border border-transparent hover:text-blue-900 hover:border-blue-900 text-lg flex justify-center items-center p-2 rounded-full transition-colors duration-200"
                    onClick={onAddEntry}
                >
                    <IoAddOutline className='addItemIcon w-7 h-7' /> Add
                </button>

                <div className="buttons w-full flex justify-between items-center mt-4">
                    <button className='goBackButton bg-transparent  hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded' onClick={() => setform(5)}>Back</button>
                    <button
                        type="button"  // Prevents the default form submission
                        onClick={() => { setisDownloading(true) }}
                        className='p-3 bg-blue-900 flex items-center flex-row-reverse rounded-md text-white
                         hover:bg-white border border-transparent hover:border-blue-900 hover:text-blue-900'>
                        Download
                        <HiOutlineDownload className='downloadIcon mr-2 scale-125' />
                    </button>

                </div>
            </form>
        </>
    );
}

export default CourseForm;
