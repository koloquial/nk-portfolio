'use client'
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
    emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setStatus('Message sent.');
          setLoading(false);
          setTimeout(() => setStatus(''), 3000);
        },
        (error) => {
          setStatus('Failed to send message. Please try again later.');
          setLoading(false);
          setTimeout(() => setStatus(''), 5000);
        }
      );

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
        <h2 className='page-title'>Contact</h2>
        <hr />
        <form onSubmit={sendEmail}>
          <label>
            <p>Name:</p>
            <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                maxLength='50'
                required
            />
          </label>
          <label>
            <p>Email:</p>
            <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                maxLength='250'
                required
            />
          </label>
          <label>
            <p>Message ({formData.message.length} / 255):</p>
            <textarea
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                maxLength='250'
                required
            />
          </label>
        {!loading ? <button type='submit'>Send Message</button> : <button disabled>Sending message...</button>}
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};
