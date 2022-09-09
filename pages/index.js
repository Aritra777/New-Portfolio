import Head from 'next/head'
import Image from 'next/image'
import About from '../components/Home/About'
import Banner from '../components/Home/Banner'
import Contact from '../components/Home/Contact'
import Work from '../components/Home/Work'

export default function Home() {
  return (
    <>
    <div className='space-y-10'>
      <Banner />
      <About/>
      <Work/>
      <Contact/>
    </div>
    </>
  )
}
