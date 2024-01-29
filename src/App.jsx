import styles from './App.module.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Description from './components/Description/Description'
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
    </div>
    
  )
}

export default App
