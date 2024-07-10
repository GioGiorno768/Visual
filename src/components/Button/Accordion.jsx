import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useRef } from 'react';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="border-b border-gray-200 bg-white w-full ">
      <button
        className="flex justify-between w-full px-4 py-2 text-left text-gray-700  focus:outline-none"
        onMouseEnter={() => setIsOpen(!isOpen)}
        onMouseLeave={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <FontAwesomeIcon className='text-sm font-light text-gray-700' icon={`fa-solid ${isOpen ? "fa-chevron-down" : "fa-chevron-right"} `} />
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
        style={{ maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0' }}
      >
        <div className="px-4 py-2 text-gray-600 bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
