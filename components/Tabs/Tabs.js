'use client'
import './styles.css';
import { useState } from 'react';

const Tab = ({ label, onClick, isActive }) => {
  return (
    <button
      className={`tab${isActive ? '-active' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const Tabs = ({ tabLabels, tabContents }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className='tabs'>
        {tabLabels.map((label, index) => (
          <Tab
            key={index}
            label={label}
            onClick={() => handleTabClick(index)}
            isActive={activeTab === index}
          />
        ))}
      </div>
      <div className='tab-content'>
        {tabContents[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;