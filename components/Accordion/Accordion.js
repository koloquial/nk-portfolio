'use client'
import { useState, useEffect } from 'react';

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='accordion'>
       
          <div className='accordion-sm'>
            {sections.map((section, index) => {
              return  (
                <div key={index} className='accordion-item'>
                  <div
                    className={activeIndex === index ? 'accordion-header-active' : 'accordion-header'}
                    onClick={() => handleToggle(index)}>
                      <h4>{section.title}</h4>
                  </div>

                  {activeIndex === index && (
                    <div className='accordion-content'>
                      {section.content}
                    </div>
                  )}
                </div>
              )})}
            </div>

            <div className='accordion-md'>
              {sections.map((section, index) => {
                return (
                  <div key={index} className='accordion-item'>
                    <div className='accordion-header-active'>
                      <h4>{section.title}</h4>
                    </div>
                    
                    <div className='accordion-content'>
                      {section.content}
                    </div>
                </div>
                )
              })}
            </div>

          
            <div className='accordion-lg'>
              {sections.map((section, index) => (
                <div key={index} className='accordion-item'>
                  <div
                    className={activeIndex === index ? 'accordion-header-active' : 'accordion-header'}
                    onClick={() => handleToggle(index)}>
                      <h4>{section.title}</h4>
                  </div>

                  {activeIndex === index && (
                    <div className='accordion-content'>
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
          </div>
    </div>
  );
};

export default Accordion;
