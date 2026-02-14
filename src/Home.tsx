import Header from './components/header/Header'
import Hero from './components/hero/Hero'
// import SeoResult from './components/seoresult/SeoResult'
import './index.css'
// import { useSeoResult } from "./components/seoresult/useSeoResult";
import HiddenLeaks from './components/hiddenleaks/HiddenLeaks';
import Revenue from './components/revenue/Revenue';
import SeoProfitSection from './components/SeoProfitSection';
import TeamSection from './components/teamsection/TeamSection';
import Covers from './components/covers/Covers';
import SpecialistSection from './components/specialistsection/SpecialistSection';
import OutPerforms from './components/outperforms/OutPerforms';
import GrowthStory from './components/GrowthStory';
import Faqs from './components/faqs/Faqs';
import GetinTouch from './components/getintouch/GetinTouch';
import Footer from './components/Footer';
import TechStack from './components/TechStack';
import FrameworkMain from './components/frameworkmain/FrameworkMain';
import Review from './components/reviews/Review';
import Growth from './components/growth/Growth';
function Home() {
// const { stats, tabs, activeTabId, setActiveTabId, activeImage } = useSeoResult();
  return (
    <>
    <Header />
    <Hero />
    {/* <SeoResult
      stats={stats}
      tabs={tabs}
      activeTabId={activeTabId}
      onChangeTab={setActiveTabId}
      activeImage={activeImage}
      className="my-16"
    />   */}
    <HiddenLeaks/>
    <Growth/>
    <Revenue />
    <SeoProfitSection />
    <TeamSection />
    <Covers />
    <FrameworkMain />
    <SpecialistSection />
    <Review />
    <OutPerforms />
    <TechStack />
    <GrowthStory />
    <Faqs />
    <GetinTouch />
    <Footer/>
    </>
  )
}

export default Home
