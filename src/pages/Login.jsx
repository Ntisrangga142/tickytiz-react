// import {} from 'react'
import Logo from '../atoms/Image.jsx'
import FormLogin from '../organism/FormLogin.jsx'

import logoImg from '../../public/logo/logo.png'
import googleIcon from '../assets/imgs/icon/icon-google.png'
import facebookIcon from '../assets/imgs/icon/icon-facebook.png'

import '../styles/login.css'
import '../styles/global.css'

function Login() {

  return (
    <>
    <Logo src={logoImg}  alt='logo-putih' />

    <main>
      <div>
        <h1>Welcome Back</h1>
        <p>Sign in with your data that you entered during your registration</p>
      </div>

      <FormLogin />

      <div>
        <div>
          <hr />
          <p>Or</p>
          <hr />
        </div>

        <div>
          <div className="loginCard">
            <a href="#">
              <img src={googleIcon} alt="google.png" />
              Google
            </a>
          </div>

          <div className="loginCard">
            <a href="#">
              <img
                src={facebookIcon}
                alt="facebook.png"
              />
              Facebook
            </a>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default Login