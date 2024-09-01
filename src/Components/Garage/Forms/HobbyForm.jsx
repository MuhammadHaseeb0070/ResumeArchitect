import React, { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { IoAddOutline } from 'react-icons/io5';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './form.css'; // Make sure this imports your CSS file

function HobbyForm({ setform, hobbies, onChange, onAddEntry, onRemoveEntry }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };



    return (
        <>
            <form className='personalDetailForm max-w-md w-full flex flex-col items-center justify-center p-6 shadow-2xl'>
                <h4 className='formHeader w-full text-center text-2xl font-semibold mb-5'>Hobbies</h4>
                <div className='personalFormContainer w-full flex flex-col items-center justify-center'>
                    {hobbies.map((hobby, index) => (
                        <div key={index} className='hobbiesFormEntry w-full flex flex-col items-start justify-center mt-3 mb-2 shadow-md p-4'>
                            <div className="accordionHeader w-full flex items-center justify-between cursor-pointer" onClick={() => toggleAccordion(index)}>
                                <span>{hobby.name || `Hobby ${index + 1}`}</span>
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
                                <div className='inputEntry w-full flex flex-col items-start justify-center mt-3 mb-1'>
                                    <label htmlFor={`hobbies-name-${index}`}>Hobby Name</label>
                                    <input
                                        placeholder='Hobby'
                                        type='text'
                                        id={`hobby-name-${index}`}
                                        name={`hobby-name-${index}`}
                                        className='inputField w-5/6 outline-none rounded-sm h-8 pl-2 border-2'
                                        value={hobby.name || ''}
                                        onChange={(e) => onChange('hobbies', { name: e.target.value }, index)}
                                    />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                <button
                    type='button'
                    className='addLinkButton bg-blue-900 text-white hover:bg-transparent border border-transparent hover:text-blue-900 hover:border-blue-900 text-lg flex justify-center items-center p-2 rounded-full transition-colors duration-200'
                    onClick={onAddEntry}
                >
                    <IoAddOutline className='addItemIcon w-7 h-7' /> Add
                </button>

                <div className="buttons w-full flex justify-between mt-4">
                    <button className='goBackButton bg-transparent self-start hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded' onClick={() => setform(3)}>Back</button>
                    <button className='goNextButton bg-transparent self-end hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded' onClick={() => setform(5)}>Next</button>
                </div>
            </form>
        </>
    );
}

export default HobbyForm;
