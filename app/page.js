'use client'
import { useState } from 'react';
import Link from 'next/link';
import Modal from '@/components/Modal';
import Contact from '@/components/Contact';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='container fade-in'>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Contact />
        <button onClick={closeModal}>Close</button>
      </Modal>

      <div className='page-title'>
        <h1>Nicholas R. Kolodziej</h1>
        <h2>Application Developer</h2>
      </div>

      <div className='navigation'>
        <Link href='/projects'><button>Personal Projects</button></Link>
        <Link href='#' onClick={openModal}><button>Contact</button></Link>
        <Link href='/cv'><button>CV</button></Link>
      </div>

      <div className='social'>
        <a href='https://github.com/koloquial' target='_blank'><FaGithub className='icon' /></a>
        <a href='https://www.linkedin.com/in/koloquial/' target='_blank'><FaLinkedin className='icon'/></a>
      </div>
    </div>
  );
}
