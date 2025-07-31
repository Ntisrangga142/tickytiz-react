import ChooseUsCard from "../molecules/ChooseUsCard";

import iconShield   from '/assets/imgs/home/icon/icon-shield.png'
import iconCircle   from '/assets/imgs/home/icon/icon-circle.png'
import iconliveChat from '/assets/imgs/home/icon/icon-liveChat.png'

function ChooseUs() {
    const classChooseUs = "flex flex-col gap-[20px]";
    const content ="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet."

  return (
    <section className="pt-[54px] pr-[130px] pb-[36px] pl-[130px]">
      <div className="w-full">
        <h2 className="font-bold text-[18px] tracking-[0.75px] text-[#1D4ED8]">WHY CHOOSE US</h2>
        <h1 className="mt-[14px] w-[638px] text-[32px] font-medium tracking-[1px] text-[#121212]">Unleashing the Ultimate Movie Experience</h1>
      </div>

      <div className="flex flex-row gap-[34px] mt-[24px]">
        <ChooseUsCard divClass={classChooseUs} srcImg={iconShield} altImg='shield-icon' classImg="" titleCard="Guaranteed" content={content}/>
        <ChooseUsCard divClass={classChooseUs} srcImg={iconCircle} altImg='circle-icon' classImg="" titleCard="Affordable" content={content}/>
        <ChooseUsCard divClass={classChooseUs} srcImg={iconliveChat} altImg='liveChat-icon' classImg="" titleCard="24/7 Customer Support" content={content}/>
      </div>
    </section>
  );
}

export default ChooseUs;
