'use client'
import { useState } from 'react';
import './styles.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <div className='modal-content'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
