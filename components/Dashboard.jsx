import React,{useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '/Users/ACER/my-react-app/src/pages/content.css';


const Dashboard = () => {

    const [showPopup, setShowPopup] = useState(true);
    const [showSignup, setShowSignup] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

  
    const handleSubmit = (e) => {
      e.preventDefault();

      console.log('Form submitted!');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
  
      setName('');
      setEmail('');
      setMessage('');
    };
    
    useEffect(() => {
      const showPopupBtn = document.querySelector(".btn");
      const formPopup = document.querySelector(".form-popup");
      const hidePopupBtn = formPopup.querySelector(".close-btn");
      const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");
  
      const handlePopupToggle = () => {
        document.body.classList.toggle("show-popup");
        setShowPopup(!showPopup);
      };
  
      showPopupBtn.addEventListener("click", handlePopupToggle);
  
      const handleHidePopup = () => {
        showPopupBtn.click();
      };
  
      hidePopupBtn.addEventListener("click", handleHidePopup);

    
      return () => {
        
        showPopupBtn.removeEventListener("click", handlePopupToggle);
        hidePopupBtn.removeEventListener("click", handleHidePopup);
        signupLoginLink.forEach(link => {
          link.removeEventListener("click", () => {});
        
         
        });
      };
    }, [showPopup]);
  
    return (
      <div className="Home">

      <div className={`Login ${showPopup ? 'show-popup' : ''}`}>
        <div className="blur-overlay">
        <div className="form-popup">
         <NavLink className ="close-btn" onClick={() => setShowPopup(false)}>
            <i className="fa-regular fa-circle-xmark"></i>
         </NavLink>
    
     <div className="Message">
            <form onSubmit={handleSubmit}>
              <label htmlFor="fname">NAME</label><br />
              <div className="pb-2 mb-4 text-warning border-bottom border-warning">
                <input
                  type="text"
                  className="form-control"
                  style={{ border: 'none' }}
                  id="name"
                  placeholder="Your Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control border-warning"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <br />
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: '100px' }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <label htmlFor="floatingTextarea2" className="text-warning">Message</label><br />

                <button type="submit" className="SubmitButton">SUBMIT</button>
              </div>
            </form>
            </div>
            </div>
            </div>
          </div>
         
        <button className="btn" onClick={() => setShowPopup(!showPopup)}> </button>
  
       
      </div>
    
      
   );

};

 export default Dashboard;
