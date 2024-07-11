import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle the form submission here, e.g., by sending the data to a server.
    console.log(formData);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: '10px 0' }}>
          <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold' }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ margin: '10px 0' }}>
          <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold' }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ margin: '10px 0' }}>
          <label htmlFor="subject" style={{ display: 'block', fontWeight: 'bold' }}>
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ margin: '10px 0' }}>
          <label htmlFor="message" style={{ display: 'block', fontWeight: 'bold' }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ margin: '10px 0' }}>
          <button type="submit" style={{ backgroundColor: '#0074cc', color: '#fff', padding: '10px 20px', border: 'none' }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
