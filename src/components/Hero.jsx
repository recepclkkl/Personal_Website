import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

function Hero() {
  
  return (
    <>
    <div className="flex flex-column gap-[67px] absolute border w-[1140px] h-[428px] justify-between" style={{ top: "237px" }}>
        <div className="w-[596px] h-[428px] flex flex-col gap-10">
            <div className="w-[201px] h-[28px] flex items-center justify-between">
                <hr className="border-1px w-[102px] border-[#3730A3]"/>
                <p className="w-[89px] h-[28px] font-medium text-lg leading-7 tracking-normal font-inter text-[#4338CA]">Almila Su</p>
            </div>
            
            <p className="w-[600px] h-[144px] font-bold text-[72px] text-[#1F2937] leading-[72px] tracking-normal font-inter" style={{ top: "305px" ,left:"125px" }}>Creative thinker Minimalism lover</p>
            <p className="w-[530px] h-[83px] text-base text-[#6B7280] leading-7 tracking-normal font-inter" style={{ top: "489px" }} >Hi, I’m Almila. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.</p>
            
            <div className="w-[421px] h-[52px] top-[613px]  flex gap-[12px] font-medium text-[18px] leading-[28px] tracking-normal font-inter" >
                <button className="w-[131px] h-[52px] text-[#FFFFFF] bg-[#3730A3] rounded-lg">
                    Hire Me
                </button>

                <button className="w-[127px] h-[52px] flex gap-[10px] items-center justify-center text-[#3730A3] border-solid border-[1px] border-[#3730A3] rounded-lg">
                    <FontAwesomeIcon icon={faGithub} style={{ color: "#3730a3" }} />Github
                </button>

                <button className="w-[139px] h-[52px] flex gap-[10px] items-center justify-center text-[#3730A3] border-solid border-[1px] border-[#3730A3] rounded-lg">
                    <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#3730a3" }}/> Linkedin
                </button>
            </div>
        </div>
        <div className="w-[544px] h-[428px]">
            <img className=" w-[476px] h-[375px] object-cover rounded-[18px]" src="./src/pictures/hero.png" alt="hero" />
        </div>
    </div>
    </>
  )
}
export default Hero;