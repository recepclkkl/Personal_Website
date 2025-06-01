import { useLang } from '../context/LanguageContext.jsx';
import data from '../data/data.js';

function Skills () {
    const { lang } = useLang();
    const skillsData = data[lang].skillsSection;


  return (
        // <div className="absolute flex w-[1140px] h-auto top-[789px] flex-col">
        //     <p className="font-semibold w-full h-[64px] text-[48px] leading-[48px] font-inter text-gray-800 dark:text-[#AEBCCF]">

        //             {skillsData.title}
        //     </p>
            
        //         <div className="w-full flex gap-[120px] mt-[30px] flex-wrap">

        //             {skillsData.skills.map((skill, index) => (
        //                 <div key={index} className="flex flex-col justify-between w-[300px] h-[104px]">
        //                     <p className="font-medium text-[30px] text-[#4338CA] dark:text-[#B7AAFF] leading-[28px] tracking-normal font-inter">
        //                         {skill.name}
        //                     </p>
        //                     <p className="font-normal text-xs text-[#6B7280] dark:text-[#FFFFFF] leading-4 tracking-normal font-inter">
        //                         {skill.desc}
        //                     </p>
        //                 </div>
        //             ))}
        //     </div>
        // </div>

        <div className="absolute flex w-[1140px] h-auto top-[789px] flex-col
            max-[540px]:w-[730px] max-[540px]:top-[600px] max-[540px]:px-4">
            <p className="font-semibold w-full h-[64px] text-[48px] leading-[48px] font-inter text-gray-800 dark:text-[#AEBCCF]
                max-[540px]:text-[28px] max-[540px]:leading-[32px] max-[540px]:h-auto">
                {skillsData.title}
            </p>

            <div className="w-full flex gap-[120px] mt-[30px] flex-wrap
                max-[540px]:gap-[24px] max-[540px]:mt-[20px]">
                {skillsData.skills.map((skill, index) => (
                <div key={index} className="flex flex-col justify-between w-[300px] h-[104px]
                    max-[540px]:w-full max-[540px]:h-auto">
                    <p className="font-medium text-[30px] text-[#4338CA] dark:text-[#B7AAFF] leading-[28px] tracking-normal font-inter
                    max-[540px]:text-[20px] max-[540px]:leading-[24px]">
                    {skill.name}
                    </p>
                    <p className="font-normal text-xs text-[#6B7280] dark:text-[#FFFFFF] leading-4 tracking-normal font-inter
                    max-[540px]:text-sm max-[540px]:leading-5 mt-1">
                    {skill.desc}
                    </p>
                </div>
                ))}
            </div>
        </div>


        );

        }


export default Skills;
