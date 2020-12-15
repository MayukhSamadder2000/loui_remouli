import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';


export default function Contact() {

    const sendMail=(e)=>{
         e.preventDefault();

    emailjs.sendForm('service_2trvam1', 'template_rmf37hj', e.target, 'user_aqKLb9EKSSXUMA9tXgvqI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      window.alert('Message Sent')
    }

    return (
        <div className="contact">
            <form action="" className="contact_form" onSubmit={sendMail}>
                <h1>Get in touch</h1>
                <input type="text" className="name" name="name" placeholder="Full Name"/>
                <input type="email" className="email" name="email" placeholder="Email address"/>
                <textarea name="message" id="message" cols="51" rows="10" className="message" placeholder="Write Your Message"></textarea>
                <button type="submit" className="btn btn-submit">Send Message</button>
            </form>
        </div>
    )
}
