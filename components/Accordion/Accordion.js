'use client'
import { useState, useEffect } from 'react';

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window ? window.innerWidth : '');
  const [windowHeight, setWindowHeight] = useState(window ? window.innerHeight: '');

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    try{
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }catch(e){

    }
  }, []);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='accordion'>
        {windowWidth < 768 ? 
          <>
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
          </> : <></>}

          {windowWidth >= 768 && windowWidth < 1024 ? 
            <>
              {sections.map((section, index) => (
                <div key={index} className='accordion-item'>
                  
                  <div className='accordion-header-active'>
                    <h4>{section.title}</h4>
                  </div>
                  
                  <div className='accordion-content'>
                    {section.content}
                  </div>
                  
                </div>
              ))}
            </> : <></>} 

            {windowWidth > 1023 ? 
          <>
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
          </> : <></>}
    </div>
  );
};

export default Accordion;
