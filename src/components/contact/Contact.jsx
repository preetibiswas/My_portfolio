import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pjx4l1u', 'template_jygtj6k', form.current, 'kqKn5ynm9hnLld86q')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get IN Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>preetibiswas3@gmail.com</h5>
            <a href="mailto:biswas.preeti111@gmail.com">send a message</a>
            </article>
            <article className='contact__option'>
            <RiMessengerLine/>
            <h4>messanger</h4>
            <h5>Preeti</h5>
            <a href="https://m.me/preeti.biswas.98">send a message</a>
            </article>
            <article className='contact__option'>
            <BsWhatsapp/>
            <h4>Whtsapp</h4>
            <h5>123572818</h5>
            <a href="https://api.whatsapp.com/send?phone=+917906618413">send a message</a>
            </article>
        </div>
        {/*end of contact option*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='your name' required />
          <input type="email" name="email" placeholder='your email' required />
          <textarea name="message" rows="7" placeholder='your Message' required></textarea>
          <button type='submit' className='btn btn-primary' >Send message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact