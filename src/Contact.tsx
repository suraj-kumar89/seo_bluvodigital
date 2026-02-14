import Header from './components/header/Header'
import './index.css'
// import GetinTouch from './components/getintouch/GetinTouch';
import Footer from './components/Footer';
import BookDemo from './components/BookMeeting';
function Contact() {
// const { stats, tabs, activeTabId, setActiveTabId, activeImage } = useSeoResult();
  return (
    <>
    <Header />
    <BookDemo/>
    {/* <GetinTouch /> */}
    <Footer/>
    </>
  )
}

export default Contact
