// import React, { useRef,useState } from 'react';
// import "./Contact.css";
// import axios from "axios";

// const Contact = () => {

//   const [name,setName] = useState('');
//   const [mail,setMail] = useState('');

//   const defaultImageUrl = 'https://res.cloudinary.com/dkdslxqqx/image/upload/v1717658764/iwlasfaj6duzq9qw55hy.webp';

//   const [isPopupOpen, setPopupOpen] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');
//   const [popupImage, setPopupImage] = useState(defaultImageUrl);
//   const [header,setHeader] = useState('');

//   const Name = useRef();
//   const Email = useRef();

//   const openPopup = (head,message, imageUrl = defaultImageUrl) => {
//     setPopupMessage(message);
//     setPopupImage(imageUrl);
//     setHeader(head)
//     setPopupOpen(true);
// }

// const closePopup = () => {
//     setPopupOpen(false);
//     setName(''); 
//     setMail(''); 
//     Name.current.value = '';
//     Email.current.value = '';
// }

 
//   const handleSubmit = async (event) => {
//     event.preventDefault(); 

//     try {
//           await axios.post("https://work-momentum.onrender.com/user/register", {userName: name,email: mail});
//           openPopup('Thank You','Your details have been successfully submitted. Thanks', 'https://res.cloudinary.com/dkdslxqqx/image/upload/v1718458077/404-tick_e51zjo.png');

//     } 
//     catch (err) 
//     {
//       openPopup('Sorry','Try again', 'https://png.pngtree.com/png-vector/20221215/ourmid/pngtree-wrong-icon-png-image_6525689.png');
//     }
//   };

//   return (
//     <>
//             {isPopupOpen ? (
//                 <div className='contact-popup-container'>
//                     <div className="contact-popup open-popup">
//                         <img src={popupImage} alt='Success' />
//                         <h2>{header}</h2>
//                         <p>{popupMessage}</p>
//                         <button type='button' className="contact-popup-btn" onClick={closePopup}>OK</button>
//                     </div>
//                 </div>
//             ) :(
//               <div className='contact'>
//               <div><img src="contactus.svg" alt="" /></div>
//               <div className='contact-data'>
//                 <h1>Contact Us</h1>
//                 <form onSubmit={handleSubmit}> {/* Wrap inputs and button in a form element */}
//                   <div className='Email'>
//                     <label>Name</label>
//                     <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} ref={Name} type='text' required />
//                   </div>
//                   <div className='Email'>
//                     <label>Email</label>
//                     <input placeholder='Email' value={mail} onChange={(e)=>setMail(e.target.value)} ref={Email} type='email' required />
//                   </div>
//                   <button type="submit">Submit</button> {/* Use type="submit" to trigger form submission */}
//                 </form>
//               </div>
//             </div>
//             )
//           }
//     </>
    
//   );
// };

// export default Contact;


import React, { useRef, useState } from 'react';
import './Contact.css';
import axios from 'axios';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {

  const [name,setName] = useState('');
  const [mail,setMail] = useState('');
  const [message,setMessage] = useState('');
  const [mobile,setMobile] = useState('');

  const defaultImageUrl = 'https://res.cloudinary.com/dkdslxqqx/image/upload/v1717658764/iwlasfaj6duzq9qw55hy.webp';

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupImage, setPopupImage] = useState(defaultImageUrl);
  const [header,setHeader] = useState('');

  const Name = useRef();
  const Email = useRef();
  const Message = useRef();
  const Mobile = useRef();

  const openPopup = (head,message, imageUrl = defaultImageUrl) => {
    setPopupMessage(message);
    setPopupImage(imageUrl);
    setHeader(head);
    setPopupOpen(true);
}

  const closePopup = () => {
    setPopupOpen(false);
    setName(''); 
    setMail(''); 
    Name.current.value = '';
    Email.current.value = '';
    Mobile.current.value = '';
    Message.current.value = '';
}

 
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
          await axios.post("https://work-momentum.onrender.com/user/register", {userName: name,email: mail,mobile,message});
          openPopup('Thank You','Your details have been successfully submitted. Thanks', 'https://res.cloudinary.com/dkdslxqqx/image/upload/v1718458077/404-tick_e51zjo.png');

    } 
    catch (err) 
    {
      openPopup('Sorry','Try again', 'https://png.pngtree.com/png-vector/20221215/ourmid/pngtree-wrong-icon-png-image_6525689.png');
    }
  };

  return (
    <>
            {isPopupOpen ? (
                <div className='contact-popup-container'>
                    <div className="contact-popup open-popup">
                        <img src={popupImage} alt='Success' />
                        <h2>{header}</h2>
                        <p>{popupMessage}</p>
                        <button type='button' className="contact-popup-btn" onClick={closePopup}>OK</button>
                    </div>
                </div>
            ) :(
              <div className='contact'>
                <h1>Get in touch with us</h1>
                <div className='follow-us'>
                  <a href='https://www.instagram.com/workmomentum?igsh=MTg3dXFtZjMybnp1Zw==' ><FaInstagram size={35}/></a>
                  <a href='https://wa.me/9705501016'><FaWhatsapp size={35} /></a>
                  <a href='https://www.linkedin.com/company/workmomentum' ><FaLinkedin size={35}/></a>
                </div>
              {/* <div><img src="contactus.svg" alt="" /></div> */}
              <div className='contact-info'>
                <h2>Hyderabad</h2>
                <p>Madhapur,Hyd</p>
                <p>hr@workmomentum.com</p>
                <p>+91 92814 88820</p>
              </div>
              <div className='contact-data'>
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}> {/* Wrap inputs and button in a form element */}
                  <div className='Email'>
                    <label>Name</label>
                    <input placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)} ref={Name} type='text' required />
                  </div>
                  <div className='Email'>
                    <label>Email</label>
                    <input placeholder='Your Email' value={mail} onChange={(e)=>setMail(e.target.value)} ref={Email} type='email' required />
                  </div>
                  <div className='Email'>
                    <label>Mobile Number</label>
                    <input placeholder='Your Mobile No' value={mobile} onChange={(e)=>setMobile(e.target.value)} ref={Mobile} type='text' required />
                  </div>
                  <div className='Email'>
                    <label>Description</label>
                    <textarea placeholder='Write a Message' value={message} onChange={(e)=>setMessage(e.target.value)} ref={Message} type='text' required />
                  </div>
                  <button type="submit">Submit</button> {/* Use type="submit" to trigger form submission */}
                </form>
              </div>
            </div>
            )
          }
    </>
  );
};

export default Contact;
