import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setLanguage } from "./langReducer";
import data from "../data/data";
import { useLang } from "../context/LanguageContext";

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

  const { lang, toggleLang } = useLang();

  const currentLang = useSelector((state) => state.language.language);

  // const toggleLanguage = () => {
  //   dispatch(setLanguage(currentLang === "tr" ? "en" : "tr"));
  // };

  return (
    <>
      {/* <div className="absolute w-[359px] h-[38px] top-[23px] gap-[14px] flex items-center justify-end right-0">
        <button
        onClick={() => setIsDark(!isDark)}
        className="text-black dark:text-white"
        >{isDark ? <p className="font-inter font-bold text-[15px] leading-[100%] tracking-[0.10em] text-[#D9D9D9]" >☀️ LIGHT MODE</p> : <p className="font-inter font-bold text-[15px] leading-[100%] tracking-[0.10em] text-[#777777]">🌙 DARK MODE</p> }</button>
        <p className="text-[#D9D9D9] dark: text-[#777777]">|</p>
        
        <button onClick={toggleLang}>
          {lang === "tr" ? <p className="font-inter font-bold text-[15px] leading-[100%] tracking-[0.10em] text-[#777777]">SWITCH TO <span className="text-[#4731D3] dark:text-[#B7AAFF]" >ENGLISH</span></p> : <p className="font-inter font-bold text-[15px] leading-[100%] tracking-[0.10em] text-[#777777]"><span className="text-[#4731D3] dark:text-[#B7AAFF]" >TÜRKÇE</span>'YE GEÇ</p>}
        </button>
      </div> */}

      <div className="absolute w-[1140px] h-[38px] top-[23px] gap-[14px] flex items-center justify-end right-0
  max-[540px]:w-[730px] max-[540px]:h-auto max-[540px]:top-[10px] max-[540px]:right-[10px] max-[540px]:justify-end max-[540px]:gap-2 max-[540px]:flex-wrap max-[540px]:left-0 "
>
      <button
        onClick={() => setIsDark(!isDark)}
        className="text-black dark:text-white"
      >
        {isDark ? (
          <p className="font-inter font-bold text-[15px] leading-[100%] tracking-[0.10em] text-[#D9D9D9] max-[540px]:text-[13px]">
            ☀️ LIGHT MODE
          </p>
        ) : (
          <p className="font-inter font-bold text-[15px] leading-[100%] tracking-[0.10em] text-[#777777] max-[540px]:text-[13px]">
            🌙 DARK MODE
          </p>
        )}
      </button>

      <p className="text-[#D9D9D9] dark:text-[#777777] max-[540px]:text-sm">|</p>

      <button onClick={toggleLang}>
        {lang === "tr" ? (
          <p className="font-inter font-bold text-[15px] leading-[100%] tracking-[0.10em] text-[#777777] max-[540px]:text-[13px] text-center">
            SWITCH TO{" "}
            <span className="text-[#4731D3] dark:text-[#B7AAFF]">ENGLISH</span>
          </p>
          ) : (
          <p className="font-inter font-bold text-[15px] leading-[100%] tracking-[0.10em] text-[#777777] max-[540px]:text-[13px] text-center">
            <span className="text-[#4731D3] dark:text-[#B7AAFF]">TÜRKÇE</span>'YE GEÇ
          </p>
        )}
      </button>
    </div>

    </>
  )

}
export default Mode;