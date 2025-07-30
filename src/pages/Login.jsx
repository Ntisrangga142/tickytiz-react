
import LogoSR from "../molecules/LogoSR.jsx";
// import { Link } from "react-router";

import googleIcon   from "/assets/imgs/icon/icon-google.png";
import facebookIcon from "/assets/imgs/icon/icon-facebook.png";

import FormLogin from "../organism/FormLogin.jsx";
import Or from "../molecules/Or.jsx";
import LoginCard from "../molecules/LoginCard.jsx";

function Login() {
  const classBody =
  "bg-fixed bg-cover bg-no-repeat flex flex-col items-center font-sans w-full";
  const classMain =
  "bg-[#FFFFFF] w-[546px] h-[825px] rounded-[0.5rem] mt-[21px] mb-[63px] p-[74px] flex flex-col items-start";

  const styleBody = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(src/assets/imgs/log-in/background-login.png)`
  }
  
  
  return (
    <>
      <div className={classBody} style={styleBody}>
        <LogoSR />

        <main className={classMain}>
          <div className="w-[400px]">
            <h1 className="font-bold text-[32px] tracking-[1px] w-full">
              Welcome Back 👋
            </h1>
            <p className="w-full font-sans font-normal text-[18px] tracking-[0.007em] text-[#A0A3BD] mt-[34px]">
              Sign in with your data that you entered during your registration
            </p>
          </div>

          <FormLogin className="w-full" />

          <div className="w-full">
            <Or />

            <div className="flex flex-row justify-between mt-[26px] text-center">
              <LoginCard src={googleIcon} alt="google-icon" content="Google" />

              <LoginCard src={facebookIcon} alt="facebook-icon" content="Facebook" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Login;
