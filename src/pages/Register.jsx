import {useState} from 'react'
import Logo from '../atoms/Image.jsx'
import logoImg from '../../public/logo/logo.png'


import googleIcon from '../assets/imgs/icon/icon-google.png'
import facebookIcon from '../assets/imgs/icon/icon-facebook.png'

import '../styles/signUp.css'
import '../styles/global.css'

function Register() {
    const emailRegex = /^.+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s]).{8,}$/;

    const [emailValid, setValidEmail] = useState ("")
    const [passValid, setValidPass] = useState ("")

    function setLocal(newEmail, newPass){
        const newUser = { email: newEmail, pass: newPass };
        localStorage.setItem("User", JSON.stringify(newUser));
    }

    const handleSubmit = (event) => {
      event.preventDefault();

      const email = event.target.email.value;
      console.log("Email:", email);
      
        if (!emailRegex.test(email)) {
            setValidEmail("Email format not valid!")
        } else {
          setValidEmail("")
        }

      const pass = event.target.pass.value;
      console.log("Pass:", pass);
      
        if (!passRegex.test(pass)) {
            setValidPass("Password format not valid!")
        } else {
          setValidPass("")
        }

        if (passRegex.test(pass) && emailRegex.test(email)) {
            setLocal(email, pass)
        }
    }

  return (
    <>
      <Logo src={logoImg}  alt='logo-putih' />
      
      <main>
        <div>
            <div> <div className="circle"> <h1>1</h1> </div> <p>Fill Form</p></div> <hr />
            <div> <div className="circle"> <h1>2</h1> </div> <p>Active</p></div> <hr />
            <div> <div className="circle"> <h1>3</h1> </div> <p>Done</p></div>
        </div>

        <div>
            <form onSubmit={handleSubmit}>
                <div className="ctText">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" />
                </div>

                <br/><p>{emailValid}</p>

                <div className="ctText">
                    <label for="pass">Password</label>
                    <input type="password" name="pass" id="pass" placeholder="Enter your password" />
                </div>

                <br/><p>{passValid}</p>

                <div >
                    <label for="termCheck">
                        <input type="checkbox" name="termCheck" id="termCheck" value="true" /> 
                        I agree to term & conditions
                    </label>
                </div>

                <button type="submit">Join For Free Now</button>
            </form>
        </div>
        
        <div>
            <p>Already have an account? <a href="./login.html">Log in</a></p>

            <div>
                <hr />
                <p>Or</p>
                <hr />
            </div>

            <div>
                <div className="loginCard">
                    <a href>
                        <img src={googleIcon} alt="google.png" />
                         Google
                    </a>
                </div>

                <div className="loginCard">
                    <a href>
                        <img src={facebookIcon} alt="facebook.png" />
                        Facebook
                    </a>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}

export default Register