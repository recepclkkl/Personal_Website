
import Mode from './components/mode'
import { useSelector } from "react-redux";
import { lang } from './languange/lang';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';

function App() {
  
  const language = useSelector((state) => state.language.language);
  const t = lang[language];

  return (
    <div className='w-[1140px] h-[2530px] mx-auto bg-white dark:bg-gray-900 relative'>
      <Mode />
      <Header />
      <Hero />
      <Skills />
    </div>
  )
}

export default App
