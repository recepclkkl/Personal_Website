import data from '../data/data.js';
import { useLang } from "../context/LanguageContext";

function Profile() {
    const { lang } = useLang();
    const profileData = data[lang].profileSection;

  return (
    <>
        <section className="absolute w-[1140px] h-[355px] absolute top-[1010px] border-t border-solid border-[#BAB2E7]" >
            <h1 className="w-[150px] h-[48px] absolute top-[40px] font-semibold text-[48px] dark:text-[#AEBCCF] leading-[48px] tracking-normal font-inter">{profileData.title}</h1>
            <div className="flex gap-[60px] absolute w-[1140px] h-[307px] top-[120px]">
                <div className="w-[413px] h-[220px] flex flex-col gap-[10px]">
                    <h2 className="font-medium text-[30px] text-[#4338CA] dark:text-[#B7AAFF] leading-[28px] tracking-normal font-inter ">{profileData.title}</h2> 
                    <div className="flex gap-[10px]">
                        <p className="w-[300px] h-[180px] font-semibold text-[18px] dark:text-[#FFFFFF] leading-[36px] tracking-[0.18px] font-inter">
                            {profileData.profile.birthDateText}<br />
                            {profileData.profile.cityText}<br />
                            {profileData.profile.universityText} <br /><br />
                            {profileData.profile.preferredRoleText} 
                        </p>
                        <p className="font-normal text-[18px] dark:text-[#FFFFFF] leading-[36px] tracking-[0.18px] font-inter">
                            <span className="font-normal">{profileData.profile.birthDate}</span> <br />
                            <span className="font-normal">{profileData.profile.city}</span> <br />
                            <span className="font-normal">{profileData.profile.education}</span> <br />
                            <span className="font-normal">{profileData.profile.preferredRole}</span>
                        </p>
                    </div>
                </div>

                <div className=" flex flex-col gap-[10px] w-[576px] h-[182px]">
                    <h2 className="font-medium text-[30px] text-[#4338CA] dark:text-[#B7AAFF] leading-[28px] tracking-normal font-inter ">{profileData.aboutMe.title}</h2>
                    <p className="font-normal text-[18px] text-[#6B7280] dark:text-[#FFFFFF] leading-[27px] tracking-normal font-inter">{profileData.aboutMe.shortBio}<br />
                    <br />{profileData.aboutMe.extraText}</p>
                </div>
            </div>
        </section>
    </>
  );

}

export default Profile;

