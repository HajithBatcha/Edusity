import React from 'react'
import './Contact.css';
import msg_icon from '../../images/msg-icon.png'
import mail_icon from '../../images/mail-icon.png'
import phone_icon from '../../images/phone-icon.png'
import location_icon from '../../images/location-icon.png'

 function Contact() {
      const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f00b783e-a2ad-467a-805b-0b8a53b5d4b9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted  Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
      <div className='contact-col'>
       <h3>Send us a message <img src={msg_icon} alt=''/></h3>
       <p> Feel free to reach out through contact form or find our contact information below.
       Your feedback, questions, and suggestions are important to us as we strive to provide
       exceptional service to our university community.</p>
      <ul>
         <li ><img src={mail_icon} alt=''/>Contact@Edusity.dev</li>
         <li><img src={phone_icon} alt=''/>+1 123-456-7890</li>
         <li><img src={location_icon} alt=''/>77 Massachusetts Ave, Cambridge<br/>MA 02139, United
          States</li>
     </ul>

      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type='text' name='name'placeholder='Enter your name' required></input>

            <label>Phone Number</label>
            <input type='number'name='phone' placeholder='Enter your number' required></input>

            <label>Write Your Message</label>
            <textarea name='message' rows="6" placeholder='Enter Your Message' required></textarea>

            <button type='submit' className='btn dark-btn' >Submit now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}
export default Contact