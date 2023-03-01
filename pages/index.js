import Cards from '@/components/Cards'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Resume from '@/components/Resume'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Jay Costner Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Navbar/>
          <Hero/>
          <Resume/>
          <Cards/>
          <Contact/>
          <Footer/>
      </main>
    </>
  )
}
