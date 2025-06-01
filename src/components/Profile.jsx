import data from '../data/data';
import { useLang } from "../context/LanguageContext";

function Profile() {
    const { lang } = useLang();
    const profileData = data[lang].profileSection;

  return (
    <>
        {/* <section className="absolute w-[1140px] h-[355px] absolute top-[1010px] border-t border-solid border-[#BAB2E7]" >
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
        </section> */}

        <section  className="absolute w-[1140px] h-[355px] top-[1010px] border-t border-solid border-[#BAB2E7]
                max-[540px]:relative max-[540px]:w-[730px] max-[540px]:h-auto max-[540px]:top-[950px] max-[540px]:px-4 max-[540px]:pt-8">
            <h1
                className="w-[150px] h-[48px] absolute top-[40px] font-semibold text-[48px] dark:text-[#AEBCCF] leading-[48px] tracking-normal font-inter
                max-[540px]:relative max-[540px]:text-[28px] max-[540px]:h-auto max-[540px]:top-0">
                {profileData.title}
            </h1>

            <div
                className="flex gap-[60px] absolute w-[1140px] h-[307px] top-[120px]
                max-[540px]:relative max-[540px]:flex max-[540px]:w-full max-[540px]:gap-[30px] max-[540px]:top-4">
                <div className="w-[413px] h-[220px] flex flex-col gap-[10px]
                max-[540px]:w-full max-[540px]:h-auto">
                <h2 className="font-medium text-[30px] text-[#4338CA] dark:text-[#B7AAFF] leading-[28px] tracking-normal font-inter
                    max-[540px]:text-[22px]">
                    {profileData.title}
                </h2>
                <div className="flex gap-[10px] max-[540px]:flex-col">
                    <p className="w-[300px] h-[180px] font-semibold text-[18px] dark:text-[#FFFFFF] leading-[36px] tracking-[0.18px] font-inter
                    max-[540px]:w-full max-[540px]:h-auto max-[540px]:leading-[28px] max-[540px]:text-[16px]">
                    {profileData.profile.birthDateText}<br />
                    {profileData.profile.cityText}<br />
                    {profileData.profile.universityText} <br /><br />
                    {profileData.profile.preferredRoleText}
                    </p>
                    <p className="font-normal text-[18px] dark:text-[#FFFFFF] leading-[36px] tracking-[0.18px] font-inter
                    max-[540px]:leading-[28px] max-[540px]:text-[16px]">
                    <span>{profileData.profile.birthDate}</span> <br />
                    <span>{profileData.profile.city}</span> <br />
                    <span>{profileData.profile.education}</span> <br />
                    <span>{profileData.profile.preferredRole}</span>
                    </p>
                </div>
                </div>

                <div className="flex flex-col gap-[10px] w-[576px] h-[182px]
                max-[540px]:w-full max-[540px]:h-auto">
                    <h2 className="font-medium text-[30px] text-[#4338CA] dark:text-[#B7AAFF] leading-[28px] tracking-normal font-inter
                        max-[540px]:text-[22px]">
                    {profileData.aboutMe.title}
                    </h2>
                    <p className="font-normal text-[18px] text-[#6B7280] dark:text-[#FFFFFF] leading-[27px] tracking-normal font-inter
                    max-[540px]:text-[16px] max-[540px]:leading-[24px]">
                    {profileData.aboutMe.shortBio}
                    <br /><br />
                    {profileData.aboutMe.extraText}
                    </p>
                </div>
            </div>
        </section>

    </>
  );

}

export default Profile;

