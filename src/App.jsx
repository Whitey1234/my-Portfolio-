

import About from './Aboutme/About'
import './App.css'
import Contact from './contact/Contact'
import Education from './Education/Educaton'
import Footer from './Footer/Footer'
import Hero from './hero/Hero'
import Projects from './MyProjects/Projects'
import Navbar from './Navbar/Navbar'
import Skills from './Skill/Skills'

function App() {
  

  return (
    <>
     <Navbar></Navbar>
     <Hero></Hero>
     <About></About>
     <Skills></Skills>
     <Projects></Projects>
     <Education></Education>
     <Contact></Contact>
     <Footer></Footer>

    </>
  )
}

export default App
