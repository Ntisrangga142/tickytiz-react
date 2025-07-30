import Image from "../atoms/Image";

function LoginCard({ src, alt, content }) {
  const classDiv =
    "loginCard w-[182px] h-[64px] shadow-[0_4px_10px_0_#00000014] rounded";
  const classA =
    "text-[#A0A3BD] text-[18px] font-semibold no-underline relative top-[15px] left-0";

  return (
    <div className={classDiv}>
      <a href="#" className={classA}>
        <Image src={src} alt={alt} className="w-[30px] absolute top-[-3px] left-[-35px]" />
        {content}
      </a>
    </div>
  );
}

export default LoginCard;
