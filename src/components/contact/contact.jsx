import './contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function Contact() {
 
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_ys5i0fk', 'template_j0qtxek', form.current, {
          publicKey: '5hwkOXy1Jj6J0it99',
        })
        .then(
          () => {
            alert('Succes 🙋');
    console.log(form);

        },
          (error) => {
            console.log('FAILED...', error.text);
            alert('Faild 😞');
            console.log(form);
        },
        );
    };


  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <form id="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input placeholder='Your name' type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input placeholder='Your email' type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input placeholder='Type a subject' type="text" id="subject" name="subject" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea placeholder='Write your message here' id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
