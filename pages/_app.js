import Navbar from '../components/General/Navbar'
import '../styles/globals.css'
import "swiper/css/bundle";
import "../styles/styles.css";
import Footer from '../components/General/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useEffect } from 'react';
import Aos from 'aos';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration:1000,
      once:false
    })
  },[])
  return (
    <>
    <ParallaxProvider>
      <Navbar/>
        <Component {...pageProps} />
      <Footer/>
    </ParallaxProvider>
    </>
  )
}

export default MyApp
