import Image from '../atoms/Image'

import heroImage_1 from '/assets/imgs/home/hero-1.png'
import heroImage_2 from '/assets/imgs/home/hero-2.png'
import heroImage_3 from '/assets/imgs/home/hero-3.png'
import heroImage_4 from '/assets/imgs/home/hero-4.png'

function Hero() {
    const imgClass_1 = "w-[218px] h-[170px] [grid-area:top-left]";
    const imgClass_2 = "w-[218px] [grid-area:top-right]";
    const imgClass_3 = "w-[218px] [grid-area:bot-left]";
    const imgClass_4 = "w-[218px] [grid-area:bot-right]";

    const pClass = "font-normal text-base tracking-[0.75px] text-[#A0A3BD]";
    const h1Class ="font-medium text-[48px] tracking-[1px] text-[#121212]";
    const h2Class = "font-bold text-[18px] tracking-[0.75px] text-[#1D4ED8]"

  return (
    <section className="pt-[54px] px-[9.52%] pb-0 mb-[95px] flex flex-row justify-between">
        <div className='py-[71px] flex flex-col gap-[10px] w-[638px]'>
            <h2 className={h2Class}>MOVIE TICKET PURCHASES #1 IN INDONESIA</h2>
            <h1 className={h1Class}>Experience the Magic of Cinema: Book Your Tickets Today</h1>
            <p  className={pClass}>Sign up and get the ticket with a lot of discount</p>
        </div>

        <div className="heroImage">
            <Image src={heroImage_1} alt="hero-1.png" className={imgClass_1} />
            <Image src={heroImage_2} alt="hero-2.png" className={imgClass_2} />
            <Image src={heroImage_3} alt="hero-3.png" className={imgClass_3} />
            <Image src={heroImage_4} alt="hero-4.png" className={imgClass_4} />
        </div>
    </section>
  )
}

export default Hero