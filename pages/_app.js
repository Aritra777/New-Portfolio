import Navbar from '../components/General/Navbar'
import '../styles/globals.css'
import "swiper/css/bundle";
import "../styles/styles.css";
import Footer from '../components/General/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
