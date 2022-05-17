import React from 'react'
import Abt from './components/Abt'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hme from './components/Hme'
import  Nav from './components/Nav'
import Project from './components/Project'
import Skills from './components/Skills'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import './index.css'


function App() {
  return (
    <div>
   <Nav/>
   <Hme/>
   <Abt/>
   <Skills/>
   <Project/>
   <Contact/>
   <Footer/>
  
    </div>
  )
}

export default App