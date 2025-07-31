import logo from '/assets/imgs/logo/logo-1.png'

import Image from '../atoms/Image'

function LogoHeader() {
  return (
    <div>
        <Image src={logo} alt="logo.png" className="w-[130px] h-[51px]" />
    </div>
  )
}

export default LogoHeader