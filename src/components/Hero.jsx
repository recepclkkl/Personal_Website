import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import data from '../data/data.js';
import { useLang } from '../context/LanguageContext.jsx';

function Hero() {
    const { lang } = useLang();
    const heroData = data[lang].heroSection;

  return (
    <>
    {/* <div className="flex flex-column gap-[67px] absolute border w-[1140px] h-[428px] justify-between" style={{ top: "237px" }}>
        <div className="w-[596px] h-[428px] flex flex-col gap-10">
            <div className="w-[201px] h-[28px] flex items-center justify-between">
                <hr className="border-1px w-[102px] border-[#3730A3] dark:border-[#B7AAFF]"/>
                <p className="w-[89px] h-[28px] font-medium text-lg leading-7 tracking-normal font-inter text-[#4338CA] dark:text-[#B7AAFF]">{heroData.name}</p>
            </div>
            
            <p className="w-[700px] h-[144px] font-bold text-[68px] text-[#1F2937] dark:text-[#AEBCCF] leading-[72px] tracking-normal font-inter ">{heroData.intro}</p>
            <p className="w-[530px] h-[83px] text-base text-[#6B7280] dark:text-[#FFFFFF] leading-7 tracking-normal font-inter ">{heroData.desc}</p>
            
            <div className="w-[421px] h-[52px] top-[613px]  flex gap-[12px] font-medium text-[18px] leading-[28px] tracking-normal font-inter" >
                <button className="w-[131px] h-[52px] text-[#FFFFFF] dark:text-[#000000] bg-[#3730A3] dark:bg-[#E1E1FF] rounded-lg">
                    Hire Me
                </button>

                <a href={heroData.socials[0].link} className="w-[127px] h-[52px] flex gap-[10px] items-center justify-center text-[#3730A3] dark:text-[#E1E1FF] border-solid border-[1px] border-[#3730A3] dark:border-[#E1E1FF] rounded-lg">
                    <FontAwesomeIcon icon={faGithub} className="text-[#3730a3] dark:text-[#BAB2E7]" />Github
                </a>

                <a href={heroData.socials[1].link} className="w-[139px] h-[52px] flex gap-[10px] items-center justify-center text-[#3730A3] dark:text-[#E1E1FF] border-solid border-[1px] border-[#3730A3] dark:border-[#E1E1FF] rounded-lg">
                    <FontAwesomeIcon icon={faLinkedinIn} className="text-[#3730a3] dark:text-[#BAB2E7]"/> Linkedin
                </a>
            </div>
        </div>
        <div className="w-[544px] h-[428px]">
            <img className=" w-[476px] h-[375px] object-cover rounded-[18px]" src={heroData.profileImage} alt="hero" />
        </div>
    </div> */}

    <div className="flex flex-column gap-[67px] absolute border w-[1140px] h-[428px] justify-between
    max-[540px]:flex max-[540px]:w-[730px] max-[540px]:h-auto max-[540px]:p-4 max-[540px]:gap-6 max-[540px]:top-[200px] top-[237px]">
        <div className="w-[596px] h-[428px] flex flex-col gap-10
        max-[540px]:w-full max-[540px]:h-auto max-[540px]:gap-6">
            <div className="w-[201px] h-[28px] flex items-center justify-between
            max-[540px]:w-full max-[540px]:justify-start max-[540px]:gap-2">
                <hr className="border-1px w-[102px] border-[#3730A3] dark:border-[#B7AAFF]
                max-[540px]:w-[60px]"/>
                <p className="w-[89px] h-[28px] font-medium text-lg leading-7 tracking-normal font-inter text-[#4338CA] dark:text-[#B7AAFF]
                    max-[540px]:text-base">
                    {heroData.name}
                </p>
            </div>

            <p className="w-[700px] h-[144px] font-bold text-[68px] text-[#1F2937] dark:text-[#AEBCCF] leading-[72px] tracking-normal font-inter 
            max-[540px]:w-full max-[540px]:h-auto max-[540px]:text-[32px] max-[540px]:leading-[38px]">
            {heroData.intro}
            </p>

            <p className="w-[530px] h-[83px] text-base text-[#6B7280] dark:text-[#FFFFFF] leading-7 tracking-normal font-inter
            max-[540px]:w-full max-[540px]:text-sm max-[540px]:leading-6">
            {heroData.desc}
            </p>

            <div className="w-[421px] h-[52px] flex gap-[12px] font-medium text-[18px] leading-[28px] tracking-normal font-inter
            max-[540px]:flex max-[540px]:w-full max-[540px]:h-auto max-[540px]:gap-3">
                <button className="w-[131px] h-[52px] text-[#FFFFFF] dark:text-[#000000] bg-[#3730A3] dark:bg-[#E1E1FF] rounded-lg
                    max-[540px]:w-full max-[540px]:h-[45px] max-[540px]:text-base">
                    Hire Me
                </button>

                <a
                    href={heroData.socials[0].link}
                    className="w-[127px] h-[52px] flex gap-[10px] items-center justify-center text-[#3730A3] dark:text-[#E1E1FF] border border-[#3730A3] dark:border-[#E1E1FF] rounded-lg
                    max-[540px]:w-full max-[540px]:h-[45px] max-[540px]:text-base">
                    <FontAwesomeIcon icon={faGithub} className="text-[#3730a3] dark:text-[#BAB2E7]" />
                    Github
                </a>

                <a
                    href={heroData.socials[1].link}
                    className="w-[139px] h-[52px] flex gap-[10px] items-center justify-center text-[#3730A3] dark:text-[#E1E1FF] border border-[#3730A3] dark:border-[#E1E1FF] rounded-lg
                    max-[540px]:w-full max-[540px]:h-[45px] max-[540px]:text-base">
                    <FontAwesomeIcon icon={faLinkedinIn} className="text-[#3730a3] dark:text-[#BAB2E7]" />
                    Linkedin
                </a>
            </div>
        </div>

        <div className="w-[544px] h-[428px]
            max-[540px]:w-full max-[540px]:h-auto">
            <img className="w-[476px] h-[375px] object-cover rounded-[18px]
                max-[540px]:w-full max-[540px]:h-auto max-[540px]:rounded-xl"
            src={heroData.profileImage}
            alt="hero"/>
        </div>
    </div>

    </>
  )
}
export default Hero;