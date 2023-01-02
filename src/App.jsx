import './App.css';
import Header from './components/header/header'
import Nav from './components/nav/Nav'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Projects from './components/projects/projects'
import Experience from './components/experience/experience'
import Footer from './components/footer/footer'
import Skills from './components/skills/skills'
function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>

    </>
  );
}

export default App;
