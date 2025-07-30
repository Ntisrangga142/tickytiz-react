import { useState } from 'react'
import Input from '../molecules/Input.jsx'
import ButtonSR from '../atoms/ButtonSR.jsx'

function FormLogin({className}) {
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

    const classCText = "mt-[26px] flex flex-col justify-start w-full text-start"

  return (
    <form onSubmit={handleSubmit} className={className}>
        <Input divClass={classCText} labelFor='email' labelMsg='Email' inputType='email' inputName='email' inputId='email' inputPlaceholder="Enter your email" />
        <br></br><p>{emailValid}</p>
        <Input divClass={classCText} labelFor='pass' labelMsg='Password' inputType='password' inputName='pass' inputId='pass' inputPlaceholder="Enter your password" />
        <br></br><p>{passValid}</p>
        <div className='flex justify-end flex-row'>
            <a href="#" className='text-[#1D4ED8] text-base font-normal tracking-[1px] mt-[26px]'>Forgot your password?</a>
        </div>
        <ButtonSR type='submit' msg='Login' />
        <br /><h1>{userValid}</h1>
    </form>
  )
}

export default FormLogin