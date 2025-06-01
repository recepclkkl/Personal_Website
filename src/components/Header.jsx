import { useLang } from '../context/LanguageContext.jsx';
import data from '../data/data.js'

function Header() {
  const { lang } = useLang();
  const headerData=data[lang].headerSection;

  return (
    <>
     {/* <div className="absolute w-[1140px] h-[62px] top-[87px] border flex items-center justify-between text-[#3730A3] font-inter">

        <div className="w-[63.68px] h-[62px] top-[87px] bg-[#EEEBFF] dark:bg-[#4731D3] rounded-full">
            <p className="text-2xl leading-8 rotate-[29.34deg] font-Inter p-4 text-center text-[#7B61FF] dark:text-[#8F88FF]">A</p>
        </div>
        
        <div className="flex justify-between border border-gray-300 rounded-md w-[392px] h-[52px] text-center items-center ">
            <a className="text-[#6B7280] " href="#">{headerData.skills}</a>
            <a className="text-[#6B7280] " href="#">{headerData.projects}</a>
            <a className=" w-[131px] h-[52px] border border-solid border-[#3730A3] dark:border-[#FFFFFF] dark:bg-[#FFFFFF] rounded-md flex justify-center items-center " href="#" >{headerData.hire}</a>
        </div>
     </div> */}

          <div className="absolute w-[1140px] h-[62px] top-[87px] flex items-center justify-between text-[#3730A3] font-inter
        max-[540px]:w-[730px] max-[540px]:flex max-[540px]:h-auto max-[540px]:gap-4 max-[540px]:top-[60px]  left-0"
          >

        <div className="w-[63.68px] h-[62px] bg-[#EEEBFF] dark:bg-[#4731D3] rounded-full flex items-center justify-center
          max-[540px]:w-[50px] max-[540px]:h-[50px]"
        >
          <p className="text-2xl leading-8 rotate-[29.34deg] font-Inter text-center text-[#7B61FF] dark:text-[#8F88FF]
            max-[540px]:text-lg max-[540px]:rotate-[15deg]"
          >
            A
          </p>
        </div>

        <div className="flex justify-between border border-gray-300 rounded-md w-[392px] h-[52px] text-center items-center
          max-[540px]:w-[full] max-[540px]:flex max-[540px]:h-auto max-[540px]:gap-2 max-[540px]:p-2"
        >
          <a className="text-[#6B7280] max-[540px]:text-sm" href="#">{headerData.skills}</a>
          <a className="text-[#6B7280] max-[540px]:text-sm" href="#">{headerData.projects}</a>
          <a
            className="w-[131px] h-[52px] border border-solid border-[#3730A3] dark:border-[#FFFFFF] dark:bg-[#FFFFFF] rounded-md flex justify-center items-center
              max-[540px]:w-[131px] max-[540px]:h-[40px] max-[540px]:text-sm "
            href="#"
          >
            {headerData.hire}
          </a>
        </div>

      </div>

    </>
  )
}
export default Header;