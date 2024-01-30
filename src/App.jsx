import styles from './App.module.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Description from './components/Description/Description'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Description />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
    
  )
}

export default App
