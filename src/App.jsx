
import Mode from './components/mode'
import { useSelector } from "react-redux";
import { lang } from './languange/lang';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  
  const language = useSelector((state) => state.language.language);
  const t = lang[language];

  return (
    <div className='w-[1140px] h-[2530px] mx-auto  relative'>
      <Mode />
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
