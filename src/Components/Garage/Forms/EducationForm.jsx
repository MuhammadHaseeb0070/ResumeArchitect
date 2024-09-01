import React, { useState } from 'react';
import './form.css';
import { MdDeleteForever } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function EducationForm({ setform, educations, onChange, onAddEntry, onRemoveEntry }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <form className='personalDetailForm max-w-md w-full flex flex-col items-center justify-center p-6 shadow-2xl'>
                <h4 className='formHeader w-full text-center text-2xl font-semibold mb-5'>Educations</h4>
                <div className="personalFormContainer w-full flex flex-col items-center justify-center">
                    {educations.map((education, index) => (
                        <div key={index} className="educationEntry w-full flex flex-col items-start justify-center mt-3 mb-2 shadow-md p-4">
                            <div className="accordionHeader w-full flex items-center justify-between cursor-pointer" onClick={() => toggleAccordion(index)}>
                                <span>{education.name || `Degree, Institute ${index + 1}`}</span>
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
                                    <label htmlFor={`education-name-${index}`} className='font-medium text-gray-700'>Degree, Institute</label>
                                    <input
                                        placeholder='Degree, Institute'
                                        type="text"
                                        name={`education-name-${index}`}
                                        className='inputField w-5/6 outline-none rounded-sm h-8 pl-2 border-2'
                                        value={education.name}
                                        onChange={(e) => onChange('education', { name: e.target.value }, index)}
                                    />
                                </div>
                                <div className="inputEntry w-full flex flex-col items-start justify-center mt-3 mb-1">
                                    <label htmlFor={`education-location-${index}`} className='font-medium text-gray-700'>Location</label>
                                    <input
                                        placeholder='City, Country'
                                        type="text"
                                        name={`education-location-${index}`}
                                        className='inputField w-5/6 outline-none rounded-sm h-8 pl-2 border-2'
                                        value={education.location}
                                        onChange={(e) => onChange('education', { location: e.target.value }, index)}
                                    />
                                </div>
                                <div className="educationDateEntry w-full flex justify-between items-center mt-3 mb-1">
                                    <div className="inputEntry w-full mr-2">
                                        <label htmlFor={`education-startDate-${index}`} className='font-medium text-gray-700'>Start Date</label>
                                        <input
                                            placeholder='Start Date'
                                            type="text"
                                            name={`education-startDate-${index}`}
                                            className='inputField w-full outline-none rounded-sm h-8 pl-2 border-2'
                                            value={education.startDate}
                                            onChange={(e) => onChange('education', { startDate: e.target.value }, index)}
                                        />
                                    </div>
                                    <div className="inputEntry w-full ml-2">
                                        <label htmlFor={`education-endDate-${index}`} className='font-medium text-gray-700'>End Date</label>
                                        <input
                                            placeholder='End Date'
                                            type="text"
                                            name={`education-endDate-${index}`}
                                            className='inputField w-full outline-none rounded-sm h-8 pl-2 border-2'
                                            value={education.endDate}
                                            onChange={(e) => onChange('education', { endDate: e.target.value }, index)}
                                        />
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    type="button"
                    className="addEducationButton bg-blue-900 text-white hover:bg-transparent border border-transparent hover:text-blue-900 hover:border-blue-900 text-lg flex justify-center items-center p-2 rounded-full transition-colors duration-200"
                    onClick={onAddEntry}
                >
                    <IoAddOutline className='addItemIcon w-7 h-7' /> Add
                </button>

                <div className="buttons w-full flex justify-between mt-4">
                    <button className='goBackButton bg-transparent self-start hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded' onClick={() => setform(5)}>Back</button>
                    <button className='goNextButton bg-transparent self-end hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded' onClick={() => setform(7)}>Next</button>
                </div>
            </form>
        </>
    );
}

export default EducationForm;
