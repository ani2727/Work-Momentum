import React, { useRef,useState } from 'react';
import "./Contact.css";
import axios from "axios";

const Contact = () => {

  const [name,setName] = useState('');
  const [mail,setMail] = useState('');

  const Name = useRef();
  const Email = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const res = await axios.post("http://localhost:3001/user/register", {
        userName: name,
        email: mail
      });
      alert(res.data); // Show success message
    } catch (err) {
      alert(err.message); // Show error message from server response
    }
  };

  return (
    <div className='contact'>
      <div className='contact-data'>
        <form onSubmit={handleSubmit}> {/* Wrap inputs and button in a form element */}
          <div className='Email'>
            <label>UserName</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} ref={Name} type='text' required />
          </div>
          <div className='Email'>
            <label>Email</label>
            <input value={mail} onChange={(e)=>setMail(e.target.value)} ref={Email} type='email' required />
          </div>
          <button type="submit">Submit</button> {/* Use type="submit" to trigger form submission */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
