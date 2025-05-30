

function Profile() {
  
  return (
    <>
        <section className="absolute w-[1140px] h-[355px] absolute top-[1010px] border-t border-solid border-[#BAB2E7]" >
            <h1 className="w-[150px] h-[48px] absolute top-[40px] font-semibold text-[48px] dark:text-[#AEBCCF] leading-[48px] tracking-normal font-inter">Profile</h1>
            <div className="flex gap-[60px] absolute w-[1140px] h-[307px] top-[120px]">
                <div className="w-[413px] h-[220px] flex flex-col gap-[10px]">
                    <h2 className="font-medium text-[30px] text-[#4338CA] dark:text-[#B7AAFF] leading-[28px] tracking-normal font-inter ">Profile</h2> 
                    <div className="flex gap-[10px]">
                        <p className="w-[300px] h-[180px] font-semibold text-[18px] dark:text-[#FFFFFF] leading-[36px] tracking-[0.18px] font-inter">
                            Doğum tarihi <br />
                            İkamet Şehri <br />
                            Eğitim Durumu <br /><br />
                            Tercih Ettiği Rol 
                        </p>
                        <p className="font-normal text-[18px] dark:text-[#FFFFFF] leading-[36px] tracking-[0.18px] font-inter">
                            <span className="font-normal">24.03.1996</span> <br />
                            <span className="font-normal">Ankara</span> <br />
                            <span className="font-normal">Hacettepe Ünv.  Biyoloji Lisans, 2016</span> <br />
                            <span className="font-normal">Frontend, UI</span>
                        </p>
                    </div>
                </div>

                <div className=" flex flex-col gap-[10px] w-[576px] h-[182px]">
                    <h2 className="font-medium text-[30px] text-[#4338CA] dark:text-[#B7AAFF] leading-[28px] tracking-normal font-inter ">About Me</h2>
                    <p className="font-normal text-[18px] text-[#6B7280] dark:text-[#FFFFFF] leading-[27px] tracking-normal font-inter">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia. <br />
                    <br />Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! </p>
                </div>
            </div>
        </section>
    </>
  );

}

export default Profile;

