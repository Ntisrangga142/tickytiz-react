import Image from "../atoms/Image";

function ChooseUsCard({divClass, srcImg, altImg, classImg, titleCard, content}) {
    const divFirst = "w-[54px] h-[54px] rounded-full bg-[rgba(29,78,216,0.2)] flex justify-center items-center"
    const titleClass = "text-[18px] font-bold";
    const contentClass = "font-normal text-base tracking-[0.75px] leading-[32px] text-[#A0A3BD]"

  return (
    <>
      <div className={divClass}>
        <div className={divFirst}>
          <Image src={srcImg} alt={altImg} className={classImg}/>
        </div>
        <div>
          <h3 className={titleClass}>{titleCard}</h3>
        </div>
        <div>
          <p className={contentClass}>
            {content}
          </p>
        </div>
      </div>
    </>
  );
}

export default ChooseUsCard;
