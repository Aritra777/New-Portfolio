import Head from 'next/head'
import Image from 'next/image'
import About from '../components/Home/About'
import Banner from '../components/Home/Banner'
import Contact from '../components/Home/Contact'
import TechStack from '../components/Home/TechStack'
import Work from '../components/Home/Work'

export default function Home() {
  return (
    <>
    <div className='overflow-hidden'>
      <Banner />
      <About/>
      <TechStack/>
      <Work/>
      <Contact/>
    </div>
    </>
  )
}
