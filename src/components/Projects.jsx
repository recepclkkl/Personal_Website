import { useLang } from '../context/LanguageContext.jsx';
import data from '../data/data.js';

function Projects() {
    const { lang } = useLang();
    const projectsData = data[lang].projectSection;
  return (
    <>
        {/* <div className="absolute w-[1140px] h-[575px] border-t border-solid border-[#BAB2E7] absolute top-[1407px] ">
            <h1 className="absolute w-[191px] h-[48px] top-[40px]  font-semibold text-[48px] text-[#1F2937] dark:text-[#AEBCCF] leading-[48px] tracking-normal font-inter">{projectsData.title}</h1>

            <div className="w-[1140px] h-[449px] absolute top-[120px] flex gap-[120px]">

                {projectsData.projects.map((project, index) => (
                    <div key={index} className="w-[300px] h-[449px] flex flex-col gap-[18px]" >
                        <div className="w-[300px] h-[180px] relative overflow-hidden ">
                            <img className="absolute" src={project.image} alt="#" />
                        </div>
                        
                        <h2 className="w-[300px] h-[28px] text-[#4338CA] dark:text-[#8F88FF] font-medium text-[30px] leading-[28px] tracking-[0] font-inter">
                            {project.title}
                        </h2>
                        <p className="w-[300px] h-[126px] text-[#6B7280] font-normal text-[14px] leading-[17.5px] tracking-[0] font-inter">
                            {project.description}
                        </p>

                        <div className="w-[221px] h-[27px] flex gap-[6px] text-[#3730A3] dark:text-[#8F88FF]">
                            <button className="w-[68px] h-[27px] flex justify-center border border-solid border-[#3730A3] dark:border-[#8F88FF] rounded-[4px]">
                            {project.tags[0]}
                            </button>

                            <button className="w-[72px] h-[27px] flex justify-center border border-solid border-[#3730A3] dark:border-[#8F88FF] rounded-[4px]">
                            {project.tags[1]}
                            </button>

                            <button className="w-[69px] h-[27px] flex justify-center border border-solid border-[#3730A3] dark:border-[#8F88FF] rounded-[4px]">
                            {project.tags[2]}
                            </button>
                        </div>
                        <div className="w-[300px] h-[16px] flex justify-between">
                            <p className="w-[52px] h-[16px] font-medium text-[16px] text-[#3730A3] dark:text-[#8F88FF] leading-[16px] tracking-[0] underline font-inter">{project.github}</p>
                            <p className="w-[72px] h-[16px] font-medium text-[16px] text-[#3730A3] dark:text-[#8F88FF] leading-[16px] tracking-[0] underline font-inter">{project.live}</p>
                        </div>
                    </div>
                    ))}

            </div>
        </div> */}

        <div className="absolute w-[1140px] h-[575px] border-t border-solid border-[#BAB2E7] top-[1407px]
        max-[540px]:relative max-[540px]:w-[730px] max-[540px]:h-auto max-[540px]:top-[1000px] max-[540px]:px-4 max-[540px]:pt-8">
                <h1
                    className="absolute w-[191px] h-[48px] top-[40px] font-semibold text-[48px] text-[#1F2937] dark:text-[#AEBCCF] leading-[48px] tracking-normal font-inter
                    max-[540px]:relative max-[540px]:w-full max-[540px]:text-[28px] max-[540px]:h-auto max-[540px]:top-0">
                    {projectsData.title}
                </h1>

                <div
                    className="w-[1140px] h-[449px] absolute top-[120px] flex gap-[120px]
                    max-[540px]:relative max-[540px]:w-full max-[540px]:flex-col max-[540px]:gap-[40px] max-[540px]:h-auto max-[540px]:top-4">
                    {projectsData.projects.map((project, index) => (
                        <div key={index} className="w-[300px] h-[449px] flex flex-col gap-[18px]
                            max-[540px]:w-full max-[540px]:h-auto">
                            <div className="w-[300px] h-[180px] relative overflow-hidden max-[540px]:w-full max-[540px]:h-[180px]">
                                <img className="absolute max-[540px]:relative max-[540px]:w-full max-[540px]:h-[300px] object-cover" src={project.image} alt="#" />
                            </div>

                            <h2 className="w-[300px] h-[28px] text-[#4338CA] dark:text-[#8F88FF] font-medium text-[30px] leading-[28px] tracking-[0] font-inter
                                max-[540px]:w-full max-[540px]:text-[22px] max-[540px]:h-auto ">
                                {project.title}
                            </h2>

                            <p className="w-[300px] h-[126px] text-[#6B7280] font-normal text-[14px] leading-[17.5px] tracking-[0] font-inter
                                max-[540px]:w-full max-[540px]:text-[14px] max-[540px]:h-auto">
                                {project.description}
                            </p>

                            <div className="w-[221px] h-[27px] flex gap-[6px] text-[#3730A3] dark:text-[#8F88FF]
                                max-[540px]:w-full max-[540px]:flex-wrap max-[540px]:h-auto">
                                {project.tags.map((tag, i) => (
                                    <button
                                    key={i}
                                    className="min-w-[68px] h-[27px] flex justify-center items-center px-2 py-1 border border-solid border-[#3730A3] dark:border-[#8F88FF] rounded-[4px] text-sm"
                                    >
                                    {tag}
                                    </button>
                                ))}
                            </div>

                            <div className="w-[300px] h-[16px] flex justify-between
                            max-[540px]:w-full max-[540px]:flex max-[540px]:gap-2">
                                <p className="w-[52px] h-[16px] font-medium text-[16px] text-[#3730A3] dark:text-[#8F88FF] leading-[16px] tracking-[0] underline font-inter">
                                    {project.github}
                                </p>
                                <p className="w-[72px] h-[16px] font-medium text-[16px] text-[#3730A3] dark:text-[#8F88FF] leading-[16px] tracking-[0] underline font-inter 
                                max-[540px]:w-[80px]">
                                    {project.live}
                                </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </>
  );

}

export default Projects;

