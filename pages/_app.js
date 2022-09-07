import Navbar from '../components/General/Navbar'
import '../styles/globals.css'
import "swiper/css/bundle";
import "../styles/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
