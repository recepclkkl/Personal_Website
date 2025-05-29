
function Header() {
  
  return (
    <>
     <div className="absolute w-[1140px] h-[62px] top-[87px] border flex items-center justify-between text-[#3730A3] font-inter">

        <div className="w-[63.68px] h-[62px] top-[87px] bg-[#EEEBFF] rounded-full">
            <p className="text-2xl leading-8 rotate-[29.34deg] font-Inter p-4 text-center text-[#7B61FF]">A</p>
        </div>
        
        <div className="flex justify-between border border-gray-300 rounded-md w-[392px] h-[52px] text-center items-center ">
            <a className="text-[#6B7280] " href="#">Skills</a>
            <a className="text-[#6B7280] " href="#">Projects</a>
            <a className=" w-[131px] h-[52px] border border-solid border-[#3730A3] rounded-md flex justify-center items-center " href="#" >Hire me</a>
        </div>
     </div>
    </>
  )
}
export default Header;