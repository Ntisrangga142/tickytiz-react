import { useState } from 'react'
import Input from '../molecules/Input.jsx'
import ButtonSR from '../atoms/ButtonSR.jsx'

import '../styles/signUp.css'
import '../styles/global.css'

function FormLogin() {
    const emailRegex = /^.+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s]).{8,}$/;

    const [emailValid, setValidEmail] = useState ("")
    const [passValid, setValidPass] = useState ("")
    const [userValid, setValidUser] = useState ("")

    function getLocal(){
      const dataJson = localStorage.getItem("User");
      return JSON.parse(dataJson);
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

        const data = getLocal();

        if (data.email ===  email && data.pass === pass && data != null) {
            setValidUser('User Found');
        } else {
            setValidUser('User Not Found !!');
        }


    }


  return (
    <form onSubmit={handleSubmit}>
        <Input divClass='ctText' labelFor='email' labelMsg='Email' inputType='email' inputName='email' inputId='email' inputPlaceholder="Enter your email" />
        <br></br><p>{emailValid}</p>
        <Input divClass='ctText' labelFor='pass' labelMsg='Password' inputType='password' inputName='pass' inputId='pass' inputPlaceholder="Enter your password" />
        <br></br><p>{passValid}</p>
        <div>
            <a href="#">Forgot your password?</a>
        </div>
        <ButtonSR type='submit' msg='Login' />
        <br /><h1>{userValid}</h1>
    </form>
  )
}

export default FormLogin