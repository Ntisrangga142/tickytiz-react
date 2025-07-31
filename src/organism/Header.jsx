import LogoHeader from "../molecules/LogoHeader"
import Nav from "../molecules/Nav"
import SignInUp from "./SignInUp"


function Header() {
  const classHeader = "bg-white border-b border-[#DEDEDE] w-full h-[104px] flex flex-row justify-between items-center px-[130px] py-0";

  return (
    <header className={classHeader}>
        <LogoHeader />

        <Nav />

        <SignInUp />
    </header>
  )
}

export default Header