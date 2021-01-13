import React, {useState} from 'react';
import '../../App.css';
import axios from 'axios';
import Footer from '../Footer';


export default function Contact() {

  const {subject, setSubject} = useState(0); 
  const {message, setMessage} = useState(0);
  const {email, setEmail} = useState(0);
 
    

   
  
  
  return (
    <>
    <form className="contact-form" onSubmit={ (e) => setSubject(e)}>
  
    <label className="label-contact" htmlFor="message-name">Subject</label>
    <input onChange={e => setSubject(e.target)} name="subject" class="subject" type="text" placeholder="Subject" value={subject}/>

    <label className="label-contact"htmlFor="message-input">Your Message</label>
   <textarea onChange={e => setMessage(e.target.value)} name="message" class="message-input" type="text" placeholder="Please write your message here" value={message} required/>

   <label className="label-contact"htmlFor="email">Your Email</label>
   <input onChange={(e) => setEmail(e.target.value)} name="email" class="email" type="email" placeholder="your@email.com" required value={email} />

   <div className="label-contact">
     
   </div>
  </form>
  <Footer />>
  </>)
}
