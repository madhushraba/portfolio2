import "./contact.css";

// import Phone from "../../img/phone.png";
// import Email from "../../img/email.png";
// import Address from "../../img/address.png";
// import { useContext, useRef, useState } from "react";
// import emailjs from "emailjs-com";
// import { ThemeContext } from "../../context";

const Contact = () => {
  //   const formRef = useRef();
  //   const [done, setDone] = useState(false)
  //   const theme = useContext(ThemeContext);
  //   const darkMode = theme.state.darkMode;

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     emailjs
  //       .sendForm(
  //         "service_rrvnzco",
  //         "template_3v5nih4",
  //         formRef.current,
  //         "user_DrriDPTGKO2Zj4RDXCA6W"
  //       )
  //       .then(
  //         (result) => {
  //           console.log(result.text);
  //           setDone(true)
  //         },
  //         (error) => {
  //           console.log(error.text);
  //         }
  //       );
  //   };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">GET IN TOUCH WITH ME HERE</h1>
          <div className="c-info">
            <div className="c-info-item">
              {/* <img src={Phone} alt="" className="c-icon" /> */}
              +9374789754
            </div>
            <div className="c-info-item">
              {/* <img className="c-icon" src={Email} alt="" /> */}
              madhushraba21@gmail.com
            </div>
            <div className="c-info-item">
              {/* <img className="c-icon" src={Address} alt="" /> */}
              ITI More, Kalyani, West Bengal
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>WHATS UP?</b> FEEL FREE TO DROP A MESSAGE WHENEVER YOU WANT TO
            SAY ANYTHING
          </p>
          {/* <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form> */}

          <form>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {"Thank you..."}
          </form>
        </div>
      </div>
      <div className="fot" >  ©madhushraba das</div>
    </div>
    
  );
};

export default Contact;
