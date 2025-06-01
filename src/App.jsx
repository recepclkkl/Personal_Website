
import Mode from './components/Mode'
import { useSelector } from "react-redux";
import { lang } from './languange/lang';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import PostData from './data/postData';

function App() {
  
  const language = useSelector((state) => state.language.language);
  const t = lang[language];

  return (
    <div className='w-[1140px] h-[2530px] mx-auto relative max-[540px]:w-[730px]'>
      <LanguageProvider>
      <Mode />
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      </LanguageProvider>
      <PostData />
    </div>
  )
}

export default App
