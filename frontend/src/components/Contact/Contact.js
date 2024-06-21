import React, { useRef,useState } from 'react';
import "./Contact.css";
import axios from "axios";

const Contact = () => {

  const [name,setName] = useState('');
  const [mail,setMail] = useState('');

  const defaultImageUrl = 'https://res.cloudinary.com/dkdslxqqx/image/upload/v1717658764/iwlasfaj6duzq9qw55hy.webp';

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupImage, setPopupImage] = useState(defaultImageUrl);
  const [header,setHeader] = useState('');


  const openPopup = (head,message, imageUrl = defaultImageUrl) => {
    setPopupMessage(message);
    setPopupImage(imageUrl);
    setHeader(head)
    setPopupOpen(true);
}

const closePopup = () => {
    setPopupOpen(false);
}

  const Name = useRef();
  const Email = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
          await axios.post("https://work-momentum.onrender.com/user/register", {userName: name,email: mail});
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
              <div><img src="contactus.svg" alt="" /></div>
              <div className='contact-data'>
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}> {/* Wrap inputs and button in a form element */}
                  <div className='Email'>
                    <label>Name</label>
                    <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} ref={Name} type='text' required />
                  </div>
                  <div className='Email'>
                    <label>Email</label>
                    <input placeholder='Email' value={mail} onChange={(e)=>setMail(e.target.value)} ref={Email} type='email' required />
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
