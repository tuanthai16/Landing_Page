import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import SkillContent from './components/SkillContent';
import Skills from './components/Skills';
import Content from './components/Content';
import About from './components/About';
import Footer from './components/Footer';


function App() { 
  
  return (
    <>
    <div className=' bg-white text-black'>
      <header className='flex flex-col gap-[60px]'>
        <Navbar/>
        <Hero/>
      </header>
      <div className='content sm:my-[200px] my-[140px] flex flex-col sm:gap-[200px] gap-[140px]'>
        <SkillContent/>
          <div className='Portfolio'>
          <div className='container mx-auto px-[20px] flex flex-col gap-[36px]'>
            <h1 className='font-anton font-normal text-[64px] leading-[64px]'>PORTFOLIO</h1>
            <div className='flex flex-wrap gap-[33px]'>
              <div className=' flex flex-col gap-[23px] xl:w-[23%] lg:w-[31%] sm:w-[47%] w-[100%] border border-grayPtf rounded-[10px] p-[30px]'>
                <Portfolio/>
              </div>
              <div className=' flex flex-col gap-[23px] xl:w-[23%] lg:w-[31%] sm:w-[47%] w-[100%] border border-grayPtf rounded-[10px] p-[30px]'>
                <Portfolio/>
              </div>
              <div className=' flex flex-col gap-[23px] xl:w-[23%] lg:w-[31%] sm:w-[47%] w-[100%] border border-grayPtf rounded-[10px] p-[30px]'>
                <Portfolio/>
              </div>
              <div className=' flex flex-col gap-[23px] xl:w-[23%] lg:w-[31%] sm:w-[47%] w-[100%] border border-grayPtf rounded-[10px] p-[30px]'>
                <Portfolio/>
              </div>
              <div className=' lg:flex hidden flex-col gap-[23px] xl:w-[23%] w-[31%] border border-grayPtf rounded-[10px] p-[30px]'>
                <Portfolio/>
              </div>
              <div className=' lg:flex hidden flex-col gap-[23px] xl:w-[23%] w-[31%] border border-grayPtf rounded-[10px] p-[30px]'>
                <Portfolio/>
              </div>
              <div className=' xl:flex hidden flex-col gap-[23px] xl:w-[23%] w-[31%] border border-grayPtf rounded-[10px] p-[30px]'>
                <Portfolio/>
              </div>
              <div className=' xl:flex hidden flex-col gap-[23px] xl:w-[23%] w-[31%] border border-grayPtf rounded-[10px] p-[30px]'>
                <Portfolio/>
              </div>
            </div>
          </div>   
        </div>
        <div className='Skills'>
          <div className='container mx-auto px-[20px] flex flex-col gap-[50px]'>
            <h1 className='font-anton font-normal text-[64px] leading-[64px]'>SKILLS</h1>
            <div className='flex flex-wrap gap-[20px]'>
              <Skills/>
            </div>
          </div>
        </div>
        <div className='Kaleb bg-kaleb-image bg-cover bg-center'>
          <div className='container mx-auto 2xl:p-[180px] xl:px-[80px] xl:py-[150px] lg:px-[49px] lg:py-[120px] px-[20px] md:py-[90px] py-[80px]'>
            <Content/>
          </div>
        </div>

        <div className='AboutMe'>
          <div className='container mx-auto px-[20px]'>
            <About/>
          </div>
        </div>
      </div>

      <div className='footer relative bg-gray h-[270px] w-full sm:mt-[400px] designPro:mt-[200px] mt-[160px]'>
        <Footer/>
        <div className='border-b  absolute bottom-[35px] w-full text-gray'>
        </div>
      </div>
    </div>
    </> 
  );
}

export default App;
