import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "./langReducer";

function Mode() {
  const [isDark, setIsDark] = useState(() =>
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);

  const dispatch = useDispatch();
  const currentLang = useSelector((state) => state.language.language);

  const toggleLanguage = () => {
    dispatch(setLanguage(currentLang === "tr" ? "en" : "tr"));
  };

  return (
    <>
      <div className="absolute w-[359px] h-[38px] top-[23px] gap-[14px] flex items-center justify-end right-0">
        <button
        onClick={() => setIsDark(!isDark)}
        className="text-black dark:text-white"
        >{isDark ? <p className="font-inter font-bold text-[15px] leading-[100%] tracking-[0.10em] text-[#D9D9D9]" >🌙 DARK MODE</p> : <p className="font-inter font-bold text-[15px] leading-[100%] tracking-[0.10em] text-[#777777]">☀️ LIGHT MODE</p> }</button>
        <p className="text-[#D9D9D9] dark: text-[#777777]">|</p>
        <button onClick={toggleLanguage}>
          {currentLang === "tr" ? <p className="font-inter font-bold text-[15px] leading-[100%] tracking-[0.10em] text-[#777777]">SWITCH TO <span className="text-[#4731D3]" >ENGLISH</span></p> : <p className="font-inter font-bold text-[15px] leading-[100%] tracking-[0.10em] text-[#777777]"><span className="text-[#4731D3]" >TÜRKÇE</span>'YE GEÇ</p>}
        </button>
      </div>

    </>
  )

}
export default Mode;