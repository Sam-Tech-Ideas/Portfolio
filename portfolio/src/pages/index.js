import Blog from '@/components/Blog'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Image from 'next/image'




export default function Home() {
  return (
    <main className="">
     <Header/>
     <Hero/>
     <Skills/>
     <Projects/>
     
     <Footer/>
    </main>
  )
}


