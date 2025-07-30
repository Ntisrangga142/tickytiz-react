import logoImg from "/assets/imgs/logo/logo.png";
import Image from "../atoms/Image";

function LogoSR() {
    const altImage = "logo.png";
    const classImage = "w-[17.25rem] h-[6.5rem]";

  return (
        <div className="mt-[80px]">
          <Image src={logoImg} alt={altImage} className={classImage} />
        </div>
  )
}

export default LogoSR