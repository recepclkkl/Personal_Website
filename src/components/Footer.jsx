import { useLang } from '../context/LanguageContext.jsx';
import data from '../data/data.js';

function Footer() {
    const { lang } = useLang();
    const footerData = data[lang].footerSection;

  return (
    <>
        {/* <section className="absolute w-[1440px] h-[409px] top-[2121px] left-[-150px] bg-[#F9F9F9] dark:bg-[#141414] max-[540px]:top-[2900px]">
            <p className="absolute left-[150px] top-[85px] w-[540px] h-[106px] font-semibold text-[42px] text-[#1F2937] dark:text-[#AEBCCF] leading-[52.5px] tracking-[0] font-inter">
                {footerData.intro}</p>
            <div className="w-[1140px] h-[27px] flex justify-between">
                <p className="absolute left-[150px] top-[252px] font-medium text-[20px] leading-[20px] tracking-[1px] underline font-inter text-[#AF0C48] dark:text-[#BAB2E7]">
                    👉 {footerData.mail}</p>
                <div className="w-[294px] h-[27px] flex gap-[20px] left-[971px] top-[252px] font-medium text-[18px] leading-[27px] tracking-[0.2px] font-inter absolute">
                    <a className="text-[#0A0A14] dark:text-[#E1E1FF]" href="">{footerData.links.blog}</a>
                    <a className="text-[#00AB6B]" href="">{footerData.links.github}</a>
                    <a className="text-[#0077B5]" href="">{footerData.links.linkedin}</a>
                </div>
            </div>
        </section> */}

        <section className="absolute w-[1440px] h-[409px] top-[2121px] left-[-150px] bg-[#F9F9F9] dark:bg-[#141414]
                max-[540px]:relative max-[540px]:w-[730px] max-[540px]:h-auto max-[540px]:top-[1050px] max-[540px]:left-0 max-[540px]:px-4 max-[540px]:py-8 max-[540px]:flex max-[540px]:flex-col max-[540px]:">

            <p  className="absolute left-[150px] top-[85px] w-[540px] h-[106px] font-semibold text-[42px] text-[#1F2937] dark:text-[#AEBCCF] leading-[52.5px] tracking-[0] font-inter
                max-[540px]:relative max-[540px]:w-full max-[540px]:text-[24px] max-[540px]:leading-[36px] max-[540px]:h-auto max-[540px]:left-0 max-[540px]:top-0">
                {footerData.intro}
            </p>

            <div
                className="w-[1140px] h-[27px] flex justify-between
                max-[540px]:flex max-[540px]:items-start max-[540px]:w-full max-[540px]:gap-6 max-[540px]:mt-8">
                <p
                className="absolute left-[150px] top-[252px] font-medium text-[20px] leading-[20px] tracking-[1px] underline font-inter text-[#AF0C48] dark:text-[#BAB2E7]
                    max-[540px]:relative max-[540px]:left-0 max-[540px]:top-0 max-[540px]:text-[16px]">
                👉 {footerData.mail}
                </p>

                <div className="w-[294px] h-[27px] flex gap-[20px] left-[971px] top-[252px] font-medium text-[18px] leading-[27px] tracking-[0.2px] font-inter absolute
                    max-[540px]:relative max-[540px]:left-0 max-[540px]:top-0 max-[540px]:text-[16px]">
                    <a className="text-[#0A0A14] dark:text-[#E1E1FF]" href="">{footerData.links.blog}</a>
                    <a className="text-[#00AB6B]" href="">{footerData.links.github}</a>
                    <a className="text-[#0077B5]" href="">{footerData.links.linkedin}</a>
                </div>
            </div>
        </section>

    </>
  )
}
export default Footer;